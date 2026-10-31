import { Injectable, signal, computed } from '@angular/core';
import { TRANSLATIONS, TranslationKey, Language } from '../i18n/translations';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  private readonly STORAGE_KEY = 'wc_dental_lang';

  // Active language signal: defaults to saved preference or 'en'
  currentLang = signal<Language>(this.getInitialLanguage());

  // Helper signal
  isHindi = computed(() => this.currentLang() === 'hi');

  constructor() {
    // Sync HTML document lang attribute
    if (typeof document !== 'undefined') {
      document.documentElement.lang = this.currentLang() === 'hi' ? 'hi' : 'en';
    }
  }

  private getInitialLanguage(): Language {
    if (typeof window !== 'undefined' && window.localStorage) {
      const saved = localStorage.getItem(this.STORAGE_KEY) as Language;
      if (saved === 'en' || saved === 'hi') {
        return saved;
      }
    }
    return 'en';
  }

  setLanguage(lang: Language) {
    this.currentLang.set(lang);
    if (typeof window !== 'undefined' && window.localStorage) {
      localStorage.setItem(this.STORAGE_KEY, lang);
    }
    if (typeof document !== 'undefined') {
      document.documentElement.lang = lang === 'hi' ? 'hi' : 'en';
    }
  }

  toggleLanguage() {
    this.setLanguage(this.currentLang() === 'en' ? 'hi' : 'en');
  }

  // Reactive translation helper
  t(key: TranslationKey): string {
    const lang = this.currentLang();
    return TRANSLATIONS[lang]?.[key] || TRANSLATIONS['en'][key] || key;
  }
}
