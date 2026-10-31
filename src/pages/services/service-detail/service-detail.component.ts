import { Component, ChangeDetectionStrategy, inject, effect, computed } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs/operators';
import { TitleCasePipe } from '@angular/common';
import { Title, Meta } from '@angular/platform-browser';
import { SERVICES_DETAIL_MAP, ServiceDetailData, SERVICES_LIST, ServiceItem } from '../services.data';
import { SERVICES_DETAIL_MAP_HI } from '../services-detail-hi.data';
import { LanguageService } from '../../../services/language.service';

@Component({
  selector: 'app-service-detail',
  standalone: true,
  imports: [RouterLink, TitleCasePipe],
  template: `
    <div class="min-h-screen bg-slate-50 py-12 md:py-20 px-4 sm:px-6 lg:px-8">
      <div class="max-w-4xl mx-auto">
        <!-- Breadcrumb -->
        <nav class="flex mb-8" aria-label="Breadcrumb">
          <ol class="inline-flex items-center space-x-1 md:space-x-3">
            <li class="inline-flex items-center">
              <a routerLink="/" class="text-sm font-medium text-slate-500 hover:text-teal-600 transition-colors">{{ langService.t('home') }}</a>
            </li>
            <li>
              <div class="flex items-center">
                <svg class="w-3 h-3 text-slate-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
                </svg>
                <a routerLink="/services" class="ml-1 text-sm font-medium text-slate-500 hover:text-teal-600 transition-colors md:ml-2">{{ langService.t('services') }}</a>
              </div>
            </li>
            <li aria-current="page">
              <div class="flex items-center">
                <svg class="w-3 h-3 text-slate-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
                </svg>
                <span class="ml-1 text-sm font-medium text-teal-600 md:ml-2">{{ title() }}</span>
              </div>
            </li>
          </ol>
        </nav>

        <!-- Main Card Container -->
        <div class="bg-white rounded-3xl shadow-sm border border-slate-200 overflow-hidden">
          <!-- Banner Header -->
          <div class="relative h-72 md:h-80 bg-slate-900 overflow-hidden">
            <img [src]="heroImage()" [alt]="title()" class="w-full h-full object-cover opacity-60">
            <div class="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/60 to-transparent flex flex-col justify-end p-6 md:p-10">
              <span class="text-teal-400 font-bold uppercase tracking-wider text-xs md:text-sm mb-2">White Crest Dental Studio</span>
              <h1 class="text-3xl md:text-5xl font-serif text-white font-bold tracking-tight">
                {{ title() }}
              </h1>
              @if (serviceData()?.subtitle) {
                <p class="text-slate-300 text-sm md:text-base mt-2 max-w-2xl font-light">
                  {{ serviceData()?.subtitle }}
                </p>
              }
            </div>
          </div>
          
          <!-- Body Content -->
          <div class="p-6 md:p-12">
            @if (serviceData(); as data) {
              <!-- Overview Paragraphs -->
              <div class="space-y-4 mb-10 pb-8 border-b border-slate-100">
                @for (para of data.overview; track $index) {
                  <p class="text-slate-600 text-base md:text-lg leading-relaxed">{{ para }}</p>
                }
              </div>

              <!-- Structured Sections -->
              <div class="space-y-10 mb-12">
                @for (section of data.sections; track section.heading) {
                  <div class="bg-slate-50/60 rounded-3xl p-6 md:p-8 border border-slate-100">
                    <h3 class="text-xl md:text-2xl font-serif font-bold text-slate-900 mb-4 flex items-center gap-3">
                      <span class="w-2 h-6 bg-teal-500 rounded-full inline-block"></span>
                      {{ section.heading }}
                    </h3>

                    @if (section.description) {
                      <p class="text-slate-600 leading-relaxed mb-6 whitespace-pre-line text-base">{{ section.description }}</p>
                    }

                    @if (section.items && section.items.length) {
                      <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                        @for (item of section.items; track $index) {
                          <div class="flex items-start gap-3 bg-white p-3.5 rounded-xl border border-slate-200/80 shadow-xs">
                            <span class="flex-shrink-0 w-5 h-5 rounded-full bg-teal-100 text-teal-700 flex items-center justify-center text-xs font-bold mt-0.5">✓</span>
                            <span class="text-slate-700 text-sm leading-snug">{{ item }}</span>
                          </div>
                        }
                      </div>
                    }

                    @if (section.subsections && section.subsections.length) {
                      <div class="grid grid-cols-1 gap-4">
                        @for (sub of section.subsections; track sub.title) {
                          <div class="bg-white rounded-2xl p-5 border border-slate-200/80 shadow-xs">
                            <h4 class="text-base font-bold text-slate-900 mb-2 flex items-center gap-2">
                              <span class="w-2 h-2 bg-teal-600 rounded-full"></span>
                              {{ sub.title }}
                            </h4>
                            <p class="text-slate-600 text-sm leading-relaxed mb-3 whitespace-pre-line">{{ sub.description }}</p>
                            @if (sub.items && sub.items.length) {
                              <ul class="space-y-1.5 pl-4 list-disc text-slate-600 text-sm">
                                @for (subItem of sub.items; track $index) {
                                  <li>{{ subItem }}</li>
                                }
                              </ul>
                            }
                          </div>
                        }
                      </div>
                    }
                  </div>
                }
              </div>

              <!-- Closing Commitment Note -->
              @if (data.closingNote) {
                <div class="bg-gradient-to-br from-teal-50 to-emerald-50 rounded-2xl p-6 md:p-8 border border-teal-200/70 mb-10">
                  <div class="flex items-start gap-4">
                    <div class="w-10 h-10 rounded-xl bg-teal-600 text-white flex items-center justify-center flex-shrink-0 font-bold text-lg shadow-sm">
                      ★
                    </div>
                    <div>
                      <h4 class="text-lg font-bold text-teal-950 mb-2">
                        {{ langService.isHindi() ? 'मरीजों के प्रति हमारी प्रतिबद्धता' : 'Our Patient Commitment' }}
                      </h4>
                      <p class="text-teal-900/90 text-sm md:text-base leading-relaxed">{{ data.closingNote }}</p>
                    </div>
                  </div>
                </div>
              }
            } @else {
              <!-- Fallback for unmapped slugs -->
              <div class="prose prose-slate max-w-none mb-10">
                <h2 class="text-2xl font-bold text-slate-900 mb-4">
                  {{ langService.isHindi() ? (title() + ' के लिए संपूर्ण क्लिनिकल देखभाल') : ('Comprehensive Care for ' + title()) }}
                </h2>
                <div class="text-slate-600 mb-8 whitespace-pre-line leading-relaxed text-base">
                  {{ currentContent() }}
                </div>
              </div>
            }

            <!-- Consultation Card -->
            <div class="bg-slate-900 rounded-2xl p-8 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
              <div>
                <h3 class="text-xl md:text-2xl font-bold font-serif mb-2">
                  {{ langService.isHindi() ? (title() + ' के बारे में परामर्श चाहिए?') : ('Interested in ' + title() + '?') }}
                </h3>
                <p class="text-slate-300 text-sm md:text-base max-w-lg">
                  {{ langService.isHindi() ? 'हमारे अनुभवी दंत विशेषज्ञों के साथ व्यक्तिगत उपचार और परामर्श के लिए आज ही अपना समय बुक करें।' : 'Book a consultation today to discuss personalized treatment options with our experienced specialists.' }}
                </p>
              </div>
              <div class="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
                <a routerLink="/contact" class="inline-flex items-center justify-center bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold px-6 py-3 rounded-full transition-all text-sm shadow-md hover:-translate-y-0.5">
                  {{ langService.t('scheduleAppointment') }}
                </a>
                <a routerLink="/services" class="inline-flex items-center justify-center bg-white/10 hover:bg-white/20 text-white font-medium px-5 py-3 rounded-full transition-all text-sm border border-white/20">
                  {{ langService.t('allServices') }}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ServiceDetailComponent {
  langService = inject(LanguageService);
  private route = inject(ActivatedRoute);
  private titleService: Title = inject(Title);
  private metaService: Meta = inject(Meta);
  
  // Creates a signal from the route param observable
  slug = toSignal(
    this.route.paramMap.pipe(map(params => params.get('slug') || 'service')), 
    { initialValue: 'service' }
  );

  // Normalize slug to handle aliases and redirects
  normalizedSlug = computed(() => {
    const raw = (this.slug() || '').toLowerCase();
    if (raw === 'crowns-and-bridge') return 'dental-crowns';
    if (raw === 'bridge') return 'dental-bridges';
    if (raw === 'rpd') return 'removable-partial-dentures';
    if (raw === 'clear-aligners') return 'invisalign';
    return raw;
  });

  serviceData = computed<ServiceDetailData | null>(() => {
    const s = this.normalizedSlug();
    const enData = SERVICES_DETAIL_MAP[s];
    if (!enData) return null;
    if (this.langService.isHindi()) {
      const hiData = SERVICES_DETAIL_MAP_HI[s];
      if (hiData) {
        return {
          ...enData,
          ...hiData,
          sections: hiData.sections || enData.sections
        };
      }
    }
    return enData;
  });

  serviceItem = computed<ServiceItem | null>(() => {
    const s = this.normalizedSlug();
    return SERVICES_LIST.find(item => item.slug === s) || null;
  });

  heroImage = computed<string>(() => {
    return this.serviceItem()?.image || ('https://picsum.photos/seed/' + this.normalizedSlug() + '/1200/600');
  });

  title = computed(() => {
    const item = this.serviceItem();
    if (this.langService.isHindi() && item?.titleHi) return item.titleHi;
    const data = this.serviceData();
    if (this.langService.isHindi() && data?.title) return data.title;
    if (data?.title) return data.title;
    if (item?.title) return item.title;
    return this.formatTitle(this.slug());
  });

  currentContent = computed(() => {
    const s = this.slug();
    if (this.langService.isHindi()) {
      return `व्हाइट क्रेस्ट डेंटल में, हम अपने मरीजों के लिए सर्वोत्तम और दर्द रहित परिणाम सुनिश्चित करने के लिए अत्याधुनिक तकनीक का उपयोग करते हैं।\n\nइस भाग में ${this.title()} से संबंधित विस्तृत चरण, लाभ, सावधानियां और आवश्यक क्लिनिकल जानकारी शामिल है। हमारी विशेषज्ञ टीम यह सुनिश्चित करने के लिए समर्पित है कि आप अपने उपचार के हर पहलू को पूरी तरह समझें।`;
    }
    return `At White Crest Dental, we use state-of-the-art technology to provide the best possible outcome for our patients.\n\nThis section contains detailed procedural steps, benefits, recovery information, and specific FAQs related to ${this.formatTitle(s)}. Our team is dedicated to ensuring you fully understand your treatment options.`;
  });

  constructor() {
    effect(() => {
      const pageTitle = this.title();
      this.titleService.setTitle(`${pageTitle} | White Crest Dental`);
      this.metaService.updateTag({
        name: 'description',
        content: `Learn more about ${pageTitle} at White Crest Dental. Expert care, advanced technology, and personalized treatments.`
      });
    });
  }

  formatTitle(slug: string | null): string {
    if (!slug) return '';
    return slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
  }
}
