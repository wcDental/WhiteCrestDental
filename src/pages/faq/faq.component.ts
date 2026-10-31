
import { Component, ChangeDetectionStrategy, signal, computed, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Title, Meta } from '@angular/platform-browser';
import { RouterLink } from '@angular/router';
import { LanguageService } from '../../services/language.service';

interface FaqItem {
  id: number;
  question: string;
  questionHi?: string;
  answer: string;
  answerHi?: string;
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
          <span class="text-teal-600 font-bold tracking-wider uppercase text-sm mb-2 block">
            {{ langService.t('commonQuestions') }}
          </span>
          <h1 class="text-4xl md:text-5xl font-serif text-slate-900 mb-6">
            {{ langService.t('faqTitle') }}
          </h1>
          <p class="text-xl text-slate-500 max-w-2xl mx-auto">
            {{ langService.t('faqSubtitle') }}
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
              [placeholder]="langService.t('faqSearchPlaceholder')" 
              class="w-full pl-12 pr-4 py-4 rounded-2xl border-2 border-slate-200 focus:border-teal-500 focus:ring-4 focus:ring-teal-500/10 shadow-sm text-lg placeholder-slate-400 transition-all outline-none"
            >
          </div>
        </div>

        <!-- FAQ List -->
        <div class="space-y-4">
          @if (filteredFaqs().length === 0) {
            <div class="text-center py-12 bg-white rounded-2xl border border-dashed border-slate-300">
              <p class="text-slate-500 text-lg">{{ langService.t('noFaqFound') }}</p>
              <button (click)="searchQuery.set('')" class="mt-2 text-teal-600 font-bold hover:underline">
                {{ langService.t('clearSearch') }}
              </button>
            </div>
          }

          @for (faq of filteredFaqs(); track faq.id) {
            <div class="bg-white rounded-2xl border border-slate-200 overflow-hidden transition-all duration-300 hover:shadow-md"
                 [class.ring-2]="faq.isOpen" [class.ring-teal-500]="faq.isOpen" [class.ring-opacity-50]="faq.isOpen">
              
              <button (click)="toggleFaq(faq.id)" class="w-full px-6 py-5 text-left flex justify-between items-center focus:outline-none gap-4">
                <div class="flex items-center gap-3.5 flex-grow pr-4">
                  <span class="flex-shrink-0 w-8 h-8 rounded-xl bg-teal-50 text-teal-700 font-bold text-xs md:text-sm flex items-center justify-center border border-teal-100/80 transition-colors"
                        [class.bg-teal-600]="faq.isOpen"
                        [class.text-white]="faq.isOpen"
                        [class.border-teal-600]="faq.isOpen">
                    {{ faq.id < 10 ? '0' + faq.id : faq.id }}
                  </span>
                  <span class="text-base md:text-lg font-bold text-slate-900">
                    {{ langService.isHindi() && faq.questionHi ? faq.questionHi : faq.question }}
                  </span>
                </div>
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
                <div class="pt-3 border-t border-slate-100 md:pl-11">
                  {{ langService.isHindi() && faq.answerHi ? faq.answerHi : faq.answer }}
                </div>
              </div>
            </div>
          }
        </div>

        <!-- Still have questions? -->
        <div class="mt-16 text-center bg-teal-50 rounded-3xl p-8 md:p-12">
          <h3 class="text-2xl font-serif text-slate-900 mb-4">{{ langService.t('stillHaveQuestions') }}</h3>
          <p class="text-slate-600 mb-8 max-w-xl mx-auto">{{ langService.t('stillHaveQuestionsSub') }}</p>
          <a routerLink="/contact" class="inline-block bg-teal-600 text-white font-bold py-3 px-8 rounded-full shadow-lg shadow-teal-500/30 hover:bg-teal-700 hover:-translate-y-1 transition-all">
            {{ langService.t('contact') }}
          </a>
        </div>
      </div>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FaqComponent implements OnInit {
  langService = inject(LanguageService);
  private title: Title = inject(Title);
  private meta: Meta = inject(Meta);
  
  searchQuery = signal('');

  // Initial FAQ Data
  faqs = signal<FaqItem[]>([
    {
      id: 1,
      question: "Is dental treatment painful?",
      questionHi: "क्या दांतों के इलाज में दर्द होता है?",
      answer: "No. Most treatments are painless due to modern techniques and local anesthesia.",
      answerHi: "बिल्कुल नहीं। आधुनिक तकनीकों और लोकल एनेस्थीसिया के उपयोग से अधिकांश उपचार पूरी तरह दर्द रहित होते हैं।",
      isOpen: false
    },
    {
      id: 2,
      question: "How often should I visit the dentist?",
      questionHi: "मुझे डेंटिस्ट के पास कितनी बार जाना चाहिए?",
      answer: "Every 6 months for routine check-ups and cleaning.",
      answerHi: "नियमित जांच और सफाई (रूटीन चेकअप व स्केलिंग) के लिए हर 6 महीने में कम से कम एक बार जरूर जाना चाहिए।",
      isOpen: false
    },
    {
      id: 3,
      question: "What causes tooth decay?",
      questionHi: "दांतों में सड़न (कैविटी) क्यों होती है?",
      answer: "Poor oral hygiene, sugary foods, and bacteria cause tooth decay.",
      answerHi: "मुंह की सही सफाई न होना, मीठी व चिपचिपी चीजें खाना और बैक्टीरिया जमने से दांतों में कैविटी या सड़न होती है।",
      isOpen: false
    },
    {
      id: 4,
      question: "Are dental X-rays safe?",
      questionHi: "क्या डेंटल एक्स-रे सुरक्षित हैं?",
      answer: "Yes. They use very low radiation and are completely safe when required.",
      answerHi: "हाँ, पूरी तरह सुरक्षित हैं। हमारे आधुनिक डिजिटल एक्स-रे में रेडिएशन की मात्रा अत्यंत कम होती है।",
      isOpen: false
    },
    {
      id: 5,
      question: "What is a root canal treatment?",
      questionHi: "रूट कैनाल ट्रीटमेंट (RCT) क्या होता है?",
      answer: "It is a procedure to remove infected pulp and save a damaged tooth.",
      answerHi: "यह संक्रमित या सड़ी हुई नस (पल्प) को निकालकर प्राकृतिक दांत को बचाने और दर्द खत्म करने की प्रक्रिया है।",
      isOpen: false
    },
    {
      id: 6,
      question: "How many sittings are needed for a root canal?",
      questionHi: "रूट कैनाल के लिए कितनी सिटिंग्स (मुलाकातें) लगती हैं?",
      answer: "Usually 1–2 sittings, depending on the infection.",
      answerHi: "आमतौर पर संक्रमण की स्थिति के आधार पर 1 से 2 सिटिंग्स में रूट कैनाल पूरा हो जाता है।",
      isOpen: false
    },
    {
      id: 7,
      question: "Is tooth extraction painful?",
      questionHi: "क्या दांत निकलवाने (Extraction) में दर्द होता है?",
      answer: "No. It is done under local anesthesia for a pain-free experience.",
      answerHi: "नहीं। दांत निकालने की प्रक्रिया सुन्न करके (लोकल एनेस्थीसिया) की जाती है, जिससे दर्द महसूस नहीं होता।",
      isOpen: false
    },
    {
      id: 8,
      question: "How long does a dental cleaning take?",
      questionHi: "दांतों की सफाई (Scaling & Polishing) में कितना समय लगता है?",
      answer: "Around 30–45 minutes.",
      answerHi: "आमतौर पर केवल 30 से 45 मिनट का समय लगता है।",
      isOpen: false
    },
    {
      id: 9,
      question: "Do you treat children?",
      questionHi: "क्या आप बच्चों के दांतों का इलाज भी करते हैं?",
      answer: "Yes. We provide gentle dental care for children of all ages.",
      answerHi: "हाँ, हम सभी उम्र के बच्चों के लिए विशेष और सौम्य पीडियाट्रिक दंत चिकित्सा प्रदान करते हैं।",
      isOpen: false
    },
    {
      id: 10,
      question: "What should I do in a dental emergency?",
      questionHi: "डेंटल इमरजेंसी (अचानक दर्द या चोट) की स्थिति में क्या करें?",
      answer: "Contact the clinic immediately for urgent care.",
      answerHi: "तुरंत हमारे क्लिनिक के आपातकालीन नंबर पर कॉल या व्हाट्सएप करें ताकि आपको तुरंत प्राथमिक उपचार मिल सके।",
      isOpen: false
    },
    {
      id: 11,
      question: "How long do dental implants last?",
      questionHi: "डेंटल इम्प्लांट (दांत का पक्का विकल्प) कितने साल चलते हैं?",
      answer: "With proper care, implants can last many years or a lifetime.",
      answerHi: "नियमित सफाई और सही देखभाल के साथ डेंटल इम्प्लांट्स कई वर्षों तक या जीवनभर सुरक्षित रहते हैं।",
      isOpen: false
    },
    {
      id: 12,
      question: "Is teeth whitening safe?",
      questionHi: "क्या टीथ व्हाइटनिंग (दांत सफेद करना) सुरक्षित है?",
      answer: "Yes, when performed by a dentist, it is safe and effective.",
      answerHi: "हाँ, जब यह किसी पेशेवर डेंटिस्ट द्वारा क्लिनिक में किया जाता है, तो यह इनेमल के लिए पूरी तरह सुरक्षित और असरदार होता है।",
      isOpen: false
    },
    {
      id: 13,
      question: "Do you accept dental insurance?",
      questionHi: "क्या आप डेंटल इंश्योरेंस स्वीकार करते हैं?",
      answer: "Yes, we accept most major dental insurance plans.",
      answerHi: "हाँ, हम अधिकांश प्रमुख डेंटल इंश्योरेंस और कॉर्पोरेट क्लेम स्वीकार करते हैं व सहायता प्रदान करते हैं।",
      isOpen: false
    },
    {
      id: 14,
      question: "Is EMI facility available?",
      questionHi: "क्या ईएमआई (EMI) की सुविधा उपलब्ध है?",
      answer: "Yes, EMI options may be available for major treatments.",
      answerHi: "हाँ, बड़े उपचारों और इम्प्लांट्स के लिए आसान नो-कॉस्ट EMI विकल्प उपलब्ध हैं।",
      isOpen: false
    },
    {
      id: 15,
      question: "How long does numbness last after treatment?",
      questionHi: "इलाज के बाद सुन्नपन (Numbness) कितने समय तक रहता है?",
      answer: "Usually 2–3 hours.",
      answerHi: "आमतौर पर इलाज के बाद 2 से 3 घंटे में सुन्नपन पूरी तरह सामान्य हो जाता है।",
      isOpen: false
    },
    {
      id: 16,
      question: "Are your instruments sterilized?",
      questionHi: "क्या आपके सभी उपकरण स्टरलाइज़्ड (कीटाणुरहित) होते हैं?",
      answer: "Yes. Strict sterilization and hygiene protocols are followed.",
      answerHi: "हाँ, हमारे क्लिनिक में अंतरराष्ट्रीय स्तर के 100% स्टरलाइजेशन और ऑटोक्लेव प्रोटोकॉल का पालन किया जाता है।",
      isOpen: false
    },
    {
      id: 17,
      question: "When should a child first visit the dentist?",
      questionHi: "बच्चे को पहली बार डेंटिस्ट के पास कब ले जाना चाहिए?",
      answer: "By the age of 1 year or when the first tooth appears.",
      answerHi: "बच्चे का पहला दांत आने पर या 1 वर्ष की उम्र तक पहला चेकअप करवा लेना चाहिए।",
      isOpen: false
    },
    {
      id: 18,
      question: "Can adults get braces?",
      questionHi: "क्या वयस्क (Adults) भी दांत सीधे करने के लिए ब्रेसेस या अलाइनर लगा सकते हैं?",
      answer: "Yes. Orthodontic treatment is effective at any age.",
      answerHi: "हाँ, दांतों को सीधा करने के लिए कोई उम्र सीमा नहीं है। वयस्क भी क्लियर अलाइनर्स या ब्रेसेस लगवा सकते हैं।",
      isOpen: false
    },
    {
      id: 19,
      question: "How can I maintain good oral health?",
      questionHi: "दांतों को स्वस्थ रखने के लिए क्या करना चाहिए?",
      answer: "Brush twice daily, floss regularly, and visit the dentist routinely.",
      answerHi: "दिन में दो बार ब्रश करें, फ्लॉस का उपयोग करें, कुल्ला करें और हर 6 महीने में नियमित चेकअप करवाएं।",
      isOpen: false
    },
    {
      id: 20,
      question: "How can I book an appointment?",
      questionHi: "अपॉइंटमेंट कैसे बुक कर सकते हैं?",
      answer: "You can call us, WhatsApp us, or book online through our website.",
      answerHi: "आप हमें फोन कर सकते हैं, व्हाट्सएप पर संदेश भेज सकते हैं या हमारी वेबसाइट के फॉर्म द्वारा ऑनलाइन बुक कर सकते हैं।",
      isOpen: false
    }
  ]);

  // Derived state for search filtering
  filteredFaqs = computed(() => {
    const query = this.searchQuery().toLowerCase().trim();
    if (!query) return this.faqs();
    return this.faqs().filter(item => 
      item.question.toLowerCase().includes(query) || 
      (item.questionHi && item.questionHi.toLowerCase().includes(query)) ||
      item.answer.toLowerCase().includes(query) ||
      (item.answerHi && item.answerHi.toLowerCase().includes(query))
    );
  });

  ngOnInit() {
    this.title.setTitle('Frequently Asked Questions | White Crest Dental');
    this.meta.updateTag({ name: 'description', content: 'Find answers to common questions about dental procedures, costs, and safety at White Crest Dental.' });
  }

  toggleFaq(id: number) {
    this.faqs.update(items => 
      items.map(item => 
        item.id === id ? { ...item, isOpen: !item.isOpen } : { ...item, isOpen: false }
      )
    );
  }
}
