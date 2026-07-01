
import { Component, ChangeDetectionStrategy, inject, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Title, Meta } from '@angular/platform-browser';
import { BeforeAfterPreviewComponent } from './before-after-preview/before-after-preview.component';
import { MeetTheDoctorComponent } from './meet-the-doctor/meet-the-doctor.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, CommonModule, BeforeAfterPreviewComponent, MeetTheDoctorComponent],
  template: `
    <div class="bg-white w-full font-sans">
      <!-- HERO SECTION -->
      <section class="relative w-full overflow-hidden h-auto lg:h-[calc(100vh-80px)] min-h-[600px] flex flex-col lg:flex-row">
        
        <!-- Left Content: Static Text -->
        <div class="w-full lg:w-1/2 flex flex-col justify-center px-6 md:px-12 lg:px-20 xl:px-32 py-16 lg:py-0 bg-white z-10">
          <div class="max-w-xl animate-fade-in-up mt-8 lg:mt-0">
             <div class="mb-6 inline-block">
               <span class="py-2 px-4 rounded-full bg-teal-50 text-teal-800 text-xs font-bold tracking-widest uppercase border border-teal-100">
                 Accepting New Patients
               </span>
             </div>
             <h1 class="text-5xl md:text-6xl lg:text-7xl font-serif text-slate-900 leading-[1.1] mb-6 tracking-tight">
               Precision Care. <br/> <span class="text-teal-600 italic">Painless Dentistry.</span>
             </h1>
             <p class="text-lg text-slate-500 leading-relaxed mb-8 max-w-md">
               White Crest Dental brings you a modern, calming experience that leaves your teeth healthy and your soul rejuvenated.
             </p>
             <div class="flex flex-wrap gap-4">
               <a routerLink="/contact" class="px-8 py-4 bg-slate-900 text-white rounded-full font-medium hover:bg-teal-700 transition-all duration-300 shadow-lg hover:shadow-teal-500/30 transform hover:-translate-y-1 text-center">
                 Book Appointment
               </a>
               <a routerLink="/services" class="px-8 py-4 bg-white border border-slate-200 text-slate-800 rounded-full font-medium hover:bg-slate-50 transition-all duration-300 text-center">
                 Our Services
               </a>
             </div>
             
             <div class="mt-10 flex items-center gap-3 text-sm text-slate-400 font-medium">
                <div class="flex -space-x-3">
                   <img src="https://picsum.photos/seed/p1/60/60" class="w-10 h-10 rounded-full border-2 border-white object-cover" alt="Patient">
                   <img src="https://picsum.photos/seed/p2/60/60" class="w-10 h-10 rounded-full border-2 border-white object-cover" alt="Patient">
                   <img src="https://picsum.photos/seed/p3/60/60" class="w-10 h-10 rounded-full border-2 border-white object-cover" alt="Patient">
                </div>
                <span>Loved by 2,000+ locals</span>
             </div>
          </div>
        </div>

        <!-- Right Content: Infinite Vertical Marquee -->
        <div class="w-full lg:w-1/2 h-[600px] lg:h-full bg-white relative overflow-hidden">
           <!-- Gradient Overlays for smooth fade out at edges -->
           <div class="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-white to-transparent z-10 pointer-events-none"></div>
           <div class="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white to-transparent z-10 pointer-events-none"></div>

           <!-- Marquee Container -->
           <div class="w-full h-full flex justify-center items-start">
              <div class="track-vertical w-full px-6 md:px-10 lg:px-12">
                
                <!-- Set 1 -->
                <div class="flex flex-col gap-6 pb-6">
                  @for (img of images; track img + '1') {
                    <div class="w-full aspect-[4/3] rounded-[2rem] overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-500">
                      <img [src]="img" class="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700 ease-out" alt="Dental Office Interior">
                    </div>
                  }
                </div>

                <!-- Set 2 (Duplicate for loop) -->
                <div class="flex flex-col gap-6 pb-6">
                  @for (img of images; track img + '2') {
                    <div class="w-full aspect-[4/3] rounded-[2rem] overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-500">
                      <img [src]="img" class="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700 ease-out" alt="Dental Office Interior">
                    </div>
                  }
                </div>

              </div>
           </div>
        </div>
      </section>

      <!-- MEET THE DOCTOR SECTION -->
      <app-meet-the-doctor></app-meet-the-doctor>

      <!-- FEATURES SECTION (General Values) -->
      <section class="py-24 px-6 md:px-12 lg:px-20 bg-white">
        <div class="max-w-7xl mx-auto text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-serif text-slate-900 mb-4">A trip to the dentist should be a source of serenity</h2>
          <p class="text-slate-500 max-w-2xl mx-auto text-lg">Here's how White Crest Dental delivers a patient experience like no other.</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-12">
           <div class="flex flex-col items-center text-center p-6 rounded-3xl hover:bg-slate-50 transition-colors duration-300">
              <div class="w-16 h-16 bg-teal-50 rounded-2xl flex items-center justify-center text-3xl mb-6 text-teal-600 shadow-sm">✨</div>
              <h3 class="text-xl font-bold text-slate-900 mb-3">Transparent Pricing</h3>
              <p class="text-slate-500 leading-relaxed">Expect full transparency on every treatment from start to finish. No hidden fees, ever.</p>
           </div>
           <div class="flex flex-col items-center text-center p-6 rounded-3xl hover:bg-slate-50 transition-colors duration-300">
              <div class="w-16 h-16 bg-teal-50 rounded-2xl flex items-center justify-center text-3xl mb-6 text-teal-600 shadow-sm">🧘</div>
              <h3 class="text-xl font-bold text-slate-900 mb-3">Anxiety-Free</h3>
              <p class="text-slate-500 leading-relaxed">Designed by experts to serve as an oasis of calm. Watch Netflix or listen to music while we work.</p>
           </div>
           <div class="flex flex-col items-center text-center p-6 rounded-3xl hover:bg-slate-50 transition-colors duration-300">
              <div class="w-16 h-16 bg-teal-50 rounded-2xl flex items-center justify-center text-3xl mb-6 text-teal-600 shadow-sm">🦷</div>
              <h3 class="text-xl font-bold text-slate-900 mb-3">Modern Dentistry</h3>
              <p class="text-slate-500 leading-relaxed">From digital X-rays to 3D scanning, we use the latest tech for precise, comfortable treatments.</p>
           </div>
        </div>
      </section>

      <!-- BEFORE & AFTER PREVIEW SECTION -->
      <app-before-after-preview></app-before-after-preview>

    </div>
  `,
  styles: [`
    .track-vertical {
      animation: marquee-vertical 60s linear infinite;
    }
    
    @keyframes marquee-vertical {
      0% { transform: translateY(0); }
      100% { transform: translateY(-50%); }
    }

    .animate-fade-in-up {
      animation: fadeInUp 0.8s ease-out forwards;
      opacity: 0;
    }

    @keyframes fadeInUp {
      from {
        opacity: 0;
        transform: translateY(20px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent implements OnInit {
  private title: Title = inject(Title);
  private meta: Meta = inject(Meta);

  images = [
    'https://picsum.photos/seed/zen1/600/450',
    'https://picsum.photos/seed/zen2/600/450',
    'https://picsum.photos/seed/zen3/600/450',
    'https://picsum.photos/seed/zen4/600/450',
    'https://picsum.photos/seed/zen5/600/450',
    'https://picsum.photos/seed/zen6/600/450'
  ];

  ngOnInit() {
    this.title.setTitle('White Crest Dental | Precision Care & Painless Dentistry');
    this.meta.updateTag({ name: 'description', content: 'Welcome to White Crest Dental. We specialize in cosmetic dentistry, veneers, implants, and general care in a spa-like environment.' });
  }
}
