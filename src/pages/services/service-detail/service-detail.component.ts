
import { Component, ChangeDetectionStrategy, inject, signal, effect, computed } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs/operators';
import { TitleCasePipe } from '@angular/common';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-service-detail',
  standalone: true,
  imports: [RouterLink, TitleCasePipe],
  template: `
    <div class="min-h-screen bg-slate-50 py-20 px-4 sm:px-6 lg:px-8">
      <div class="max-w-4xl mx-auto">
        <!-- Breadcrumb -->
        <nav class="flex mb-8" aria-label="Breadcrumb">
          <ol class="inline-flex items-center space-x-1 md:space-x-3">
            <li class="inline-flex items-center">
              <a routerLink="/" class="text-sm font-medium text-slate-500 hover:text-teal-600">Home</a>
            </li>
            <li>
              <div class="flex items-center">
                <svg class="w-3 h-3 text-slate-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
                </svg>
                <a routerLink="/services" class="ml-1 text-sm font-medium text-slate-500 hover:text-teal-600 md:ml-2">Services</a>
              </div>
            </li>
            <li aria-current="page">
              <div class="flex items-center">
                <svg class="w-3 h-3 text-slate-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
                </svg>
                <span class="ml-1 text-sm font-medium text-teal-600 md:ml-2">{{ slug() | titlecase }}</span>
              </div>
            </li>
          </ol>
        </nav>

        <div class="bg-white rounded-3xl shadow-sm border border-slate-200 overflow-hidden">
          <div class="relative h-64 bg-slate-200">
            <img [src]="'https://picsum.photos/seed/' + slug() + '/800/400'" alt="Service Banner" class="w-full h-full object-cover">
            <div class="absolute inset-0 bg-slate-900/40 flex items-center justify-center">
              <h1 class="text-4xl md:text-5xl font-serif text-white font-bold tracking-tight text-center px-4">
                {{ formatTitle(slug()) }}
              </h1>
            </div>
          </div>
          
          <div class="p-8 md:p-12">
            <div class="prose prose-slate max-w-none">
              <h2 class="text-2xl font-bold text-slate-900 mb-4">Comprehensive Care for {{ formatTitle(slug()) }}</h2>
              <p class="text-lg text-slate-600 mb-6">
                Displaying detailed treatment information for: <strong class="text-teal-600">{{ formatTitle(slug()) }}</strong>.
              </p>
              
              <!-- Dynamic Content -->
              <div class="text-slate-500 mb-8 whitespace-pre-line leading-relaxed">
                {{ currentContent() }}
              </div>
              
              <div class="bg-teal-50 rounded-2xl p-6 border border-teal-100">
                <h3 class="text-lg font-semibold text-teal-900 mb-2">Interested in this treatment?</h3>
                <p class="text-teal-700 mb-4">Book a consultation today to discuss if {{ formatTitle(slug()) }} is right for you.</p>
                <a routerLink="/contact" class="inline-block bg-teal-600 text-white font-medium px-6 py-2.5 rounded-full hover:bg-teal-700 transition-colors">
                  Schedule Consultation
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ServiceDetailComponent {
  private route = inject(ActivatedRoute);
  private titleService: Title = inject(Title);
  private metaService: Meta = inject(Meta);
  
  // Creates a signal from the route param observable
  slug = toSignal(
    this.route.paramMap.pipe(map(params => params.get('slug') || 'service')), 
    { initialValue: 'service' }
  );

  // Content Map
  private serviceContentMap: Record<string, string> = {
    'oral-examination': `At White Crest Dental, we prioritize your oral health and do a detailed check-up along with x-rays and other diagnostic aids to diagnose the problem.

The Investigation:
Any oral health exam includes a detailed examination of your teeth and supporting structures. The process involves the incorporation of various techniques, technologies, and therapies.

We explore every surface of every tooth to uncover new cavities and examine the quality of existing fillings using dental instruments.

If X-rays are necessary, we take full-mouth X-rays or where ever required to detect abnormalities not visible to the naked eye.

At White Crest Dental, we typically perform periodontal probing to measure the circumference of each tooth and the strength of the supporting bone structure. If the gums do not tighten after the cleaning, you will be scheduled for a scaling or root planning appointment.`,
    'cleaning-and-polishing': `Teeth cleaning and polishing is a procedure that removes surface stains on the crown (or above the gum line) part of the tooth so they will look and feel cleaner. By making these surfaces smooth, it is tougher for plaque and food debris to gather on your teeth, in that way causing decay or gum disease.
    
A cleaning routine typically involves two procedures: scaling and polishing.

Scaling
As we eat and drink, food and bacteria may gather in our teeth, which ultimately becomes dental plaque. Over time, the dental plaque may harden to form tartar. While regular brushing and flossing may eliminate some plaque, they cannot eliminate tartar. It will have to be removed by a dentist through a procedure called scaling.
Scaling comprises the use of a particular instrument to loosen and remove plaque and tartar without harming your gums and teeth.

Polishing
Generally done after scaling, polishing take away surface stains while making your teeth smooth and shiny. We use another instrument, along with a special paste, to polish your teeth.

When to get cleaning done
• Bleeding gums
• Bad breath
• When advised by dentist
Depending on your oral health, you might need to get your teeth cleaned every six months. If you are due for your regular scaling and polishing, schedule an appointment with us.`,
    'fillings-and-restorations': `A dental filling is a kind of restorative dentistry treatment used to repair negligible tooth fractures, tooth decay or otherwise injured surfaces of the teeth.

When fillings are required, there are a variety of dental filling materials like composite, silver amalgam which can be used in many different capacities. We can use these materials to alter the shape of tooth surfaces to improve biting, chewing and providing a comfortable resting position. Restoring the tooth back to its original shape, function, and appearance is the main aim of each dental restoration and is used mainly to prevent the loss of the tooth in the future as well as preventing future dental procedures.

Cosmetically, there are so many shades available to accurately match the fillings to the unique characterization of most teeth.

SUCCESS RATE
It has 99.9% success rate till today.`,
    'extraction-and-minor-surgery': `Tooth extraction is the removal of tooth from the alveolar (bone) socket. It is one of the most routine dental procedure but also one of the most terrifying procedures for patients. We at The White crest dental studio, have well trained Oral surgeons who perform these extractions and make it a painless process.

Minor oral surgery includes removal of retained or buried roots, broken teeth, wisdom teeth and cysts of the upper and lower jaw. It also includes apical surgery and removal of small soft tissue lesions like mucocele, ranula, high labial or lingual frenum etc in the mouth. These procedures are carried out under local anesthesia with or without iv sedation and have relatively short recovery period.

When Do You Need Tooth Extraction
1. If the tooth infection is so severe that antibiotics and RCT do not cure it, extraction may be needed to prevent the spread of infection.
2. Advanced periodontal disease in a tooth leading to tooth mobility.
3. A tooth after endodontic treatment which still has pain has to be extracted.
4. Extraction of teeth that are done as a part of orthodontic or prosthodontic procedures are called therapeutic extractions.
5. Patients with cancer undergoing radiation therapy have to get potentially problematic teeth extracted before radiation therapy. This is done so as to reduce chances of osteonecrosis.
6. Retained Tooth Roots.`,
    'tmj-disorder': `The exact cause of a person's TMJ disorder is often difficult to determine. Your pain may be due to a combination of factors, such as genetics, arthritis or jaw injury. Some people who have jaw pain also tend to clench or grind their teeth (bruxism), although many people habitually clench or grind their teeth and never develop TMJ disorders.

In most cases, the pain and discomfort associated with TMJ disorders is temporary and can be relieved with self-managed care or nonsurgical treatments. Surgery is typically a last resort after conservative measures have failed, but some people with TMJ disorders may benefit from surgical treatments.

Symptoms
Signs and symptoms of TMJ disorders may include:
Pain or tenderness of your jaw
Pain in one or both of the temporomandibular joints
Aching pain in and around your ear
Difficulty chewing or pain while chewing
Aching facial pain
Locking of the joint, making it difficult to open or close your mouth.

TMJ disorders can also cause a clicking sound or grating sensation when you open your mouth or chew. But if there's no pain or limitation of movement associated with your jaw clicking, you probably don't need treatment for a TMJ disorder.

When to see a doctor
Seek medical attention if you have persistent pain or tenderness in your jaw, or if you can't open or close your jaw completely. Your doctor, your dentist or a TMJ specialist can discuss possible causes and treatments for your problem.

SUCCESS RATE
94%`,
    'dental-implants': `Dental implant surgery is a procedure that replaces tooth roots with metal, screw like posts and replaces damaged or missing teeth with artificial teeth that look and function much like real ones. Dental implant surgery can offer a welcome alternative to dentures or bridgework that doesn't fit well and provides an option when a lack of natural teeth roots doesn’t allow denture or bridgework tooth replacements.

Type of implants and denture
The type of implant needed depends on a case to case basis. At White crest dental studio, we offer a wide range of options to ensure that each patient gets the exact treatment needed.

1) Zygomatic Implants
2) Full Mouth Dental Implants 
3) All on 4 Implants
4) Immediate Implants
5) TTPHIL Technique of Implant
TTPHIL technique is on of the most modern Dental implant technologies, often preferred for patients looking for quicker results or patients with heart conditions, diabetics and other medical complexities. More on TTPHIL – Permanent Teeth in 2-9 Days.
6) Maxillary Sinus Lift Implants

Success rate
99.1%`,
    'root-canals': `Root canal therapy, also known as endodontic therapy, is a dental treatment for removing infection present inside a tooth. It can also protect the tooth from future infections. It is carried out in the pulp of the tooth, which is the root canal.

When to go for Endodontic Treatment (RCT)
Tooth that has pain which is sharp and continuous in nature.
Swelling present in the gum region and associated tooth has pain.
Non-Vital discolored tooth.
Before Prosthodontic treatment in case of crown placement.
Complex tooth fracture.

Success rate
Root canal treatment is highly effective; the technique has more than a 95% success rate. Numerous teeth fixed with a root canal can survive for a longer time.
Additionally, because the final step of the root canal technique is the application of a restoration such as a crown or a filling, it won’t be clear from outside that a root canal was performed.`,
    'veneers': `Veneer is a thin layer of porcelain or ceramic that is bonded on a tooth to improve esthetics as well as to protect the tooth from wear. Veneer can change the size, shape and color of teeth to certain extent.

When do you need dental veneers
Discolored teeth due to staining caused by the use of medications or flourosis.
Worn or chipped tooth.
To close spaces between teeth. This is only when the space between teeth is very minimal.
Smaller-then- average teeth
Pointed or unusual teeth

Cost of veneer varies depending on the material used as well as for the number of teeth involved.

Success rate
It has 99% of success rate.`,
    'invisalign': `INVISALIGN are a series of 15-30 custom made mouth guard like removable clear plastic aligners. The aligners are replaced every 2-3 weeks.
They are most comfortable to the patient. These don’t work for serious dental problems. These are comparatively expensive when compared to all other therapies. This treatment may take usually longer time when compared to others.

Reasons Why You Should Choose Invisalign
Comfort.
Convenience – fewer dental visits.
No braces (Invisible) therapy
Removable.
Easier to care for and clean.
Constant improvement – see results faster.
Versatility.
Freedom.
“No wires” technique.
Simplicity.
Whiten while you straighten.
Cost effective.
Produces amazing results.

Success rate
It has 98% of success rate`,
    'cosmetic-restoration': `Cosmetic fillings, or tooth- colored fillings, are made of composite resin and glass particles. They are cemented onto the existing teeth using a bonding agent. Cosmetic fillings can improve the appearance of your smile. Unlike silver-colored fillings, cosmetic fillings look just like your natural teeth.

Cosmetic dentistry
Cosmetic dentistry also known as aesthetic dentistry is a broad term given for all dental treatments that improve the appearance of one’s teeth and gums. It can be considered to be as a face lift for the teeth. Cosmetic Dentistry is primarily provided by Prosthodontists, Orthodontists and Endodontists. A cosmetic dentist can help with replacing missing teeth, reshaping of teeth, restoration of teeth, bleaching etc. At The White crest dental studio, we have highly experienced cosmetic dentists that provide these treatments.

When do you seek cosmetic treatment?
Cosmetic Dentistry is required in a wide range of situations, some of them includes :
Missing Teeth
Irregularly arranged teeth
Stains present on teeth (eg- Flourosis, enamel hypoplasia)
Chipped/Broken tooth
To protect a weak tooth like after Root Canal
Teeth that appear too short or too long.

SUCCESS RATE
Success depends upon technique, quality and experience of the dentist. Overall it has 97% of success rate`,
    'dental-bleaching': `Bleaching is the most common procedure for teeth whitening. It involves the use of certain substances such as carbamide peroxide to make the teeth white. 
In White crest dental studio, we provide in office bleach which is usually done in Clinical settings.

In office bleach
This is the standard bleaching procedure at the dental clinic.
Tooth is prepared by cleaning the tooth of any plaque and smoothening with polishing agents.
A thick bleaching gel is applied onto the prepared tooth surface.
The procedure is done under absolute isolation using Dental Dam.
The gel is left for 15-30 minutes.
The gel is washed off and the process is repeated one more time.
The color / shade of teeth may change by two-three shades lighter as a minimum to around 5 shades as a maximum. It totally depends upon individual oral health.`,
    'crowns-and-bridge': `Crown
Dental crowns are caps placed on top of damaged teeth. Crowns are used to protect, cover and restore the shape of your teeth when fillings don’t solve the problem. Dental crowns can be made out of metals, porcelain, resin and ceramics. They typically don’t require special care over time other than regular good oral hygiene.

Types of Crowns:

1. Metal crown
There are several metals that can be used in dental crowns, including gold, nickel and chromium. Metal crowns rarely chip or break, last the longest in terms of wear down and only require a small amount of your tooth to be removed. They can also withstand biting and chewing forces. The metallic color is the main drawback of this type of crown. Metal crowns are a good choice for out-of-sight molars.

2. Metal ceramic
This type of dental crown can be matched to the color of the teeth that’s next to the crown. They have a more natural tooth color. However, sometimes the metal under the crown’s porcelain cap shows through as a dark line. Other cons include the chance of the crown’s porcelain portion chipping or breaking off and the crown wearing down the teeth opposite it within the mouth. This wear on the other teeth specifically affects the teeth that come into contact with the crown on the top and bottom of your mouth when it’s closed. Porcelain-fused-to-metal dental crowns can be a good choice for front or back teeth.

3. All Ceramic
These types of dental crowns provide the best natural color match compared to any other crown type. In more specific terms, a zirconium oxide — that's stronger than porcelain and some metal alloys, and it gets fewer sharp edges from the normal "wear and tear" that happens over time. Zirconia crowns tend to cause less stress and damage on opposing pieces than their porcelain counterparts.

Success rate
It has 100% success rate

BRIDGE
A dental bridge is a structure between two dental crowns to fill the gap between missing teeth. A bridge can be supported by your teeth, implants, or a combination of teeth and implants. A dental bridge can restore your smile, improve your appearance, and take years off your look. Who doesn't want to look better- or younger?

What are dental bridges?
If you have one or more missing teeth, a dental bridge can fill the gap with one or more replacement teeth. A bridge is typically made of crowns on either side of the missing tooth and replacement teeth in between them and is cemented in place.

Who needs a dental bridge?
Dental bridges can help if you have a missing tooth or teeth. The most common causes of missing teeth are tooth decay, gum disease and injury. Or you may have been born with missing teeth due to a congenital condition. To get a dental bridge, you need healthy teeth on either side of the missing ones.

Why do you need a dental bridge?
Your teeth work together. If a tooth is missing, nearby teeth can move into the empty space. The teeth in your opposite jaw can also move up or down toward the space. This can cause:
• Bite problems.
• Chewing difficulties.
• Pain from the extra stress on your teeth and jaw.
• Self-consciousness about the way you look or your smile.

Materials used for dental bridge
• Metal
• Metal ceramic
• All ceramic

Success rate
It has 99.3% success rate.`
  };

  currentContent = computed(() => {
    const s = this.slug();
    if (this.serviceContentMap[s]) {
      return this.serviceContentMap[s];
    }
    // Fallback/Generic Content for other slugs
    return `At White Crest Dental, we use state-of-the-art technology to provide the best possible outcome for our patients. \n\nThis section contains detailed procedural steps, benefits, recovery information, and specific FAQs related to ${this.formatTitle(s)}. Our team is dedicated to ensuring you fully understand your treatment options.`;
  });

  constructor() {
    effect(() => {
      const currentSlug = this.slug();
      const formattedTitle = this.formatTitle(currentSlug);
      this.titleService.setTitle(`${formattedTitle} | White Crest Dental`);
      this.metaService.updateTag({ name: 'description', content: `Learn more about ${formattedTitle} at White Crest Dental. Expert care and advanced technology.` });
    });
  }

  formatTitle(slug: string | null): string {
    if (!slug) return '';
    return slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
  }
}
