import {
  Component,
  ChangeDetectionStrategy,
  inject,
  signal,
  OnInit,
} from "@angular/core";
import {
  ReactiveFormsModule,
  FormBuilder,
  Validators,
  FormGroup,
  AbstractControl,
  ValidationErrors,
  ValidatorFn,
} from "@angular/forms";
import { CommonModule } from "@angular/common";
import { Title, Meta } from "@angular/platform-browser";

@Component({
  selector: "app-contact",
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  template: `
    <!-- Main Content -->
    <div class="bg-white py-16 sm:py-20">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          <!-- Contact Info Panel -->
          <div class="flex flex-col gap-8">
            <!-- Info Card -->
            <div
              class="bg-slate-900 rounded-3xl p-8 md:p-10 text-white shadow-xl overflow-hidden relative"
            >
              <!-- Decorative Circle -->
              <div
                class="absolute -top-12 -right-12 w-40 h-40 bg-teal-500 rounded-full opacity-20 blur-2xl"
              ></div>
              <div
                class="absolute bottom-0 left-0 w-32 h-32 bg-purple-500 rounded-full opacity-10 blur-2xl"
              ></div>

              <h3 class="text-2xl font-serif mb-8 relative z-10">
                Contact Information
              </h3>

              <div class="space-y-8 relative z-10">
                <!-- Address -->
                <div class="flex items-start">
                  <div
                    class="flex-shrink-0 w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center text-teal-400 backdrop-blur-sm border border-white/10"
                  >
                    <svg
                      class="w-6 h-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <div class="ml-6">
                    <p
                      class="text-sm font-medium text-slate-400 uppercase tracking-wider mb-1"
                    >
                      Our Office
                    </p>
                    <p class="text-lg font-medium text-white">
                      123 Complex Building, Noida
                    </p>
                    <p class="text-lg text-slate-300">Health City, UP 90210</p>
                  </div>
                </div>

                <!-- Phone -->
                <div class="flex items-start">
                  <div
                    class="flex-shrink-0 w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center text-teal-400 backdrop-blur-sm border border-white/10"
                  >
                    <svg
                      class="w-6 h-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  <div class="ml-6">
                    <p
                      class="text-sm font-medium text-slate-400 uppercase tracking-wider mb-1"
                    >
                      Phone
                    </p>
                    <p class="text-lg font-medium text-white">(555) 123-4567</p>
                    <p class="text-sm text-slate-400 mt-1">Call us anytime</p>
                  </div>
                </div>

                <!-- Email -->
                <div class="flex items-start">
                  <div
                    class="flex-shrink-0 w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center text-teal-400 backdrop-blur-sm border border-white/10"
                  >
                    <svg
                      class="w-6 h-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div class="ml-6">
                    <p
                      class="text-sm font-medium text-slate-400 uppercase tracking-wider mb-1"
                    >
                      Email
                    </p>
                    <p class="text-lg font-medium text-white break-all">
                      hello@whitecrestdental.in
                    </p>
                  </div>
                </div>

                <!-- Timings -->
                <div class="flex items-start">
                  <div
                    class="flex-shrink-0 w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center text-teal-400 backdrop-blur-sm border border-white/10"
                  >
                    <svg
                      class="w-6 h-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <div class="ml-6">
                    <p
                      class="text-sm font-medium text-slate-400 uppercase tracking-wider mb-1"
                    >
                      Office Hours
                    </p>
                    <div
                      class="grid grid-cols-[3rem_1fr] gap-x-2 text-sm text-slate-300"
                    >
                      <span class="text-white font-medium">M-F</span>
                      <span>8:00 AM - 6:00 PM</span>
                      <span class="text-white font-medium">Sat</span>
                      <span>9:00 AM - 2:00 PM</span>
                      <span class="text-white font-medium">Sun</span>
                      <span>Closed</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Map Placeholder -->
            <div
              class="bg-slate-100 rounded-3xl overflow-hidden h-64 border border-slate-200 shadow-inner relative group"
            >
              <img
                src="https://picsum.photos/seed/maplocation/800/400"
                alt="Map Location"
                class="w-full h-full object-cover filter grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
              />
              <div
                class="absolute inset-0 flex items-center justify-center pointer-events-none"
              >
                <div
                  class="bg-white/90 backdrop-blur-md px-6 py-3 rounded-full shadow-lg border border-slate-200 transform group-hover:scale-105 transition-transform duration-300"
                >
                  <span
                    class="text-slate-900 font-bold text-sm flex items-center"
                  >
                    <span class="text-teal-600 text-lg mr-2">📍</span> Find us
                    on Maps
                  </span>
                </div>
              </div>
            </div>
          </div>

          <!-- Form Panel -->
          <div
            class="bg-white rounded-3xl p-8 md:p-10 shadow-[0_20px_50px_rgba(8,_112,_184,_0.07)] border border-slate-100"
          >
            <h3 class="text-2xl font-serif text-slate-900 mb-2">
              Send us a Message
            </h3>
            <p class="text-slate-500 mb-8">
              Fill out the form below and our team will get back to you within
              24 hours.
            </p>

            @if (submitted()) {
              <div
                class="h-96 flex flex-col items-center justify-center text-center animate-fade-in"
              >
                <div
                  class="w-20 h-20 bg-teal-50 text-teal-600 rounded-full flex items-center justify-center text-4xl mb-6 shadow-sm border border-teal-100"
                >
                  ✓
                </div>
                <h3 class="text-2xl font-bold text-slate-900 mb-3">
                  Request Received!
                </h3>
                <p class="text-slate-500 max-w-xs mx-auto mb-8">
                  Thank you for contacting White Crest Dental. We'll be in touch
                  shortly to confirm your details.
                </p>
                <button
                  (click)="resetForm()"
                  class="text-teal-600 font-bold hover:text-teal-800 underline decoration-2 underline-offset-4 transition-colors"
                >
                  Send another message
                </button>
              </div>
            } @else {
              <form
                [formGroup]="contactForm"
                (ngSubmit)="onSubmit()"
                class="space-y-6"
              >
                <div>
                  <label
                    for="name"
                    class="block text-sm font-semibold text-slate-700 mb-2"
                    >Full Name</label
                  >
                  <input
                    type="text"
                    formControlName="name"
                    id="name"
                    class="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 transition-all"
                    placeholder="John Doe"
                  />
                  @if (
                    contactForm.get("name")?.touched &&
                    contactForm.get("name")?.invalid
                  ) {
                    <p class="mt-2 text-sm text-red-500">Name is required</p>
                  }
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      for="email"
                      class="block text-sm font-semibold text-slate-700 mb-2"
                      >Email Address
                      <span class="text-slate-400 font-normal"
                        >(Optional)</span
                      ></label
                    >
                    <input
                      type="email"
                      formControlName="email"
                      id="email"
                      class="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 transition-all"
                      placeholder="john@example.com"
                    />
                    @if (
                      contactForm.get("email")?.touched &&
                      contactForm.get("email")?.hasError("email")
                    ) {
                      <p class="mt-2 text-sm text-red-500">
                        Please enter a valid email address
                      </p>
                    }
                  </div>
                  <div>
                    <label
                      for="phone"
                      class="block text-sm font-semibold text-slate-700 mb-2"
                      >Phone Number</label
                    >
                    <input
                      type="tel"
                      formControlName="phone"
                      id="phone"
                      class="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 transition-all"
                      placeholder="(555) 000-0000"
                    />
                    @if (
                      contactForm.get("phone")?.touched &&
                      contactForm.get("phone")?.invalid
                    ) {
                      <p class="mt-2 text-sm text-red-500">Phone is required</p>
                    }
                  </div>
                </div>

                <div>
                  <label
                    for="bookingDate"
                    class="block text-sm font-semibold text-slate-700 mb-2"
                    >Preferred Date & Time
                    <span class="text-slate-400 font-normal"
                      >(Optional)</span
                    ></label
                  >
                  <input
                    type="datetime-local"
                    formControlName="bookingDate"
                    id="bookingDate"
                    class="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 transition-all"
                  />
                </div>

                <div>
                  <div class="flex items-center justify-between mb-2">
                    <label
                      for="message"
                      class="block text-sm font-semibold text-slate-700"
                      >How can we help?</label
                    >
                  </div>

                  <textarea
                    formControlName="message"
                    id="message"
                    rows="4"
                    class="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 transition-all resize-none"
                    placeholder="I would like to book a cleaning..."
                  ></textarea>
                  @if (
                    contactForm.get("message")?.touched &&
                    contactForm.get("message")?.invalid
                  ) {
                    <p class="mt-2 text-sm text-red-500">Message is required</p>
                  }
                </div>

                <!-- Math CAPTCHA -->
                <div>
                  <label
                    for="captcha"
                    class="block text-sm font-semibold text-slate-700 mb-2"
                  >
                    Security Check: What is {{ captchaNum1() }} +
                    {{ captchaNum2() }}?
                  </label>
                  <div class="flex items-center gap-4">
                    <input
                      type="number"
                      formControlName="captcha"
                      id="captcha"
                      class="w-32 px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 transition-all text-center font-bold"
                      placeholder="?"
                    />
                    <button
                      type="button"
                      (click)="generateCaptcha()"
                      class="text-sm text-teal-600 hover:text-teal-800 underline"
                    >
                      Refresh Challenge
                    </button>
                  </div>
                  @if (
                    contactForm.get("captcha")?.touched &&
                    contactForm.get("captcha")?.hasError("incorrectCaptcha")
                  ) {
                    <p class="mt-2 text-sm text-red-500">
                      Incorrect answer. Please try again.
                    </p>
                  }
                </div>

                @if (submitError()) {
                  <div
                    class="p-4 bg-red-50 text-red-700 rounded-xl border border-red-200"
                  >
                    <p class="text-sm">
                      {{ submitError() }}
                    </p>
                  </div>
                }

                <button
                  type="submit"
                  [disabled]="contactForm.invalid || isSubmitting()"
                  class="w-full py-4 px-6 bg-teal-600 hover:bg-teal-700 text-white font-bold text-lg rounded-xl shadow-lg shadow-teal-500/30 transform transition-all duration-200 hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none disabled:shadow-none"
                >
                  {{ isSubmitting() ? "Sending..." : "Send Message" }}
                </button>
              </form>
            }
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [
    `
      .animate-fade-in {
        animation: fadeIn 0.5s ease-out;
      }
      @keyframes fadeIn {
        from {
          opacity: 0;
          transform: translateY(10px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactComponent implements OnInit {
  private fb: FormBuilder = inject(FormBuilder);
  private title: Title = inject(Title);
  private meta: Meta = inject(Meta);

  contactForm: FormGroup = this.fb.group({
    name: ["", Validators.required],
    email: ["", [Validators.email]], // Optional email
    phone: ["", Validators.required],
    bookingDate: [""], // Optional booking date
    message: ["", Validators.required],
    captcha: ["", [Validators.required, this.captchaValidator()]],
  });

  captchaValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      if (!control.value) return null; // Let required handle empty
      const userAnswer = parseInt(control.value, 10);
      if (userAnswer !== this.captchaAnswer()) {
        return { incorrectCaptcha: true };
      }
      return null;
    };
  }

  submitted = signal(false);
  isSubmitting = signal(false);
  submitError = signal<string | null>(null);

  // CAPTCHA State
  captchaNum1 = signal(0);
  captchaNum2 = signal(0);
  captchaAnswer = signal(0);

  constructor() {
    this.generateCaptcha();
  }

  ngOnInit() {
    this.title.setTitle("Contact Us | Book Appointment | White Crest Dental");
    this.meta.updateTag({
      name: "description",
      content:
        "Book your dental appointment today. Located at 123 Wellness Blvd. Call (555) 123-4567. We look forward to seeing you.",
    });
  }

  generateCaptcha() {
    const n1 = Math.floor(Math.random() * 10) + 1;
    const n2 = Math.floor(Math.random() * 10) + 1;
    this.captchaNum1.set(n1);
    this.captchaNum2.set(n2);
    this.captchaAnswer.set(n1 + n2);
    this.contactForm.get("captcha")?.reset();
  }

  async onSubmit() {
    this.contactForm.markAllAsTouched();
    if (this.contactForm.valid) {
      this.isSubmitting.set(true);
      this.submitError.set(null);

      try {
        const formData = this.contactForm.value;
        const response = await fetch("https://api.staticforms.dev/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            accessKey: "sf_8d1188b0d6add98787446118",
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            subject: "Contact from White Crest Dental",
            message: formData.message,
            $bookingDate: formData.bookingDate || "Not specified",
          }),
        });

        const data = await response.json();

        if (data.success) {
          this.submitted.set(true);
        } else {
          const errorMessage =
            data.message || data.error || "Form submission failed.";
          this.submitError.set(errorMessage);
          console.error("Form submission failed", errorMessage);
        }
      } catch (err) {
        this.submitError.set(
          "There was an error connecting to the server. Please try again later.",
        );
        console.error("Error submitting form", err);
      } finally {
        this.isSubmitting.set(false);
      }
    }
  }

  resetForm() {
    this.contactForm.reset();
    this.submitted.set(false);
    this.submitError.set(null);
    this.generateCaptcha();
  }
}
