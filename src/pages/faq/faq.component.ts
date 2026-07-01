
import { Component, ChangeDetectionStrategy, signal, computed, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Title, Meta } from '@angular/platform-browser';
import { RouterLink } from '@angular/router';

interface FaqItem {
  id: number;
  question: string;
  answer: string;
  isOpen: boolean;
}

@Component({
  selector: 'app-faq',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  template: `
    <div class="min-h-screen bg-slate-50 py-16 sm:py-24">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <!-- Header -->
        <div class="text-center mb-16">
          <span class="text-teal-600 font-bold tracking-wider uppercase text-sm mb-2 block">Common Questions</span>
          <h1 class="text-4xl md:text-5xl font-serif text-slate-900 mb-6">Frequently Asked Questions</h1>
          <p class="text-xl text-slate-500 max-w-2xl mx-auto">
            Find answers to common questions about our dental treatments, appointments, and care.
          </p>
        </div>

        <!-- Search Bar -->
        <div class="mb-12 relative max-w-2xl mx-auto">
          <div class="relative">
            <div class="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <svg class="h-6 w-6 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <input 
              type="text" 
              [ngModel]="searchQuery()" 
              (ngModelChange)="searchQuery.set($event)"
              placeholder="Search for answers (e.g. 'root canal', 'insurance')..." 
              class="w-full pl-12 pr-4 py-4 rounded-2xl border-2 border-slate-200 focus:border-teal-500 focus:ring-4 focus:ring-teal-500/10 shadow-sm text-lg placeholder-slate-400 transition-all outline-none"
            >
          </div>
        </div>

        <!-- FAQ List -->
        <div class="space-y-4">
          @if (filteredFaqs().length === 0) {
            <div class="text-center py-12 bg-white rounded-2xl border border-dashed border-slate-300">
              <p class="text-slate-500 text-lg">No matching questions found.</p>
              <button (click)="searchQuery.set('')" class="mt-2 text-teal-600 font-bold hover:underline">Clear Search</button>
            </div>
          }

          @for (faq of filteredFaqs(); track faq.id) {
            <div class="bg-white rounded-2xl border border-slate-200 overflow-hidden transition-all duration-300 hover:shadow-md"
                 [class.ring-2]="faq.isOpen" [class.ring-teal-500]="faq.isOpen" [class.ring-opacity-50]="faq.isOpen">
              
              <button (click)="toggleFaq(faq.id)" class="w-full px-6 py-5 text-left flex justify-between items-center focus:outline-none">
                <span class="text-lg font-bold text-slate-900 pr-8">{{ faq.question }}</span>
                <span class="flex-shrink-0 w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center text-teal-600 transition-transform duration-300"
                      [class.rotate-180]="faq.isOpen"
                      [class.bg-teal-50]="!faq.isOpen"
                      [class.bg-teal-600]="faq.isOpen"
                      [class.text-white]="faq.isOpen">
                  <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </button>
              
              <div class="px-6 pb-6 text-slate-600 leading-relaxed overflow-hidden transition-all duration-300 ease-in-out"
                   [class.max-h-0]="!faq.isOpen"
                   [class.opacity-0]="!faq.isOpen"
                   [class.max-h-96]="faq.isOpen"
                   [class.opacity-100]="faq.isOpen">
                <div class="pt-2 border-t border-slate-100">
                  {{ faq.answer }}
                </div>
              </div>
            </div>
          }
        </div>

        <!-- Still have questions? -->
        <div class="mt-16 text-center bg-teal-50 rounded-3xl p-8 md:p-12">
          <h3 class="text-2xl font-serif text-slate-900 mb-4">Still have questions?</h3>
          <p class="text-slate-600 mb-8 max-w-xl mx-auto">Can't find the answer you're looking for? Please contact our friendly team.</p>
          <a routerLink="/contact" class="inline-block bg-teal-600 text-white font-bold py-3 px-8 rounded-full shadow-lg shadow-teal-500/30 hover:bg-teal-700 hover:-translate-y-1 transition-all">
            Contact Us
          </a>
        </div>
      </div>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FaqComponent implements OnInit {
  private title: Title = inject(Title);
  private meta: Meta = inject(Meta);
  
  searchQuery = signal('');

  // Initial FAQ Data
  faqs = signal<FaqItem[]>([
    { id: 1, question: "Is dental treatment painful?", answer: "No. Most treatments are painless due to modern techniques and local anesthesia.", isOpen: false },
    { id: 2, question: "How often should I visit the dentist?", answer: "Every 6 months for routine check-ups and cleaning.", isOpen: false },
    { id: 3, question: "What causes tooth decay?", answer: "Poor oral hygiene, sugary foods, and bacteria cause tooth decay.", isOpen: false },
    { id: 4, question: "Are dental X-rays safe?", answer: "Yes. They use very low radiation and are completely safe when required.", isOpen: false },
    { id: 5, question: "What is a root canal treatment?", answer: "It is a procedure to remove infected pulp and save a damaged tooth.", isOpen: false },
    { id: 6, question: "How many sittings are needed for a root canal?", answer: "Usually 1–2 sittings, depending on the infection.", isOpen: false },
    { id: 7, question: "Is tooth extraction painful?", answer: "No. It is done under local anesthesia for a pain-free experience.", isOpen: false },
    { id: 8, question: "How long does a dental cleaning take?", answer: "Around 30–45 minutes.", isOpen: false },
    { id: 9, question: "Do you treat children?", answer: "Yes. We provide gentle dental care for children of all ages.", isOpen: false },
    { id: 10, question: "What should I do in a dental emergency?", answer: "Contact the clinic immediately for urgent care.", isOpen: false },
    { id: 11, question: "How long do dental implants last?", answer: "With proper care, implants can last many years or a lifetime.", isOpen: false },
    { id: 12, question: "Is teeth whitening safe?", answer: "Yes, when performed by a dentist, it is safe and effective.", isOpen: false },
    { id: 13, question: "Do you accept dental insurance?", answer: "Yes, we accept most major dental insurance plans.", isOpen: false },
    { id: 14, question: "Is EMI facility available?", answer: "Yes, EMI options may be available for major treatments.", isOpen: false },
    { id: 15, question: "How long does numbness last after treatment?", answer: "Usually 2–3 hours.", isOpen: false },
    { id: 16, question: "Are your instruments sterilized?", answer: "Yes. Strict sterilization and hygiene protocols are followed.", isOpen: false },
    { id: 17, question: "When should a child first visit the dentist?", answer: "By the age of 1 year or when the first tooth appears.", isOpen: false },
    { id: 18, question: "Can adults get braces?", answer: "Yes. Orthodontic treatment is effective at any age.", isOpen: false },
    { id: 19, question: "How can I maintain good oral health?", answer: "Brush twice daily, floss regularly, and visit the dentist routinely.", isOpen: false },
    { id: 20, question: "How can I book an appointment?", answer: "You can call us, WhatsApp us, or book online through our website.", isOpen: false },
  ]);

  // Derived state for search filtering
  filteredFaqs = computed(() => {
    const query = this.searchQuery().toLowerCase().trim();
    return this.faqs().filter(item => 
      item.question.toLowerCase().includes(query) || 
      item.answer.toLowerCase().includes(query)
    );
  });

  ngOnInit() {
    this.title.setTitle('Frequently Asked Questions | White Crest Dental');
    this.meta.updateTag({ name: 'description', content: 'Find answers to common questions about dental procedures, costs, and safety at White Crest Dental.' });
  }

  toggleFaq(id: number) {
    this.faqs.update(items => 
      items.map(item => 
        item.id === id ? { ...item, isOpen: !item.isOpen } : { ...item, isOpen: false } // Close others when one opens (optional accordion style)
      )
    );
  }
}
