
import { Component, ChangeDetectionStrategy, signal, inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { LanguageService } from '../../../services/language.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  template: `
    <header class="bg-white shadow-sm border-b border-slate-100 relative">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between items-center h-20">
          <!-- Logo -->
          <div class="flex-shrink-0 flex items-center">
            <a routerLink="/" class="flex items-center gap-3 group">
              <!-- Custom WC Tooth Logo -->
              <svg class="h-10 w-10 text-teal-600 group-hover:text-teal-700 transition-colors duration-300" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <!-- Tooth Outline / C Shape -->
                <path d="M85 30C85 30 80 10 50 10C20 10 15 30 15 30C15 30 10 50 20 70C30 90 50 95 50 95C50 95 70 90 80 70C90 50 85 30 85 30Z" stroke="currentColor" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
                <!-- W Shape -->
                <path d="M32 35 L41 58 L50 42 L59 58 L68 35" stroke="currentColor" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
                <!-- Implant Screw Details (Bottom Right) -->
                <path d="M55 72 L75 72" stroke="currentColor" stroke-width="3" stroke-linecap="round"/>
                <path d="M58 78 L72 78" stroke="currentColor" stroke-width="3" stroke-linecap="round"/>
                <path d="M62 84 L68 84" stroke="currentColor" stroke-width="3" stroke-linecap="round"/>
              </svg>
              
              <span class="font-bold text-lg md:text-xl tracking-tight text-slate-900 group-hover:text-teal-600 transition-colors">White Crest Dental</span>
            </a>
          </div>

          <!-- Desktop Navigation -->
          <nav class="hidden md:flex space-x-6 lg:space-x-8 items-center">
            <a routerLink="/" 
               routerLinkActive="text-teal-600 font-semibold" 
               [routerLinkActiveOptions]="{exact: true}"
               class="text-slate-600 hover:text-teal-600 transition-colors px-2 py-2 text-sm font-medium">
              {{ langService.t('home') }}
            </a>
            <a routerLink="/services" 
               routerLinkActive="text-teal-600 font-semibold"
               class="text-slate-600 hover:text-teal-600 transition-colors px-2 py-2 text-sm font-medium">
              {{ langService.t('services') }}
            </a>
            <a routerLink="/gallery" 
               routerLinkActive="text-teal-600 font-semibold"
               class="text-slate-600 hover:text-teal-600 transition-colors px-2 py-2 text-sm font-medium">
              {{ langService.t('gallery') }}
            </a>
            <a routerLink="/contact" 
               routerLinkActive="text-teal-600 font-semibold"
               class="text-slate-600 hover:text-teal-600 transition-colors px-2 py-2 text-sm font-medium">
              {{ langService.t('contact') }}
            </a>
            <a routerLink="/faq" 
               routerLinkActive="text-teal-600 font-semibold"
               class="text-slate-600 hover:text-teal-600 transition-colors px-2 py-2 text-sm font-medium">
              {{ langService.t('faq') }}
            </a>
            <a routerLink="/care-tips" 
               routerLinkActive="text-teal-600 font-semibold"
               class="text-slate-600 hover:text-teal-600 transition-colors px-2 py-2 text-sm font-medium">
              {{ langService.t('careTips') }}
            </a>
          </nav>

          <!-- CTA Button & Language Switcher -->
          <div class="hidden md:flex items-center gap-3">
            <button 
              (click)="langService.toggleLanguage()"
              type="button"
              aria-label="Toggle language between English and Hindi"
              class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold border transition-all duration-200 active:scale-95 shadow-2xs"
              [class]="langService.isHindi() ? 'bg-teal-50 border-teal-300 text-teal-800 hover:bg-teal-100' : 'bg-slate-50 border-slate-200 text-slate-700 hover:border-teal-300 hover:text-teal-700'">
              <span class="text-xs">🌐</span>
              <span>{{ langService.isHindi() ? 'English' : 'हिन्दी' }}</span>
            </button>

            <a routerLink="/contact" class="bg-teal-600 hover:bg-teal-700 text-white px-5 py-2.5 rounded-full text-sm font-semibold shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5">
              {{ langService.t('bookNow') }}
            </a>
          </div>

          <!-- Mobile menu button & quick lang toggle -->
          <div class="md:hidden flex items-center gap-2">
            <button 
              (click)="langService.toggleLanguage()"
              type="button"
              aria-label="Switch language"
              class="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-bold bg-teal-50 border border-teal-200 text-teal-800 active:scale-95">
              <span>🌐</span>
              <span>{{ langService.isHindi() ? 'EN' : 'हिन्दी' }}</span>
            </button>
            <button (click)="toggleMenu()" class="text-slate-600 hover:text-teal-600 focus:outline-none p-2">
              <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                @if (!isMenuOpen()) {
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                } @else {
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                }
              </svg>
            </button>
          </div>
        </div>
      </div>

      <!-- Mobile Navigation Overlay -->
      @if (isMenuOpen()) {
        <div class="absolute top-full left-0 w-full bg-white border-b border-slate-100 shadow-lg z-50 animate-fade-in md:hidden">
          <div class="px-4 pt-2 pb-6 space-y-2">
            <a routerLink="/" (click)="closeMenu()" class="block px-3 py-3 rounded-md text-base font-medium text-slate-700 hover:text-teal-600 hover:bg-slate-50 border-b border-slate-50">
              {{ langService.t('home') }}
            </a>
            <a routerLink="/services" (click)="closeMenu()" class="block px-3 py-3 rounded-md text-base font-medium text-slate-700 hover:text-teal-600 hover:bg-slate-50 border-b border-slate-50">
              {{ langService.t('services') }}
            </a>
            <a routerLink="/gallery" (click)="closeMenu()" class="block px-3 py-3 rounded-md text-base font-medium text-slate-700 hover:text-teal-600 hover:bg-slate-50 border-b border-slate-50">
              {{ langService.t('gallery') }}
            </a>
            <a routerLink="/contact" (click)="closeMenu()" class="block px-3 py-3 rounded-md text-base font-medium text-slate-700 hover:text-teal-600 hover:bg-slate-50 border-b border-slate-50">
              {{ langService.t('contact') }}
            </a>
            <a routerLink="/faq" (click)="closeMenu()" class="block px-3 py-3 rounded-md text-base font-medium text-slate-700 hover:text-teal-600 hover:bg-slate-50 border-b border-slate-50">
              {{ langService.t('faq') }}
            </a>
            <a routerLink="/care-tips" (click)="closeMenu()" class="block px-3 py-3 rounded-md text-base font-medium text-slate-700 hover:text-teal-600 hover:bg-slate-50 border-b border-slate-50">
              {{ langService.t('careTips') }}
            </a>
            <div class="pt-4 px-2">
               <a routerLink="/contact" (click)="closeMenu()" class="block w-full text-center px-4 py-3 bg-teal-600 hover:bg-teal-700 text-white rounded-xl font-bold shadow-md transition-colors">
                 {{ langService.t('bookAppointment') }}
               </a>
            </div>
          </div>
        </div>
      }
    </header>
  `,
  styles: [`
    .animate-fade-in {
      animation: fadeIn 0.2s ease-out forwards;
    }
    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(-10px); }
      to { opacity: 1; transform: translateY(0); }
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent {
  langService = inject(LanguageService);
  isMenuOpen = signal(false);

  toggleMenu() {
    this.isMenuOpen.update(v => !v);
  }

  closeMenu() {
    this.isMenuOpen.set(false);
  }
}
