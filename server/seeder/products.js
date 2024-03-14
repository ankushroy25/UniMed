const products = [
  {
    name: "Amoxicillin",
    description:
      "Amoxicillin is an antibiotic used to treat a wide range of bacterial infections.",
    category: "Antibiotics",
    price: 50.0,
    rating: 4.3,
    images: [{ path: "/images/medicine-1.jpg" }],
  },
  {
    name: "Ciprofloxacin",
    description:
      "Ciprofloxacin is a broad-spectrum antibiotic used to treat various bacterial infections.",
    category: "Antibiotics",
    price: 45.0,
    rating: 4.1,
    images: [{ path: "/images/medicine-2.jpg" }],
  },
  {
    name: "Crocin",
    description:
      "Crocin is a commonly used analgesic (pain reliever) and antipyretic (fever reducer).",
    category: "Analgesics",
    price: 15.0,
    rating: 4.2,
    images: [{ path: "/images/medicine-5.jpg" }],
  },
  {
    name: "Paracetamol",
    description:
      "Paracetamol is a commonly used analgesic (pain reliever) and antipyretic (fever reducer).",
    category: "Analgesics",
    price: 20.0,
    rating: 4.5,
    images: [{ path: "/images/medicine-13.jpg" }],
  },

  {
    name: "Acetaminophen",
    description:
      "Acetaminophen is a medication used to treat pain and reduce fever.",
    category: "Antipyretics",
    price: 10.0,
    rating: 4.6,
    images: [{ path: "path/to/acetaminophen.jpg" }],
  },
  {
    name: "Betadine",
    description:
      "Betadine is a brand of antiseptic solution used for wound cleansing.",
    category: "Antiseptics",
    price: 25.0,
    rating: 4.6,
    images: [{ path: "path/to/betadine.jpg" }],
  },
  {
    name: "Chlorhexidine",
    description:
      "Chlorhexidine is an antiseptic commonly used for skin disinfection before surgery and to sterilize surgical instruments.",
    category: "Antiseptics",
    price: 30.0,
    rating: 4.7,
    images: [{ path: "path/to/chlorhexidine.jpg" }],
  },
  {
    name: "Acyclovir",
    description:
      "Acyclovir is an antiviral medication used to treat herpes virus infections including shingles and genital herpes.",
    category: "Antivirals",
    price: 35.0,
    rating: 4.2,
    images: [{ path: "path/to/acyclovir.jpg" }],
  },
  {
    name: "Oseltamivir",
    description:
      "Oseltamivir is an antiviral medication used to treat and prevent influenza A and B viruses.",
    category: "Antivirals",
    price: 40.0,
    rating: 4.4,
    images: [{ path: "path/to/oseltamivir.jpg" }],
  },
  {
    name: "Fluconazole",
    description:
      "Fluconazole is an antifungal medication used to treat a variety of fungal infections.",
    category: "Antifungals",
    price: 25.0,
    rating: 4.0,
    images: [{ path: "path/to/fluconazole.jpg" }],
  },
  {
    name: "Ketoconazole",
    description:
      "Ketoconazole is an antifungal medication used to treat various fungal infections.",
    category: "Antifungals",
    price: 30.0,
    rating: 4.2,
    images: [{ path: "path/to/ketoconazole.jpg" }],
  },
  {
    name: "Ranitidine",
    description:
      "Ranitidine is an antacid medication used to treat and prevent ulcers in the stomach and intestines.",
    category: "Antacids",
    price: 25.0,
    rating: 4.0,
    images: [{ path: "path/to/ranitidine.jpg" }],
  },
  {
    name: "Aluminum Hydroxide",
    description:
      "Aluminum Hydroxide is an antacid used to relieve heartburn, acid indigestion, and upset stomach.",
    category: "Antacids",
    price: 18.0,
    rating: 4.3,
    images: [{ path: "path/to/aluminum_hydroxide.jpg" }],
  },
  {
    name: "Ibuprofen",
    description:
      "Ibuprofen is a nonsteroidal anti-inflammatory drug (NSAID) used to relieve pain and reduce fever.",
    category: "Anti-inflammatory drugs",
    price: 15.0,
    rating: 4.4,
    images: [{ path: "path/to/ibuprofen.jpg" }],
  },
  {
    name: "Diclofenac",
    description:
      "Diclofenac is a nonsteroidal anti-inflammatory drug (NSAID) used to relieve pain, swelling, and inflammation.",
    category: "Anti-inflammatory drugs",
    price: 18.0,
    rating: 4.3,
    images: [{ path: "path/to/diclofenac.jpg" }],
  },
  {
    name: "Warfarin",
    description:
      "Warfarin is an anticoagulant medication used to prevent blood clots.",
    category: "Anticoagulants",
    price: 40.0,
    rating: 4.5,
    images: [{ path: "path/to/warfarin.jpg" }],
  },
  {
    name: "Heparin",
    description:
      "Heparin is an anticoagulant medication used to prevent blood clots.",
    category: "Anticoagulants",
    price: 35.0,
    rating: 4.6,
    images: [{ path: "path/to/heparin.jpg" }],
  },
  {
    name: "Sertraline",
    description:
      "Sertraline is an antidepressant medication used to treat depression, obsessive-compulsive disorder (OCD), panic disorder, post-traumatic stress disorder (PTSD), social anxiety disorder (social phobia), and premenstrual dysphoric disorder (PMDD).",
    category: "Antidepressants",
    price: 45.0,
    rating: 4.7,
    images: [{ path: "path/to/sertraline.jpg" }],
  },
  {
    name: "Fluoxetine",
    description:
      "Fluoxetine is an antidepressant medication used to treat depression, obsessive-compulsive disorder (OCD), bulimia nervosa, panic disorder, and premenstrual dysphoric disorder (PMDD).",
    category: "Antidepressants",
    price: 50.0,
    rating: 4.8,
    images: [{ path: "path/to/fluoxetine.jpg" }],
  },
  {
    name: "Gabapentin",
    description:
      "Gabapentin is an anticonvulsant medication used to treat epilepsy and neuropathic pain.",
    category: "Anticonvulsants",
    price: 27.0,
    rating: 4.5,
    images: [{ path: "path/to/gabapentin.jpg" }],
  },
  {
    name: "Carbamazepine",
    description:
      "Carbamazepine is an anticonvulsant medication used to treat epilepsy, bipolar disorder, and trigeminal neuralgia.",
    category: "Anticonvulsants",
    price: 22.0,
    rating: 4.3,
    images: [{ path: "path/to/carbamazepine.jpg" }],
  },
  {
    name: "Loratadine",
    description:
      "Loratadine is an antihistamine medication used to treat allergy symptoms such as sneezing, runny nose, and itching.",
    category: "Antihistamines",
    price: 15.0,
    rating: 4.4,
    images: [{ path: "path/to/loratadine.jpg" }],
  },
  {
    name: "Cetirizine",
    description:
      "Cetirizine is an antihistamine medication used to treat allergy symptoms such as sneezing, runny nose, and itching.",
    category: "Antihistamines",
    price: 12.0,
    rating: 4.3,
    images: [{ path: "path/to/cetirizine.jpg" }],
  },
  {
    name: "Amlodipine",
    description:
      "Amlodipine is an antihypertensive medication used to treat high blood pressure and chest pain (angina).",
    category: "Antihypertensive drugs",
    price: 20.0,
    rating: 4.5,
    images: [{ path: "path/to/amlodipine.jpg" }],
  },
  {
    name: "Losartan",
    description:
      "Losartan is an angiotensin II receptor blocker (ARB) used to treat high blood pressure and heart failure.",
    category: "Antihypertensive drugs",
    price: 22.0,
    rating: 4.6,
    images: [{ path: "path/to/losartan.jpg" }],
  },
  {
    name: "Salbutamol",
    description:
      "Salbutamol is a bronchodilator medication used to treat asthma, chronic obstructive pulmonary disease (COPD), and other lung conditions.",
    category: "Bronchodilators",
    price: 18.0,
    rating: 4.4,
    images: [{ path: "path/to/salbutamol.jpg" }],
  },
  {
    name: "Formoterol",
    description:
      "Formoterol is a long-acting bronchodilator used to treat asthma and chronic obstructive pulmonary disease (COPD).",
    category: "Bronchodilators",
    price: 25.0,
    rating: 4.7,
    images: [{ path: "path/to/formoterol.jpg" }],
  },
  {
    name: "Furosemide",
    description:
      "Furosemide is a diuretic medication used to treat fluid build-up due to heart failure, liver scarring, or kidney disease.",
    category: "Diuretics",
    price: 15.0,
    rating: 4.2,
    images: [{ path: "path/to/furosemide.jpg" }],
  },
  {
    name: "Hydrochlorothiazide",
    description:
      "Hydrochlorothiazide is a diuretic medication used to treat high blood pressure and fluid retention (edema).",
    category: "Diuretics",
    price: 12.0,
    rating: 4.3,
    images: [{ path: "path/to/hydrochlorothiazide.jpg" }],
  },
  {
    name: "Levonorgestrel",
    description:
      "Levonorgestrel is a hormonal medication used in a number of birth control methods.",
    category: "Hormonal drugs",
    price: 30.0,
    rating: 4.5,
    images: [{ path: "path/to/levonorgestrel.jpg" }],
  },
  {
    name: "Ethinyl Estradiol",
    description:
      "Ethinyl Estradiol is a hormonal medication used in various birth control methods and in menopausal hormone therapy.",
    category: "Hormonal drugs",
    price: 35.0,
    rating: 4.6,
    images: [{ path: "path/to/ethinyl_estradiol.jpg" }],
  },
  {
    name: "Mycophenolate Mofetil",
    description:
      "Mycophenolate Mofetil is an immunosuppressant medication used to prevent organ rejection after a transplant.",
    category: "Immunosuppressants",
    price: 60.0,
    rating: 4.4,
    images: [{ path: "path/to/mycophenolate_mofetil.jpg" }],
  },
  {
    name: "Tacrolimus",
    description:
      "Tacrolimus is an immunosuppressant medication used to prevent organ rejection after a transplant.",
    category: "Immunosuppressants",
    price: 70.0,
    rating: 4.6,
    images: [{ path: "path/to/tacrolimus.jpg" }],
  },
  {
    name: "Cyclobenzaprine",
    description:
      "Cyclobenzaprine is a muscle relaxant used to treat muscle spasms and discomfort.",
    category: "Muscle relaxants",
    price: 25.0,
    rating: 4.2,
    images: [{ path: "path/to/cyclobenzaprine.jpg" }],
  },
  {
    name: "Baclofen",
    description:
      "Baclofen is a muscle relaxant used to treat muscle spasticity.",
    category: "Muscle relaxants",
    price: 30.0,
    rating: 4.5,
    images: [{ path: "path/to/baclofen.jpg" }],
  },
  {
    name: "Diazepam",
    description:
      "Diazepam is a sedative medication used to treat anxiety, alcohol withdrawal, and muscle spasms.",
    category: "Sedatives",
    price: 20.0,
    rating: 4.3,
    images: [{ path: "path/to/diazepam.jpg" }],
  },
  {
    name: "Lorazepam",
    description:
      "Lorazepam is a sedative medication used to treat anxiety disorders and seizure disorders.",
    category: "Sedatives",
    price: 18.0,
    rating: 4.4,
    images: [{ path: "path/to/lorazepam.jpg" }],
  },
  {
    name: "Caffeine",
    description:
      "Caffeine is a stimulant that works by stimulating the central nervous system.",
    category: "Stimulants",
    price: 10.0,
    rating: 4.6,
    images: [{ path: "path/to/caffeine.jpg" }],
  },
  {
    name: "Methylphenidate",
    description:
      "Methylphenidate is a stimulant medication used to treat attention deficit hyperactivity disorder (ADHD) and narcolepsy.",
    category: "Stimulants",
    price: 15.0,
    rating: 4.7,
    images: [{ path: "path/to/methylphenidate.jpg" }],
  },
  {
    name: "Influenza Vaccine",
    description: "The influenza vaccine protects against influenza viruses.",
    category: "Vaccines",
    price: 50.0,
    rating: 4.8,
    images: [{ path: "path/to/influenza_vaccine.jpg" }],
  },
  {
    name: "Measles, Mumps, and Rubella Vaccine",
    description:
      "The measles, mumps, and rubella (MMR) vaccine protects against measles, mumps, and rubella.",
    category: "Vaccines",
    price: 60.0,
    rating: 4.9,
    images: [{ path: "path/to/mmr_vaccine.jpg" }],
  },
];

module.exports = products;
