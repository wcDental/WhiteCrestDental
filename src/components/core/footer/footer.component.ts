
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

            <!-- Verified on Practo Footer Badge -->
            <div class="p-3.5 rounded-2xl bg-slate-800/90 border border-slate-700/80 max-w-sm shadow-sm">
              <div class="flex items-center justify-between mb-2">
                <div class="flex items-center gap-1.5">
                  <span class="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                  <span class="text-[11px] font-bold uppercase tracking-wider text-slate-300">
                    {{ langService.t('practoVerifiedDoctor') }}
                  </span>
                </div>
                <span class="text-xs font-black text-[#14bef0]">practo</span>
              </div>
              <div class="flex flex-col gap-2 text-xs">
                <a 
                  href="https://www.practo.com/greater-noida/doctor/kritima-tripathi-1/info" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  class="text-slate-300 hover:text-teal-400 transition-colors flex items-center justify-between group py-0.5">
                  <span class="flex items-center gap-2">
                    <!-- Doctor with Stethoscope Icon -->
                    <svg class="w-3.5 h-3.5 text-teal-400 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <circle cx="12" cy="6.5" r="3.5"/>
                      <path d="M5 21v-1.5a4.5 4.5 0 0 1 4.5-4.5h5a4.5 4.5 0 0 1 4.5 4.5V21"/>
                      <path d="M8.5 10.5h1v3a2.5 2.5 0 0 0 5 0v-3h1"/>
                      <path d="M12 16.5v2"/>
                      <circle cx="12" cy="19.5" r="1" fill="currentColor"/>
                    </svg>
                    <span>{{ langService.t('practoDoctorProfile') }}</span>
                  </span>
                  <span class="text-slate-500 group-hover:text-teal-400 text-[10px]">↗</span>
                </a>
                <a 
                  href="https://www.practo.com/greater-noida/clinic/white-crest-dental-greater-noida-west" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  class="text-slate-300 hover:text-[#14bef0] transition-colors flex items-center justify-between group py-0.5">
                  <span class="flex items-center gap-2">
                    <!-- Clinic Building Icon -->
                    <svg class="w-3.5 h-3.5 text-[#14bef0] flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <path d="M3 21h18"/>
                      <path d="M5 21V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16"/>
                      <path d="M9 21v-4a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v4"/>
                      <path d="M10 9h4"/>
                      <path d="M12 7v4"/>
                    </svg>
                    <span>{{ langService.t('practoClinicProfile') }}</span>
                  </span>
                  <span class="text-slate-500 group-hover:text-[#14bef0] text-[10px]">↗</span>
                </a>
              </div>
            </div>
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
              <li>
                <a 
                  href="https://www.practo.com/greater-noida/clinic/white-crest-dental-greater-noida-west" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  class="text-[#14bef0] hover:text-white hover:translate-x-1 transition-all inline-flex items-center gap-2 text-sm font-medium">
                  <!-- Clinic Building Icon -->
                  <svg class="w-3.5 h-3.5 text-[#14bef0] flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M3 21h18"/>
                    <path d="M5 21V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16"/>
                    <path d="M9 21v-4a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v4"/>
                    <path d="M10 9h4"/>
                    <path d="M12 7v4"/>
                  </svg>
                  <span>{{ langService.t('practoClinicProfile') }}</span>
                  <span class="text-xs">↗</span>
                </a>
              </li>
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
