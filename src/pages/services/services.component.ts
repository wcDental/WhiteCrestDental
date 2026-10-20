import { Component, ChangeDetectionStrategy, signal, computed, inject, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Title, Meta } from '@angular/platform-browser';
import { SERVICES_LIST, ServiceItem } from './services.data';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [RouterLink, CommonModule, FormsModule],
  template: `
    <div class="bg-white font-sans">
      <!-- Merged Hero & Expertise Section -->
      <section class="py-16 md:py-24 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <!-- Unified Header -->
          <div class="text-center max-w-4xl mx-auto mb-12">
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

          <!-- Search Section (Matching Gallery Style) -->
          <div class="max-w-xl mx-auto mb-16 relative">
            <div class="relative group">
              <div class="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <svg class="h-5 w-5 text-slate-400 group-focus-within:text-teal-600 transition-colors" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd" />
                </svg>
              </div>
              <input 
                type="text" 
                [value]="searchQuery()"
                (input)="onSearch($event)"
                class="block w-full pl-11 pr-11 py-4 border-2 border-slate-200 rounded-full leading-5 bg-white placeholder-slate-400 focus:outline-none focus:border-teal-500 focus:ring-4 focus:ring-teal-500/10 transition-all shadow-sm text-slate-900"
                placeholder="Search treatments (e.g., 'Veneers', 'Implants', 'Root Canal')..."
              >
              @if (searchQuery()) {
                <button 
                  (click)="clearSearch()"
                  aria-label="Clear search"
                  class="absolute inset-y-0 right-0 pr-4 flex items-center text-slate-400 hover:text-slate-600 transition-colors">
                  <svg class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd" />
                  </svg>
                </button>
              }
            </div>
          </div>
          
          <!-- Expertise Grid -->
          @if (filteredServices().length > 0) {
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              @for (item of filteredServices(); track item.slug) {
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
          } @else {
            <!-- Empty State -->
            <div class="text-center py-20 bg-slate-50 rounded-3xl border border-dashed border-slate-300 max-w-xl mx-auto">
              <div class="text-5xl mb-4">🔍</div>
              <h3 class="text-lg font-medium text-slate-900">No services found</h3>
              <p class="text-slate-500 mt-1">Try adjusting your search terms or view all services.</p>
              <button (click)="clearSearch()" class="mt-4 text-teal-600 font-semibold hover:text-teal-800 transition-colors">
                Clear search
              </button>
            </div>
          }
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

  searchQuery = signal('');
  allServices = signal<ServiceItem[]>(SERVICES_LIST);

  filteredServices = computed(() => {
    const query = this.searchQuery().toLowerCase().trim();
    const services = this.allServices();

    if (!query) return services;

    return services.filter(service =>
      service.title.toLowerCase().includes(query) ||
      service.description.toLowerCase().includes(query) ||
      service.slug.toLowerCase().includes(query)
    );
  });

  ngOnInit() {
    this.title.setTitle('Dental Services | White Crest Dental');
    this.meta.updateTag({ name: 'description', content: 'Explore our comprehensive dental services including Oral Exams, Invisalign, Veneers, Dental Implants, and Emergency Care.' });
  }

  onSearch(event: Event) {
    const input = event.target as HTMLInputElement;
    this.searchQuery.set(input.value);
  }

  clearSearch() {
    this.searchQuery.set('');
  }
}
