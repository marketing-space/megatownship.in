import {
  Car,
  Home,
  ImageIcon,
  IndianRupee,
  LayoutPanelTop,
  MapPin,
  Phone,
  Trees,
  Video,
} from "lucide-react";
import { routes } from "./routes";

const route = routes.GeraJOTT;

export const geraConfig = {
  name: "Gera Joy on Tree Tops",
  about:
    "At Gera Developments, we build more than just homes—we create landmarks that redefine the way people live and work. With a steadfast commitment to Trust, Quality, and Innovation, we put our customers first in everything we do. Gera’s Joy on Tree Tops (JoTT) in Hinjewadi is a testament to this philosophy, offering India’s only ChildCentric® Homes with exclusive celebrity learning academies. Designed for families seeking luxury, growth, and well-being, JoTT blends premium living with thoughtfully curated spaces for holistic development. Guided by our ‘Let’s Outdo’ philosophy, we don’t just meet expectations—we exceed them, ensuring every home we build enriches lives.",
  contact: {
    phone: "+919619095795",
    whatsapp: "+919619095795",
    email: "sales@narangprivado.com",
    address: "Hinjawadi, Pune, Maharashtra 411045",
  },
  gtmId: "GTM-5X888888",
  navbar: {
    navItems: [
      {
        href: `/${route}/#home`,
        label: "Home",
        icon: Home,
      },
      {
        href: `/${route}/#pricing`,
        label: "Price",
        icon: IndianRupee,
      },
      {
        href: `/${route}/#sitefloorplan`,
        label: "Site & Floor Plan",
        icon: LayoutPanelTop,
      },
      {
        href: `/${route}/#amenities`,
        label: "Amenities",
        icon: Trees,
      },
      {
        href: `/${route}/#gallery`,
        label: "Gallery",
        icon: ImageIcon,
      },
      {
        href: `/${route}/#location`,
        label: "Location",
        icon: MapPin,
      },
      {
        href: `/${route}/#sitevisit`,
        label: "Virtual Site Visit",
        icon: Video,
      },
    ],
    cta: {
      title: "Download Brochure",
      description:
        "Download the brochure to learn more about Gera Joy on Tree Tops",
    },
  },

  branding: {
    logo: "/gerajott/images/logo.png",
    favicon: "/icon.png",
    ogImage: "/og-image.jpg",
  },

  hero: {
    banners: [
      {
        src: "/gerajott/images/B1.jpg",
        alt: "Gera Joy on Tree Tops",
      },
      {
        src: "/gerajott/images/B2.jpg",
        alt: "Gera Joy on Tree Tops",
      },
      {
        src: "/gerajott/images/B3.jpg",
        alt: "Gera Joy on Tree Tops"  ,
      },
    ],
    welcome: {
      cta: {
        title: "Download Brochure",
        description:
          "Download the brochure to learn more about Gera Joy on Tree Tops.",
      },
      title: "Welcome to Gera JoTT",
      description: `Discover Unmatched Luxury and Innovation at Gera Winds of Joy
      Welcome to Gera Winds of Joy, Pune’s tallest residential tower, where modern families experience a perfect blend of luxury and convenience. Designed with a child-centric approach, these exceptional homes are complemented by the GeraWorld app, providing residents with effortless access to over 40 state-of-the-art amenities, including round-the-clock grocery and medical services at the podium level. This iconic development stands out with an industry-leading 7-year warranty, Gera Homes Equity Power, the highest credit rating, and ISO certification—guaranteeing quality, security, and peace of mind.

      Spread across 10.7 acres, Gera Winds of Joy consists of seven majestic towers rising up to 33 floors, offering a total of 1,703 premium units. Phase 1 features five towers with 1,051 units, while Phase 2 includes two towers with 652 units. Experience a lifestyle where luxury meets convenience at Gera Winds of Joy.`,
    },
    offer: {
      title: "Booking Open",
      location: "At Hinjawadi, Pune",
      points: [
        { text: "Pay only 1% Every Month No Price Hike" },
        { text: "No Pre-EMI Until June 2026" },
        { text: "Spot Booking Offer Upto 1.5 Lac*" },
      ],
      cta: {
        title: "Enquire Now",
        description: "Schedule at your convenience",
      },
      features: [
        {
          title: "Land Parcel",
          value: "10.7 Acres",
        },
        {
          title: "Storeys",
          value: "G+32",
        },
        {
          title: "Possesion",
          value: "Dec 2028 ",
        },
      ],
      price: {
        title: "Opulent 2 & 3 BHK Starting At",
        value: "81.9 Lacs",
        suffix: "Onwards",
      },
    },
  },

  pricing: {
    title: "Pricing Plans",
    description:
      "Choose from our range of luxurious 1, 2, 3 BHK residences, each designed to offer the perfect blend of comfort and sophistication",
    prices: [
      {
        type: "2 BHK Grand",
        carpetArea: "753 sq.ft",
        price: "81.9 Lacs",
        suffix: "Onwards",
      },
      {
        type: "2 BHK Royal",
        carpetArea: "855 Sq.ft",
        price: "90.90 Lacs",
        suffix: "Onwards",
      },
      {
        type: "2 BHK Duplex",
        carpetArea: "898 Sq.ft",
        price: "98.90 Lacs*",
        suffix: "Onwards",
      },
      {
        type: "3 BHK Grand",
        carpetArea: "1100 Sq.ft",
        price: "1.12 Cr*",
        suffix: "Onwards",
      },
      {
        type: "3 BHK Royal",
        carpetArea: "1215 Sq.ft",
        price: "1.33 Cr*",
        suffix: "Onwards",
      },
      {
        type: "3 BHK Duplex",
        carpetArea: "1218 Sq.ft",
        price: "1.41 Cr*",
        suffix: "Onwards",
      },
    ],
    cta: {
      title: "Price Breakup",
      description: "Request complete pricing information",
    },
    detailPricing: {
      image: {
        src: "/gerajott/images/costing.webp",
        alt: "Gera Joy on Tree Tops",
      },
      title: "Need Complete Costing Details?",
      description:
        "Download our detailed cost breakdown including all charges and payment plans",
      cta: {
        title: "Get Price Details",
        description: "Request complete pricing information",
      },
    },
  },

  siteAndFloorPlan: {
    title: "Site & Floor Plan",
    description:
      "Explore our thoughtfully designed layouts that maximize space and comfort",
    masterPlan: {
      title: "Master Plan",
      image: {
        src: "/gerajott/images/gera-jott-master-layout.webp",
        alt: "Master Plan",
      },
      cta: {
        title: "View Master Plan",
        description: "Explore the layout of Gera Joy on Tree Tops",
      },
    },
    floorPlans: {
      categories: ["All", "2 BHK", "3 BHK"],
      title: "Floor Plans",
      plans: [
        {
          type: "2 BHK-787 Sq.ft.",
          image: "/gerajott/images/2-BHK-DUPLEX-01.jpg",
          category: "2 BHK",
        },
        {
          type: "2 BHK-695 Sq.ft.",
          image: "/gerajott/images/2-BHK-GRAND-TYPE-1-01.jpg",
          category: "2 BHK",
        },
        {
          type: "2 BHK-732 Sq.ft.",
          image: "/gerajott/images/2-BHK-GRAND-TYPE-2-01.jpg",
          category: "2 BHK",
        },
        {
          type: "2 BHK-787 Sq.ft.",
          image: "/gerajott/images/2-BHK-ROYAL-TYPE-1.jpg",
          category: "2 BHK",
        },
        {
          type: "2 BHK-800 Sq.ft.",
          image: "/gerajott/images/2-BHK-ROYAL-TYPE-2.jpg",
          category: "2 BHK",
        },
        {
          type: "3 BHK-952 Sq.ft.",
          image: "/gerajott/images/3-BHK-GRAND-TYPE-1-01.jpg",
          category: "3 BHK",
        },
        {
          type: "3 BHK-980 Sq.ft.",
          image: "/gerajott/images/3-BHK-GRAND-TYPE-2-01.jpg",
          category: "3 BHK",
        },
        {
          type: "3 BHK-1101 Sq.ft.",
          image: "/gerajott/images/3-BHK-ROYAL-TYPE-1.jpg",
          category: "3 BHK",
        },
        {
          type: "3 BHK-1123 Sq.ft.",
          image: "/gerajott/images/3-BHK-ROYAL-TYPE-2.jpg",
          category: "3 BHK",
        },
      ],
      cta: {
        title: "Enquire Now",
        description: "Explore the layout of Gera Joy on Tree Tops",
      },
    },
  },

  amenities: {
    title: "Amenities",
    description:
      "Discover a lifestyle enriched with premium amenities and facilities",
    cta: {
      title: "Download Amenities",
      description: "Download the amenities of Gera Joy on Tree Tops",
    },
    amenities: [
      {
        title: "Training Room",
        image: "/gerajott/images/amenities/Training-Room_.jpg",
        description: "",
      },
      {
        title: "Dance Room",
        image: "/gerajott/images/amenities/Dance-Room_.jpg",
        description: "",
      },
      {
        title: "Creche",
        image: "/gerajott/images/amenities/Creche_.jpg",
        description: "",
      },
      {
        title: "Reflexology Path with Seating",
        image: "/gerajott/images/amenities/Reflexology-Path-with-Seating_.jpg",
        description: "",
      },
      {
        title: "Toddlers' Play Area",
        image: "/gerajott/images/amenities/Toddlers-Play-Area_.jpg",
        description: "",
      },
      {
        title: "Futsal Court",
        image: "/gerajott/images/amenities/Futsal-Court_.jpg",
        description: "",
      },
      {
        title: "Art Room",
        image: "/gerajott/images/amenities/Art-Room_.jpg",
        description: "",
      },
      {
        title: "Library",
        image: "/gerajott/images/amenities/library.png",
        description: "",
      },
      {
        title: "Floral Garden",
        image: "/gerajott/images/amenities/floralgardens_01.webp",
        description: "",
      },
      {
        title: "Gym",
        image: "/gerajott/images/amenities/gym_01.webp",
        description: "",
      },
      {
        title: "Jogging Track",
        image: "/gerajott/images/amenities/joggingpath_1.webp",
        description: "",
      },
      {
        title: "Party Lawn",
        image: "/gerajott/images/amenities/partylawn_1.webp",
        description: "",
      },
    ],
    stats: {
      title: "32+ World-Class Amenities",
      description: "Everything you need for a luxurious lifestyle",
    },
  },

  gallery: {
    title: "Gallery",
    description:
      "Experience luxury living through our carefully curated spaces",
    cta: {
      title: "Download Gallery",
      description: "Download the gallery of Gera Joy on Tree Tops",
    },
    images: [
      {
        title: "",
        image: "/gerajott/images/gallery/Gallery1.webp",
        description: "Elegantly designed living spaces with premium finishes",
      },
      {
        title: "",
        image: "/gerajott/images/gallery/Gallery2.webp",
        description: "Breathtaking views of landscaped gardens",
      },
      {
        title: "",
        image: "/gerajott/images/gallery/Gallery3.webp",
        description: "Resort-style pool with premium amenities",
      },
      {
        title: "",
        image: "/gerajott/images/gallery/Gallery4.webp",
        description: "Spacious bedrooms with modern aesthetics",
      },
      {
        title: "",
        image: "/gerajott/images/gallery/Gallery5.webp",
        description: "Spacious bedrooms with modern aesthetics",
      },
      {
        title: "",
        image: "/gerajott/images/gallery/Gallery6.webp",
        description: "Spacious bedrooms with modern aesthetics",
      },
    ],
  },

  map: {
    title: "Location",
    description: "Strategically located for your convenience",
    googleMapIframe: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d60510.99334871803!2d73.684691!3d18.576875!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bbdbb12c8f37:0xa42a762628a5ffec!2sGera\'s Joy on the Treetops, Hinjawadi Phase III!5e0!3m2!1sen!2sus!4v1747386024005!5m2!1sen!2sus",

    image: {
      src: "/gerajott/images/map.webp",
      alt: "Location Map",
    },
    landmarks: [
      {
        title: "Megapolis Metro Station",
        description: "5 minutes",
      },
      {
        title: "Pawar Public School",
        description: "5 minutes",
      },
      {
        title: "TCS",
        description: "5 minutes",
      },
      {
        title: "Hinjewadi IT Hub",
        description: "20 minutes",
      },
      {
        title: "Pune Airport",
        description: "50 minutes",
      },
      {
        title: "Pune Railway Station",
        description: "45 minutes",
      },
    ],
    location: {
      title: "Location Details",
      cta: {
        title: "Get Location",
        description: "Get detailed information about this location",
      },
    },
  },

  virtualTour: {
    title: "Virtual Tour Request",
    description: "Experience Gera Joy on Tree Tops from the comfort of your home",
    cta: {
      title: "Request Virtual Tour",
      description: "Schedule at your convenience",
    },
    image: {
      src: "/gerajott/images/B1.webp",
      alt: "Virtual Tour",
    },
    videoTitle: "Virtual Tour",
    videoDescription:
      "Experience Gera Joy on Tree Tops from the comfort of your home",
    features: [
      {
        title: "360° Views",
        description: "Explore every corner of our property in detail",
      },
      {
        title: "Live Interaction",
        description: "Real-time guidance from our property experts",
      },
      {
        title: "Flexible Timing",
        description: "Schedule your tour at your convenience",
      },
    ],
  },

  footer: {
    termsConditions: { href: `/${route}/terms-conditions` },
    privacyPolicy: { href: `/${route}/privacy-policy` },
    cookiesPolicy: { href: `/${route}/cookies-policy` },
  },

  enquire: {
    title: "Get The Best Quote",
    bookFreeVisit: {
      image: {
        src: "/gerajott/images/ride.png",
        alt: "Book a Site Visit",
      },
      cta: {
        title: "Book A Free Site Visit",
        description: "Schedule at your convenience",
      },
    },

    callUs: {
      title: "Call Us",
      description: "Get in touch with our experts",
      phone: "+91 96190 95795",
    },
    enquiryFeatures: [
      {
        icon: Phone,
        title: "Instant Call Back",
        description: "Get a call from our experts",
      },
      {
        icon: Car,
        title: "Free Site Visit",
        description: "Schedule at your convenience",
      },
      {
        icon: IndianRupee,
        title: "Unmatched Price",
        description: "Best offers guaranteed",
      },
    ],
  },

  legal: {
    rera: {
      title: "RERA Information",
      description:
        "Gera Joy on Tree Tops has been registered via MahaRERA registration number: P52100054608 and is available on the website <a href='https://maharera.mahaonline.gov.in/'>https://maharera.mahaonline.gov.in/</a> under registered projects.",
      details: [
        {
          title: "Gera Joy on Tree Tops",
          reraNumber: "Project Maha RERA - P52100054608",
          qrCode: "/gerajott/images/barcode-1.jpeg",
        },
      ],
    },
    legalInfo: [
      {
        title: "Project Registration",
        description:
          "Project Registered under Government of India RERA Act 2016",
      },
      {
        title: "Authorised Advertiser",
        description:
          "Government RERA Authorised Advertiser's: Marketing Space Pvt Ltd, Registration No A51700000595, CIN U74999MH2016PTC288144.",
      },
      {
        title: "RERA Numbers",
        description:
          "RERA Project Registration No.: P52100054608 | P52100077635",
      },
      {
        title: "Site Address",
        description:
          "Gera JOTT: Phase 3 Hinjawadi, Pune",
      },
    ],
    disclaimer:
      "The content is for information purposes only and does not constitute an offer to avail of any service. Prices mentioned are subject to change without notice and properties mentioned are subject to availability. Images for representation purposes only. This is the official website of authorized marketing partner. We may also send updates to the mobile number/email id registered with us. All Rights Reserved.",
  },

  seo: {
    title: "Gera Joy on Tree Tops | Luxury Apartments in Pune",
    description:
      "Experience luxury living at Gera Joy on Tree Tops, Thane. 2 & 3 BHK apartments with world-class amenities.",
    keywords: [
      "luxury apartments",
      "Pune",
      "Gera Joy on Tree Tops",
      "2 bhk",
      "3 bhk",
    ],
  },

  termsAndConditions: {
    seo: {
      title: "Gera Joy on Tree Tops | Terms & Conditions",
      description:
        "Please read these terms and conditions carefully before using our website.",
    },
    title: "Terms & Conditions",
    description:
      "Please read these terms and conditions carefully before using our website.",
    paragraphs: [
      {
        title: "",
        description:
          "By using our website, you agree to abide by the rules laid out by us and consent to collection and use of all such information that you may furnish to, or through, our website. In some cases, while you visit our website, you may not need to provide any personal information. But in certain instances, we must have your personal information in order for us to grant you access to some of the links or sites. Such links/ pages may ask for your name, e-mail address, phone number etc. The information furnished by you is used to provide relevant products and services and to acknowledge receipt of your communication or to send out information and updates to you. You have option of requesting removal from our mailing list. We do not give away your personal information to any third party",
      },
      {
        title: "Security",
        description:
          "To ensure security while transferring sensitive information, all the ongoing transmissions between client and server are encrypted using advanced and standard protocols. We also practice restricted access by employees and hold them to high levels of confidentiality.",
      },
      {
        title: "Disclosing Information",
        description:
          "We do not disclose any personal information obtained about you from this website to third parties unless you permit us to do so by ticking the relevant boxes in registration or competition forms. We may also use the information to keep in contact with you and inform you of developments associated with us. You will be given the opportunity to remove yourself from any mailing list or similar device. If at any time in the future we should wish to disclose information collected on this website to any third party, it would only be with your knowledge and consent. We may from time to time provide information of a general nature to third parties - for example, the number of individuals visiting our website or completing a registration form, but we will not use any information that could identify those individuals. In addition, Marketing-Space may work with third parties for the purpose of delivering targeted behavioural advertising to the Marketing Space website. Through the use of cookies, anonymous information about your use of our websites and other websites will be used to provide more relevant adverts about goods and services of interest to you. For more information on online behavioural advertising and about how to turn this feature off, please visit https://marketing-space.in.",
      },
    ],
  },

  privacyPolicy: {
    seo: {
      title: "Gera Joy on Tree Tops | Privacy Policy",
      description: "This policy explains how we use your personal information.",
    },
    title: "Privacy Policy",
    description: "This policy explains how we use your personal information.",
    paragraphs: [
      {
        title: "",
        description:
          "In our endeavour and commitment of protecting your personal information, we have designed this comprehensive privacy policy. This is to keep your interests and information safe on our website.",
      },
      {
        title: "Updation of Privacy Policy",
        description:
          "This privacy policy is subject to undergo change and review without any prior notice or approval. So to keep yourself updated on the changes introduced, please keep visiting and reviewing the terms and conditions of this privacy policy.",
      },
    ],
  },

  cookiesPolicy: {
    seo: {
      title: "Gera Joy on Tree Tops | Cookies Policy",
      description:
        "This policy explains how we use cookies and similar technologies on our website.",
    },
    title: "Cookies Policy",
    description:
      "This policy explains how we use cookies and similar technologies on our website.",
    paragraphs: [
      {
        title: "",
        description:
          "Your Internet browser has the in-built facility for storing small files - 'cookies' - that hold information which allows a website to recognise your account. Our website takes advantage of this facility to enhance your experience. You have the ability to prevent your computer from accepting cookies but, if you do, certain functionality on the website may be impaired.",
      },
      {
        title: "",
        description:
          "We may use cookies for security, session continuity, and customization purposes. In case of a user opting to reject a cookie, he/ she may not be able to gain access to some of the limited services or use some features of the site. In case of any queries or suggestions regarding privacy statement or your dealings with this web site, please contact us.updates to you. Also, you hold an option of requesting removal from our mailing list. We do not share your personal information with any third party.",
      },
    ],
  },

  thankYou: {
    seo: {
      title: "Gera Joy on Tree Tops | Thank You",
      description: "Thank you for your interest in Gera Joy on Tree Tops",
    },
  },

  formSubmission: {
    crm: {
      formId: "vtigerWebForm_128",
      publicId: "f4e0ba0b701280f39a39661355597ecb",
      baseUrl: "https://company133638.od2.vtiger.com",
      __vtrftk: "sid:d0b203e8fb8ff53c5b3673fb24119e03ae930517,1680088576",
      __vtCurrency: "1",
      name: "Gera Hinjewadi",
      cfLeadsProjectSite: "Swaminarayan City",
      leadSource: "Web",
      emailOptin: "1",
    },
    email: {
      apiEndpoint: "/api/send-email",
      template: {
        subject: "New Enquiry from Gera Joy on Tree Tops",
      },
    },
  },
};

export type GeraSiteConfig = typeof geraConfig;
