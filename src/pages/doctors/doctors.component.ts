import { Component, ChangeDetectionStrategy, inject, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { LanguageService } from '../../services/language.service';

interface Doctor {
  name: string;
  role: string;
  roleHi?: string;
  image: string;
  bio: string;
  bioHi?: string;
  practoLink?: string;
}

@Component({
  selector: 'app-doctors',
  standalone: true,
  imports: [],
  template: `
    <div class="bg-slate-50 py-16 sm:py-20">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <span class="text-teal-600 font-bold tracking-wider uppercase text-xs mb-2 block">
            {{ langService.isHindi() ? 'क्लिनिकल विशेषज्ञता' : 'Clinical Expertise' }}
          </span>
          <h2 class="text-3xl font-serif font-bold text-slate-900 sm:text-4xl md:text-5xl">
            {{ langService.isHindi() ? 'हमारी विशेषज्ञ टीम से मिलें' : 'Meet Our Team' }}
          </h2>
          <p class="mt-4 text-lg md:text-xl text-slate-500 max-w-2xl mx-auto">
            {{ langService.isHindi() ? 'हमारे समर्पित पेशेवर आपको दंत चिकित्सा के उच्चतम मानकों के साथ सर्वोत्तम सेवा देने के लिए प्रतिबद्ध हैं।' : 'Our dedicated professionals are committed to providing you with the highest standard of dental care.' }}
          </p>

          <!-- Clinic Practo Trust Chip -->
          <div class="mt-6 inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white border border-slate-200/80 shadow-xs">
            <!-- Clinic Building Icon -->
            <svg class="w-4 h-4 text-[#14bef0] flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M3 21h18"/>
              <path d="M5 21V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16"/>
              <path d="M9 21v-4a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v4"/>
              <path d="M10 9h4"/>
              <path d="M12 7v4"/>
            </svg>
            <span class="text-xs font-semibold text-slate-700">
              {{ langService.t('clinicPractoBadge') }}
            </span>
            <span class="text-slate-300">•</span>
            <a 
              href="https://www.practo.com/greater-noida/clinic/white-crest-dental-greater-noida-west" 
              target="_blank" 
              rel="noopener noreferrer" 
              class="text-xs font-bold text-teal-600 hover:text-teal-700 hover:underline inline-flex items-center gap-1">
              <span>{{ langService.t('practoClinicProfile') }}</span>
              <span>↗</span>
            </a>
          </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          @for (doctor of doctors; track doctor.name) {
            <div class="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl border border-slate-200/80 hover:border-teal-400 transition-all duration-300 group flex flex-col">
              <div class="relative overflow-hidden h-80 bg-slate-900">
                <img [src]="doctor.image" [alt]="doctor.name" class="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500">
              </div>
              <div class="p-6 md:p-8 flex flex-col flex-grow">
                <h3 class="text-xl font-serif font-bold text-slate-900 mb-1">{{ doctor.name }}</h3>
                <p class="text-teal-600 font-semibold text-sm mb-4">
                  {{ langService.isHindi() && doctor.roleHi ? doctor.roleHi : doctor.role }}
                </p>
                <p class="text-slate-600 text-sm leading-relaxed mb-6 flex-grow">
                  {{ langService.isHindi() && doctor.bioHi ? doctor.bioHi : doctor.bio }}
                </p>

                @if (doctor.practoLink) {
                  <div class="pt-4 border-t border-slate-100 mt-auto">
                    <a 
                      [href]="doctor.practoLink" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      class="inline-flex items-center justify-between w-full p-2.5 rounded-xl bg-sky-50/70 hover:bg-sky-100/80 border border-sky-100 text-slate-800 text-xs font-bold transition-colors group/link">
                      <span class="flex items-center gap-2">
                        <!-- Doctor with Stethoscope Icon -->
                        <svg class="w-4 h-4 text-teal-600 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                          <circle cx="12" cy="6.5" r="3.5"/>
                          <path d="M5 21v-1.5a4.5 4.5 0 0 1 4.5-4.5h5a4.5 4.5 0 0 1 4.5 4.5V21"/>
                          <path d="M8.5 10.5h1v3a2.5 2.5 0 0 0 5 0v-3h1"/>
                          <path d="M12 16.5v2"/>
                          <circle cx="12" cy="19.5" r="1" fill="currentColor"/>
                        </svg>
                        <span class="font-black text-[#14bef0]">practo</span>
                        <span class="text-slate-800">{{ langService.t('practoDoctorProfile') }}</span>
                      </span>
                      <span class="text-teal-600 group-hover/link:translate-x-0.5 transition-transform">↗</span>
                    </a>
                  </div>
                }
              </div>
            </div>
          }
        </div>
      </div>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DoctorsComponent implements OnInit {
  langService = inject(LanguageService);
  private title: Title = inject(Title);
  private meta: Meta = inject(Meta);

  doctors: Doctor[] = [
    {
      name: 'Dr. Kritima Tripathi',
      role: 'Founder & Lead Dentist',
      roleHi: 'संस्थापक एवं मुख्य दंत चिकित्सक (Founder & Lead Dentist)',
      image: '/doctor-photo.png',
      bio: 'With over 11 years of experience, Dr. Kritima Tripathi specializes in painless treatments, restorative smile design, root canals, and implant dentistry.',
      bioHi: '11 से अधिक वर्षों के अनुभव के साथ डॉ. कृतिमा त्रिपाठी दर्द रहित उपचार, स्माइल डिजाइन, रूट कैनाल और इम्प्लांट डेंटिस्ट्री में विशेषज्ञ हैं।',
      practoLink: 'https://www.practo.com/greater-noida/doctor/kritima-tripathi-1/info'
    },
    {
      name: 'Dr. Sarah Bennett',
      role: 'Consultant Prosthodontist & Implantologist',
      roleHi: 'कंसल्टेंट प्रोस्थोडॉन्टिस्ट एवं इम्प्लांटोलॉजिस्ट',
      image: 'https://picsum.photos/seed/doctor1/400/500',
      bio: 'Over 15 years of experience in restorative surgery and full-mouth rehabilitation, helping patients regain chewing comfort and confidence.',
      bioHi: '15 से अधिक वर्षों के अनुभव के साथ रेस्टोरेटिव सर्जरी और फुल-माउथ रिहैबिलिटेशन में विशेषज्ञ।'
    },
    {
      name: 'Dr. James Chen',
      role: 'Orthodontist & Dentofacial Orthopedics',
      roleHi: 'ऑर्थोडॉन्टिस्ट (Aligners & Braces)',
      image: 'https://picsum.photos/seed/doctor2/400/500',
      bio: 'Specializing in Invisalign and clear aligners to gently straighten teeth and craft harmonized, confident facial aesthetics.',
      bioHi: 'इनविज़िलाइन और क्लियर अलाइनर्स विशेषज्ञ, जो सौम्य और आधुनिक तकनीक से दांतों को सही आकार देते हैं।'
    }
  ];

  ngOnInit() {
    this.title.setTitle('Meet Our Team | White Crest Dental');
    this.meta.updateTag({ name: 'description', content: 'Meet Dr. Kritima Tripathi and the expert team at White Crest Dental. Certified dental care in Greater Noida West.' });
  }
}
