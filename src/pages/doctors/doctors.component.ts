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
}

@Component({
  selector: 'app-doctors',
  standalone: true,
  imports: [],
  template: `
    <div class="bg-slate-50 py-16 sm:py-20">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-3xl font-extrabold text-slate-900 sm:text-4xl">
            {{ langService.isHindi() ? 'हमारी विशेषज्ञ टीम से मिलें' : 'Meet Our Team' }}
          </h2>
          <p class="mt-4 text-xl text-slate-500 max-w-2xl mx-auto">
            {{ langService.isHindi() ? 'हमारे समर्पित पेशेवर आपको दंत चिकित्सा के उच्चतम मानकों के साथ सर्वोत्तम सेवा देने के लिए प्रतिबद्ध हैं।' : 'Our dedicated professionals are committed to providing you with the highest standard of dental care.' }}
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          @for (doctor of doctors; track doctor.name) {
            <div class="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group">
              <div class="aspect-w-3 aspect-h-4 relative overflow-hidden h-80 bg-slate-200">
                <img [src]="doctor.image" [alt]="doctor.name" class="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500">
              </div>
              <div class="p-6">
                <h3 class="text-lg font-bold text-slate-900">{{ doctor.name }}</h3>
                <p class="text-teal-600 font-medium mb-4">
                  {{ langService.isHindi() && doctor.roleHi ? doctor.roleHi : doctor.role }}
                </p>
                <p class="text-slate-600 text-sm leading-relaxed">
                  {{ langService.isHindi() && doctor.bioHi ? doctor.bioHi : doctor.bio }}
                </p>
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
      name: 'Dr. Sarah Bennett',
      role: 'Lead Dentist & Surgeon',
      roleHi: 'मुख्य दंत चिकित्सक एवं सर्जन (Lead Dentist & Surgeon)',
      image: 'https://picsum.photos/seed/doctor1/400/500',
      bio: 'Dr. Bennett has over 15 years of experience in restorative surgery. She is passionate about helping patients regain their confidence through smile restoration.',
      bioHi: '15 से अधिक वर्षों के अनुभव के साथ डॉ. बेनेट मुस्कान बहाली और रेस्टोरेटिव सर्जरी में विशेषज्ञ हैं।'
    },
    {
      name: 'Dr. James Chen',
      role: 'Orthodontist',
      roleHi: 'ऑर्थोडॉन्टिस्ट (Orthodontist)',
      image: 'https://picsum.photos/seed/doctor2/400/500',
      bio: 'Specializing in Invisalign and traditional braces, Dr. Chen loves seeing the transformation in his patients\' smiles. He stays up-to-date with the latest ortho tech.',
      bioHi: 'इनविज़िलाइन और ब्रेसेस विशेषज्ञ, डॉ. चेन मरीजों के टेढ़े-मेढ़े दांतों को सीधा करने में निपुण हैं।'
    },
    {
      name: 'Dr. Emily Rodriguez',
      role: 'Pediatric Specialist',
      roleHi: 'पीडियाट्रिक डेंटिस्ट (बच्चों के दांतों के विशेषज्ञ)',
      image: 'https://picsum.photos/seed/doctor3/400/500',
      bio: 'With a gentle approach and a friendly demeanor, Dr. Rodriguez makes dental visits fun for kids, ensuring they develop healthy habits early on.',
      bioHi: 'अपने सौम्य और दोस्ताना व्यवहार से डॉ. रॉड्रिग्ज बच्चों के लिए दंत चिकित्सा को भयमुक्त और सुखद बनाती हैं।'
    }
  ];

  ngOnInit() {
    this.title.setTitle('Meet Our Team | White Crest Dental');
    this.meta.updateTag({ name: 'description', content: 'Meet our expert team of dentists and specialists dedicated to your oral health and comfort. Dr. Sarah Bennett, Dr. James Chen, and Dr. Emily Rodriguez.' });
  }
}
