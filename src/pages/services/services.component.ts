
import { Component, ChangeDetectionStrategy, signal, inject, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Title, Meta } from '@angular/platform-browser';

interface ServiceItem {
  title: string;
  slug: string;
  description: string;
  image: string;
}

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [RouterLink],
  template: `
    <div class="bg-white font-sans">
      <!-- Merged Hero & Expertise Section -->
      <section class="py-16 md:py-24 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <!-- Unified Header -->
          <div class="text-center max-w-4xl mx-auto mb-16">
            <h1 class="text-4xl md:text-5xl lg:text-6xl font-serif text-slate-900 mb-6 leading-tight">
              Dental Services Reimagined
            </h1>
            <p class="text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed mb-8">
              From routine hygiene to complex full-mouth restoration, we combine artistry with advanced technology to deliver exceptional results.
            </p>
            <div class="flex items-center justify-center gap-2">
              <span class="h-px w-12 bg-slate-200"></span>
              <span class="text-teal-600 font-bold tracking-wider uppercase text-xs">Comprehensive Solutions</span>
              <span class="h-px w-12 bg-slate-200"></span>
            </div>
          </div>
          
          <!-- Expertise Grid -->
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            @for (item of expertiseItems(); track item.slug) {
              <a [routerLink]="['/services', item.slug]" 
                 class="group flex flex-col bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl border border-slate-100 hover:border-teal-500/30 transition-all duration-300 hover:-translate-y-1">
                
                <!-- Image Container -->
                <div class="relative h-48 w-full overflow-hidden bg-slate-200">
                  <img [src]="item.image" [alt]="item.title" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105">
                  <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60 group-hover:opacity-40 transition-opacity"></div>
                  <div class="absolute bottom-4 left-4 right-4">
                    <h3 class="text-white text-xl font-bold drop-shadow-md">{{ item.title }}</h3>
                  </div>
                </div>
                
                <!-- Content -->
                <div class="p-6 flex flex-col flex-grow">
                  <p class="text-slate-500 text-sm leading-relaxed mb-6 flex-grow">
                    {{ item.description }}
                  </p>

                  <div class="mt-auto flex items-center text-teal-600 font-bold text-sm uppercase tracking-wide">
                    View Details
                    <svg class="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </a>
            }
          </div>
        </div>
      </section>

      <!-- General Dentistry & Process -->
      <section class="py-20 bg-slate-900 text-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 class="text-3xl md:text-4xl font-serif mb-6">General Dentistry &<br>Preventative Care</h2>
              <p class="text-slate-400 text-lg mb-8 leading-relaxed">
                Foundation is everything. Our preventative program is designed to stop problems before they start, ensuring your smile lasts a lifetime.
              </p>
              
              <ul class="space-y-6">
                <li class="flex items-start">
                  <div class="flex-shrink-0 w-8 h-8 rounded-full bg-teal-500/20 flex items-center justify-center text-teal-400 mt-1">✓</div>
                  <div class="ml-4">
                    <h3 class="text-xl font-bold">Comprehensive Exams</h3>
                    <p class="text-slate-400 text-sm mt-1">Digital x-rays, oral cancer screening, and gum health evaluation.</p>
                  </div>
                </li>
                <li class="flex items-start">
                  <div class="flex-shrink-0 w-8 h-8 rounded-full bg-teal-500/20 flex items-center justify-center text-teal-400 mt-1">✓</div>
                  <div class="ml-4">
                    <h3 class="text-xl font-bold">Hygiene & Cleaning</h3>
                    <p class="text-slate-400 text-sm mt-1">Gentle ultrasonic cleaning to remove plaque and tartar build-up.</p>
                  </div>
                </li>
                <li class="flex items-start">
                  <div class="flex-shrink-0 w-8 h-8 rounded-full bg-teal-500/20 flex items-center justify-center text-teal-400 mt-1">✓</div>
                  <div class="ml-4">
                    <h3 class="text-xl font-bold">Emergency Care</h3>
                    <p class="text-slate-400 text-sm mt-1">Same-day appointments for pain relief and urgent repairs.</p>
                  </div>
                </li>
              </ul>
            </div>
            
            <div class="relative hidden lg:block">
              <div class="absolute inset-0 bg-teal-500 rounded-3xl transform rotate-3 opacity-20"></div>
              <img src="https://picsum.photos/seed/dentalhygiene/800/600" class="relative rounded-3xl shadow-2xl w-full" alt="Dental Hygiene">
            </div>
          </div>
        </div>
      </section>

      <!-- CTA -->
      <section class="py-20 bg-teal-50">
        <div class="max-w-4xl mx-auto text-center px-4">
          <h2 class="text-3xl font-serif text-slate-900 mb-6">Ready to prioritize your health?</h2>
          <p class="text-slate-600 text-lg mb-8">Book your consultation today and experience the difference.</p>
          <a routerLink="/contact" class="inline-block bg-slate-900 text-white px-8 py-4 rounded-full font-bold hover:bg-teal-700 transition-colors shadow-lg hover:shadow-xl hover:-translate-y-1 transform duration-200">
            Schedule Appointment
          </a>
        </div>
      </section>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ServicesComponent implements OnInit {
  private title: Title = inject(Title);
  private meta: Meta = inject(Meta);

  expertiseItems = signal<ServiceItem[]>([
    {
      title: 'Oral Examination & Investigation',
      slug: 'oral-examination',
      description: 'Detailed check-ups using digital X-rays and diagnostic aids.',
      image: 'https://picsum.photos/seed/oralexam/600/400'
    },
    {
      title: 'Cleaning and Polishing',
      slug: 'cleaning-and-polishing',
      description: 'Remove surface stains and tartar with professional scaling and polishing for a healthier, smoother smile.',
      image: 'https://picsum.photos/seed/cleaning/600/400'
    },
    {
      title: 'Fillings & Restorations',
      slug: 'fillings-and-restorations',
      description: 'Restore damaged teeth to their original shape and function using durable materials that match your natural smile.',
      image: 'https://picsum.photos/seed/fillings/600/400'
    },
    {
      title: 'Extraction and Minor Surgery',
      slug: 'extraction-and-minor-surgery',
      description: 'Expert oral surgery for painless tooth extractions, wisdom teeth removal, and cyst treatment with minimal recovery time.',
      image: 'https://picsum.photos/seed/extraction/600/400'
    },
    {
      title: 'TMJ Disorder',
      slug: 'tmj-disorder',
      description: 'Relieve jaw pain, clicking, and locking with personalized care for Temporomandibular Joint (TMJ) disorders.',
      image: 'https://picsum.photos/seed/tmj/600/400'
    },
    { 
      title: 'Veneers', 
      slug: 'veneers', 
      description: 'Custom-crafted shells for a flawless smile appearance.', 
      image: 'https://picsum.photos/seed/veneers/600/400' 
    },
    { 
      title: 'Invisalign', 
      slug: 'invisalign', 
      description: 'Clear aligners for discreet and comfortable straightening.', 
      image: 'https://picsum.photos/seed/invisalign/600/400' 
    },
    { 
      title: 'Same-Day Crowns', 
      slug: 'same-day-crowns', 
      description: 'Restorations ready in a single visit with CEREC tech.', 
      image: 'https://picsum.photos/seed/crowns/600/400' 
    },
    { 
      title: 'Dental Implants', 
      slug: 'dental-implants', 
      description: 'Permanent, natural-looking replacements for missing teeth.', 
      image: 'https://picsum.photos/seed/implants/600/400' 
    },
    { 
      title: 'Teeth Whitening', 
      slug: 'teeth-whitening', 
      description: 'Professional treatment for brighter, whiter teeth.', 
      image: 'https://picsum.photos/seed/whitening/600/400' 
    },
    {
      title: 'Dental Bleaching',
      slug: 'dental-bleaching',
      description: 'Professional in-office whitening procedure to safely brighten your teeth by several shades.',
      image: 'https://picsum.photos/seed/bleaching/600/400'
    },
    { 
      title: 'Root Canals', 
      slug: 'root-canals', 
      description: 'Pain-free therapy to save infected natural teeth.', 
      image: 'https://picsum.photos/seed/rootcanal/600/400' 
    },
    { 
      title: 'Preventive Care', 
      slug: 'preventive-care', 
      description: 'Routine cleanings and exams to stop problems early.', 
      image: 'https://picsum.photos/seed/preventive/600/400' 
    },
    { 
      title: 'Full Mouth Rehab', 
      slug: 'full-mouth-rehab', 
      description: 'Complete restoration of function and aesthetics.', 
      image: 'https://picsum.photos/seed/rehab/600/400' 
    },
    {
      title: 'Cosmetic Restoration',
      slug: 'cosmetic-restoration',
      description: 'Enhance your smile with tooth-colored fillings and aesthetic treatments that look just like natural teeth.',
      image: 'https://picsum.photos/seed/cosmeticrestoration/600/400'
    },
    {
      title: 'Crowns and Bridge',
      slug: 'crowns-and-bridge',
      description: 'Restore damaged or missing teeth with durable caps and bridges made from metal, ceramic, or zirconia for a natural look.',
      image: 'https://picsum.photos/seed/crownsbridge/600/400'
    }
  ]);

  ngOnInit() {
    this.title.setTitle('Dental Services | White Crest Dental');
    this.meta.updateTag({ name: 'description', content: 'Explore our comprehensive dental services including Oral Exams, Invisalign, Veneers, Dental Implants, and Emergency Care.' });
  }
}
