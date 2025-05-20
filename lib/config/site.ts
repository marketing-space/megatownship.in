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

const route = routes.default;

export const siteConfig = {
  name: "Runwal 25 Hour Life",
  about:
    "Founded in 1978, Runwal Group excels in establishing sprawling residential complexes, retail shopping malls, and commercial spaces. With a mission of developing standout landmarks rather than mere living spaces, Runwal homes are known for their aesthetic designs, plush interiors, and central green landscaping. Over the course of 40 years, the firm has become a leading face in real estate and changed the Mumbai skyline.",
  contact: {
    phone: "+919619095795",
    whatsapp: "+919619095795",
    address: "Thane West, Mumbai, Maharashtra 400615",
  },
  gtmId: "GTM-5X888888",
  navbar: {
    navItems: [
      {
        href: `${route}/#home`,
        label: "Home",
        icon: Home,
      },
      {
        href: `${route}/#pricing`,
        label: "Price",
        icon: IndianRupee,
      },
      {
        href: `${route}/#sitefloorplan`,
        label: "Site & Floor Plan",
        icon: LayoutPanelTop,
      },
      {
        href: `${route}/#amenities`,
        label: "Amenities",
        icon: Trees,
      },
      {
        href: `${route}/#gallery`,
        label: "Gallery",
        icon: ImageIcon,
      },
      {
        href: `${route}/#location`,
        label: "Location",
        icon: MapPin,
      },
      {
        href: `${route}/#sitevisit`,
        label: "Virtual Site Visit",
        icon: Video,
      },
    ],
    cta: {
      title: "Download Brochure",
      description:
        "Download the brochure to learn more about Runwal 25 Hour Life",
    },
  },

  branding: {
    logo: "/default/images/logo.svg",
    favicon: "/default/icon.png",
    ogImage: "/default/og-image.jpg",
  },

  hero: {
    banners: [
      {
        src: "/default/images/banner-1.png",
        alt: "Runwal 25 Hour Life Exterior",
      },
    ],
    welcome: {
      cta: {
        title: "Download Brochure",
        description:
          "Download the brochure to learn more about Runwal 25 Hour Life.",
      },
      title: "Welcome to Runwal 25 hr Life",
      description: `Introducing Runwal 25 Hour Life, an exceptional landmark in Thane offering a unique blend of residential, commercial, and retail spaces. Experience breathtaking city views from the balconies of our 1, 2, 3 BHK, and Jodi flats. With offices, entertainment options, and dining establishments right within the premises, your every need is catered to conveniently. Spanning over 2 acres, our expansive array of 70+ amenities includes a pet park, sky cafe, library, swimming pool, cricket pitch, fish ponds, floral tunnels, sunken gardens, and much more. Welcome to a lifestyle that exceeds expectations.
        
      Being located just off Manpada Main Road, you live in proximity to renowned educational institutes, multispeciality hospitals, shopping malls, supermarkets, etc. The closest options for you are C P Goenka International School, R Mall, Bethany Hospital &amp; more. Your citywide connectivity will be super fast with Ghodbunder Road, Thane Railway Station, Eastern Express Highway, etc. So, a perfect package for all the lifestyle needs is awaited for you at - Runwal 25 Hour Life!`,
    },
    offer: {
      title: "Booking Open: Limited Time Only",
      location: "At Manpada Thane by Runwal Group",
      points: [
        { text: "Pay 10% & Nothing Up to 3 Years" },
        { text: "Book & Win a Trip to Barcelona" },
        { text: "Assured Holiday Voucher on Booking" },
      ],
      cta: {
        title: "Book A Free Site Visit",
        description: "Schedule at your convenience",
      },
      features: [
        {
          title: "Land Parcel",
          value: "21 Acres",
        },
        {
          title: "Floors",
          value: "50 Storeys",
        },
        {
          title: "Possession",
          value: "Dec 2027",
        },
      ],
      price: {
        title: "Luxurious 2, 3 BHK & Jodi Units Starts at",
        value: "1.29 Cr*",
        suffix: "All Inc",
      },
    },
  },

  pricing: {
    title: "Pricing Plans",
    description:
      "Choose from our range of luxurious 1, 2, 3 BHK residences, each designed to offer the perfect blend of comfort and sophistication",
    prices: [
      {
        type: "1 BHK",
        carpetArea: "441 Sq.ft.",
        price: "89 Lacs*",
        suffix: "All Inclusive",
      },
      {
        type: "1 BHK",
        carpetArea: "471 Sq.ft.",
        price: "95 Lacs*",
        suffix: "All Inclusive",
      },
      {
        type: "2 BHK",
        carpetArea: "600 Sq.ft.",
        price: "1.29 Cr*",
        suffix: "All Inclusive",
      },
      {
        type: "2 BHK",
        carpetArea: "634 Sq.ft.",
        price: "1.36 Cr*",
        suffix: "All Inclusive",
      },
      {
        type: "3 BHK",
        carpetArea: "951 Sq.ft.",
        price: "1.98 Cr*",
        suffix: "All Inclusive",
      },
      {
        type: "3 BHK",
        carpetArea: "962 Sq.ft.",
        price: "2.13 Cr*",
        suffix: "All Inclusive",
      },
      {
        type: "2+1 BHK Jodi",
        carpetArea: "1049 Sq.ft.",
        price: "2.26 Cr*",
        suffix: "All Inclusive",
      },
      {
        type: "2+2 BHK Jodi",
        carpetArea: "1268 Sq.ft.",
        price: "2.70 Cr*",
        suffix: "All Inclusive",
      },
    ],
    cta: {
      title: "Price Breakup",
      description: "Request complete pricing information",
    },
    detailPricing: {
      image: {
        src: "/default/images/costing.webp",
        alt: "Runwal 25 Hour Life Costing",
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
        src: "/default/images/master-plan.jpg",
        alt: "Master Plan",
      },
      cta: {
        title: "View Master Plan",
        description: "Explore the layout of Runwal 25 Hour Life",
      },
    },
    floorPlans: {
      categories: ["All", "1 BHK", "2 BHK", "2+1 BHK Jodi", "2+2 BHK Jodi"],
      title: "Floor Plans",
      plans: [
        {
          type: "1 BHK-441 Sq.ft.",
          image: "/default/images/floor-2.jpg",
          category: "1 BHK",
        },
        {
          type: "1 BHK-471 Sq.ft.",
          image: "/default/images/floor-3.jpg",
          category: "1 BHK",
        },
        {
          type: "2 BHK-600 Sq.ft.",
          image: "/default/images/floor-4.jpg",
          category: "2 BHK",
        },
        {
          type: "2 BHK-634 Sq.ft.",
          image: "/default/images/floor-5.jpg",
          category: "2 BHK",
        },
        {
          type: "3 BHK-951 Sq.ft.",
          image: "/default/images/floor-6.jpg",
          category: "3 BHK",
        },
        {
          type: "3 BHK-962 Sq.ft.",
          image: "/default/images/floor-7.jpg",
          category: "3 BHK",
        },
        {
          type: "2+1 BHK Jodi-1049 Sq.ft.",
          image: "/default/images/floor-8.jpg",
          category: "2+1 BHK Jodi",
        },
        {
          type: "2+2 BHK Jodi-1268 Sq.ft.",
          image: "/default/images/floor-8.jpg",
          category: "2+2 BHK Jodi",
        },
      ],
      cta: {
        title: "Enquire Now",
        description: "Explore the layout of Runwal 25 Hour Life",
      },
    },
  },

  amenities: {
    title: "Amenities",
    description:
      "Discover a lifestyle enriched with premium amenities and facilities",
    cta: {
      title: "Download Amenities",
      description: "Download the amenities of Runwal 25 Hour Life",
    },
    amenities: [
      {
        title: "Sky Cafe",
        image: "/default/images/amenities/sky-cafe.png",
        description: "",
      },
      {
        title: "Swimming Pool",
        image: "/default/images/amenities/swimming-pool.png",
        description: "",
      },
      {
        title: "Pet Park",
        image: "/default/images/amenities/pet-park.png",
        description: "",
      },
      {
        title: "Sky Club",
        image: "/default/images/amenities/sky-club.png",
        description: "",
      },
      {
        title: "Library",
        image: "/default/images/amenities/library.png",
        description: "",
      },
      {
        title: "Banquet Hall",
        image: "/default/images/amenities/banquet-hall.png",
        description: "",
      },
      {
        title: "Creche",
        image: "/default/images/amenities/creche.png",
        description: "",
      },
      {
        title: "Picnic & BBQ Pavilion",
        image: "/default/images/amenities/picnic-bbq-pavilion.png",
        description: "",
      },
      {
        title: "Theatre",
        image: "/default/images/amenities/theatre.png",
        description: "",
      },
      {
        title: "Supermarket",
        image: "/default/images/amenities/supermarket.png",
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
      description: "Download the gallery of Runwal 25 Hour Life",
    },
    images: [
      {
        title: "",
        image: "/default/images/gallery/gallery-1.png",
        description: "Elegantly designed living spaces with premium finishes",
      },
      {
        title: "",
        image: "/default/images/gallery/gallery-2.png",
        description: "Breathtaking views of landscaped gardens",
      },
      {
        title: "",
        image: "/default/images/gallery/gallery-3.png",
        description: "Resort-style pool with premium amenities",
      },
      {
        title: "",
        image: "/default/images/gallery/gallery-4.png",
        description: "Spacious bedrooms with modern aesthetics",
      },
    ],
  },

  map: {
    title: "Location",
    description: "Strategically located for your convenience",
    googleMapIframe:
      "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d60256.83190737612!2d72.930301!3d19.280105!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7baf133b94b85%3A0x13ee3ddf0c4ff0c5!2sRunwal%2025%20Hour%20Life!5e0!3m2!1sen!2sin!4v1689770913359!5m2!1sen!2sin",
    image: {
      src: "/default/images/map.webp",
      alt: "Location Map",
    },
    landmarks: [
      {
        title: "Ghodbunder Road",
        description: "1 Min",
      },
      {
        title: "R Mall",
        description: "1 Min",
      },
      {
        title: "C P Goenka International School",
        description: "8 Mins",
      },
      {
        title: "Bethany Hospital",
        description: "13 Mins",
      },
      {
        title: "Eastern Express Highway",
        description: "8 Mins",
      },
      {
        title: "Thane Railway Station",
        description: "20 Mins",
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
    description: "Experience Runwal 25 hr Life from the comfort of your home",
    cta: {
      title: "Request Virtual Tour",
      description: "Schedule at your convenience",
    },
    image: {
      src: "/default/images/banner-1.png",
      alt: "Virtual Tour",
    },
    videoTitle: "Virtual Tour",
    videoDescription:
      "Experience Runwal 25 hr Life from the comfort of your home",
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

  enquire: {
    title: "Get The Best Quote",
    bookFreeVisit: {
      image: {
        src: "/default/images/ride.png",
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
        "Runwal 25 Hour has been registered via MahaRERA registration number: P51700048270, P51700048278 and is available on the website <a href='https://maharera.mahaonline.gov.in/'>https://maharera.mahaonline.gov.in/</a> under registered projects.",
      details: [
        {
          title: "Runwal 25 Hour Life Tower B1",
          reraNumber: "Project Maha RERA - P51700048270",
          qrCode: "/default/images/barcode-1.webp",
        },
        {
          title: "Runwal 25 Hour Life Tower C1",
          reraNumber: "Project Maha RERA - P51700048278",
          qrCode: "/default/images/barcode-2.webp",
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
          "Government RERA Authorised Advertiser's: Home Bazaar Services Pvt Ltd, Registration No A5200000045, CIN U45400MH2013PTC242930.",
      },
      {
        title: "RERA Numbers",
        description:
          "RERA Project Registration No.: P51800000818 | P51800001838 | P51800001137",
      },
      {
        title: "Site Address",
        description:
          "Runwal Forest: Lal Bahadur Shastri Marg, Ambedkar Nagar, Kanjurmarg West, Bhandup West, Mumbai, Maharashtra 400078",
      },
      {
        title: "Corporate Office",
        description:
          "Corporate Office: Runwal Group: 4th Floor, Runwal & Omkar Esquare, Off, Eastern Express Hwy, opp. Sion-Chunabhatti, Sion East, Signal, Mumbai, Maharashtra 400022",
      },
    ],
    disclaimer:
      "The content is for information purposes only and does not constitute an offer to avail of any service. Prices mentioned are subject to change without notice and properties mentioned are subject to availability. Images for representation purposes only. This is the official website of authorized marketing partner. We may also send updates to the mobile number/email id registered with us. All Rights Reserved.",
  },

  seo: {
    title: "",
    description:
      "Experience luxury living at Runwal 25 Hour Life, Thane. 2 & 3 BHK apartments with world-class amenities.",
    keywords: [
      "luxury apartments",
      "thane west",
      "narang realty",
      "2 bhk",
      "3 bhk",
    ],
  },

  footer: {
    termsConditions: { href: `/terms-conditions` },
    privacyPolicy: { href: `/privacy-policy` },
    cookiesPolicy: { href: `/cookies-policy` },
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
      title: "Runwal 25 Hour Life | Privacy Policy",
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
      title: "Runwal 25 Hour Life | Cookies Policy",
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
      title: "Runwal 25 Hour Life | Thank You",
      description: "Thank you for your interest in Runwal 25 Hour Life",
    },
  },

  formSubmission: {
    crm: {
      formId: "__vtigerWebForm_26",
      publicId: "b8102e824eab1729d73b906ae3ff9e8b",
      baseUrl: "https://company133638.od2.vtiger.com",
      __vtrftk: "sid:d0b203e8fb8ff53c5b3673fb24119e03ae930517,1680088576",
      __vtCurrency: "1",
      name: "Runwal Manpada Thane",
      cfLeadsProjectSite: "Swaminarayan City",
      leadSource: "Web",
      emailOptin: "1",
    },
    email: {
      apiEndpoint: "/api/send-email",
      template: {
        subject: "New Enquiry from Runwal 25 Hour Life",
      },
    },
  },
};

export type SiteConfig = typeof siteConfig;
