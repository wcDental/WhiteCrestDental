
import { Component, ChangeDetectionStrategy, signal, computed, inject, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Title, Meta } from '@angular/platform-browser';

interface GalleryItem {
  id: string;
  title: string;
  category: string;
  description: string;
  imgBefore: string;
  imgAfter: string;
}

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [RouterLink, CommonModule, FormsModule],
  template: `
    <div class="min-h-screen bg-slate-50 py-16 sm:py-24">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <!-- Header Section -->
        <div class="text-center max-w-3xl mx-auto mb-12">
          <h1 class="text-4xl md:text-5xl font-serif text-slate-900 mb-6">Smile Transformations Gallery</h1>
          <p class="text-xl text-slate-500 leading-relaxed">
            Browse our collection of real patient stories. Witness the life-changing power of modern dentistry.
          </p>
        </div>

        <!-- Search Section -->
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
              class="block w-full pl-11 pr-4 py-4 border-2 border-slate-200 rounded-full leading-5 bg-white placeholder-slate-400 focus:outline-none focus:border-teal-500 focus:ring-4 focus:ring-teal-500/10 transition-all shadow-sm text-slate-900"
              placeholder="Search treatments (e.g., 'Veneers', 'Implants', 'Whitening')..."
            >
          </div>
        </div>

        <!-- Gallery Grid -->
        @if (filteredItems().length > 0) {
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            @for (item of filteredItems(); track item.id) {
              <div class="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group">
                
                <!-- Before/After Images Split -->
                <div class="relative h-64 flex w-full">
                  <!-- Before -->
                  <div class="w-1/2 relative overflow-hidden border-r border-white">
                    <img [src]="item.imgBefore" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" [alt]="'Before ' + item.title">
                    <div class="absolute top-3 left-3 bg-slate-900/80 text-white text-[10px] font-bold px-2 py-1 rounded backdrop-blur-sm tracking-wider">
                      BEFORE
                    </div>
                  </div>
                  <!-- After -->
                  <div class="w-1/2 relative overflow-hidden">
                    <img [src]="item.imgAfter" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" [alt]="'After ' + item.title">
                    <div class="absolute top-3 right-3 bg-teal-600/90 text-white text-[10px] font-bold px-2 py-1 rounded backdrop-blur-sm shadow-sm tracking-wider">
                      AFTER
                    </div>
                  </div>
                </div>

                <!-- Content -->
                <div class="p-6">
                  <div class="flex items-center justify-between mb-3">
                    <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-teal-50 text-teal-700">
                      {{ item.category }}
                    </span>
                  </div>
                  <h3 class="text-xl font-bold text-slate-900 mb-2 group-hover:text-teal-600 transition-colors">
                    {{ item.title }}
                  </h3>
                  <p class="text-slate-500 text-sm leading-relaxed">
                    {{ item.description }}
                  </p>
                </div>
              </div>
            }
          </div>
        } @else {
          <!-- Empty State -->
          <div class="text-center py-20 bg-white rounded-3xl border border-dashed border-slate-300">
            <div class="text-5xl mb-4">🔍</div>
            <h3 class="text-lg font-medium text-slate-900">No results found</h3>
            <p class="text-slate-500 mt-1">Try adjusting your search terms.</p>
            <button (click)="clearSearch()" class="mt-4 text-teal-600 font-medium hover:text-teal-800">
              Clear search
            </button>
          </div>
        }

        <!-- Back Link -->
        <div class="mt-16 text-center">
          <a routerLink="/" class="text-slate-500 hover:text-slate-900 font-medium inline-flex items-center transition-colors">
            <svg class="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Home
          </a>
        </div>

      </div>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GalleryComponent implements OnInit {
  private title: Title = inject(Title);
  private meta: Meta = inject(Meta);
  searchQuery = signal('');

  // Mock Data
  allItems = signal<GalleryItem[]>([
    {
      id: '1',
      title: 'Porcelain Veneers Makeover',
      category: 'Cosmetic',
      description: 'Corrected severe discoloration and spacing issues with 8 upper veneers.',
      imgBefore: 'https://picsum.photos/seed/veneer_before/400/300',
      imgAfter: 'https://picsum.photos/seed/veneer_after/400/300'
    },
    {
      id: '2',
      title: 'Full Arch Restoration',
      category: 'Implants',
      description: 'Replaced missing teeth with a fixed implant-supported bridge.',
      imgBefore: 'https://picsum.photos/seed/implant_before/400/300',
      imgAfter: 'https://picsum.photos/seed/implant_after/400/300'
    },
    {
      id: '3',
      title: 'Invisalign Treatment',
      category: 'Orthodontics',
      description: '12-month treatment to correct crowding and improve bite alignment.',
      imgBefore: 'https://picsum.photos/seed/ortho_before/400/300',
      imgAfter: 'https://picsum.photos/seed/ortho_after/400/300'
    },
    {
      id: '4',
      title: 'Zoom! Whitening',
      category: 'Whitening',
      description: 'One-hour in-office session achieved 6 shades lighter.',
      imgBefore: 'https://picsum.photos/seed/white_before/400/300',
      imgAfter: 'https://picsum.photos/seed/white_after/400/300'
    },
    {
      id: '5',
      title: 'Dental Bonding',
      category: 'Cosmetic',
      description: 'Repaired chipped front incisor with composite bonding.',
      imgBefore: 'https://picsum.photos/seed/bond_before/400/300',
      imgAfter: 'https://picsum.photos/seed/bond_after/400/300'
    },
    {
      id: '6',
      title: 'Ceramic Crown',
      category: 'Restorative',
      description: 'Replaced an old metal filling with a natural-looking ceramic crown.',
      imgBefore: 'https://picsum.photos/seed/crown_before/400/300',
      imgAfter: 'https://picsum.photos/seed/crown_after/400/300'
    }
  ]);

  filteredItems = computed(() => {
    const query = this.searchQuery().toLowerCase().trim();
    const items = this.allItems();
    
    if (!query) return items;

    return items.filter(item => 
      item.title.toLowerCase().includes(query) || 
      item.category.toLowerCase().includes(query) ||
      item.description.toLowerCase().includes(query)
    );
  });

  ngOnInit() {
    this.title.setTitle('Smile Gallery | Before & After | White Crest Dental');
    this.meta.updateTag({ name: 'description', content: 'See real patient transformations. View before and after photos of veneers, implants, and whitening.' });
  }

  onSearch(event: Event) {
    const input = event.target as HTMLInputElement;
    this.searchQuery.set(input.value);
  }

  clearSearch() {
    this.searchQuery.set('');
  }
}
