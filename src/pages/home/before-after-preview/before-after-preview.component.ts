import { Component, ChangeDetectionStrategy, signal } from '@angular/core';
import { RouterLink } from '@angular/router';

interface Transformation {
  id: string;
  title: string;
  category: string;
  description: string;
  imgBefore: string;
  imgAfter: string;
}

@Component({
  selector: 'app-before-after-preview',
  standalone: true,
  imports: [RouterLink],
  template: `
    <section class="py-20 bg-slate-50 border-t border-slate-200">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <!-- Section Header -->
        <div class="text-center mb-12">
          <h2 class="text-3xl md:text-4xl font-serif text-slate-900 mb-4">Real Patients, Real Smiles</h2>
          <p class="text-slate-500 max-w-2xl mx-auto text-lg">
            See the life-changing results of our cosmetic and restorative treatments.
          </p>
        </div>

        <!-- Transformations Grid -->
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-12">
          @for (item of cases(); track item.id) {
            <div class="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden group hover:shadow-md transition-all duration-300">
              <!-- Split Image View -->
              <div class="relative h-64 md:h-72 w-full flex">
                <!-- Before Side -->
                <div class="w-1/2 relative overflow-hidden border-r border-white">
                   <img [src]="item.imgBefore" class="w-full h-full object-cover" alt="Before treatment">
                   <div class="absolute top-3 left-3 bg-slate-900/80 text-white text-xs font-bold px-2 py-1 rounded backdrop-blur-sm">
                     BEFORE
                   </div>
                </div>
                <!-- After Side -->
                <div class="w-1/2 relative overflow-hidden">
                   <img [src]="item.imgAfter" class="w-full h-full object-cover" alt="After treatment">
                   <div class="absolute top-3 right-3 bg-teal-600/90 text-white text-xs font-bold px-2 py-1 rounded backdrop-blur-sm shadow-sm">
                     AFTER
                   </div>
                </div>
              </div>
              
              <!-- Content -->
              <div class="p-6">
                <div class="flex items-center justify-between mb-2">
                  <h3 class="text-xl font-bold text-slate-900">{{ item.title }}</h3>
                  <span class="text-xs font-medium text-teal-600 bg-teal-50 px-2 py-1 rounded-full uppercase tracking-wide">
                    {{ item.category }}
                  </span>
                </div>
                <p class="text-slate-500 text-sm leading-relaxed">
                  {{ item.description }}
                </p>
              </div>
            </div>
          }
        </div>

        <!-- CTA -->
        <div class="text-center">
          <a routerLink="/gallery" class="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-full text-white bg-slate-900 hover:bg-teal-600 transition-colors duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5 transform">
            View Full Smile Gallery
            <svg class="ml-2 -mr-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BeforeAfterPreviewComponent {
  cases = signal<Transformation[]>([
    {
      id: '1',
      title: 'Porcelain Veneers',
      category: 'Cosmetic',
      description: 'A complete smile makeover correcting discoloration and spacing issues for a bright, uniform look.',
      // Using specific picsum seeds to ensure distinct but consistent imagery
      imgBefore: 'https://picsum.photos/seed/teethbefore1/400/300', 
      imgAfter: 'https://picsum.photos/seed/teethafter1/400/300'
    },
    {
      id: '2',
      title: 'Professional Whitening',
      category: 'Whitening',
      description: 'One hour in-office whitening session lifting the shade by 5 levels for a radiant natural smile.',
      imgBefore: 'https://picsum.photos/seed/teethbefore2/400/300',
      imgAfter: 'https://picsum.photos/seed/teethafter2/400/300'
    }
  ]);
}