import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';
import { LanguageService } from '../../../services/language.service';

@Component({
  selector: 'app-mobile-nav',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, CommonModule],
  template: `
    <nav 
      class="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-200/90 shadow-[0_-4px_20px_rgba(0,0,0,0.06)] print:hidden"
      aria-label="Mobile Bottom Navigation">
      <div class="grid grid-cols-5 h-16 max-w-md mx-auto items-center px-1">
        
        <!-- Home -->
        <a 
          routerLink="/" 
          [routerLinkActiveOptions]="{ exact: true }"
          routerLinkActive="text-teal-600 font-bold"
          class="flex flex-col items-center justify-center h-full text-slate-500 hover:text-teal-600 transition-colors py-1 group">
          <svg class="w-5 h-5 transition-transform group-active:scale-90" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/>
          </svg>
          <span class="text-[10px] mt-1 tracking-tight truncate max-w-[64px]">
            {{ langService.t('home') }}
          </span>
        </a>

        <!-- Services -->
        <a 
          routerLink="/services" 
          routerLinkActive="text-teal-600 font-bold"
          class="flex flex-col items-center justify-center h-full text-slate-500 hover:text-teal-600 transition-colors py-1 group">
          <!-- Tooth Icon -->
          <svg class="w-5 h-5 transition-transform group-active:scale-90" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M12 2C8.5 2 6 4 6 7c0 3 1.5 6 2 9 .4 2.5 1 5 2.5 5 1.2 0 1.5-2 1.5-4 0-1.5.5-2 1-2s1 .5 1 2c0 2 .3 4 1.5 4 1.5 0 2.1-2.5 2.5-5 .5-3 2-6 2-9 0-3-2.5-5-6-5Z"/>
          </svg>
          <span class="text-[10px] mt-1 tracking-tight truncate max-w-[64px]">
            {{ langService.t('services') }}
          </span>
        </a>

        <!-- Elevated Book Now CTA (Center) -->
        <a 
          routerLink="/contact"
          class="flex flex-col items-center justify-center h-full -mt-3.5 group">
          <div class="w-12 h-12 rounded-full bg-teal-600 group-hover:bg-teal-700 text-white flex items-center justify-center shadow-lg shadow-teal-600/30 border-2 border-white transition-all group-active:scale-95 group-hover:-translate-y-0.5">
            <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
            </svg>
          </div>
          <span class="text-[10px] mt-0.5 font-bold text-teal-700 tracking-tight truncate max-w-[68px]">
            {{ langService.t('bookNow') }}
          </span>
        </a>

        <!-- Care Tips -->
        <a 
          routerLink="/care-tips" 
          routerLinkActive="text-teal-600 font-bold"
          class="flex flex-col items-center justify-center h-full text-slate-500 hover:text-teal-600 transition-colors py-1 group">
          <!-- Lightbulb / Guides Icon -->
          <svg class="w-5 h-5 transition-transform group-active:scale-90" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/>
          </svg>
          <span class="text-[10px] mt-1 tracking-tight truncate max-w-[64px]">
            {{ langService.t('careTips') }}
          </span>
        </a>

        <!-- Contact -->
        <a 
          routerLink="/contact" 
          routerLinkActive="text-teal-600 font-bold"
          class="flex flex-col items-center justify-center h-full text-slate-500 hover:text-teal-600 transition-colors py-1 group">
          <!-- Map Pin Icon -->
          <svg class="w-5 h-5 transition-transform group-active:scale-90" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
          </svg>
          <span class="text-[10px] mt-1 tracking-tight truncate max-w-[64px]">
            {{ langService.t('contact') }}
          </span>
        </a>

      </div>
    </nav>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MobileNavComponent {
  langService = inject(LanguageService);
}
