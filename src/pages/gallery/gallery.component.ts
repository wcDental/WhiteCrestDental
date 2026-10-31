
import { Component, ChangeDetectionStrategy, signal, computed, inject, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Title, Meta } from '@angular/platform-browser';
import { LanguageService } from '../../services/language.service';

interface GalleryItem {
  id: string;
  title: string;
  titleHi?: string;
  category: string;
  categoryHi?: string;
  description: string;
  descriptionHi?: string;
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
          <h1 class="text-4xl md:text-5xl font-serif text-slate-900 mb-6 flex items-center justify-center flex-wrap gap-3 md:gap-4">
            <span>{{ langService.t('galleryTitle') }}</span>
            <span class="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-sm md:text-lg font-sans font-extrabold bg-teal-50 text-teal-700 border border-teal-200/90 shadow-xs tracking-tight align-middle">
              <span class="w-2 h-2 rounded-full bg-teal-500 animate-pulse"></span>
              <span>{{ galleryCount() }}</span>
            </span>
          </h1>
          <p class="text-xl text-slate-500 leading-relaxed">
            {{ langService.t('gallerySub') }}
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
              [placeholder]="langService.t('searchGalleryPlaceholder')"
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
                      {{ langService.t('before') }}
                    </div>
                  </div>
                  <!-- After -->
                  <div class="w-1/2 relative overflow-hidden">
                    <img [src]="item.imgAfter" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" [alt]="'After ' + item.title">
                    <div class="absolute top-3 right-3 bg-teal-600/90 text-white text-[10px] font-bold px-2 py-1 rounded backdrop-blur-sm shadow-sm tracking-wider">
                      {{ langService.t('after') }}
                    </div>
                  </div>
                </div>

                <!-- Content -->
                <div class="p-6">
                  <div class="flex items-center justify-between mb-3">
                    <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-teal-50 text-teal-700">
                      {{ langService.isHindi() && item.categoryHi ? item.categoryHi : item.category }}
                    </span>
                  </div>
                  <h3 class="text-xl font-bold text-slate-900 mb-2 group-hover:text-teal-600 transition-colors">
                    {{ langService.isHindi() && item.titleHi ? item.titleHi : item.title }}
                  </h3>
                  <p class="text-slate-500 text-sm leading-relaxed">
                    {{ langService.isHindi() && item.descriptionHi ? item.descriptionHi : item.description }}
                  </p>
                </div>
              </div>
            }
          </div>
        } @else {
          <!-- Empty State -->
          <div class="text-center py-20 bg-white rounded-3xl border border-dashed border-slate-300">
            <div class="text-5xl mb-4">🔍</div>
            <h3 class="text-lg font-medium text-slate-900">{{ langService.t('noServicesFound') }}</h3>
            <p class="text-slate-500 mt-1">{{ langService.t('adjustSearch') }}</p>
            <button (click)="clearSearch()" class="mt-4 text-teal-600 font-medium hover:text-teal-800">
              {{ langService.t('clearSearch') }}
            </button>
          </div>
        }

        <!-- Back Link -->
        <div class="mt-16 text-center">
          <a routerLink="/" class="text-slate-500 hover:text-slate-900 font-medium inline-flex items-center transition-colors">
            <svg class="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            {{ langService.isHindi() ? '← होम पर वापस जाएं' : 'Back to Home' }}
          </a>
        </div>

      </div>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GalleryComponent implements OnInit {
  langService = inject(LanguageService);
  private title: Title = inject(Title);
  private meta: Meta = inject(Meta);
  searchQuery = signal('');

  // Mock Data
  allItems = signal<GalleryItem[]>([
    {
      id: '1',
      title: 'Porcelain Veneers Makeover',
      titleHi: 'पोर्सिलेन विनियर मेकओवर (Porcelain Veneers)',
      category: 'Cosmetic',
      categoryHi: 'कॉस्मेटिक (Cosmetic)',
      description: 'Corrected severe discoloration and spacing issues with 8 upper veneers.',
      descriptionHi: '8 ऊपरी विनियर की मदद से दांतों के गंभीर दाग-धब्बे और बीच के खाली स्थान (spacing) को ठीक किया गया।',
      imgBefore: 'https://picsum.photos/seed/veneer_before/400/300',
      imgAfter: 'https://picsum.photos/seed/veneer_after/400/300'
    },
    {
      id: '2',
      title: 'Full Arch Restoration',
      titleHi: 'फुल आर्च रेस्टोरेशन (Full Arch Implants)',
      category: 'Implants',
      categoryHi: 'इम्प्लांट्स (Implants)',
      description: 'Replaced missing teeth with a fixed implant-supported bridge.',
      descriptionHi: 'खोए हुए दांतों की जगह फिक्स्ड इम्प्लांट-सपोर्टेड ब्रिज लगाकर स्वाभाविक मुस्कान और चबाने की क्षमता लौटाई।',
      imgBefore: 'https://picsum.photos/seed/implant_before/400/300',
      imgAfter: 'https://picsum.photos/seed/implant_after/400/300'
    },
    {
      id: '3',
      title: 'Invisalign Treatment',
      titleHi: 'इनविज़िलाइन अलाइनर उपचार (Invisalign)',
      category: 'Orthodontics',
      categoryHi: 'ऑर्थोडॉन्टिक्स (Orthodontics)',
      description: '12-month treatment to correct crowding and improve bite alignment.',
      descriptionHi: '12 महीने के पारदर्शी अलाइनर उपचार से टेढ़े-मेढ़े दांतों को सीधा किया और सही बाइट हासिल की।',
      imgBefore: 'https://picsum.photos/seed/ortho_before/400/300',
      imgAfter: 'https://picsum.photos/seed/ortho_after/400/300'
    },
    {
      id: '4',
      title: 'Zoom! Whitening',
      titleHi: 'ज़ूम! टीथ व्हाइटनिंग (Zoom! Whitening)',
      category: 'Whitening',
      categoryHi: 'व्हाइटनिंग (Whitening)',
      description: 'One-hour in-office session achieved 6 shades lighter.',
      descriptionHi: 'केवल एक घंटे के क्लिनिकल सेशन में दांत 6 शेड अधिक चमकदार और सफेद बने।',
      imgBefore: 'https://picsum.photos/seed/white_before/400/300',
      imgAfter: 'https://picsum.photos/seed/white_after/400/300'
    },
    {
      id: '5',
      title: 'Dental Bonding',
      titleHi: 'डेंटल बॉन्डिंग (Dental Bonding)',
      category: 'Cosmetic',
      categoryHi: 'कॉस्मेटिक (Cosmetic)',
      description: 'Repaired chipped front incisor with composite bonding.',
      descriptionHi: 'सामने के टूटे/चटके हुए दांत की कम्पोजिट बॉन्डिंग से सटीक और प्राकृतिक मरम्मत की गई।',
      imgBefore: 'https://picsum.photos/seed/bond_before/400/300',
      imgAfter: 'https://picsum.photos/seed/bond_after/400/300'
    },
    {
      id: '6',
      title: 'Ceramic Crown',
      titleHi: 'सिरेमिक क्राउन (Ceramic Crown)',
      category: 'Restorative',
      categoryHi: 'रेस्टोरेटिव (Restorative)',
      description: 'Replaced an old metal filling with a natural-looking ceramic crown.',
      descriptionHi: 'पुरानी मेटल फिलिंग को हटाकर मजबूत और प्राकृतिक दिखने वाले सिरेमिक कैप/क्राउन से सुरक्षित किया।',
      imgBefore: 'https://picsum.photos/seed/crown_before/400/300',
      imgAfter: 'https://picsum.photos/seed/crown_after/400/300'
    }
  ]);

  galleryCount = computed(() => {
    const count = Math.max(1, this.allItems().length - 1);
    return `${count}+`;
  });

  filteredItems = computed(() => {
    const query = this.searchQuery().toLowerCase().trim();
    const items = this.allItems();
    
    if (!query) return items;

    return items.filter(item => 
      item.title.toLowerCase().includes(query) || 
      (item.titleHi && item.titleHi.toLowerCase().includes(query)) ||
      item.category.toLowerCase().includes(query) ||
      (item.categoryHi && item.categoryHi.toLowerCase().includes(query)) ||
      item.description.toLowerCase().includes(query) ||
      (item.descriptionHi && item.descriptionHi.toLowerCase().includes(query))
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
