export interface ServiceItem {
  title: string;
  slug: string;
  description: string;
  image: string;
}

export interface ServiceDetailSubsection {
  title: string;
  description: string;
  items?: string[];
}

export interface ServiceDetailSection {
  heading: string;
  description?: string;
  items?: string[];
  subsections?: ServiceDetailSubsection[];
}

export interface ServiceDetailData {
  title: string;
  subtitle?: string;
  overview: string[];
  sections: ServiceDetailSection[];
  closingNote?: string;
}

export const SERVICES_LIST: ServiceItem[] = [
  {
    title: 'Oral Examination & Investigations',
    slug: 'oral-examination',
    description: 'Complete check-up with digital X-rays, gum health evaluations, and personalized oral care advice.',
    image: 'https://picsum.photos/seed/oralexam/600/400'
  },
  {
    title: 'Cleaning and Polishing',
    slug: 'cleaning-and-polishing',
    description: 'Gentle ultrasonic scaling and polishing to remove plaque, tartar, and surface stains for a fresh smile.',
    image: 'https://picsum.photos/seed/cleaning/600/400'
  },
  {
    title: 'Fillings & Restorations',
    slug: 'fillings-and-restorations',
    description: 'Durable tooth-coloured composite and restorative fillings to repair cavities, fractures, and wear.',
    image: 'https://picsum.photos/seed/fillings/600/400'
  },
  {
    title: 'Extraction and Minor Surgery',
    slug: 'extraction-and-minor-surgery',
    description: 'Safe, comfortable tooth extractions, wisdom teeth removal, and minor oral surgery with gentle care.',
    image: 'https://picsum.photos/seed/extraction/600/400'
  },
  {
    title: 'TMJ Disorder',
    slug: 'tmj-disorder',
    description: 'Effective relief from jaw pain, clicking, and clenching with custom night guards and non-surgical therapies.',
    image: 'https://picsum.photos/seed/tmj/600/400'
  },
  {
    title: 'Dental Implants',
    slug: 'dental-implants',
    description: 'Permanent, natural-looking tooth replacements including Single, All-on-4, and TTPHIL immediate loading.',
    image: 'https://picsum.photos/seed/implants/600/400'
  },
  {
    title: 'Root Canal Treatment (RCT)',
    slug: 'root-canals',
    description: 'Painless, modern therapy to eliminate infection, relieve toothache, and save your natural tooth.',
    image: 'https://picsum.photos/seed/rootcanal/600/400'
  },
  {
    title: 'Endodontic Surgical Procedures',
    slug: 'endodontic-surgery',
    description: 'Advanced surgical care including apicoectomy, hemisection, and abscess drainage to save infected teeth.',
    image: 'https://picsum.photos/seed/endosurgery/600/400'
  },
  {
    title: 'Oral Maxillofacial Prosthesis',
    slug: 'oral-maxillofacial-prosthesis',
    description: 'Comprehensive prosthodontic reconstructions, obturators, and customized tooth replacement solutions.',
    image: 'https://picsum.photos/seed/maxillofacial/600/400'
  },
  {
    title: 'Dental Veneers',
    slug: 'veneers',
    description: 'Ultra-thin, custom porcelain and ceramic shells to correct chips, stains, gaps, and imperfect alignment.',
    image: 'https://picsum.photos/seed/veneers/600/400'
  },
  {
    title: 'Invisalign (Clear Aligners)',
    slug: 'invisalign',
    description: 'Discreet, comfortable clear aligner trays to straighten teeth without metal brackets or wires.',
    image: 'https://picsum.photos/seed/invisalign/600/400'
  },
  {
    title: 'Cosmetic Restoration',
    slug: 'cosmetic-restoration',
    description: 'Aesthetic tooth-coloured fillings, smile makeovers, and cosmetic bonding for a radiant smile.',
    image: 'https://picsum.photos/seed/cosmeticrestoration/600/400'
  },
  {
    title: 'Dental Bleaching',
    slug: 'dental-bleaching',
    description: 'Professional in-office whitening procedure to safely brighten teeth 2 to 5 shades in a single visit.',
    image: 'https://picsum.photos/seed/bleaching/600/400'
  },
  {
    title: 'Crown Lengthening',
    slug: 'crown-lengthening',
    description: 'Precise gum contouring to expose healthy tooth structure for crowns or to correct a gummy smile.',
    image: 'https://picsum.photos/seed/crownlengthening/600/400'
  },
  {
    title: 'Dental Braces',
    slug: 'dental-braces',
    description: 'Traditional metal and clear ceramic braces for kids, teens, and adults to achieve ideal bite alignment.',
    image: 'https://picsum.photos/seed/braces/600/400'
  },
  {
    title: 'Dental Crowns',
    slug: 'dental-crowns',
    description: 'Custom-crafted zirconia, ceramic, and PFM caps to restore strength, function, and natural aesthetics.',
    image: 'https://picsum.photos/seed/crowns/600/400'
  },
  {
    title: 'Dental Bridges',
    slug: 'dental-bridges',
    description: 'Fixed tooth replacements anchored to adjacent teeth or implants to restore chewing and your smile.',
    image: 'https://picsum.photos/seed/crownsbridge/600/400'
  },
  {
    title: 'Removable Partial Dentures (RPD)',
    slug: 'removable-partial-dentures',
    description: 'Comfortable, lightweight, custom-fitted removable dentures to replace multiple missing teeth.',
    image: 'https://picsum.photos/seed/partialdenture/600/400'
  },
  {
    title: 'Complete Dentures',
    slug: 'dentures',
    description: 'Natural-looking complete dentures designed to restore facial volume, speech clarity, and comfortable eating.',
    image: 'https://picsum.photos/seed/completedentures/600/400'
  },
  {
    title: 'Same-Day Crowns',
    slug: 'same-day-crowns',
    description: 'Restorations ready in a single visit with advanced CEREC digital technology.',
    image: 'https://picsum.photos/seed/samedaycrowns/600/400'
  },
  {
    title: 'Teeth Whitening',
    slug: 'teeth-whitening',
    description: 'Professional treatment for brighter, whiter teeth and long-lasting stain removal.',
    image: 'https://picsum.photos/seed/whitening/600/400'
  },
  {
    title: 'Preventive Care',
    slug: 'preventive-care',
    description: 'Routine cleanings, fluoride treatments, and comprehensive check-ups to stop problems before they start.',
    image: 'https://picsum.photos/seed/preventive/600/400'
  },
  {
    title: 'Full Mouth Rehab',
    slug: 'full-mouth-rehab',
    description: 'Comprehensive restorative treatment combining multiple procedures for total oral health and aesthetics.',
    image: 'https://picsum.photos/seed/rehab/600/400'
  },
  {
    title: 'Pediatric Restorative Dentistry',
    slug: 'pediatric-restorative-dentistry',
    description: 'Gentle and child-friendly restorative treatments to protect your child\'s teeth, relieve pain, and ensure healthy development.',
    image: 'https://picsum.photos/seed/pediatric/600/400'
  }
];

export const SERVICES_DETAIL_MAP: Record<string, ServiceDetailData> = {
  'oral-examination': {
    title: 'Oral Examination & Investigations',
    subtitle: 'Comprehensive Dental Check-Up & Diagnosis at White Crest Dental',
    overview: [
      'At White Crest Dental, every treatment begins with a complete dental check-up. A thorough examination helps us find the exact cause of your dental problem and recommend the most suitable treatment for you.',
      'We carefully examine your teeth, gums, tongue, and other oral tissues to check for cavities, gum disease, infections, worn fillings, broken teeth, and other dental concerns. If needed, we also take digital dental X-rays to detect problems that cannot be seen during a regular examination, such as hidden cavities, bone loss, impacted teeth, or infections.'
    ],
    sections: [
      {
        heading: 'What We Check During Your Visit',
        description: 'Our systematic examination ensures every aspect of your oral wellness is evaluated:',
        items: [
          'Teeth for cavities, cracks, and signs of wear',
          'Existing fillings, crowns, and other dental work',
          'Gums for signs of bleeding or gum disease',
          'Oral tissues, including the tongue and cheeks',
          'Bite and overall oral health',
          'Digital X-rays (only when required) for a more detailed diagnosis'
        ]
      },
      {
        heading: 'Gum Health Check',
        description: 'Healthy gums are essential for healthy teeth. During your visit, we gently measure the space between your teeth and gums to check for early signs of gum disease. This simple examination helps us understand the health of the gums and the bone supporting your teeth.\n\nIf we find plaque, tartar buildup, or signs of gum disease, we may recommend professional teeth cleaning (scaling) or deep cleaning (root planing) to restore your gum health.'
      },
      {
        heading: 'Personalized Oral Care Advice',
        description: 'Your oral health is closely linked to your overall health. That\'s why we also guide you on how to keep your mouth healthy with simple daily habits, including:',
        items: [
          'The correct brushing technique',
          'Proper flossing and oral hygiene habits',
          'Healthy eating habits for stronger teeth and gums',
          'Practical tips to prevent future dental problems'
        ]
      }
    ],
    closingNote: 'At White Crest Dental, our goal is to help you understand your oral health and provide the right treatment with honest advice, modern technology, and compassionate care—so you can enjoy a healthy, confident smile for years to come.'
  },

  'cleaning-and-polishing': {
    title: 'Cleaning and Polishing',
    subtitle: 'Teeth Cleaning & Polishing at White Crest Dental',
    overview: [
      'A healthy smile begins with clean teeth and healthy gums. At White Crest Dental, we provide professional teeth cleaning and polishing to remove plaque, tartar, and stains that cannot be removed by regular brushing alone.',
      'This simple, safe, and painless procedure not only leaves your teeth feeling clean and fresh but also helps prevent cavities, gum disease, and bad breath.'
    ],
    sections: [
      {
        heading: 'Why Do You Need Professional Teeth Cleaning?',
        description: 'Even if you brush and floss every day, plaque can build up in areas that are difficult to clean. Over time, this plaque hardens into tartar (calculus), which cannot be removed with a toothbrush. If left untreated, tartar can lead to bleeding gums, gum disease, persistent bad breath, and even tooth loss.\n\nAt White Crest Dental, we recommend regular professional cleaning to keep your teeth and gums healthy and to prevent dental problems before they become serious.'
      },
      {
        heading: 'What Happens During the Procedure?',
        subsections: [
          {
            title: 'Scaling',
            description: 'Scaling is the first step of professional teeth cleaning. Using advanced dental instruments, our dentists gently remove plaque and hardened tartar from your teeth and along the gum line. This helps eliminate harmful bacteria, improves gum health, and reduces the risk of gum disease.'
          },
          {
            title: 'Polishing',
            description: 'After scaling, your teeth are polished using a special polishing paste. This removes surface stains caused by tea, coffee, smoking, and certain foods, leaving your teeth smooth, clean, and naturally shiny. Smooth teeth also make it harder for plaque to build up again.'
          }
        ]
      },
      {
        heading: 'When Should You Visit White Crest Dental for Teeth Cleaning?',
        description: 'You should consider professional teeth cleaning if you notice any of the following:',
        items: [
          'Bleeding while brushing or flossing',
          'Bad breath that doesn\'t go away',
          'Yellow or brown deposits on your teeth',
          'Stains from tea, coffee, or smoking',
          'Swollen, red, or sensitive gums',
          'It has been more than six months since your last dental cleaning',
          'Your dentist has recommended a professional cleaning'
        ]
      },
      {
        heading: 'How Often Should You Get Your Teeth Cleaned?',
        description: 'For most people, a professional teeth cleaning every six months is recommended. However, if you have gum disease, wear braces, have diabetes, or tend to develop plaque quickly, our dentists may recommend more frequent cleanings.'
      }
    ],
    closingNote: 'At White Crest Dental, we believe that prevention is the key to lifelong oral health. Regular teeth cleaning and polishing not only keep your smile bright and fresh but also help prevent costly dental treatments in the future. Schedule your appointment today!'
  },

  'fillings-and-restorations': {
    title: 'Fillings & Restorations',
    subtitle: 'Dental Fillings & Tooth Restorations at White Crest Dental',
    overview: [
      'A dental filling is a simple and effective way to repair a tooth that has been damaged by decay, a small fracture, or normal wear. At White Crest Dental, we restore your tooth to its natural shape, strength, and appearance so you can smile, eat, and speak comfortably again.',
      'Treating a cavity early with a filling helps prevent the damage from getting worse and reduces the need for more complex treatments such as root canal therapy or tooth extraction.'
    ],
    sections: [
      {
        heading: 'When Do You Need a Dental Filling?',
        items: [
          'A cavity (tooth decay)',
          'A chipped or cracked tooth',
          'Sensitivity to hot, cold, or sweet foods',
          'A worn-out or damaged old filling',
          'Small areas of tooth wear caused by grinding or everyday use'
        ]
      },
      {
        heading: 'Types of Dental Fillings We Offer',
        subsections: [
          {
            title: 'Tooth-Coloured (Composite) Fillings',
            description: 'Composite fillings are designed to match the natural colour of your teeth, making them an excellent choice for both front and back teeth. They provide a natural-looking result while restoring the strength and function of the tooth.'
          },
          {
            title: 'Silver Amalgam Fillings',
            description: 'Silver amalgam fillings are strong, durable, and suitable for certain back teeth where chewing forces are higher. Your dentist will help you choose the most appropriate option for your individual needs.'
          }
        ]
      },
      {
        heading: 'Benefits of Dental Fillings',
        items: [
          'Stops tooth decay from spreading',
          'Restores the natural shape and function of the tooth',
          'Relieves sensitivity and discomfort',
          'Improves chewing and biting ability',
          'Blends naturally with your smile (with tooth-coloured fillings)',
          'Helps prevent the need for more extensive dental treatment in the future'
        ]
      },
      {
        heading: 'What to Expect During the Procedure',
        description: 'Getting a dental filling is usually a quick and comfortable procedure. After removing the decayed or damaged part of the tooth, the area is cleaned and the filling material is placed carefully to restore the tooth. The filling is then shaped and polished so it feels comfortable and looks natural.\n\nWith good oral hygiene, regular check-ups, and proper care, dental fillings can last for many years.'
      }
    ],
    closingNote: 'Dental fillings are one of the most successful and commonly performed dental treatments, with an excellent long-term success rate when properly maintained. If you have a cavity or tooth pain, don\'t wait—book your appointment with White Crest Dental today.'
  },

  'extraction-and-minor-surgery': {
    title: 'Extraction and Minor Surgery',
    subtitle: 'Tooth Extraction & Oral Surgery at White Crest Dental',
    overview: [
      'At White Crest Dental, we understand that the thought of having a tooth removed can be stressful. That\'s why our experienced dentists and oral surgeons focus on making the procedure as gentle, safe, and comfortable as possible.',
      'A tooth extraction is the removal of a tooth from its socket in the jawbone. While we always try to save your natural tooth whenever possible, sometimes extraction is the best option to protect your overall oral health and prevent further complications.'
    ],
    sections: [
      {
        heading: 'When Is a Tooth Extraction Needed?',
        items: [
          'A severely decayed or damaged tooth that cannot be restored with a filling or root canal treatment',
          'A serious tooth infection that has not responded to treatment',
          'Advanced gum disease causing the tooth to become loose',
          'A broken tooth that cannot be repaired',
          'Impacted or painful wisdom teeth',
          'Retained or broken tooth roots',
          'Overcrowded teeth that need to be removed before orthodontic (braces) treatment',
          'Teeth that need to be removed before medical treatments, such as radiation therapy'
        ]
      },
      {
        heading: 'Wisdom Tooth Removal & Minor Oral Surgery',
        description: 'Wisdom teeth can sometimes become impacted, partially erupted, or grow in the wrong direction, leading to pain, swelling, infection, or damage to nearby teeth. At White Crest Dental, we perform safe and comfortable wisdom tooth extractions using modern techniques.',
        subsections: [
          {
            title: 'Minor Oral Surgical Procedures Offered',
            description: 'In addition to routine tooth extractions, we perform:',
            items: [
              'Removal of impacted wisdom teeth',
              'Removal of retained or broken tooth roots',
              'Surgical removal of severely broken teeth',
              'Removal of small cysts and oral soft tissue growths',
              'Apical surgery and frenectomy procedures'
            ]
          }
        ]
      },
      {
        heading: 'What to Expect & Aftercare',
        description: 'These procedures are performed under local anaesthesia, ensuring you remain comfortable throughout the treatment. Before your procedure, we explain every step and answer all your questions.\n\nAfter the extraction, you\'ll receive detailed aftercare instructions to help reduce discomfort, promote healing, and ensure a quick recovery. Most patients return to their normal routine within a day or two.'
      }
    ],
    closingNote: 'At White Crest Dental, your comfort is our priority. Using modern techniques, advanced equipment, and a gentle approach, we strive to make every tooth extraction as painless and stress-free as possible.'
  },

  'tmj-disorder': {
    title: 'TMJ Disorder',
    subtitle: 'TMJ Disorder Treatment & Jaw Pain Relief at White Crest Dental',
    overview: [
      'Do you experience pain while chewing, hear clicking sounds in your jaw, or find it difficult to open your mouth fully? These could be signs of a Temporomandibular Joint (TMJ) Disorder.',
      'The TMJ is the joint that connects your lower jaw to your skull and allows you to speak, chew, and yawn. When this joint or the surrounding muscles are not functioning properly, it can lead to pain and discomfort.',
      'At White Crest Dental, we carefully evaluate your condition to identify the possible cause of your symptoms and recommend the most appropriate treatment to relieve pain and restore normal jaw function.'
    ],
    sections: [
      {
        heading: 'What Causes TMJ Disorders?',
        items: [
          'Teeth grinding or clenching (Bruxism)',
          'Injury to the jaw or face',
          'Arthritis affecting the jaw joint',
          'Stress leading to muscle tension',
          'Bite problems or jaw misalignment',
          'Excessive strain on the jaw muscles and joints'
        ]
      },
      {
        heading: 'Common Symptoms of TMJ Disorders',
        items: [
          'Pain or tenderness in the jaw and near the joints',
          'Pain around the ears and aching facial soreness',
          'Difficulty or pain while chewing',
          'Clicking, popping, or grating sounds when opening or closing the mouth',
          'Jaw locking or difficulty opening and closing fully',
          'Frequent headaches or chronic jaw stiffness'
        ]
      },
      {
        heading: 'How We Treat TMJ Disorders',
        description: 'At White Crest Dental, treatment depends on the cause and severity of your condition. Most patients improve with conservative, non-surgical treatment:',
        items: [
          'A detailed examination of your jaw and bite',
          'Lifestyle, dietary, and posture advice',
          'Jaw exercises to improve range of motion and reduce tension',
          'Custom-made night guards for teeth grinding or clenching',
          'Medications to reduce pain and inflammation (when required)',
          'Bite adjustments or restorative dental treatment in selected cases'
        ]
      },
      {
        heading: 'When Should You Visit White Crest Dental?',
        items: [
          'Jaw pain lasting more than a few days',
          'Difficulty opening or closing your mouth',
          'Pain while chewing or speaking',
          'Frequent jaw locking',
          'Persistent clicking or popping associated with pain',
          'Recurring headaches along with jaw discomfort'
        ]
      }
    ],
    closingNote: 'At White Crest Dental, we are committed to helping you find lasting relief from jaw pain. Using a personalized approach and modern diagnostic techniques, we aim to restore comfortable jaw movement and improve your everyday quality of life.'
  },

  'dental-implants': {
    title: 'Dental Implants',
    subtitle: 'Advanced Dental Implant Solutions at White Crest Dental',
    overview: [
      'Missing one or more teeth can affect your smile, confidence, and ability to eat comfortably. At White Crest Dental, we offer advanced dental implant solutions that look, feel, and function like natural teeth.',
      'A dental implant is a small titanium post that is placed into the jawbone to replace the root of a missing tooth. Once the implant has fused with the bone, a custom-made crown, bridge, or denture is attached, giving you a strong, natural-looking, and long-lasting replacement tooth.'
    ],
    sections: [
      {
        heading: 'Why Choose Dental Implants?',
        items: [
          'Natural appearance, feel, and confidence',
          'Improved chewing efficiency and clear speech',
          'Long-lasting and durable permanent solution',
          'Helps preserve jawbone density and facial structure',
          'Prevents adjacent healthy teeth from shifting out of place',
          'Greater comfort and rock-solid stability compared to removable dentures'
        ]
      },
      {
        heading: 'Our Dental Implant Solutions',
        subsections: [
          {
            title: 'Single Tooth Implant',
            description: 'An ideal solution for replacing one missing tooth without affecting or grinding down adjacent healthy teeth.'
          },
          {
            title: 'Full Mouth Dental Implants',
            description: 'Designed for patients who have lost most or all teeth, providing a fixed, natural-looking smile with superior stability.'
          },
          {
            title: 'All-on-4 Dental Implants',
            description: 'A revolutionary technique that replaces a full arch of missing teeth using just four strategically placed implants, offering fast recovery with fewer implants.'
          },
          {
            title: 'Immediate Dental Implants',
            description: 'In selected cases, implants are placed immediately after tooth extraction, reducing overall treatment time and helping preserve bone.'
          },
          {
            title: 'TTPHIL Technique',
            description: 'Tall Tilted Pin Hole Immediate Loading allows selected patients to receive permanent fixed teeth in 2 to 9 days, ideal for patients with bone challenges or medical conditions.'
          },
          {
            title: 'Zygomatic Implants & Sinus Lifts',
            description: 'For patients with severe bone loss in the upper jaw, zygomatic implants or sinus lifts provide a secure foundation without extensive bone grafting.'
          }
        ]
      },
      {
        heading: 'Why Choose White Crest Dental for Implants?',
        items: [
          'Personalized implant treatment plans with 3D digital imaging',
          'High-grade biocompatible titanium implant systems',
          'Experienced oral surgeons and implant specialists',
          'Gentle, minimally invasive surgical techniques',
          'Predictable, long-term success rates exceeding 99%'
        ]
      }
    ],
    closingNote: 'Dental implants are one of the most successful and predictable treatments in modern dentistry. If you\'re missing one or more teeth, book a consultation at White Crest Dental today.'
  },

  'root-canals': {
    title: 'Root Canal Treatment (RCT)',
    subtitle: 'Gentle, Pain-Free Endodontic Care at White Crest Dental',
    overview: [
      'A severe toothache doesn\'t always mean your tooth needs to be removed. In many cases, a Root Canal Treatment (RCT) can save your natural tooth and eliminate the pain.',
      'At White Crest Dental, we use advanced techniques and modern equipment to perform comfortable, precise, and effective root canal treatments. Our goal is to remove the infection, relieve your pain, and preserve your natural tooth for many years.',
      'Inside every tooth is the dental pulp, containing nerves and blood vessels. When this becomes infected due to deep decay, cracks, or trauma, it causes severe pain and swelling. During treatment, the infected pulp is removed, canals are disinfected, sealed, and restored with a filling or crown.'
    ],
    sections: [
      {
        heading: 'When Do You Need a Root Canal?',
        items: [
          'Severe or continuous tooth pain',
          'Pain while chewing or biting',
          'Swelling or tenderness around the affected tooth',
          'Sensitivity to hot or cold that lingers after the stimulus is removed',
          'A dark or discoloured tooth',
          'A deep cavity that has reached the nerve',
          'A cracked or fractured tooth affecting the pulp',
          'A tooth requiring endodontic therapy before receiving a dental crown'
        ]
      },
      {
        heading: 'Benefits of Root Canal Treatment',
        items: [
          'Relieves severe tooth pain and discomfort immediately',
          'Eliminates bacterial infection from inside the tooth',
          'Saves your natural tooth from extraction',
          'Restores normal chewing and biting function',
          'Prevents the spread of infection to adjacent teeth and bone',
          'High clinical success rate exceeding 95%'
        ]
      },
      {
        heading: 'What to Expect During the Procedure',
        description: 'Root canal treatment is performed under local anaesthesia, making the procedure virtually painless and comfortable. Most treatments are completed in 1 to 2 visits.\n\nAfter removing the infection, the tooth canals are sealed with a biocompatible material and reinforced with a custom dental crown to restore its strength and appearance.'
      }
    ],
    closingNote: 'At White Crest Dental, we are committed to saving your natural teeth whenever possible. If you\'re experiencing tooth pain or swelling, don\'t wait—book your consultation today.'
  },

  'endodontic-surgery': {
    title: 'Endodontic Surgical Procedures',
    subtitle: 'Advanced Endodontic Surgery at White Crest Dental',
    overview: [
      'At White Crest Dental, our priority is to save your natural teeth whenever possible. While most dental infections can be treated with a conventional root canal treatment, some complex cases may require minor endodontic surgical procedures to remove the infection and preserve the tooth.',
      'Our experienced dental team uses advanced techniques to provide safe, comfortable, and effective surgical care.'
    ],
    sections: [
      {
        heading: 'Types of Endodontic Surgical Procedures',
        subsections: [
          {
            title: 'Root Canal Treatment (RCT)',
            description: 'The primary endodontic procedure involving removal of infected pulp, thorough disinfection of root canals, and sealing with biocompatible material to eliminate infection.'
          },
          {
            title: 'Apicoectomy (Root-End Surgery)',
            description: 'If an infection persists around the root tip after a root canal, an apicoectomy is performed to remove the infected tissue and root tip, sealing the root end to prevent reinfection.'
          },
          {
            title: 'Hemisection',
            description: 'Performed on certain multi-rooted molar teeth when only one root is damaged. The unhealthy root is surgically removed while the healthy root is preserved to maintain tooth function.'
          },
          {
            title: 'Incision and Drainage',
            description: 'When a dental infection causes painful swelling or an abscess, a small incision is made to release trapped fluid, relieve pressure, control infection, and accelerate healing.'
          },
          {
            title: 'Trephination',
            description: 'A specialized procedure performed in selected acute cases to relieve severe pressure at the root apex by creating a micro-opening for drainage.'
          }
        ]
      },
      {
        heading: 'When Are These Procedures Needed?',
        items: [
          'A persistent tooth infection after a previous root canal treatment',
          'A dental abscess or painful facial swelling',
          'Infection or cysts around the tooth root tip',
          'A damaged tooth root that cannot be treated conventionally',
          'Persistent pain despite non-surgical endodontic therapy'
        ]
      }
    ],
    closingNote: 'At White Crest Dental, we use modern technology and evidence-based techniques to treat complex dental infections while saving your natural teeth. Schedule a consultation today.'
  },

  'oral-maxillofacial-prosthesis': {
    title: 'Oral Maxillofacial Prosthesis',
    subtitle: 'Prosthodontic Treatment & Reconstruction at White Crest Dental',
    overview: [
      'A healthy smile is not just about appearance—it\'s also about being able to eat, speak, and smile with confidence. At White Crest Dental, our prosthodontic treatments are designed to replace missing or damaged teeth, restore normal function, and improve the overall appearance of your smile.',
      'Teeth can be lost due to decay, injury, gum disease, or natural wear over time. Missing teeth can affect your confidence, make chewing difficult, and even cause the remaining teeth to shift. Our goal is to restore your smile with comfortable, natural-looking, and long-lasting solutions.'
    ],
    sections: [
      {
        heading: 'Our Comprehensive Prosthodontic Services',
        subsections: [
          {
            title: 'Dental Implants & Implant Prostheses',
            description: 'Permanent titanium tooth root replacements supporting single crowns, bridges, or full-arch fixed teeth.'
          },
          {
            title: 'Crowns & Bridges',
            description: 'Custom ceramic caps and fixed bridges anchored to teeth or implants to restore structural integrity and aesthetics.'
          },
          {
            title: 'Removable Partial & Complete Dentures',
            description: 'Affordable, precision-moulded appliances that replace multiple or all missing teeth, restoring facial contour.'
          },
          {
            title: 'Full Mouth Rehabilitation',
            description: 'Multidisciplinary reconstruction combining restorative treatments to rebuild severely worn, damaged, or misaligned teeth.'
          },
          {
            title: 'Obturator Prosthesis',
            description: 'Custom prostheses designed to close palate or oral defects resulting from trauma, surgery, or congenital conditions, restoring normal speech and swallowing.'
          }
        ]
      },
      {
        heading: 'Why Choose Prosthodontic Treatment?',
        items: [
          'Replaces missing teeth with natural-looking restorations',
          'Restores comfortable chewing, biting, and clear speech',
          'Supports facial muscles and improves overall appearance',
          'Prevents remaining natural teeth from drifting out of alignment',
          'Restores self-confidence and quality of life',
          'Provides durable, customized, evidence-based dental solutions'
        ]
      }
    ],
    closingNote: 'Every smile is unique. At White Crest Dental, our prosthodontic team evaluates your oral anatomy and creates a personalized restoration plan. Book your consultation today.'
  },

  'veneers': {
    title: 'Dental Veneers',
    subtitle: 'Smile Transformation with Porcelain & Ceramic Veneers',
    overview: [
      'A beautiful smile can make a lasting impression. At White Crest Dental, dental veneers offer a simple and effective way to improve the appearance of your teeth and create a natural, confident smile.',
      'A dental veneer is a thin, custom-made shell of porcelain or ceramic that is bonded to the front surface of a tooth. Veneers are designed to improve the colour, shape, size, and overall appearance of your teeth while providing additional protection to the tooth surface.'
    ],
    sections: [
      {
        heading: 'When Are Dental Veneers Recommended?',
        items: [
          'Discoloured teeth that do not respond to traditional teeth whitening',
          'Deep intrinsic stains caused by medications or fluorosis',
          'Chipped, fractured, or worn teeth',
          'Small gaps (diastema) between teeth',
          'Teeth that are smaller than average (peg laterals)',
          'Uneven, misshapen, or pointed teeth',
          'Minor cosmetic alignment imperfections'
        ]
      },
      {
        heading: 'Benefits of Dental Veneers',
        items: [
          'Creates a brighter, perfectly proportioned, attractive smile',
          'Custom-tinted to harmonize with your facial complexion',
          'Closes small gaps and smooths uneven contours',
          'Highly resistant to stains from coffee, tea, and tobacco',
          'Requires minimal enamel preparation compared to crowns',
          'Durable and long-lasting with proper oral care (99% success rate)'
        ]
      },
      {
        heading: 'The Veneer Procedure & Care',
        description: 'Veneer treatment is typically completed in 2 to 3 appointments. After smile analysis, teeth are gently prepared, digital scans taken, and custom ceramic shells are fabricated in a dental lab. At the final visit, each veneer is bonded with high-strength resin.\n\nMaintain them with regular brushing, flossing, dental check-ups, and avoid biting on hard objects like ice or pens.'
      }
    ],
    closingNote: 'At White Crest Dental, we combine advanced cosmetic dentistry with artistic precision to craft veneers that look completely natural. Book your smile consultation today.'
  },

  'invisalign': {
    title: 'Invisalign (Clear Aligners)',
    subtitle: 'Clear Aligner Orthodontics at White Crest Dental',
    overview: [
      'Want to straighten your teeth without the look of traditional braces? At White Crest Dental, we offer clear aligner treatment, including Invisalign®, to help you achieve a straighter, healthier smile comfortably and discreetly.',
      'Clear aligners are a series of custom-made, transparent trays that gradually move your teeth into their ideal position. Each set of aligners is worn for about 1–2 weeks before progressing to the next set. Depending on your treatment plan, most patients use 15 to 30 or more aligners to achieve their desired smile.'
    ],
    sections: [
      {
        heading: 'Benefits of Clear Aligners',
        items: [
          'Nearly invisible appearance so you can smile with confidence',
          'Smooth, medical-grade plastic with no sharp metal wires or brackets',
          'Removable for eating, drinking, brushing, and flossing',
          'Easier to maintain oral hygiene without food getting trapped',
          'Fewer clinic visits compared to traditional braces',
          'Digitally planned with predictable, computer-guided tooth movement',
          'Custom-moulded for a snug, comfortable fit'
        ]
      },
      {
        heading: 'Who Is a Good Candidate for Clear Aligners?',
        items: [
          'Crooked, crowded, or rotated teeth',
          'Gaps between teeth',
          'Mild to moderate overbites, underbites, or crossbites',
          'Orthodontic relapse after previous braces treatment'
        ]
      },
      {
        heading: 'What to Expect During Treatment',
        description: 'Your journey starts with a high-definition 3D digital scan of your mouth. A customized roadmap previews your smile transformation step-by-step.\n\nAligners should be worn for 20–22 hours per day, removing them only when eating or cleaning your teeth. Most patients complete treatment within 6 to 18 months.'
      }
    ],
    closingNote: 'At White Crest Dental, we combine digital orthodontics with hands-on monitoring to deliver comfortable, discreet, and radiant results. Book your aligner scan today.'
  },

  'cosmetic-restoration': {
    title: 'Cosmetic Restoration',
    subtitle: 'Cosmetic Dentistry & Aesthetic Restorations at White Crest Dental',
    overview: [
      'A beautiful smile can boost your confidence and leave a lasting impression. At White Crest Dental, we offer a wide range of cosmetic dentistry treatments to improve the appearance of your teeth while maintaining their health and function.',
      'Whether you want a brighter smile, want to repair chipped teeth, or improve the shape and alignment of your teeth, our experienced dental team creates personalized treatment plans to help you achieve natural-looking results.'
    ],
    sections: [
      {
        heading: 'Tooth-Coloured (Cosmetic) Fillings',
        description: 'Tooth-coloured fillings are made from durable composite resin that matches the natural shade of your enamel. Unlike dark amalgam fillings, they bond seamlessly to tooth structure, providing aesthetic reinforcement.',
        items: [
          'Matches the natural translucency and shade of your teeth',
          'Restores decayed, fractured, or worn enamel',
          'Preserves more of the natural, healthy tooth structure',
          'Strong, durable, and virtually invisible when you smile',
          'Ideal for both front cosmetic zones and back chewing molars'
        ]
      },
      {
        heading: 'When Should You Consider Cosmetic Dentistry?',
        items: [
          'Missing teeth or gaps between teeth',
          'Chipped, cracked, or uneven teeth',
          'Discoloured, stained, or fluorosis-affected enamel',
          'Teeth that appear too short, too long, or misshapen',
          'Old, dark, or deteriorating fillings',
          'Teeth requiring reinforcement after root canal therapy'
        ]
      },
      {
        heading: 'Cosmetic Procedures Available at White Crest Dental',
        items: [
          'Tooth-coloured composite restorations & aesthetic bonding',
          'Professional in-office teeth whitening & bleaching',
          'Custom porcelain veneers',
          'All-ceramic & zirconia crowns',
          'Dental implants for permanent tooth replacement',
          'Comprehensive smile makeovers & clear aligners'
        ]
      }
    ],
    closingNote: 'Whether you need a minor aesthetic repair or a complete smile transformation, White Crest Dental provides artistry backed by dental science. Schedule your consultation today.'
  },

  'dental-bleaching': {
    title: 'Dental Bleaching',
    subtitle: 'Professional In-Office Teeth Whitening at White Crest Dental',
    overview: [
      'A bright, white smile can enhance your confidence and leave a lasting impression. At White Crest Dental, we offer professional in-office teeth whitening to safely and effectively remove stains and brighten your smile.',
      'Unlike over-the-counter whitening products, professional teeth whitening is performed under the direct supervision of our experienced dentists, providing faster, safer, and noticeably brighter results.'
    ],
    sections: [
      {
        heading: 'Our In-Office Whitening Procedure',
        subsections: [
          {
            title: 'Step 1 – Dental Examination & Cleaning',
            description: 'We examine your teeth and gums to ensure optimal oral health, gently removing surface plaque and calculus to ensure uniform gel contact.'
          },
          {
            title: 'Step 2 – Protecting Your Gums',
            description: 'A specialized light-cured barrier is applied to seal gums and soft oral tissues, ensuring only tooth enamel is exposed to the whitening formula.'
          },
          {
            title: 'Step 3 – Whitening Application',
            description: 'A concentrated, enamel-safe bleaching gel is applied to the teeth for 15–30 minutes, penetrating stains and lifting discoloration.'
          },
          {
            title: 'Step 4 – Revealing Your Brighter Smile',
            description: 'The gel is rinsed away, revealing an instantly brighter, cleaner, and refreshed smile that is 2 to 5 shades lighter.'
          }
        ]
      },
      {
        heading: 'Who Is a Good Candidate for Teeth Whitening?',
        items: [
          'Teeth discoloured by tea, coffee, wine, or tobacco',
          'Age-related enamel yellowing or darkening',
          'Patients wanting a quick smile upgrade before weddings or special events',
          'Healthy teeth and gums free from active cavities or periodontal disease'
        ]
      }
    ],
    closingNote: 'At White Crest Dental, we use gentle, dentist-formulated whitening treatments designed to minimize sensitivity and deliver long-lasting radiance. Book your whitening session today.'
  },

  'crown-lengthening': {
    title: 'Crown Lengthening',
    subtitle: 'Precision Gum Contouring & Tooth Exposure at White Crest Dental',
    overview: [
      'Sometimes, a tooth may not have enough visible structure above the gums to support a filling or crown. In such cases, crown lengthening is a simple surgical procedure that exposes more of the natural tooth, making it easier to restore and protect.',
      'At White Crest Dental, crown lengthening is performed with precision and care to improve both the function and appearance of your smile.'
    ],
    sections: [
      {
        heading: 'What Is Crown Lengthening?',
        description: 'Crown lengthening is a minor gum procedure in which a small amount of gum tissue, and sometimes a small amount of bone, is carefully reshaped to expose more of the natural tooth.\n\nThis procedure may be recommended to prepare a tooth for a dental crown, treat decay below the gum line, or improve the appearance of a "gummy smile."'
      },
      {
        heading: 'When Is Crown Lengthening Needed?',
        items: [
          'A tooth broken off near or below the gum line',
          'Deep tooth decay extending beneath the gum margin',
          'A tooth that is too short to provide adequate retention for a crown or filling',
          'Damaged teeth requiring additional exposed tooth structure for restoration',
          'A "gummy smile" where excess gum tissue covers the natural dental crowns'
        ]
      },
      {
        heading: 'Benefits of Crown Lengthening',
        items: [
          'Exposes healthy tooth structure for durable restorations',
          'Improves the fit, grip, and longevity of dental crowns and bridges',
          'Facilitates easier daily flossing and oral hygiene around restorations',
          'Creates a symmetrical, balanced, and aesthetically pleasing gumline',
          'Enhances both clinical tooth function and smile appearance'
        ]
      },
      {
        heading: 'What to Expect During the Procedure',
        description: 'Crown lengthening is performed under local anaesthesia, ensuring a comfortable, pain-free experience. The gum tissue is gently contoured with microscopic precision.\n\nMost patients resume normal everyday activities within 24 to 48 hours, while gums heal cleanly over the following weeks.'
      }
    ],
    closingNote: 'Whether crown lengthening is needed for restorative strength or cosmetic symmetry, our surgical team ensures predictable and comfortable results. Schedule your consultation today.'
  },

  'dental-braces': {
    title: 'Dental Braces',
    subtitle: 'Braces & Orthodontic Treatment at White Crest Dental',
    overview: [
      'A straight smile is more than just attractive—it also helps improve your oral health, makes cleaning your teeth easier, and boosts your confidence.',
      'At White Crest Dental, we offer advanced orthodontic treatments to gently move your teeth into their ideal position, giving you a healthy bite and a beautiful smile.',
      'Whether you\'re a child, teenager, or adult, our orthodontic team will create a personalized treatment plan based on your dental needs and smile goals.'
    ],
    sections: [
      {
        heading: 'What Can Braces Correct?',
        items: [
          'Crooked, crowded, or overlapping teeth',
          'Gaps and spaces between teeth',
          'Overbite (upper teeth protruding too far over lower teeth)',
          'Underbite (lower teeth sitting in front of upper teeth)',
          'Crossbite (upper teeth biting inside lower teeth)',
          'Open bite (front teeth not touching when back teeth meet)',
          'Rotated teeth and jaw alignment irregularities'
        ]
      },
      {
        heading: 'Types of Braces We Offer',
        subsections: [
          {
            title: 'Metal Braces (Traditional Braces)',
            description: 'The most proven and reliable orthodontic treatment. Uses high-grade stainless steel brackets and archwires to correct both mild and complex dental misalignments effectively and affordably.'
          },
          {
            title: 'Ceramic Braces',
            description: 'Functions just like metal braces but features tooth-coloured or translucent ceramic brackets that blend naturally with your smile, making them far less noticeable.'
          },
          {
            title: 'Clear Aligners (Invisalign®)',
            description: 'Clear, removable plastic trays that gently move teeth without wires or brackets, offering maximum freedom, comfort, and aesthetics.'
          }
        ]
      },
      {
        heading: 'What to Expect During Treatment',
        description: 'Your orthodontic treatment begins with digital photography, dental impressions, and panoramic X-rays. Based on these diagnostics, we build your personalized smile plan.\n\nRegular adjustment visits every 4–6 weeks ensure steady, healthy tooth movement. Most orthodontic treatments are successfully completed within 12 to 24 months.'
      }
    ],
    closingNote: 'At White Crest Dental, we believe everyone deserves a confident, healthy smile. Book your orthodontic consultation today and take the first step toward straighter teeth.'
  },

  'dental-crowns': {
    title: 'Dental Crowns',
    subtitle: 'Custom Dental Crowns & Caps at White Crest Dental',
    overview: [
      'A damaged or weakened tooth doesn\'t always need to be removed. In many cases, a dental crown can restore its strength, function, and natural appearance.',
      'At White Crest Dental, we provide high-quality, custom-made dental crowns that are designed to protect your tooth while blending beautifully with your smile.',
      'A dental crown is a custom-made cap that completely covers a damaged or weakened tooth. It restores the tooth\'s shape, size, strength, and appearance while protecting it from further damage.'
    ],
    sections: [
      {
        heading: 'When Do You Need a Dental Crown?',
        items: [
          'A severely damaged, cracked, or fractured tooth',
          'A large cavity that cannot be reliably supported by a filling',
          'A tooth that has undergone root canal treatment (RCT)',
          'Heavily worn down teeth due to grinding or acid erosion',
          'A misshapen or discoloured tooth requiring aesthetic correction',
          'The final protective restoration on top of a dental implant'
        ]
      },
      {
        heading: 'Types of Dental Crowns We Offer',
        subsections: [
          {
            title: 'All-Ceramic & Zirconia Crowns',
            description: 'The gold standard for natural aesthetics and biocompatibility. Made from high-strength zirconium oxide, zirconia crowns are exceptionally durable, 100% metal-free, and ideal for both front and back teeth.'
          },
          {
            title: 'Porcelain-Fused-to-Metal (PFM) Crowns',
            description: 'Combines the proven structural strength of a cast metal sub-frame with a tooth-coloured porcelain outer layer for a great balance of durability and appearance.'
          },
          {
            title: 'Metal Crowns (Gold & Alloys)',
            description: 'Extremely durable and wear-resistant crowns made from biocompatible dental alloys. Ideal for posterior molars that withstand heavy chewing forces.'
          }
        ]
      },
      {
        heading: 'What to Expect & Caring for Your Crown',
        description: 'Crown placement typically takes two visits: tooth preparation and digital impression taking during the first visit, followed by permanent cementation during the second.\n\nWith regular brushing, flossing, and check-ups, high-quality dental crowns can last 15 years or more.'
      }
    ],
    closingNote: 'At White Crest Dental, we use premium materials and digital precision to craft crowns that fit snugly and look completely natural. Book your consultation today.'
  },

  'dental-bridges': {
    title: 'Dental Bridges',
    subtitle: 'Fixed Missing Tooth Replacements at White Crest Dental',
    overview: [
      'Missing teeth can affect more than just your smile. They can make it difficult to chew, affect your speech, and cause nearby teeth to shift out of place. At White Crest Dental, we offer custom-made dental bridges to restore your smile, improve your oral function, and help you regain your confidence.',
      'A dental bridge is a fixed dental restoration used to replace one or more missing teeth. It consists of one or more artificial teeth that are securely supported by dental crowns on the neighbouring teeth or by dental implants.'
    ],
    sections: [
      {
        heading: 'Why Is It Important to Replace Missing Teeth?',
        description: 'When a tooth is lost, surrounding teeth gradually drift into the empty space, causing a domino effect of oral health challenges:',
        items: [
          'Difficulty chewing food and uneven bite distribution',
          'Changes in your bite and excessive stress on neighbouring teeth',
          'Temporomandibular joint (TMJ) discomfort and jaw fatigue',
          'Speech impediments and pronunciation difficulties',
          'Sunken facial contours and premature ageing appearance',
          'Loss of confidence when speaking and smiling'
        ]
      },
      {
        heading: 'Types of Dental Bridges',
        subsections: [
          {
            title: 'All-Ceramic & Zirconia Bridges',
            description: 'Metal-free, biocompatible bridges that offer lifelike translucency and unmatched strength, blending seamlessly with adjacent natural teeth.'
          },
          {
            title: 'Porcelain-Fused-to-Metal (PFM) Bridges',
            description: 'A durable framework combining metal core strength with aesthetic porcelain facing, suitable for both anterior and posterior gaps.'
          },
          {
            title: 'Implant-Supported Bridges',
            description: 'Fixed bridges supported directly by dental implants rather than natural teeth, ideal for long spans of missing teeth without altering adjacent enamel.'
          }
        ]
      },
      {
        heading: 'Benefits of Dental Bridges',
        items: [
          'Replaces one or more missing teeth permanently',
          'Restores natural chewing, biting, and speaking function',
          'Prevents adjacent and opposing teeth from shifting',
          'Maintains natural facial shape and lip support',
          'Fixed in place—no need to remove for cleaning or sleeping',
          'High long-term success rate exceeding 99%'
        ]
      }
    ],
    closingNote: 'At White Crest Dental, we design custom dental bridges that restore function, comfort, and aesthetic harmony. Schedule your consultation today.'
  },

  'removable-partial-dentures': {
    title: 'Removable Partial Dentures (RPD)',
    subtitle: 'Affordable, Comfortable Tooth Replacement at White Crest Dental',
    overview: [
      'If you are missing one or more teeth and are looking for an affordable, comfortable, and removable replacement option, a Removable Partial Denture (RPD) may be the ideal solution.',
      'At White Crest Dental, we design custom-made removable partial dentures that restore your smile, improve chewing, and help you speak with confidence.',
      'A removable partial denture is a custom-made appliance that replaces one or more missing teeth while fitting comfortably around your remaining natural teeth. Unlike a fixed bridge or dental implant, it can be easily taken out for cleaning and reinserted without professional assistance.'
    ],
    sections: [
      {
        heading: 'Who Can Benefit from a Removable Partial Denture?',
        items: [
          'Patients missing multiple teeth in one or both arches',
          'Individuals who are not candidates for dental implants or bone grafting',
          'Those seeking a cost-effective, non-invasive tooth replacement option',
          'Patients wanting to improve chewing efficiency and speech clarity quickly',
          'Individuals needing an easily maintainable, hygienic removable solution'
        ]
      },
      {
        heading: 'Benefits of Removable Partial Dentures',
        items: [
          'Replaces missing teeth and restores smile aesthetics',
          'Restores comfortable biting, chewing, and speech pronunciation',
          'Prevents remaining natural teeth from shifting into empty spaces',
          'Custom-moulded to your gums for a snug, secure fit',
          'Easy to remove and clean daily',
          'Cost-effective compared to fixed bridges or full implant restorations',
          'Preserves natural facial contour and prevents lip sinking'
        ]
      },
      {
        heading: 'Caring for Your Partial Denture',
        items: [
          'Remove and brush your denture daily with a soft denture brush and cleanser',
          'Maintain regular brushing and flossing for your natural teeth and gums',
          'Remove your denture while sleeping to let gum tissues rest and breathe',
          'Store in fresh water or denture soaking solution when not worn',
          'Visit White Crest Dental regularly for fit checks and minor adjustments'
        ]
      }
    ],
    closingNote: 'At White Crest Dental, our prosthetic specialists ensure your partial denture feels comfortable, fits securely, and looks natural. Book your consultation today.'
  },

  'dentures': {
    title: 'Complete Dentures',
    subtitle: 'Full-Arch Restorations & Denture Care at White Crest Dental',
    overview: [
      'Losing most or all of your teeth can affect your ability to eat, speak, and smile with confidence. At White Crest Dental, we provide custom-made complete and partial dentures that are comfortable, natural-looking, and designed to restore both function and appearance.',
      'Modern dentures are lighter, more comfortable, and more natural than ever before, helping you regain your smile and improve your quality of life.'
    ],
    sections: [
      {
        heading: 'What Are Dentures?',
        description: 'Dentures are custom removable dental prostheses designed to replace missing teeth and support adjacent facial tissues:',
        items: [
          'Complete Dentures: Recommended when all the teeth in the upper or lower jaw are missing, resting directly on the gum ridge.',
          'Partial Dentures: Used when some natural teeth remain, anchoring securely around them to fill in the missing spaces.'
        ]
      },
      {
        heading: 'Benefits of Complete Dentures',
        items: [
          'Restores a complete, confident, natural-looking smile',
          'Improves chewing ability and allows you to enjoy a varied, nutritious diet',
          'Supports lips and cheeks, reversing the sunken facial appearance caused by tooth loss',
          'Enables clearer speech and pronunciation',
          'Custom-crafted tooth shades and gum colours tailored to your features',
          'Lighter and more comfortable with modern acrylic materials'
        ]
      },
      {
        heading: 'What to Expect & Maintenance',
        subsections: [
          {
            title: 'What to Expect During Treatment',
            description: 'We carefully examine your gums and jaw ridge, taking anatomical impressions to register your exact bite relationship. After trial fittings, your custom denture is delivered and adjusted for optimal comfort.'
          },
          {
            title: 'Caring for Your Complete Dentures',
            description: 'Clean them daily using a non-abrasive denture cleanser, remove them at night to promote tissue health, soak them in water when not in use, and visit us for routine check-ups and relines.'
          }
        ]
      }
    ],
    closingNote: 'At White Crest Dental, we are dedicated to helping you smile, speak, and eat comfortably again. Schedule a consultation to explore modern denture options.'
  },

  'pediatric-restorative-dentistry': {
    title: 'Pediatric Restorative Dentistry',
    subtitle: 'Gentle, Child-Friendly Dental Care at White Crest Dental',
    overview: [
      'Healthy baby teeth are essential for your child\'s overall growth and development. They help children eat, speak, smile confidently, and guide the permanent teeth into their correct positions.',
      'At White Crest Dental, we provide gentle and child-friendly restorative treatments to protect your child\'s teeth, relieve pain, and ensure healthy dental development.'
    ],
    sections: [
      {
        heading: 'Dental Sealants',
        description: 'Dental sealants are a simple and effective way to prevent cavities in children. A thin protective coating is applied to the chewing surfaces of the back teeth, where food and bacteria often collect.',
        items: [
          'Helps prevent tooth decay and cavities',
          'Protects hard-to-clean deep grooves of growing teeth',
          'Quick, completely painless, and non-invasive procedure',
          'Provides long-lasting barrier protection for back molars'
        ]
      },
      {
        heading: 'Space Maintainers & Space Regainers',
        subsections: [
          {
            title: 'Space Maintainers',
            description: 'If a baby tooth is lost prematurely due to decay or injury, nearby teeth may drift into the empty space. A custom space maintainer keeps the gap open until the permanent tooth is ready to erupt, preventing future orthodontic crowding.'
          },
          {
            title: 'Space Regainers',
            description: 'When adjacent teeth have already drifted into the gap after premature tooth loss, a space regainer gently pushes those teeth back into their proper positions, reopening room for the incoming permanent tooth.'
          }
        ]
      },
      {
        heading: 'Pulp Therapy (Children\'s Root Canal Treatment)',
        description: 'When tooth decay reaches the inner pulp of a baby tooth, simple fillings may not suffice. Pulp therapy saves the tooth, relieves pain, and avoids premature loss.',
        subsections: [
          {
            title: 'Pulpotomy',
            description: 'Removes only the infected coronal pulp while leaving the healthy root pulp intact, preserving baby teeth until their natural exfoliation time.'
          },
          {
            title: 'Pulpectomy',
            description: 'A root canal for baby teeth where infected pulp is completely removed and canals are filled with a child-safe, resorbable material.'
          },
          {
            title: 'Indirect Pulp Capping',
            description: 'Recommended when decay is very close to the pulp but hasn\'t breached it. Medicated lining protects healthy pulp and prevents deeper invasive treatment.'
          },
          {
            title: 'Direct Pulp Capping',
            description: 'If microscopic pulp exposure occurs from injury or decay, a soothing medicated material is placed directly over the pulp to encourage dentin healing.'
          }
        ]
      },
      {
        heading: 'Pediatric Dental Crowns',
        description: 'When a primary tooth is severely damaged or weakened by decay, a pediatric crown covers the entire tooth, restoring full biting strength and function until it is naturally shed.'
      },
      {
        heading: 'Early Orthodontic Evaluation & Braces',
        description: 'Early orthodontic assessment identifies bite irregularities, crowding, jaw discrepancies, or oral habits before they worsen. Treatment options include:',
        items: [
          'Traditional metal braces',
          'Ceramic aesthetic braces',
          'Clear aligners (for selected young cases)'
        ]
      },
      {
        heading: 'When Should Your Child First Visit the Dentist?',
        description: 'The first dental visit should ideally be scheduled within six months of the first tooth erupting or by the child\'s first birthday, whichever comes first.\n\nRegular check-ups detect dental problems early and help children grow comfortable with visiting the clinic in a fun, caring atmosphere.'
      }
    ],
    closingNote: 'From preventive coatings to gentle restorative procedures, White Crest Dental provides compassionate care in a stress-free environment. Book your child\'s appointment today.'
  },

  'same-day-crowns': {
    title: 'Same-Day Crowns',
    subtitle: 'Single-Visit Digital Restorations at White Crest Dental',
    overview: [
      'Experience the convenience of modern dentistry with Same-Day Crowns at White Crest Dental. Using advanced CEREC CAD/CAM technology, we design, mill, and place custom ceramic crowns in a single appointment.',
      'No messy impression trays, no fragile temporary crowns, and no waiting weeks for a dental lab—just a strong, beautiful restoration completed while you relax.'
    ],
    sections: [
      {
        heading: 'Benefits of Same-Day CEREC Crowns',
        items: [
          'Complete treatment in just one single dental visit',
          'Digital 3D optical scans instead of messy impression putty',
          'Milled from a solid block of high-grade, biocompatible ceramic',
          'Eliminates the need for temporary crowns that can break or fall off',
          'Matches the natural colour, shape, and translucency of your teeth'
        ]
      }
    ],
    closingNote: 'Save time without compromising quality. Contact White Crest Dental today to see if same-day crowns are right for your smile.'
  },

  'teeth-whitening': {
    title: 'Teeth Whitening',
    subtitle: 'Professional Smile Brightening at White Crest Dental',
    overview: [
      'A bright smile radiates health and vitality. At White Crest Dental, our professional whitening procedures safely lift stains caused by coffee, tea, wine, and ageing.',
      'Under the supervision of our dentists, you achieve fast, predictable brightening without damaging your enamel.'
    ],
    sections: [
      {
        heading: 'Why Choose Professional Whitening?',
        items: [
          'Noticeably whiter teeth in as little as 45 minutes',
          'Dentist-monitored application to protect gums and enamel',
          'Formulations designed to minimize tooth sensitivity',
          'Longer lasting results compared to over-the-counter strips'
        ]
      }
    ],
    closingNote: 'Reveal your brightest smile with professional care at White Crest Dental. Book your appointment today.'
  },

  'preventive-care': {
    title: 'Preventive Care',
    subtitle: 'Lifelong Oral Health Foundations at White Crest Dental',
    overview: [
      'At White Crest Dental, prevention is at the heart of everything we do. Routine check-ups, cleanings, and diagnostic evaluations stop dental issues before they become painful or costly.',
      'Our preventative care programs are tailored to your unique oral health profile, helping you maintain a strong, natural smile for decades.'
    ],
    sections: [
      {
        heading: 'Core Preventive Services',
        items: [
          'Comprehensive dental examinations and digital low-radiation X-rays',
          'Professional scaling and polishing to remove plaque and tartar',
          'Oral cancer screenings and gum pocket measurements',
          'Fluoride treatments and dental sealants for cavity prevention',
          'Personalized oral hygiene coaching and diet guidance'
        ]
      }
    ],
    closingNote: 'Protect your smile investment with routine preventive care at White Crest Dental.'
  },

  'full-mouth-rehab': {
    title: 'Full Mouth Rehab',
    subtitle: 'Comprehensive Smile Reconstruction at White Crest Dental',
    overview: [
      'Full mouth rehabilitation is a customized treatment plan that combines restorative, cosmetic, and neuromuscular dentistry to rebuild a severely compromised smile.',
      'Whether caused by severe wear, trauma, extensive decay, or tooth loss, our multidisciplinary team restores complete chewing function, jaw alignment, and aesthetics.'
    ],
    sections: [
      {
        heading: 'What Does Full Mouth Rehab Involve?',
        items: [
          'Comprehensive 3D diagnostic scans and bite relationship analysis',
          'Dental crowns, bridges, and implant restorations',
          'Periodontal therapy and bone restoration where needed',
          'Correction of bite alignment and relief of TMJ stress',
          'Harmonious aesthetic design for a natural, rejuvenated smile'
        ]
      }
    ],
    closingNote: 'Regain full chewing ability, pain-free jaw function, and a radiant smile. Schedule your full mouth consultation today.'
  }
};
