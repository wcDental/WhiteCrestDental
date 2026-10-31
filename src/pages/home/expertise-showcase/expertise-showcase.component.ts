import { Component, ChangeDetectionStrategy, signal, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LanguageService } from '../../../services/language.service';

interface ExpertiseItem {
  title: string;
  titleHi?: string;
  slug: string;
  description: string;
  descriptionHi?: string;
}

@Component({
  selector: 'app-expertise-showcase',
  standalone: true,
  imports: [RouterLink],
  template: `
    <section class="py-24 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center max-w-3xl mx-auto mb-16">
          <span class="text-teal-600 font-bold tracking-wider uppercase text-sm mb-2 block">
            {{ langService.t('ourExpertise') }}
          </span>
          <h2 class="text-4xl md:text-5xl font-serif text-slate-900 mb-6">
            {{ langService.t('expertiseHeading') }}
          </h2>
          <p class="text-slate-500 text-lg leading-relaxed">
            {{ langService.t('expertiseSub') }}
          </p>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          @for (item of expertiseItems(); track item.slug) {
            <a [routerLink]="['/services', item.slug]" 
               class="group relative flex flex-col bg-slate-50 rounded-2xl p-8 hover:bg-slate-900 hover:text-white transition-all duration-300 border border-slate-100 hover:border-slate-900 hover:-translate-y-1">
              
              <!-- Icon Placeholder (Dynamic initials or SVG) -->
              <div class="w-12 h-12 bg-white rounded-xl mb-6 flex items-center justify-center text-teal-600 group-hover:bg-teal-600 group-hover:text-white transition-colors duration-300 shadow-sm">
                <span class="text-xl font-bold">{{ item.title.charAt(0) }}</span>
              </div>
              
              <h3 class="text-xl font-bold text-slate-900 group-hover:text-white mb-2 transition-colors">
                {{ langService.isHindi() && item.titleHi ? item.titleHi : item.title }}
              </h3>
              
              <p class="text-slate-500 text-sm leading-relaxed group-hover:text-slate-300 transition-colors mb-4">
                {{ langService.isHindi() && item.descriptionHi ? item.descriptionHi : item.description }}
              </p>

              <div class="mt-auto flex items-center text-teal-600 font-medium text-sm group-hover:text-teal-400">
                {{ langService.t('learnMore') }}
                <svg class="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </a>
          }
        </div>
      </div>
    </section>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ExpertiseShowcaseComponent {
  langService = inject(LanguageService);

  expertiseItems = signal<ExpertiseItem[]>([
    {
      title: 'Veneers',
      titleHi: 'विनियर्स (Veneers)',
      slug: 'veneers',
      description: 'Custom-crafted shells for a flawless smile appearance.',
      descriptionHi: 'मुस्कान को बेदाग और सुंदर बनाने वाले कस्टम-क्राफ्टेड शेल्स।'
    },
    {
      title: 'Invisalign',
      titleHi: 'इनविज़िलाइन (Invisalign)',
      slug: 'invisalign',
      description: 'Clear aligners for discreet and comfortable straightening.',
      descriptionHi: 'बिना तार के सीधे दांत पाने के लिए पारदर्शी और आरामदायक अलाइनर्स।'
    },
    {
      title: 'Same-Day Crowns',
      titleHi: 'सेम-डे क्राउन्स (CEREC Crowns)',
      slug: 'same-day-crowns',
      description: 'Restorations ready in a single visit with CEREC tech.',
      descriptionHi: 'अत्याधुनिक डिजिटल तकनीक से सिर्फ एक ही विजिट में तैयार कैप/क्राउन।'
    },
    {
      title: 'Dental Implants',
      titleHi: 'डेंटल इम्प्लांट्स (Dental Implants)',
      slug: 'dental-implants',
      description: 'Permanent, natural-looking replacements for missing teeth.',
      descriptionHi: 'टूटे या गिरे दांतों का स्थायी, मजबूत और प्राकृतिक विकल्प।'
    },
    {
      title: 'Teeth Whitening',
      titleHi: 'टीथ व्हाइटनिंग (Teeth Whitening)',
      slug: 'teeth-whitening',
      description: 'Professional treatment for brighter, whiter teeth.',
      descriptionHi: 'दांतों को चमकदार और सफेद बनाने के लिए सुरक्षित क्लिनिकल उपचार।'
    },
    {
      title: 'Root Canals',
      titleHi: 'रूट कैनाल ट्रीटमेंट (Root Canals)',
      slug: 'root-canals',
      description: 'Pain-free therapy to save infected natural teeth.',
      descriptionHi: 'संक्रमित दांत को बचाने और दर्द से राहत देने वाली सौम्य थेरेपी।'
    },
    {
      title: 'Preventive Care',
      titleHi: 'प्रिवेंटिव केयर (Preventive Care)',
      slug: 'preventive-care',
      description: 'Routine cleanings and exams to stop problems early.',
      descriptionHi: 'समस्याओं को शुरू होने से पहले रोकने के लिए नियमित जांच व सफाई।'
    },
    {
      title: 'Full Mouth Rehab',
      titleHi: 'फुल माउथ रिहैब (Full Mouth Rehab)',
      slug: 'full-mouth-rehab',
      description: 'Complete restoration of function and aesthetics.',
      descriptionHi: 'दांतों के कार्य और चेहरे के सौंदर्य का संपूर्ण पुनर्निर्माण।'
    }
  ]);
}