
import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RouterLink } from '@angular/router';

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
              <img src="https://picsum.photos/seed/doctor_sarah/800/800" alt="Dr. Kritima Tripathi - Lead Dentist at White Crest Dental" class="w-full h-full object-cover">
              
              <!-- Review Badge Overlay -->
              <div class="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-lg flex items-center justify-between border border-slate-100">
                <div class="flex flex-col">
                  <span class="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Google Reviews</span>
                  <div class="flex items-center gap-1">
                    <span class="text-yellow-400 text-lg">★★★★★</span>
                    <span class="font-bold text-slate-900 text-lg">5.0</span>
                  </div>
                </div>
                <div class="text-right">
                  <span class="block text-2xl font-bold text-slate-900">500+</span>
                  <span class="text-xs text-slate-500 font-medium">Happy Patients</span>
                </div>
              </div>
            </div>
            
            <!-- Decorative Elements -->
            <div class="absolute -top-4 -right-4 w-24 h-24 bg-teal-100 rounded-full -z-10 opacity-50"></div>
            <div class="absolute -bottom-4 -left-4 w-32 h-32 bg-slate-200 rounded-full -z-10 opacity-50"></div>
          </div>

          <!-- Content Side -->
          <div class="w-full lg:w-1/2">
            <span class="inline-block py-1 px-3 rounded-full bg-teal-100 text-teal-800 text-xs font-bold tracking-wider uppercase mb-6">
              Founder & Dentist
            </span>
            <h2 class="text-4xl md:text-5xl font-serif text-slate-900 mb-6 leading-tight">
              Dr. Kritima Tripathi
            </h2>
            <p class="text-lg text-slate-600 mb-8 leading-relaxed">
              With over 11 years of experience, Dr. Kritima Tripathi redefines dentistry as a carefully crafted experience rooted in precision and uncompromising quality. Known for her gentle, pain-free approach, she transforms complex treatments into calm, reassuring sessions. Her practice prioritizes clinical excellence, delivering personalized, aesthetically refined results in a serene environment where every patient feels truly cared for.
            </p>

            <div class="space-y-6 mb-10">
              <div class="flex items-start">
                 <div class="flex-shrink-0 w-10 h-10 rounded-full bg-white border border-slate-100 flex items-center justify-center text-teal-600 shadow-sm mt-1">
                   <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                     <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                   </svg>
                 </div>
                 <div class="ml-4">
                   <h3 class="text-lg font-bold text-slate-900">Expertise</h3>
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
                   <h3 class="text-lg font-bold text-slate-900">Speciality</h3>
                   <p class="text-slate-500">Painless Treatment</p>
                 </div>
              </div>

              <div class="flex items-start">
                 <div class="flex-shrink-0 w-10 h-10 rounded-full bg-white border border-slate-100 flex items-center justify-center text-teal-600 shadow-sm mt-1">
                   <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                     <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                   </svg>
                 </div>
                 <div class="ml-4">
                   <h3 class="text-lg font-bold text-slate-900">Experience</h3>
                   <p class="text-slate-500">11+ Years Practicing</p>
                 </div>
              </div>
            </div>

            <a routerLink="/contact" class="inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-medium rounded-full text-white bg-slate-900 hover:bg-teal-600 transition-colors duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1 transform">
              Consult Now
            </a>
          </div>

        </div>
      </div>
    </section>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MeetTheDoctorComponent {}
