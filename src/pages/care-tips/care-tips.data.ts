export interface CareTipSection {
  heading: string;
  lead?: string;
  items?: string[];
  subsections?: {
    title: string;
    description: string;
    items?: string[];
  }[];
  closing?: string;
}

export interface CareTipKeyPoint {
  number: number;
  title: string;
  description: string;
  highlight?: string;
  subDetails?: {
    label: string;
    items: string[];
  }[];
}

export interface CareTipArticle {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  category: string;
  readTime: string;
  publishDate: string;
  featuredImage: string;
  excerpt: string;
  featured?: boolean;
  author: {
    name: string;
    role: string;
  };
  introParagraphs: string[];
  keyPointsHeading?: string;
  keyPoints?: CareTipKeyPoint[];
  sections?: CareTipSection[];
  mattersSection?: {
    heading: string;
    lead: string;
    items: string[];
    closing: string;
  };
  clinicHelpSection?: {
    heading: string;
    text: string;
  };
  conclusion?: {
    heading: string;
    text: string;
    ctaText: string;
  };
}

export const CARE_TIPS_ARTICLES: CareTipArticle[] = [
  {
    id: '1',
    slug: '10-signs-you-should-visit-a-dentist-immediately',
    title: '10 Signs You Should Visit a Dentist Immediately',
    subtitle: 'Early detection protects your natural teeth, relieves discomfort, and prevents costly emergencies.',
    category: 'Warning Signs',
    readTime: '5 min read',
    publishDate: 'Clinical Guide',
    featured: true,
    featuredImage: 'https://picsum.photos/seed/dentalemergency/1200/600',
    excerpt: 'Most dental problems do not go away on their own. Learn the top 10 warning symptoms that require immediate professional dental attention.',
    author: {
      name: 'White Crest Dental Clinical Team',
      role: 'Preventive & Restorative Dentistry'
    },
    introParagraphs: [
      'Most dental problems don\'t go away on their own. In fact, delaying treatment often allows a small issue to become a bigger—and more expensive—problem.',
      'At White Crest Dental, we believe that early diagnosis and timely treatment can save your teeth, relieve pain, and prevent future complications. If you\'re experiencing any of the following signs, it\'s time to schedule a dental appointment without delay.'
    ],
    keyPointsHeading: '10 Critical Signs to Watch For',
    keyPoints: [
      {
        number: 1,
        title: 'Persistent Toothache',
        description: 'A toothache that lasts more than a day or two should never be ignored. Pain may be caused by tooth decay, infection, a cracked tooth, or gum disease. The sooner the problem is diagnosed, the easier it is to treat.',
        highlight: 'Lasts more than 24-48 hours'
      },
      {
        number: 2,
        title: 'Bleeding or Swollen Gums',
        description: 'Healthy gums should not bleed when you brush or floss. Bleeding, swelling, redness, or tenderness may be early signs of gum disease. If treated early, gum disease can often be reversed and prevented from progressing.',
        highlight: 'Sign of early gum disease (gingivitis)'
      },
      {
        number: 3,
        title: 'Sensitivity to Hot or Cold Foods',
        description: 'If you experience sharp pain when drinking hot tea or eating ice cream, it could be due to enamel wear, tooth decay, a cracked tooth, or an exposed tooth root. Persistent sensitivity should be evaluated by a dentist.',
        highlight: 'Sharp thermal triggers'
      },
      {
        number: 4,
        title: 'Bad Breath That Doesn\'t Go Away',
        description: 'Occasional bad breath is common, but persistent bad breath may be caused by plaque buildup, gum disease, tooth decay, or an underlying oral infection. Professional dental care can help identify and treat the cause.',
        highlight: 'Chronic halitosis or unpleasant taste'
      },
      {
        number: 5,
        title: 'A Broken, Chipped, or Cracked Tooth',
        description: 'Even if a broken tooth doesn\'t hurt, it should be examined as soon as possible. Cracks can allow bacteria to enter the tooth, leading to infection or further damage.',
        highlight: 'Immediate bacterial hazard'
      },
      {
        number: 6,
        title: 'Loose Teeth',
        description: 'Adult teeth should never become loose. Mobility can be a sign of advanced gum disease, bone loss, or trauma. Early treatment may help save the affected tooth.',
        highlight: 'Requires urgent periodontal evaluation'
      },
      {
        number: 7,
        title: 'Mouth Sores That Don\'t Heal',
        description: 'Most mouth ulcers heal within one to two weeks. If a sore, white patch, or red patch persists beyond two weeks, it\'s important to have it examined to rule out more serious conditions.',
        highlight: 'Persists beyond 14 days'
      },
      {
        number: 8,
        title: 'Jaw Pain or Clicking',
        description: 'Pain while chewing, difficulty opening your mouth, or frequent clicking and popping of the jaw may indicate a temporomandibular joint (TMJ) disorder. Early evaluation can help prevent worsening symptoms.',
        highlight: 'Potential TMJ disorder'
      },
      {
        number: 9,
        title: 'Missing or Lost Filling, Crown, or Bridge',
        description: 'If a filling, crown, or bridge becomes loose or falls out, don\'t wait. Delaying treatment can expose the tooth to bacteria and increase the risk of fracture or infection.',
        highlight: 'Exposed tooth vulnerable to fractures'
      },
      {
        number: 10,
        title: 'It\'s Been More Than Six Months Since Your Last Check-up',
        description: 'Even if you have no pain or visible problems, regular dental check-ups are essential. Many dental issues, including cavities and gum disease, develop silently before symptoms appear. Routine examinations help detect problems early, making treatment simpler and more affordable.',
        highlight: 'Routine prevention saves teeth'
      }
    ],
    mattersSection: {
      heading: 'Why Early Dental Care Matters',
      lead: 'Ignoring dental problems can lead to:',
      items: [
        'More severe and debilitating pain',
        'Deep-seated tooth and bone infections',
        'Advanced periodontal (gum) disease',
        'Irreversible tooth loss',
        'More complex, invasive, and costly treatments'
      ],
      closing: 'Seeking dental care at the first sign of a problem helps protect your oral health and often prevents the need for extensive procedures later.'
    },
    clinicHelpSection: {
      heading: 'How White Crest Dental Can Help',
      text: 'At White Crest Dental, we provide comprehensive dental examinations using modern diagnostic technology to identify problems early and recommend the most appropriate treatment for your needs. Whether you\'re experiencing tooth pain, bleeding gums, sensitivity, or simply need a routine check-up, our experienced team is here to help.'
    },
    conclusion: {
      heading: 'Don\'t Ignore the Warning Signs',
      text: 'Your teeth and gums often give early warning signs when something isn\'t right. Paying attention to these symptoms and seeking timely dental care can make a significant difference to your long-term oral health. If you\'re experiencing any of these signs, book an appointment with White Crest Dental today. Early treatment is the key to a healthier smile.',
      ctaText: 'Schedule Your Exam Today'
    }
  },
  {
    id: '2',
    slug: 'common-dental-problems-and-how-to-prevent-them',
    title: 'Common Dental Problems and How to Prevent Them',
    subtitle: 'A comprehensive guide to identifying, treating, and preventing the 10 most common oral health issues.',
    category: 'Preventive Care',
    readTime: '6 min read',
    publishDate: 'Preventive Guide',
    featured: false,
    featuredImage: 'https://picsum.photos/seed/commondentalissues/1200/600',
    excerpt: 'From tooth decay and gum disease to bruxism and sensitivity, learn the symptoms, root causes, and proactive habits that protect your teeth.',
    author: {
      name: 'White Crest Dental Clinical Team',
      role: 'General & Preventive Dentistry'
    },
    introParagraphs: [
      'Good oral health is essential for a healthy smile and overall well-being. While many dental problems are common, most of them can be prevented with proper oral hygiene and regular dental check-ups.',
      'At White Crest Dental, we believe that prevention is the key to maintaining healthy teeth and gums. Understanding the most common dental problems and how to avoid them can help you protect your smile for years to come.'
    ],
    keyPointsHeading: '10 Common Dental Problems & How to Avoid Them',
    keyPoints: [
      {
        number: 1,
        title: 'Tooth Decay (Cavities)',
        description: 'Tooth decay is one of the most common dental problems. It occurs when bacteria in the mouth produce acids that damage the tooth enamel, leading to cavities.',
        highlight: 'Enamel demineralization',
        subDetails: [
          {
            label: 'Common Signs',
            items: [
              'Toothache or persistent throbbing',
              'Sensitivity to hot, cold, or sweet foods',
              'Visible holes, pits, or dark spots on teeth',
              'Discomfort or pain while chewing'
            ]
          },
          {
            label: 'How to Prevent It',
            items: [
              'Brush twice a day with fluoride toothpaste.',
              'Floss daily to remove interdental plaque.',
              'Limit sugary foods, candies, and sodas.',
              'Drink plenty of water throughout the day.',
              'Visit your dentist regularly for check-ups and cleanings.'
            ]
          }
        ]
      },
      {
        number: 2,
        title: 'Gum Disease',
        description: 'Gum disease begins with plaque buildup around the gums. If left untreated, it can progress from mild inflammation (gingivitis) to a more serious condition called periodontitis, which may lead to tooth loss.',
        highlight: 'Gingivitis to Periodontitis',
        subDetails: [
          {
            label: 'Common Signs',
            items: [
              'Bleeding gums while brushing or flossing',
              'Red, tender, or swollen gums',
              'Persistent bad breath (halitosis)',
              'Loose or shifting teeth'
            ]
          },
          {
            label: 'How to Prevent It',
            items: [
              'Brush and floss thoroughly every single day.',
              'Schedule regular professional cleanings.',
              'Avoid smoking and tobacco products.',
              'Follow your dentist\'s oral hygiene recommendations.'
            ]
          }
        ]
      },
      {
        number: 3,
        title: 'Tooth Sensitivity',
        description: 'Sensitive teeth can cause sharp pain when consuming hot, cold, sweet, or acidic foods and drinks.',
        highlight: 'Exposed dentin tubules',
        subDetails: [
          {
            label: 'Common Causes',
            items: [
              'Worn tooth enamel from aggressive brushing',
              'Gum recession exposing root surfaces',
              'Undetected tooth decay or cavities',
              'Cracked or chipped teeth'
            ]
          },
          {
            label: 'How to Prevent It',
            items: [
              'Use a soft-bristled toothbrush.',
              'Avoid brushing too hard or using abrasive pastes.',
              'Use toothpaste designed for sensitive teeth.',
              'Seek professional dental care if sensitivity persists.'
            ]
          }
        ]
      },
      {
        number: 4,
        title: 'Bad Breath (Halitosis)',
        description: 'Occasional bad breath is normal, but persistent bad breath may indicate an underlying dental problem.',
        highlight: 'Chronic bacterial buildup',
        subDetails: [
          {
            label: 'Common Causes',
            items: [
              'Poor oral hygiene and tongue coating',
              'Gum disease and periodontal pockets',
              'Tooth decay and neglected cavities',
              'Dry mouth (xerostomia)',
              'Food particles trapped between teeth'
            ]
          },
          {
            label: 'How to Prevent It',
            items: [
              'Brush your teeth and tongue twice daily.',
              'Floss every day before sleeping.',
              'Stay well-hydrated with water.',
              'Visit your dentist for professional cleanings and examinations.'
            ]
          }
        ]
      },
      {
        number: 5,
        title: 'Broken or Cracked Teeth',
        description: 'Teeth can crack or break due to accidents, biting hard foods, or teeth grinding.',
        highlight: 'Structural tooth trauma',
        subDetails: [
          {
            label: 'How to Prevent It',
            items: [
              'Avoid chewing ice, popcorn kernels, or very hard foods.',
              'Wear an athletic mouthguard during sports.',
              'Use a custom night guard if you grind your teeth.',
              'Never use your teeth to open packages, tags, or bottles.'
            ]
          }
        ]
      },
      {
        number: 6,
        title: 'Teeth Grinding (Bruxism)',
        description: 'Many people grind or clench their teeth, often during sleep, without realizing it.',
        highlight: 'Nighttime clenching & wear',
        subDetails: [
          {
            label: 'Common Signs',
            items: [
              'Jaw pain, soreness, or tightness',
              'Morning headaches or neck strain',
              'Worn, flattened, or chipped enamel',
              'Heightened tooth sensitivity'
            ]
          },
          {
            label: 'How to Prevent It',
            items: [
              'Practice stress management and relaxation techniques.',
              'Wear a custom-fitted night guard prescribed by your dentist.',
              'Visit your dentist if you notice jaw discomfort or tooth wear.'
            ]
          }
        ]
      },
      {
        number: 7,
        title: 'Missing Teeth',
        description: 'Missing teeth can affect your ability to chew, speak, and smile confidently. They may also cause neighbouring teeth to shift out of position.',
        highlight: 'Bite collapse & bone loss',
        subDetails: [
          {
            label: 'Common Causes',
            items: [
              'Advanced tooth decay',
              'Periodontal gum disease',
              'Physical trauma or sports injury',
              'Therapeutic tooth extraction'
            ]
          },
          {
            label: 'How to Prevent & Address It',
            items: [
              'Maintain excellent oral hygiene.',
              'Treat dental problems early before tooth loss occurs.',
              'Wear protective mouthguards during athletic activities.',
              'Replace missing teeth promptly with dental implants, bridges, or dentures.'
            ]
          }
        ]
      },
      {
        number: 8,
        title: 'Stained or Discoloured Teeth',
        description: 'Teeth can become stained over time due to certain foods, beverages, smoking, or ageing.',
        highlight: 'Extrinsic & intrinsic stains',
        subDetails: [
          {
            label: 'Common Causes',
            items: [
              'Frequent consumption of tea and coffee',
              'Tobacco and cigarette use',
              'Red wine, colas, and dark sauces',
              'Inadequate plaque removal'
            ]
          },
          {
            label: 'How to Prevent It',
            items: [
              'Brush regularly after meals.',
              'Rinse your mouth with water after staining beverages.',
              'Avoid tobacco products completely.',
              'Consider professional in-office teeth whitening.'
            ]
          }
        ]
      },
      {
        number: 9,
        title: 'Wisdom Tooth Problems',
        description: 'Wisdom teeth may not have enough space to erupt properly, leading to pain, swelling, or infection.',
        highlight: 'Impaction & crowding',
        subDetails: [
          {
            label: 'Common Signs',
            items: [
              'Pain at the back of the jaw',
              'Swollen, tender gum tissue over erupting molars',
              'Difficulty opening the mouth fully',
              'Food getting trapped around the wisdom tooth'
            ]
          },
          {
            label: 'How to Prevent It',
            items: [
              'Regular dental examinations and digital X-rays to monitor eruption.',
              'Timely preventive extraction if impaction or crowding is diagnosed.'
            ]
          }
        ]
      },
      {
        number: 10,
        title: 'Oral Infections',
        description: 'Untreated cavities or gum disease can lead to serious dental infections that may cause pain, swelling, and difficulty eating.',
        highlight: 'Abscess & systemic risk',
        subDetails: [
          {
            label: 'How to Prevent It',
            items: [
              'Never ignore persistent tooth pain or facial swelling.',
              'Seek professional treatment as soon as symptoms appear.',
              'Complete all recommended dental treatments (e.g. root canals, restorations).',
              'Maintain regular bi-annual dental check-ups.'
            ]
          }
        ]
      }
    ],
    sections: [
      {
        heading: 'Healthy Habits for a Healthy Smile',
        lead: 'You can greatly reduce your risk of dental problems by following these simple daily habits:',
        items: [
          'Brush your teeth twice a day with fluoride toothpaste.',
          'Floss once daily to clean tight spaces between teeth.',
          'Eat a balanced diet and limit sugary snacks and beverages.',
          'Drink plenty of water to maintain protective saliva flow.',
          'Avoid smoking and all tobacco products.',
          'Wear an athletic mouthguard during sports activities.',
          'Visit your dentist every six months for a check-up and professional cleaning.'
        ]
      }
    ],
    clinicHelpSection: {
      heading: 'Why Choose White Crest Dental?',
      text: 'At White Crest Dental, we focus on preventive dentistry to help you avoid dental problems before they become serious. Our experienced team uses modern technology and personalized treatment plans to keep your smile healthy, comfortable, and beautiful.'
    },
    conclusion: {
      heading: 'Prevention Is the Best Treatment',
      text: 'Most dental problems can be prevented with good oral hygiene and regular dental care. By taking care of your teeth today, you can avoid pain, protect your oral health, and enjoy a confident smile for years to come. Book your preventive dental check-up at White Crest Dental today and let us help you keep your smile healthy for life.',
      ctaText: 'Book a Preventive Check-Up'
    }
  },
  {
    id: '3',
    slug: 'how-often-should-you-get-your-teeth-cleaned',
    title: 'How Often Should You Get Your Teeth Cleaned?',
    subtitle: 'The essential guide to professional cleanings, check-up intervals, and avoiding costly dental emergencies.',
    category: 'Preventive Care',
    readTime: '6 min read',
    publishDate: 'Hygiene & Check-up Guide',
    featured: false,
    featuredImage: 'https://picsum.photos/seed/teethcleaningfrequency/1200/600',
    excerpt: 'Understand recommended cleaning frequencies, what happens during cleanings and check-ups, and the 7 major benefits of routine preventive care.',
    author: {
      name: 'White Crest Dental Hygiene & Diagnostic Team',
      role: 'Preventive & Periodontal Care'
    },
    introParagraphs: [
      'Brushing and flossing every day are essential for maintaining good oral health, but they are not enough to remove all the plaque and tartar that build up over time. That\'s why professional teeth cleaning is an important part of keeping your smile healthy.',
      'At White Crest Dental, we recommend regular professional cleanings to help prevent cavities, gum disease, and other dental problems before they become serious.'
    ],
    sections: [
      {
        heading: 'How Often Should You Have Your Teeth Cleaned?',
        lead: 'For most people, a professional dental cleaning is recommended every six months.\n\nHowever, the ideal frequency depends on your individual oral health. Some patients may benefit from more frequent cleanings, while others with excellent oral health may only need them as advised by their dentist.'
      },
      {
        heading: 'You May Need More Frequent Cleanings If You:',
        lead: 'Your dentist may recommend cleaning every 3 to 4 months if you:',
        items: [
          'Have gum disease (gingivitis or periodontitis)',
          'Experience frequent plaque or tartar build-up',
          'Have diabetes or certain medical conditions',
          'Smoke or use tobacco products',
          'Wear braces or other orthodontic appliances',
          'Have dental implants or multiple crowns',
          'Are prone to cavities',
          'Have persistent bad breath'
        ],
        closing: 'Regular cleanings help control bacteria, reduce inflammation, and maintain healthy gums.'
      },
      {
        heading: 'What Happens During a Professional Teeth Cleaning?',
        lead: 'At White Crest Dental, your cleaning appointment may include:',
        subsections: [
          {
            title: '1. Dental Examination',
            description: 'Before cleaning, our dentist will examine your teeth and gums to identify any signs of cavities, gum disease, or other oral health concerns.'
          },
          {
            title: '2. Scaling',
            description: 'Using specialized instruments, plaque and hardened tartar are gently removed from above and below the gum line. This helps prevent tooth decay and gum disease.'
          },
          {
            title: '3. Polishing',
            description: 'After scaling, your teeth are polished using a professional polishing paste to remove surface stains and leave your teeth feeling smooth and clean.'
          },
          {
            title: '4. Oral Hygiene Guidance',
            description: 'Our dental team will also provide personalized advice on brushing techniques, flossing, and dietary habits to help you maintain a healthy smile at home.'
          }
        ]
      },
      {
        heading: 'Why Is Professional Teeth Cleaning Important?',
        lead: 'Regular professional cleaning offers many benefits, including:',
        items: [
          'Removes plaque and tartar that brushing cannot remove',
          'Helps prevent cavities and tooth decay',
          'Reduces the risk of gum disease',
          'Freshens your breath naturally',
          'Removes surface stains for a brighter smile',
          'Helps detect dental problems early',
          'Supports your overall health'
        ]
      },
      {
        heading: 'What Happens If You Skip Dental Cleanings?',
        lead: 'Without regular professional cleaning, plaque can harden into tartar, which cannot be removed with a toothbrush alone. Over time, this can lead to:',
        items: [
          'Tooth decay and cavities',
          'Bleeding gums',
          'Gum disease (periodontitis)',
          'Persistent bad breath',
          'Tooth sensitivity to hot and cold',
          'Loose teeth due to bone loss',
          'Tooth loss'
        ],
        closing: 'Preventive care is always easier, more comfortable, and more affordable than treating advanced dental problems.'
      },
      {
        heading: 'Does Teeth Cleaning Hurt?',
        lead: 'Professional teeth cleaning is generally a comfortable procedure. If you have sensitive teeth or inflamed gums, you may experience mild discomfort during the cleaning, but our team will ensure the procedure is as gentle and comfortable as possible.'
      },
      {
        heading: 'Tips to Keep Your Teeth Clean Between Visits',
        lead: 'To maintain healthy teeth and gums:',
        items: [
          'Brush your teeth twice a day with fluoride toothpaste.',
          'Floss once daily.',
          'Limit sugary foods and drinks.',
          'Drink plenty of water.',
          'Avoid smoking and tobacco products.',
          'Visit your dentist regularly for check-ups and cleanings.'
        ]
      },
      {
        heading: 'What Happens During a Routine Dental Check-up?',
        lead: 'Many people visit the dentist only when they have a toothache or a dental emergency. However, regular dental check-ups are one of the best ways to keep your teeth and gums healthy and avoid costly treatments in the future.\n\nAt White Crest Dental, we believe that prevention is always better than cure. A routine dental check-up allows us to detect problems early, provide timely treatment, and help you maintain a healthy, confident smile.\n\nDuring your visit, our dentists will:',
        items: [
          'Examine your teeth for cavities and tooth decay',
          'Check your gums for signs of gum disease',
          'Look for cracked, broken, or worn teeth',
          'Assess existing fillings, crowns, and other dental work',
          'Check your bite and jaw joints (TMJ)',
          'Screen for oral infections and other abnormalities',
          'Take digital X-rays if required for a more detailed diagnosis',
          'Recommend the best treatment or preventive care if needed'
        ],
        closing: 'Our goal is to identify any dental concerns before they become painful or complicated.'
      }
    ],
    keyPointsHeading: '7 Major Benefits of Regular Dental Check-ups',
    keyPoints: [
      {
        number: 1,
        title: 'Detect Problems Early',
        description: 'Many dental issues, such as cavities and gum disease, begin without noticeable symptoms. Regular check-ups allow your dentist to find these problems early, when they are easier and less expensive to treat.'
      },
      {
        number: 2,
        title: 'Prevent Tooth Decay',
        description: 'Small cavities can often be treated with simple fillings. If left untreated, they may progress and require root canal treatment, crowns, or even tooth extraction.'
      },
      {
        number: 3,
        title: 'Keep Your Gums Healthy',
        description: 'Healthy gums are the foundation of healthy teeth. Regular examinations help detect early signs of gum disease before it causes permanent damage.'
      },
      {
        number: 4,
        title: 'Professional Teeth Cleaning',
        description: 'Even with excellent brushing and flossing, plaque can harden into tartar, which cannot be removed at home. Professional cleaning removes plaque and tartar, helping prevent cavities, gum disease, and bad breath.'
      },
      {
        number: 5,
        title: 'Maintain Your Dental Work',
        description: 'If you have fillings, crowns, bridges, dentures, or dental implants, routine check-ups help ensure they remain in good condition and continue to function properly.'
      },
      {
        number: 6,
        title: 'Protect Your Overall Health',
        description: 'Your oral health is closely connected to your overall health. Gum disease has been linked to several medical conditions, including diabetes and heart disease. Maintaining good oral health supports your overall well-being.'
      },
      {
        number: 7,
        title: 'Save Time and Money',
        description: 'Preventive care is usually simpler, quicker, and more affordable than treating advanced dental problems. Regular check-ups can help you avoid extensive procedures in the future.'
      }
    ],
    mattersSection: {
      heading: 'Don\'t Wait Until You Feel Pain',
      lead: 'Many dental conditions develop silently and may not cause pain until they become advanced. Waiting until you have discomfort often means the problem has already progressed.',
      items: [
        'Cavities progress silently through enamel into deeper dentin',
        'Plaque tartar causes painless early bone loss around tooth roots',
        'Micro-fractures can split teeth unexpectedly under chewing forces',
        'Old restorations can leak without producing immediate ache'
      ],
      closing: 'Regular dental check-ups help identify issues early, allowing for simpler, quicker, and more comfortable treatment.'
    },
    clinicHelpSection: {
      heading: 'Why Choose White Crest Dental?',
      text: 'At White Crest Dental, we combine modern diagnostic technology with personalized, patient-focused care to ensure every visit is comfortable and thorough. Whether it\'s your routine check-up or your first dental visit, our experienced team is committed to helping you achieve lifelong oral health.'
    },
    conclusion: {
      heading: 'Keep Your Smile Healthy',
      text: 'A healthy smile starts with regular dental care. By scheduling routine check-ups, you can prevent dental problems, maintain healthy teeth and gums, and enjoy greater peace of mind. Book your routine dental check-up at White Crest Dental today and take the first step toward a healthier, brighter smile.',
      ctaText: 'Book Your Cleaning & Check-up'
    }
  },
  {
    id: '4',
    slug: 'the-ultimate-daily-oral-hygiene-routine',
    title: 'The Ultimate Daily Routine: Brushing, Flossing & Rinsing Right',
    subtitle: 'Simple everyday habits recommended by dentists to keep plaque at bay and enamel resilient.',
    category: 'Preventive Care',
    readTime: '4 min read',
    publishDate: 'Daily Hygiene Guide',
    featured: false,
    featuredImage: 'https://picsum.photos/seed/brushingguide/800/500',
    excerpt: 'Learn the 2-minute brushing technique, proper angle for dental floss, and why alcohol-free antimicrobial rinses preserve gum health.',
    author: {
      name: 'White Crest Dental Preventive Team',
      role: 'Dental Hygiene & Therapy'
    },
    introParagraphs: [
      'Brushing and flossing daily is the cornerstone of dental health, yet more than 70% of adults use improper techniques that miss key plaque accumulation zones.',
      'Developing a consistent morning and night routine protects against enamel erosion, calculus buildup, and chronic bad breath.'
    ],
    keyPointsHeading: '4 Pillars of Daily Home Hygiene',
    keyPoints: [
      {
        number: 1,
        title: 'Brush for a Full Two Minutes Twice Daily',
        description: 'Use a soft-bristled toothbrush angled at 45 degrees towards the gum line. Gently clean outer, inner, and chewing surfaces using short circular strokes.'
      },
      {
        number: 2,
        title: 'Floss Before Bedtime Every Single Day',
        description: 'Flossing cleans the tight contact zones between teeth that bristles cannot reach. Curve the floss into a C-shape against each tooth and glide gently beneath the gum margin.'
      },
      {
        number: 3,
        title: 'Don\'t Forget Your Tongue',
        description: 'Bacteria heavily colonize the textured surface of the tongue. Gently brush or scrape your tongue from back to front to significantly reduce halitosis.'
      },
      {
        number: 4,
        title: 'Rinse with Fluoride or Antimicrobial Mouthwash',
        description: 'An alcohol-free mouth rinse reaches lingering bacteria in crevices, strengthens enamel, and keeps gums calm and healthy.'
      }
    ],
    conclusion: {
      heading: 'Consistency Equals Longevity',
      text: 'Good home care combined with bi-annual professional cleanings ensures your natural teeth stay strong and functional throughout your life.',
      ctaText: 'Book a Professional Cleaning'
    }
  },
  {
    id: '5',
    slug: 'how-to-protect-and-maintain-veneers-and-crowns',
    title: 'How to Protect and Maintain Porcelain Veneers & Dental Crowns',
    subtitle: 'Maximize the beauty and lifespan of your cosmetic and restorative smile investments.',
    category: 'Aesthetics & Restorations',
    readTime: '4 min read',
    publishDate: 'Restoration Care',
    featured: false,
    featuredImage: 'https://picsum.photos/seed/veneerscare/800/500',
    excerpt: 'Essential maintenance dos and don\'ts to prevent chipping, staining, and margin decay around ceramic restorations.',
    author: {
      name: 'White Crest Prosthodontic Team',
      role: 'Cosmetic & Restorative Dentistry'
    },
    introParagraphs: [
      'Porcelain veneers and zirconia crowns are engineered to be remarkably durable and natural-looking, but they still require dedicated care to last for decades.',
      'Understanding what to avoid and how to clean around restored margins protects your investment and maintains a radiant smile.'
    ],
    keyPointsHeading: 'Key Guidelines for Restorations',
    keyPoints: [
      {
        number: 1,
        title: 'Avoid Biting Hard Non-Food Objects',
        description: 'Never use your teeth as tools to open plastic packaging, tear tags, or bite on ice cubes, pens, or fingernails, which can chip porcelain margins.'
      },
      {
        number: 2,
        title: 'Wear a Protective Night Guard if You Clench or Grind',
        description: 'Nighttime bruxism places tremendous pressure on restorations. A custom-fitted acrylic night guard cushions teeth and prevents structural fractures.'
      },
      {
        number: 3,
        title: 'Use Non-Abrasive Toothpaste',
        description: 'Abrasive whitening pastes containing baking soda or charcoal can scratch the glazed luster of ceramic over time. Choose gentle fluoride pastes.'
      },
      {
        number: 4,
        title: 'Keep Gum Margins Impeccably Clean',
        description: 'While porcelain itself cannot decay, the underlying tooth root at the margin can. Regular flossing and hygiene visits prevent margin cavities.'
      }
    ],
    conclusion: {
      heading: 'Keep Your Smile Looking Brand New',
      text: 'With sensible habits and routine dental checkups, your veneers and crowns can comfortably provide decades of confident smiles.',
      ctaText: 'Consult Our Cosmetic Specialists'
    }
  },
  {
    id: '6',
    slug: 'managing-sudden-tooth-sensitivity',
    title: 'Managing Sudden Tooth Sensitivity: Causes and At-Home Relief',
    subtitle: 'Why sudden hot and cold twinges occur and when it signals a deeper clinical issue.',
    category: 'Patient Guidance',
    readTime: '3 min read',
    publishDate: 'Symptom Guide',
    featured: false,
    featuredImage: 'https://picsum.photos/seed/toothsensitivity/800/500',
    excerpt: 'Understand why dentin tubules become exposed and how desensitizing formulas relieve discomfort while awaiting your visit.',
    author: {
      name: 'White Crest Dental Clinical Team',
      role: 'Endodontics & Restorative Care'
    },
    introParagraphs: [
      'A sudden jolt of pain when drinking cold water or hot soup is one of the most common reasons patients seek urgent dental advice.',
      'Sensitivity occurs when tooth enamel thins or gums recede, leaving microscopic dentin tubules exposed to temperature extremes.'
    ],
    keyPointsHeading: 'Steps to Soothe Sensitive Teeth',
    keyPoints: [
      {
        number: 1,
        title: 'Switch to a Potassium Nitrate Desensitizing Toothpaste',
        description: 'Desensitizing toothpastes work by calming nerve endings inside dentin tubules. Brush gently twice daily without rinsing immediately with water.'
      },
      {
        number: 2,
        title: 'Avoid Acidic Foods and Carbonated Beverages',
        description: 'Citrus fruits, sodas, and sports drinks contain acids that soften enamel and exacerbate nerve sensitivity.'
      },
      {
        number: 3,
        title: 'Check for Clenching or Stress-Induced Grinding',
        description: 'Heavy biting forces can cause microscopic flexure at the tooth neck (abfraction), exposing sensitive dentin.'
      },
      {
        number: 4,
        title: 'When to See a Dentist Promptly',
        description: 'If sensitivity lingers for more than 10 seconds after heat or cold is removed, or occurs spontaneously, it may indicate pulpitis or a cracked tooth requiring immediate clinical care.'
      }
    ],
    conclusion: {
      heading: 'Relief is Within Reach',
      text: 'Don\'t suffer in silence from sensitive teeth. Our team can pinpoint the exact cause and apply long-lasting desensitizing varnishes or restorations.',
      ctaText: 'Schedule a Sensitivity Exam'
    }
  }
];
