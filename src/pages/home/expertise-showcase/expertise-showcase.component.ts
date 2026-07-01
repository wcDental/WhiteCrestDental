import { Component, ChangeDetectionStrategy, signal } from '@angular/core';
import { RouterLink } from '@angular/router';

interface ExpertiseItem {
  title: string;
  slug: string;
  description: string;
}

@Component({
  selector: 'app-expertise-showcase',
  standalone: true,
  imports: [RouterLink],
  template: `
    <section class="py-24 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center max-w-3xl mx-auto mb-16">
          <span class="text-teal-600 font-bold tracking-wider uppercase text-sm mb-2 block">Our Expertise</span>
          <h2 class="text-4xl md:text-5xl font-serif text-slate-900 mb-6">Comprehensive Dental Solutions</h2>
          <p class="text-slate-500 text-lg leading-relaxed">
            From routine maintenance to complex restoration, our specialists are equipped with the skills and technology to handle all your dental needs under one roof.
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
                {{ item.title }}
              </h3>
              
              <p class="text-slate-500 text-sm leading-relaxed group-hover:text-slate-300 transition-colors mb-4">
                {{ item.description }}
              </p>

              <div class="mt-auto flex items-center text-teal-600 font-medium text-sm group-hover:text-teal-400">
                Learn More
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
  expertiseItems = signal<ExpertiseItem[]>([
    { title: 'Veneers', slug: 'veneers', description: 'Custom-crafted shells for a flawless smile appearance.' },
    { title: 'Invisalign', slug: 'invisalign', description: 'Clear aligners for discreet and comfortable straightening.' },
    { title: 'Same-Day Crowns', slug: 'same-day-crowns', description: 'Restorations ready in a single visit with CEREC tech.' },
    { title: 'Dental Implants', slug: 'dental-implants', description: 'Permanent, natural-looking replacements for missing teeth.' },
    { title: 'Teeth Whitening', slug: 'teeth-whitening', description: 'Professional treatment for brighter, whiter teeth.' },
    { title: 'Root Canals', slug: 'root-canals', description: 'Pain-free therapy to save infected natural teeth.' },
    { title: 'Preventive Care', slug: 'preventive-care', description: 'Routine cleanings and exams to stop problems early.' },
    { title: 'Full Mouth Rehab', slug: 'full-mouth-rehab', description: 'Complete restoration of function and aesthetics.' }
  ]);
}