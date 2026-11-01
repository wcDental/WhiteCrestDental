
import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LanguageService } from '../../../services/language.service';

@Component({
  selector: 'app-meet-the-doctor',
  standalone: true,
  imports: [RouterLink],
  template: `
    <section class="py-20 bg-slate-50 overflow-hidden border-b border-slate-100">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          <!-- Image Side -->
          <div class="w-full lg:w-1/2 relative">
            <div class="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/5] lg:aspect-square">
              <img src="/doctor-photo.png" alt="Dr. Kritima Tripathi - Lead Dentist at White Crest Dental" class="w-full h-full object-cover object-top">

              <!-- Review Badge Overlay -->
              <div class="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-lg flex items-center justify-between border border-slate-100">
                <div class="flex flex-col">
                  <span class="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">{{ langService.t('reviewsBadge') }}</span>
                  <div class="flex items-center gap-1">
                    <span class="text-yellow-400 text-lg">★★★★★</span>
                    <span class="font-bold text-slate-900 text-lg">5.0</span>
                  </div>
                </div>
                
                <a 
                  href="https://www.practo.com/greater-noida/doctor/kritima-tripathi-1/info"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="border-l border-slate-200 pl-4 text-right group">
                  <span class="block text-[11px] font-black tracking-wider text-[#14bef0] uppercase">practo</span>
                  <span class="text-xs font-bold text-slate-800 group-hover:text-teal-600 transition-colors flex items-center gap-1 justify-end">
                    <span>100% Recommended</span>
                    <svg class="w-3 h-3 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </a>
              </div>
            </div>
            
            <!-- Decorative Elements -->
            <div class="absolute -top-4 -right-4 w-24 h-24 bg-teal-100 rounded-full -z-10 opacity-50"></div>
            <div class="absolute -bottom-4 -left-4 w-32 h-32 bg-slate-200 rounded-full -z-10 opacity-50"></div>
          </div>

          <!-- Content Side -->
          <div class="w-full lg:w-1/2">
            <span class="inline-block py-1 px-3 rounded-full bg-teal-100 text-teal-800 text-xs font-bold tracking-wider uppercase mb-6">
              {{ langService.t('founderTitle') }}
            </span>
            <h2 class="text-4xl md:text-5xl font-serif text-slate-900 mb-6 leading-tight">
              {{ langService.t('doctorName') }}
            </h2>
            <p class="text-lg text-slate-600 mb-8 leading-relaxed">
              {{ langService.t('doctorBio') }}
            </p>

            <div class="space-y-6 mb-10">
              <div class="flex items-start">
                 <div class="flex-shrink-0 w-10 h-10 rounded-full bg-white border border-slate-100 flex items-center justify-center text-teal-600 shadow-sm mt-1">
                   <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                     <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                   </svg>
                 </div>
                 <div class="ml-4">
                   <h3 class="text-lg font-bold text-slate-900">{{ langService.t('expertiseTitle') }}</h3>
                   <p class="text-slate-500">RCT, Cosmetic & Implant Dentistry</p>
                 </div>
              </div>
              
              <div class="flex items-start">
                 <div class="flex-shrink-0 w-10 h-10 rounded-full bg-white border border-slate-100 flex items-center justify-center text-teal-600 shadow-sm mt-1">
                   <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                     <path d="M12 14l9-5-9-5-9 5 9 5z" />
                     <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                   </svg>
                 </div>
                 <div class="ml-4">
                   <h3 class="text-lg font-bold text-slate-900">{{ langService.t('specialityTitle') }}</h3>
                   <p class="text-slate-500">{{ langService.t('specialityDesc') }}</p>
                 </div>
              </div>

              <div class="flex items-start">
                 <div class="flex-shrink-0 w-10 h-10 rounded-full bg-white border border-slate-100 flex items-center justify-center text-teal-600 shadow-sm mt-1">
                   <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                     <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                   </svg>
                 </div>
                 <div class="ml-4">
                   <h3 class="text-lg font-bold text-slate-900">{{ langService.t('experienceTitle') }}</h3>
                   <p class="text-slate-500">{{ langService.t('experienceDesc') }}</p>
                 </div>
              </div>
            </div>

            <!-- Practo Verified Trust Strip -->
            <div class="mb-10 p-5 rounded-2xl bg-white border border-slate-200/80 shadow-xs">
              <div class="flex items-center justify-between mb-3">
                <div class="flex items-center gap-2">
                  <span class="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
                  <span class="text-xs font-bold uppercase tracking-wider text-slate-600">
                    {{ langService.t('practoTrustHeading') }}
                  </span>
                </div>
                <span class="text-xs font-black text-[#14bef0] bg-sky-50 px-2.5 py-0.5 rounded-full border border-sky-100">
                  practo
                </span>
              </div>

              <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <!-- Doctor Link -->
                <a 
                  href="https://www.practo.com/greater-noida/doctor/kritima-tripathi-1/info" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  class="group flex items-center justify-between p-3.5 rounded-xl bg-slate-50 hover:bg-teal-50/70 border border-slate-200/70 hover:border-teal-400 transition-all">
                  <div class="flex items-center gap-3 min-w-0 pr-2">
                    <span class="w-9 h-9 rounded-xl bg-teal-100 text-teal-700 flex items-center justify-center flex-shrink-0 group-hover:bg-teal-600 group-hover:text-white transition-colors shadow-2xs">
                      <!-- Doctor with Stethoscope Icon -->
                      <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <circle cx="12" cy="6.5" r="3.5"/>
                        <path d="M5 21v-1.5a4.5 4.5 0 0 1 4.5-4.5h5a4.5 4.5 0 0 1 4.5 4.5V21"/>
                        <path d="M8.5 10.5h1v3a2.5 2.5 0 0 0 5 0v-3h1"/>
                        <path d="M12 16.5v2"/>
                        <circle cx="12" cy="19.5" r="1" fill="currentColor"/>
                      </svg>
                    </span>
                    <div class="min-w-0">
                      <span class="block text-xs font-bold text-slate-900 group-hover:text-teal-700 transition-colors truncate">
                        {{ langService.t('practoDoctorProfile') }}
                      </span>
                      <span class="block text-[11px] text-slate-500">
                        {{ langService.t('doctorPractoBadge') }}
                      </span>
                    </div>
                  </div>
                  <span class="w-7 h-7 rounded-lg bg-white group-hover:bg-teal-600 text-slate-400 group-hover:text-white flex items-center justify-center flex-shrink-0 shadow-xs transition-colors text-xs font-bold">
                    ↗
                  </span>
                </a>

                <!-- Clinic Link -->
                <a 
                  href="https://www.practo.com/greater-noida/clinic/white-crest-dental-greater-noida-west" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  class="group flex items-center justify-between p-3.5 rounded-xl bg-slate-50 hover:bg-sky-50/70 border border-slate-200/70 hover:border-sky-400 transition-all">
                  <div class="flex items-center gap-3 min-w-0 pr-2">
                    <span class="w-9 h-9 rounded-xl bg-sky-100 text-sky-700 flex items-center justify-center flex-shrink-0 group-hover:bg-[#14bef0] group-hover:text-white transition-colors shadow-2xs">
                      <!-- Clinic Building Icon -->
                      <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M3 21h18"/>
                        <path d="M5 21V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16"/>
                        <path d="M9 21v-4a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v4"/>
                        <path d="M10 9h4"/>
                        <path d="M12 7v4"/>
                      </svg>
                    </span>
                    <div class="min-w-0">
                      <span class="block text-xs font-bold text-slate-900 group-hover:text-sky-700 transition-colors truncate">
                        {{ langService.t('practoClinicProfile') }}
                      </span>
                      <span class="block text-[11px] text-slate-500">
                        {{ langService.t('clinicPractoBadge') }}
                      </span>
                    </div>
                  </div>
                  <span class="w-7 h-7 rounded-lg bg-white group-hover:bg-[#14bef0] text-slate-400 group-hover:text-white flex items-center justify-center flex-shrink-0 shadow-xs transition-colors text-xs font-bold">
                    ↗
                  </span>
                </a>
              </div>
            </div>

            <div class="flex flex-wrap items-center gap-4">
              <a routerLink="/contact" class="inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-medium rounded-full text-white bg-slate-900 hover:bg-teal-600 transition-colors duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1 transform">
                {{ langService.t('consultNow') }}
              </a>

              <a 
                href="https://www.practo.com/greater-noida/clinic/white-crest-dental-greater-noida-west" 
                target="_blank" 
                rel="noopener noreferrer" 
                class="inline-flex items-center justify-center gap-2.5 px-6 py-4 border-2 border-slate-300 hover:border-teal-500 text-base font-semibold rounded-full text-slate-800 bg-white hover:bg-slate-50 transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-0.5">
                <!-- Clinic Icon -->
                <svg class="w-5 h-5 text-[#14bef0]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M3 21h18"/>
                  <path d="M5 21V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16"/>
                  <path d="M9 21v-4a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v4"/>
                  <path d="M10 9h4"/>
                  <path d="M12 7v4"/>
                </svg>
                <span>{{ langService.t('bookViaPracto') }}</span>
                <span class="text-[#14bef0] font-black text-xs">practo</span>
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MeetTheDoctorComponent {
  langService = inject(LanguageService);
}
