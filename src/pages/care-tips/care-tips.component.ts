import { Component, ChangeDetectionStrategy, signal, computed, inject, effect, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs/operators';
import { Title, Meta } from '@angular/platform-browser';
import { CARE_TIPS_ARTICLES, CareTipArticle } from './care-tips.data';
import { CARE_TIPS_HI_MAP } from './care-tips-hi.data';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-care-tips',
  standalone: true,
  imports: [RouterLink, CommonModule, FormsModule],
  template: `
    <div class="min-h-screen bg-slate-50 font-sans">
      @if (currentArticle(); as article) {
        <!-- ================= ARTICLE READING GUIDE VIEW ================= -->
        <article class="py-12 md:py-20">
          <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <!-- Breadcrumb & Back Action -->
            <div class="flex flex-wrap items-center justify-between gap-4 mb-8">
              <nav aria-label="Breadcrumb">
                <ol class="flex items-center space-x-2 text-sm text-slate-500">
                  <li>
                    <a routerLink="/" class="hover:text-teal-600 transition-colors">{{ langService.t('home') }}</a>
                  </li>
                  <li>
                    <span class="text-slate-300">/</span>
                  </li>
                  <li>
                    <a routerLink="/care-tips" class="hover:text-teal-600 transition-colors">{{ langService.t('careTips') }}</a>
                  </li>
                  <li>
                    <span class="text-slate-300">/</span>
                  </li>
                  <li class="text-teal-600 font-medium truncate max-w-xs md:max-w-md">
                    {{ article.title }}
                  </li>
                </ol>
              </nav>

              <a routerLink="/care-tips" 
                 class="inline-flex items-center text-sm font-semibold text-teal-600 hover:text-teal-700 transition-colors group">
                <svg class="w-4 h-4 mr-1.5 transform group-hover:-translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                {{ langService.t('backToGuides') }}
              </a>
            </div>

            <!-- Reading Container Card -->
            <div class="bg-white rounded-3xl shadow-sm border border-slate-200 overflow-hidden">
              
              <!-- Article Hero Banner -->
              <div class="relative h-72 md:h-96 bg-slate-900 overflow-hidden">
                <img [src]="article.featuredImage" [alt]="article.title" class="w-full h-full object-cover opacity-60">
                <div class="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/60 to-transparent flex flex-col justify-end p-6 md:p-12">
                  <div class="flex flex-wrap items-center gap-3 mb-3">
                    <span class="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-teal-500 text-slate-950 shadow-sm">
                      {{ article.category }}
                    </span>
                    <span class="text-xs text-slate-300 flex items-center gap-1.5 font-medium">
                      <svg class="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {{ article.readTime }}
                    </span>
                    <span class="text-xs text-slate-400">• {{ article.publishDate }}</span>
                  </div>

                  <h1 class="text-3xl md:text-5xl font-serif text-white font-bold tracking-tight leading-tight mb-3">
                    {{ article.title }}
                  </h1>
                  
                  <p class="text-slate-300 text-sm md:text-base font-light max-w-2xl">
                    {{ article.subtitle }}
                  </p>
                </div>
              </div>

              <!-- Article Content -->
              <div class="p-6 md:p-12 lg:p-16">
                
                <!-- Author & Clinical Review Badge -->
                <div class="flex items-center gap-4 pb-8 mb-8 border-b border-slate-100">
                  <div class="w-12 h-12 rounded-full bg-teal-600/10 border border-teal-500/20 text-teal-700 flex items-center justify-center font-bold text-lg">
                    WC
                  </div>
                  <div>
                    <h4 class="text-sm font-bold text-slate-900">{{ article.author.name }}</h4>
                    <p class="text-xs text-slate-500">{{ article.author.role }} • {{ langService.isHindi() ? 'व्हाइट क्रेस्ट डेंटल' : 'White Crest Dental' }}</p>
                  </div>
                </div>

                <!-- Intro Paragraphs -->
                <div class="space-y-4 mb-10 text-slate-700 text-lg leading-relaxed">
                  @for (p of article.introParagraphs; track $index) {
                    <p>{{ p }}</p>
                  }
                </div>

                <!-- Article Structured Sections (if available) -->
                @if (article.sections && article.sections.length) {
                  <div class="space-y-10 mb-12">
                    @for (section of article.sections; track section.heading) {
                      <div class="bg-slate-50/70 rounded-3xl p-6 md:p-8 border border-slate-200/80">
                        <h3 class="text-xl md:text-2xl font-serif font-bold text-slate-900 mb-3 flex items-center gap-3">
                          <span class="w-2 h-6 bg-teal-500 rounded-full inline-block"></span>
                          {{ section.heading }}
                        </h3>

                        @if (section.lead) {
                          <p class="text-slate-600 leading-relaxed mb-4 whitespace-pre-line text-base">{{ section.lead }}</p>
                        }

                        @if (section.items && section.items.length) {
                          <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
                            @for (item of section.items; track $index) {
                              <div class="flex items-start gap-3 bg-white p-3.5 rounded-xl border border-slate-200/80 shadow-xs">
                                <span class="flex-shrink-0 w-5 h-5 rounded-full bg-teal-100 text-teal-700 flex items-center justify-center text-xs font-bold mt-0.5">✓</span>
                                <span class="text-slate-700 text-sm leading-snug">{{ item }}</span>
                              </div>
                            }
                          </div>
                        }

                        @if (section.subsections && section.subsections.length) {
                          <div class="grid grid-cols-1 gap-4 mb-4">
                            @for (sub of section.subsections; track sub.title) {
                              <div class="bg-white rounded-2xl p-5 border border-slate-200/80 shadow-xs">
                                <h4 class="text-base font-bold text-slate-900 mb-2 flex items-center gap-2">
                                  <span class="w-2 h-2 bg-teal-600 rounded-full"></span>
                                  {{ sub.title }}
                                </h4>
                                <p class="text-slate-600 text-sm leading-relaxed whitespace-pre-line">{{ sub.description }}</p>
                              </div>
                            }
                          </div>
                        }

                        @if (section.closing) {
                          <p class="text-slate-600 text-sm md:text-base leading-relaxed mt-4 italic">{{ section.closing }}</p>
                        }
                      </div>
                    }
                  </div>
                }

                <!-- Numbered Key Points Cards -->
                @if (article.keyPoints && article.keyPoints.length) {
                  <div class="mb-12">
                    @if (article.keyPointsHeading) {
                      <h3 class="text-2xl font-serif font-bold text-slate-900 mb-6 flex items-center gap-2">
                        <span class="w-2 h-6 bg-teal-600 rounded-full inline-block"></span>
                        {{ article.keyPointsHeading }}
                      </h3>
                    }
                    <div class="space-y-6">
                      @for (pt of article.keyPoints; track pt.number) {
                        <div class="relative bg-slate-50/70 hover:bg-white rounded-2xl p-6 md:p-7 border border-slate-200/80 hover:border-teal-400 hover:shadow-md transition-all duration-200">
                          <div class="flex items-start gap-4 md:gap-6">
                            <!-- Number Badge -->
                            <div class="flex-shrink-0 w-11 h-11 rounded-2xl bg-teal-600 text-white font-serif font-bold text-lg flex items-center justify-center shadow-sm">
                              {{ pt.number < 10 ? '0' + pt.number : pt.number }}
                            </div>
                            
                            <!-- Content -->
                            <div class="flex-grow">
                              <div class="flex flex-wrap items-center justify-between gap-2 mb-2">
                                <h4 class="text-xl font-bold text-slate-900">{{ pt.title }}</h4>
                                @if (pt.highlight) {
                                  <span class="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-rose-50 text-rose-700 border border-rose-100">
                                    {{ pt.highlight }}
                                  </span>
                                }
                              </div>
                              <p class="text-slate-600 leading-relaxed text-base">{{ pt.description }}</p>

                              @if (pt.subDetails && pt.subDetails.length) {
                                <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4 pt-4 border-t border-slate-200/60">
                                  @for (detail of pt.subDetails; track detail.label) {
                                    <div class="bg-white p-4 rounded-xl border border-slate-200/80 shadow-xs">
                                      <h5 class="text-xs font-bold uppercase tracking-wider text-teal-700 mb-2.5 flex items-center gap-1.5">
                                        <span class="w-1.5 h-1.5 rounded-full bg-teal-500"></span>
                                        {{ detail.label }}
                                      </h5>
                                      <ul class="space-y-1.5 text-xs text-slate-600">
                                        @for (item of detail.items; track $index) {
                                          <li class="flex items-start gap-2">
                                            <span class="text-teal-600 font-bold">•</span>
                                            <span>{{ item }}</span>
                                          </li>
                                        }
                                      </ul>
                                    </div>
                                  }
                                </div>
                              }
                            </div>
                          </div>
                        </div>
                      }
                    </div>
                  </div>
                }

                <!-- Why Early Dental Care Matters (Callout Alert) -->
                @if (article.mattersSection; as matters) {
                  <div class="bg-gradient-to-br from-amber-50 to-orange-50/50 rounded-3xl p-6 md:p-8 border border-amber-200/80 mb-10">
                    <h3 class="text-xl md:text-2xl font-serif font-bold text-amber-950 mb-3 flex items-center gap-3">
                      <span class="flex-shrink-0 w-8 h-8 rounded-full bg-amber-500 text-white flex items-center justify-center font-bold text-sm">!</span>
                      {{ matters.heading }}
                    </h3>
                    <p class="text-amber-900 font-medium mb-4 text-base">{{ matters.lead }}</p>
                    <ul class="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                      @for (item of matters.items; track $index) {
                        <li class="flex items-start gap-3 bg-white/80 p-3.5 rounded-xl border border-amber-200/60 text-slate-800 text-sm">
                          <span class="text-amber-600 font-bold mt-0.5">⚠️</span>
                          <span>{{ item }}</span>
                        </li>
                      }
                    </ul>
                    <p class="text-amber-900 text-sm md:text-base leading-relaxed">{{ matters.closing }}</p>
                  </div>
                }

                <!-- How White Crest Dental Can Help -->
                @if (article.clinicHelpSection; as clinic) {
                  <div class="bg-teal-50/70 rounded-3xl p-6 md:p-8 border border-teal-200/70 mb-10">
                    <h3 class="text-xl md:text-2xl font-serif font-bold text-teal-950 mb-3 flex items-center gap-3">
                      <span class="w-2 h-6 bg-teal-600 rounded-full inline-block"></span>
                      {{ clinic.heading }}
                    </h3>
                    <p class="text-teal-900/90 leading-relaxed text-base md:text-lg">{{ clinic.text }}</p>
                  </div>
                }

                <!-- Conclusion & Next Steps -->
                @if (article.conclusion; as conc) {
                  <div class="bg-slate-900 rounded-3xl p-8 md:p-10 text-white shadow-xl mb-12">
                    <div class="max-w-2xl mb-6">
                      <h3 class="text-2xl md:text-3xl font-serif font-bold mb-3">{{ conc.heading }}</h3>
                      <p class="text-slate-300 text-base leading-relaxed">{{ conc.text }}</p>
                    </div>
                    <div class="flex flex-wrap items-center gap-4">
                      <a routerLink="/contact" class="inline-flex items-center justify-center bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold px-8 py-3.5 rounded-full transition-all text-sm shadow-md hover:-translate-y-0.5">
                        {{ conc.ctaText }}
                      </a>
                      <a routerLink="/care-tips" class="inline-flex items-center justify-center bg-white/10 hover:bg-white/20 text-white font-medium px-6 py-3.5 rounded-full transition-all text-sm border border-white/20">
                        {{ langService.isHindi() ? 'अन्य गाइड देखें' : 'View Other Guides' }}
                      </a>
                    </div>
                  </div>
                }

                <!-- More Guides Suggestions -->
                <div class="border-t border-slate-100 pt-10">
                  <h4 class="text-lg font-bold text-slate-900 mb-6">{{ langService.isHindi() ? 'अनुशंसित पेशेंट गाइड' : 'Recommended Patient Guides' }}</h4>
                  <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                    @for (rec of otherArticles(); track rec.id) {
                      <a [routerLink]="['/care-tips', rec.slug]" 
                         class="group flex flex-col bg-slate-50 hover:bg-white p-5 rounded-2xl border border-slate-200 hover:border-teal-400 hover:shadow-md transition-all">
                        <span class="text-xs font-bold text-teal-600 uppercase tracking-wider mb-2">{{ rec.category }}</span>
                        <h5 class="text-base font-bold text-slate-900 group-hover:text-teal-600 transition-colors mb-2">{{ rec.title }}</h5>
                        <p class="text-xs text-slate-500 line-clamp-2 mb-3">{{ rec.excerpt }}</p>
                        <span class="text-xs font-semibold text-slate-700 flex items-center gap-1 group-hover:text-teal-600">
                          {{ langService.isHindi() ? 'गाइड पढ़ें →' : 'Read Guide →' }}
                        </span>
                      </a>
                    }
                  </div>
                </div>

              </div>
            </div>
          </div>
        </article>
      } @else {
        <!-- ================= CARE TIPS HUB / CATALOG VIEW ================= -->
        <div class="py-16 md:py-24">
          <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <!-- Hub Header -->
            <div class="text-center max-w-3xl mx-auto mb-12">
              <span class="text-teal-600 font-bold tracking-wider uppercase text-xs mb-2 block">
                {{ langService.isHindi() ? 'मरीज शिक्षा और स्वास्थ्य' : 'Patient Education & Wellness' }}
              </span>
              <h1 class="text-4xl md:text-5xl lg:text-6xl font-serif text-slate-900 mb-6 leading-tight">
                {{ langService.t('careTipsTitle') }}
              </h1>
              <p class="text-xl text-slate-500 leading-relaxed">
                {{ langService.t('careTipsSub') }}
              </p>
            </div>

            <!-- Search & Category Filters -->
            <div class="max-w-2xl mx-auto mb-16">
              <!-- Search Box -->
              <div class="relative group mb-6">
                <div class="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <svg class="h-5 w-5 text-slate-400 group-focus-within:text-teal-600 transition-colors" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd" />
                  </svg>
                </div>
                <input 
                  type="text" 
                  [value]="searchQuery()"
                  (input)="onSearch($event)"
                  class="block w-full pl-11 pr-11 py-4 border-2 border-slate-200 rounded-full leading-5 bg-white placeholder-slate-400 focus:outline-none focus:border-teal-500 focus:ring-4 focus:ring-teal-500/10 transition-all shadow-sm text-slate-900 text-sm md:text-base"
                  [placeholder]="langService.isHindi() ? 'केयर टिप्स खोजें (जैसे दांत दर्द, विनियर, मसूड़े)...' : 'Search care tips (e.g. \\'Toothache\\', \\'Veneers\\', \\'Bleeding\\')...'"
                >
                @if (searchQuery()) {
                  <button 
                    (click)="clearSearch()"
                    aria-label="Clear search"
                    class="absolute inset-y-0 right-0 pr-4 flex items-center text-slate-400 hover:text-slate-600 transition-colors">
                    <svg class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd" />
                    </svg>
                  </button>
                }
              </div>

              <!-- Filter Pills -->
              <div class="flex flex-wrap items-center justify-center gap-2">
                @for (cat of categoryOptions(); track cat.id) {
                  <button 
                    (click)="selectCategory(cat.id)"
                    [class]="selectedCategory() === cat.id ? 'bg-teal-600 text-white shadow-sm' : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'"
                    class="px-4 py-2 rounded-full text-xs md:text-sm font-medium transition-all">
                    {{ cat.label }}
                  </button>
                }
              </div>
            </div>

            <!-- Featured Article Showcase (when no search active or matches featured) -->
            @if (featuredArticle() && !searchQuery() && selectedCategory() === 'All') {
              <div class="mb-16">
                <div class="relative bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-200 grid grid-cols-1 lg:grid-cols-12 group">
                  <div class="lg:col-span-7 relative h-72 lg:h-auto min-h-[300px] overflow-hidden bg-slate-900">
                    <img [src]="featuredArticle()!.featuredImage" [alt]="featuredArticle()!.title" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90">
                    <div class="absolute top-4 left-4">
                      <span class="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-teal-500 text-slate-950 shadow-md">
                        {{ langService.isHindi() ? '★ अवश्य पढ़ें' : '★ Must-Read Guide' }}
                      </span>
                    </div>
                  </div>
                  <div class="lg:col-span-5 p-8 lg:p-12 flex flex-col justify-center">
                    <div class="flex items-center gap-2 text-xs font-bold text-teal-600 uppercase tracking-wider mb-2">
                      <span>{{ featuredArticle()!.category }}</span>
                      <span>•</span>
                      <span>{{ featuredArticle()!.readTime }}</span>
                    </div>
                    <h2 class="text-2xl md:text-3xl font-serif font-bold text-slate-900 mb-4 group-hover:text-teal-600 transition-colors">
                      {{ featuredArticle()!.title }}
                    </h2>
                    <p class="text-slate-600 text-sm md:text-base leading-relaxed mb-6">
                      {{ featuredArticle()!.excerpt }}
                    </p>
                    <div>
                      <a [routerLink]="['/care-tips', featuredArticle()!.slug]" 
                         class="inline-flex items-center bg-slate-900 hover:bg-teal-600 text-white font-bold px-6 py-3 rounded-full text-sm transition-all shadow-md group-hover:translate-x-1">
                        {{ langService.isHindi() ? 'पूरी गाइड पढ़ें' : 'Read Full Guide' }}
                        <svg class="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            }

            <!-- Articles Grid -->
            @if (filteredArticles().length > 0) {
              <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                @for (art of filteredArticles(); track art.id) {
                  <a [routerLink]="['/care-tips', art.slug]" 
                     class="group flex flex-col bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl border border-slate-200/80 hover:border-teal-500/40 transition-all duration-300 hover:-translate-y-1">
                    
                    <!-- Thumbnail Container -->
                    <div class="relative h-52 w-full overflow-hidden bg-slate-900">
                      <img [src]="art.featuredImage" [alt]="art.title" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90">
                      <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60"></div>
                      <div class="absolute top-4 left-4">
                        <span class="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-white/90 text-slate-900 backdrop-blur-sm shadow-xs">
                          {{ art.category }}
                        </span>
                      </div>
                      <div class="absolute bottom-3 right-3 text-white text-xs font-medium px-2.5 py-1 bg-slate-950/70 rounded-full backdrop-blur-sm">
                        {{ art.readTime }}
                      </div>
                    </div>

                    <!-- Card Body -->
                    <div class="p-6 md:p-8 flex flex-col flex-grow">
                      <h3 class="text-xl font-serif font-bold text-slate-900 group-hover:text-teal-600 transition-colors mb-3 leading-snug">
                        {{ art.title }}
                      </h3>
                      
                      <p class="text-slate-500 text-sm leading-relaxed mb-6 flex-grow">
                        {{ art.excerpt }}
                      </p>

                      <div class="pt-4 border-t border-slate-100 mt-auto flex items-center justify-between text-teal-600 font-bold text-sm">
                        <span>{{ langService.isHindi() ? 'गाइड पढ़ें' : 'Read Article' }}</span>
                        <svg class="w-4 h-4 transform group-hover:translate-x-1.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </div>
                    </div>
                  </a>
                }
              </div>
            } @else {
              <!-- Empty State -->
              <div class="text-center py-20 bg-white rounded-3xl border border-dashed border-slate-300 max-w-xl mx-auto">
                <div class="text-5xl mb-4">📖</div>
                <h3 class="text-lg font-medium text-slate-900">{{ langService.t('noServicesFound') }}</h3>
                <p class="text-slate-500 mt-1">{{ langService.t('adjustSearch') }}</p>
                <button (click)="resetFilters()" class="mt-4 text-teal-600 font-semibold hover:text-teal-800 transition-colors">
                  {{ langService.t('clearSearch') }}
                </button>
              </div>
            }

            <!-- Bottom Appointment CTA -->
            <div class="mt-20 bg-slate-900 rounded-3xl p-8 md:p-14 text-white text-center max-w-5xl mx-auto shadow-2xl">
              <h2 class="text-3xl md:text-4xl font-serif font-bold mb-4">{{ langService.t('haveQuestions') }}</h2>
              <p class="text-slate-400 text-base md:text-lg max-w-2xl mx-auto mb-8">
                {{ langService.t('scheduleConsultationCTA') }}
              </p>
              <a routerLink="/contact" class="inline-block bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold px-8 py-4 rounded-full text-sm md:text-base transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5">
                {{ langService.t('bookConsultation') }}
              </a>
            </div>

          </div>
        </div>
      }
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CareTipsComponent implements OnInit {
  langService = inject(LanguageService);
  private route = inject(ActivatedRoute);
  private titleService: Title = inject(Title);
  private metaService: Meta = inject(Meta);

  categoryOptions = computed(() => [
    { id: 'All', label: this.langService.isHindi() ? 'सभी विषय' : 'All' },
    { id: 'Warning Signs', label: this.langService.isHindi() ? 'चेतावनी संकेत' : 'Warning Signs' },
    { id: 'Preventive Care', label: this.langService.isHindi() ? 'रोकथाम व देखभाल' : 'Preventive Care' },
    { id: 'Aesthetics & Restorations', label: this.langService.isHindi() ? 'मुस्कान व रेस्टोरेशन' : 'Aesthetics & Restorations' },
    { id: 'Patient Guidance', label: this.langService.isHindi() ? 'मरीज मार्गदर्शन' : 'Patient Guidance' }
  ]);
  selectedCategory = signal<string>('All');
  searchQuery = signal<string>('');

  slug = toSignal(
    this.route.paramMap.pipe(map(params => params.get('slug'))),
    { initialValue: null }
  );

  rawArticles = signal<CareTipArticle[]>(CARE_TIPS_ARTICLES);

  articles = computed(() => {
    const list = this.rawArticles();
    if (!this.langService.isHindi()) return list;
    return list.map(art => {
      const hi = CARE_TIPS_HI_MAP[art.slug];
      if (!hi) return art;
      return {
        ...art,
        title: hi.title || art.title,
        subtitle: hi.subtitle || art.subtitle,
        category: hi.category || art.category,
        readTime: hi.readTime || art.readTime,
        publishDate: hi.publishDate || art.publishDate,
        author: hi.author || art.author,
        excerpt: hi.excerpt || art.excerpt,
        introParagraphs: hi.introParagraphs || art.introParagraphs,
        keyPointsHeading: hi.keyPointsHeading || art.keyPointsHeading,
        keyPoints: hi.keyPoints || art.keyPoints,
        sections: hi.sections || art.sections,
        mattersSection: hi.mattersSection || art.mattersSection,
        clinicHelpSection: hi.clinicHelpSection || art.clinicHelpSection,
        conclusion: hi.conclusion || art.conclusion
      };
    });
  });

  featuredArticle = computed(() => {
    return this.articles().find(a => a.featured) || this.articles()[0];
  });

  currentArticle = computed(() => {
    const s = this.slug();
    if (!s) return null;
    return this.articles().find(a => a.slug === s) || null;
  });

  otherArticles = computed(() => {
    const current = this.currentArticle();
    if (!current) return [];
    return this.articles().filter(a => a.id !== current.id).slice(0, 2);
  });

  filteredArticles = computed(() => {
    const query = this.searchQuery().toLowerCase().trim();
    const cat = this.selectedCategory();
    let list = this.articles();

    if (cat !== 'All') {
      const origList = this.rawArticles();
      list = list.filter(a => {
        const raw = origList.find(r => r.id === a.id);
        return raw && raw.category.toLowerCase() === cat.toLowerCase();
      });
    }

    if (query) {
      list = list.filter(a => 
        a.title.toLowerCase().includes(query) ||
        a.excerpt.toLowerCase().includes(query) ||
        a.category.toLowerCase().includes(query)
      );
    }

    return list;
  });

  constructor() {
    // Dynamic SEO title & meta description update
    effect(() => {
      const art = this.currentArticle();
      const isHi = this.langService.isHindi();
      if (art) {
        this.titleService.setTitle(isHi ? `${art.title} | व्हाइट क्रेस्ट डेंटल` : `${art.title} | White Crest Dental Care Tips`);
        this.metaService.updateTag({
          name: 'description',
          content: art.excerpt
        });
      } else {
        this.titleService.setTitle(isHi ? 'दांतों की देखभाल के टिप्स और मरीज गाइड | व्हाइट क्रेस्ट डेंटल' : 'Dental Care Tips & Patient Guides | White Crest Dental');
        this.metaService.updateTag({
          name: 'description',
          content: isHi 
            ? 'व्हाइट क्रेस्ट डेंटल के विशेषज्ञों द्वारा प्रमाणित दंत देखभाल गाइड, लक्षण सूचियां और प्रिवेंटिव हेल्थ टिप्स पढ़ें।'
            : 'Read comprehensive dental care guides, symptom checklists, and preventive health tips from White Crest Dental specialists.'
        });
      }
    });
  }

  ngOnInit() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  onSearch(event: Event) {
    const input = event.target as HTMLInputElement;
    this.searchQuery.set(input.value);
  }

  clearSearch() {
    this.searchQuery.set('');
  }

  selectCategory(cat: string) {
    this.selectedCategory.set(cat);
  }

  resetFilters() {
    this.searchQuery.set('');
    this.selectedCategory.set('All');
  }
}
