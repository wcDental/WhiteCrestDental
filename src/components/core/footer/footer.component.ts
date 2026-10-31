
import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LanguageService } from '../../../services/language.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink],
  template: `
    <footer class="bg-slate-900 text-white pt-12 pb-8">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          <!-- Brand & Bio -->
          <div>
            <div class="flex items-center gap-3 mb-4">
              <!-- Custom WC Tooth Logo (Light) -->
              <svg class="h-10 w-10 text-teal-400" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M85 30C85 30 80 10 50 10C20 10 15 30 15 30C15 30 10 50 20 70C30 90 50 95 50 95C50 95 70 90 80 70C90 50 85 30 85 30Z" stroke="currentColor" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M32 35 L41 58 L50 42 L59 58 L68 35" stroke="currentColor" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M55 72 L75 72" stroke="currentColor" stroke-width="3" stroke-linecap="round"/>
                <path d="M58 78 L72 78" stroke="currentColor" stroke-width="3" stroke-linecap="round"/>
                <path d="M62 84 L68 84" stroke="currentColor" stroke-width="3" stroke-linecap="round"/>
              </svg>
              <span class="font-bold text-xl tracking-tight">White Crest <span class="text-teal-400">Dental</span></span>
            </div>
            <p class="text-slate-400 text-sm leading-relaxed mb-6">
              {{ langService.t('bio') }}
            </p>
          </div>

          <!-- Quick Links -->
          <div>
            <h3 class="text-lg font-semibold mb-4 text-teal-400">{{ langService.t('quickLinks') }}</h3>
            <ul class="space-y-3">
              <li><a routerLink="/" class="text-slate-300 hover:text-white hover:translate-x-1 transition-all inline-block text-sm">{{ langService.t('home') }}</a></li>
              <li><a routerLink="/services" class="text-slate-300 hover:text-white hover:translate-x-1 transition-all inline-block text-sm">{{ langService.t('services') }}</a></li>
              <li><a routerLink="/gallery" class="text-slate-300 hover:text-white hover:translate-x-1 transition-all inline-block text-sm">{{ langService.t('gallery') }}</a></li>
              <li><a routerLink="/faq" class="text-slate-300 hover:text-white hover:translate-x-1 transition-all inline-block text-sm">{{ langService.t('faq') }}</a></li>
              <li><a routerLink="/care-tips" class="text-slate-300 hover:text-white hover:translate-x-1 transition-all inline-block text-sm">{{ langService.t('careTips') }}</a></li>
              <li><a routerLink="/contact" class="text-slate-300 hover:text-white hover:translate-x-1 transition-all inline-block text-sm">{{ langService.t('bookAppointment') }}</a></li>
            </ul>
          </div>

          <!-- Contact Info -->
          <div>
            <h3 class="text-lg font-semibold mb-4 text-teal-400">{{ langService.t('visitUs') }}</h3>
            <ul class="space-y-4 text-sm text-slate-300">
              <li class="flex items-start">
                <span class="mr-3 mt-1">📍</span>
                <span>{{ langService.t('addressLine1') }}<br>{{ langService.t('addressLine2') }}</span>
              </li>
              <li class="flex items-center">
                <span class="mr-3">📞</span>
                <span>(555) 123-4567</span>
              </li>
              <li class="flex items-center">
                <span class="mr-3">✉️</span>
                <span>hello@whitecrestdental.in</span>
              </li>
            </ul>
          </div>
        </div>

        <div class="border-t border-slate-800 mt-12 pt-8 text-center text-slate-500 text-xs">
          <p>&copy; {{ currentYear }} {{ langService.t('rights') }}</p>
        </div>
      </div>
    </footer>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FooterComponent {
  langService = inject(LanguageService);
  currentYear = new Date().getFullYear();
}
