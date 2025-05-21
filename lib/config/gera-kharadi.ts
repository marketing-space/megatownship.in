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

const route = routes.GeraKharadi;

export const geraKharadiConfig = {
    name: "Gera Island Of Joy",
    about:
        "Gera's Island of Joy, Kharadi, Pune is the latest addition to the renowned Gera ChildCentric Homes in Kharadi. Spanning 12.5 acres, this premium development features three expansive clubhouses covering over 40,000 square feet, along with more than 4 acres of open green spaces.What sets it apart is an unmatched range of recreational amenities—including the first-ever private Go-Kart racing track within a residential project, an elevated wave pool, and a bowling alley—offering a vibrant lifestyle right at your doorstep.Part of an integrated township, this sector development includes 9 high-rise towers ranging from 30 to 32 storeys, making it the most luxurious ChildCentric Homes project by Gera in Kharadi to date. The project offers a wide selection of 2, 3, 3.5, and 4 BHK apartments and duplexes designed for modern family living.",
    contact: {
        phone: "+919619095795",
        whatsapp: "+919619095795",
        email: "sales@narangprivado.com",
        address: "East Kharadi, Pune, Maharashtra 411043",
    },
    gtmId: "GTM-N882HKNK",
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
                "Download the brochure to learn more about Gera Island Of Joy",
        },
    },

    branding: {
        logo: "/gerakharadi/images/logo.png",
        favicon: "/icon.png",
        ogImage: "/og-image.jpg",
    },

    hero: {
        banners: [
            {
                src: "/gerakharadi/images/b1.webp",
                alt: "Gera Island Of Joy",
            },
            {
                src: "/gerakharadi/images/b3.webp",
                alt: "Gera Island Of Joy",
            },
            {
                src: "/gerakharadi/images/b4.webp",
                alt: "Gera Island Of Joy",
            },
        ],
        welcome: {
            cta: {
                title: "Download Brochure",
                description:
                    "Download the brochure to learn more about Gera Island Of Joy.",
            },
            title: "Welcome to Gera Island Of Joy",
            description: `Gera Developments proudly unveils Island of Joy at East Kharadi — a landmark addition to our signature ChildCentric® Homes portfolio.
            Spread across 12.5 acres, this exceptional development boasts over 4 acres of landscaped open spaces and three exclusive clubhouses covering more than 40,000 square feet.

            Step into a world of extraordinary recreation, featuring the first-ever private Go-Kart track in a residential community, an elevated wave pool, and a cutting-edge bowling alley. With 9 towers rising 30 to 32 stories high, Island of Joy is our most prestigious ChildCentric® Homes project yet.

            This thoughtfully integrated township will house over 1,800 residences, offering a wide range of 2, 3, 3.5, and 4 BHK apartments and duplexes — each designed to support the growth and aspirations of every family member.`,
        },
        offer: {
            title: "Booking Open",
            location: "At East Kharadi, Pune",
            points: [
                { text: "Avail Spot Booking Benefits Up To ₹3.50 Lacs*" },
                { text: "First-Ever Private Go-Kart Racing Track" },
                { text: "ChildCentric Academies with 3 Club Houses" },
                { text: "Book By Paying Just 8.9%, Including SD & Registration Charges" },
            ],
            cta: {
                title: "Enquire Now",
                description: "Schedule at your convenience",
            },
            features: [
                {
                    title: "Land Parcel",
                    value: "12.5 Acres",
                },
                {
                    title: "Storeys",
                    value: "32",
                },
                {
                    title: "Possesion",
                    value: "March 2027",
                },
                {
                    title: "Towers",
                    value: "9",
                },
            ],
            price: {
                title: "Joyfull 2, 3, 3.5 & 4 BHK Apartments Starting",
                value: "80.90 Lacs*",
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
                type: "2 BHK Prime",
                carpetArea: "676 sq.ft",
                price: "80.90 Lacs",
                suffix: "Onwards",
            },
            {
                type: "3 BHK Prime",
                carpetArea: "931 Sq.ft",
                price: "1.20 Lacs",
                suffix: "Onwards",
            },
            {
                type: "2 BHK Grand",
                carpetArea: "721 Sq.ft",
                price: "89.90 Lacs*",
                suffix: "Onwards",
            },
            {
                type: "3 BHK Grand",
                carpetArea: "1134 Sq.ft",
                price: "1.12 Cr*",
                suffix: "Onwards",
            },
            {
                type: "3 BHK Duplex",
                carpetArea: "1140 Sq.ft",
                price: "1.53 Cr*",
                suffix: "Onwards",
            },
            {
                type: "3.5 BHK Royal",
                carpetArea: "1330 Sq.ft",
                price: "1.87 Cr*",
                suffix: "Onwards",
            },
        ],
        cta: {
            title: "Price Breakup",
            description: "Request complete pricing information",
        },
        detailPricing: {
            image: {
                src: "/gerakharadi/images/costing.webp",
                alt: "Gera Island Of Joy",
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
                src: "/gerakharadi/images/mp.webp",
                alt: "Master Plan",
            },
            cta: {
                title: "View Master Plan",
                description: "Explore the layout of Gera Island Of Joy",
            },
        },
        floorPlans: {
            categories: ["All", "2 BHK", "3 BHK", "3.5 BHK"],
            title: "Floor Plans",
            plans: [
                {
                    type: "2 BHK-676 Sq.ft.",
                    image: "/gerakharadi/images/2-BHK-DUPLEX-01.jpg",
                    category: "2 BHK",
                },
                {
                    type: "2 BHK-721 Sq.ft.",
                    image: "/gerakharadi/images/2-BHK-GRAND-TYPE-1-01.jpg",
                    category: "2 BHK",
                },
                {
                    type: "3 BHK-931 Sq.ft.",
                    image: "/gerakharadi/images/3-BHK-GRAND-TYPE-1-01.jpg",
                    category: "3 BHK",
                },
                {
                    type: "3 BHK-1134 Sq.ft.",
                    image: "/gerakharadi/images/3-BHK-GRAND-TYPE-2-01.jpg",
                    category: "3 BHK",
                },
                {
                    type: "3 BHK-1140 Sq.ft.",
                    image: "/gerakharadi/images/3-BHK-ROYAL-TYPE-1.jpg",
                    category: "3 BHK",
                },
                {
                    type: "3.5 BHK-1330 Sq.ft.",
                    image: "/gerakharadi/images/3-BHK-ROYAL-TYPE-2.jpg",
                    category: "3.5 BHK",
                },
            ],
            cta: {
                title: "Enquire Now",
                description: "Explore the layout of Gera Island Of Joy",
            },
        },
    },

    amenities: {
        title: "Amenities",
        description:
            "Discover a lifestyle enriched with premium amenities and facilities",
        cta: {
            title: "Download Amenities",
            description: "Download the amenities of Gera Island Of Joy",
        },
        amenities: [
            {
                title: "Open Lawn",
                image: "/gerakharadi/images/amenities/floralgardens_01.webp",
                description: "",
            },
            {
                title: "Tennis Court",
                image: "/gerakharadi/images/amenities/BadmintonCourt.webp",
                description: "",
            },
            {
                title: "Car Fast Charging Station",
                image: "/gerakharadi/images/amenities/Car-Fast-Charging_.jpg",
                description: "",
            },
            {
                title: "Cricket Practice Net",
                image: "/gerakharadi/images/amenities/Cricket-Net.jpg",
                description: "",
            },
            {
                title: "Pet Park With Pet Care Area",
                image: "/gerakharadi/images/amenities/Pet-Park_.jpg",
                description: "",
            },
            {
                title: "Rubberised Jogging Track",
                image: "/gerakharadi/images/amenities/Rubberised-Track_.jpg",
                description: "",
            },
            {
                title: "Senior Citizen Area",
                image: "/gerakharadi/images/amenities/Senior-Citizens-area_.jpg",
                description: "",
            },
            {
                title: "Skating Rink",
                image: "/gerakharadi/images/amenities/Skating-Rink.jpg",
                description: "",
            },
            {
                title: "Kids Play Area",
                image: "/gerakharadi/images/amenities/kidplay_01.webp",
                description: "",
            },
            {
                title: "Kids Pool",
                image: "/gerakharadi/images/amenities/kidspool_1.webp",
                description: "",
            },
            {
                title: "Chilren's Cycling Track",
                image: "/gerakharadi/images/amenities/Children-Cycling_.jpg",
                description: "",
            },
            {
                title: "Race Track And Go Karts",
                image: "/gerakharadi/images/amenities/Go-Track_.jpg",
                description: "",
            },
        ],
        stats: {
            title: "40+ World-Class Amenities",
            description: "Everything you need for a luxurious lifestyle",
        },
    },

    gallery: {
        title: "Gallery",
        description:
            "Experience luxury living through our carefully curated spaces",
        cta: {
            title: "Download Gallery",
            description: "Download the gallery of Gera Island Of Joy",
        },
        images: [
            {
                title: "",
                image: "/gerakharadi/images/g1.webp",
                description: "Elegantly designed living spaces with premium finishes",
            },
            {
                title: "",
                image: "/gerakharadi/images/g2.webp",
                description: "Breathtaking views of landscaped gardens",
            },
            {
                title: "",
                image: "/gerakharadi/images/g3.webp",
                description: "Resort-style pool with premium amenities",
            },
            {
                title: "",
                image: "/gerakharadi/images/g4.webp",
                description: "Spacious bedrooms with modern aesthetics",
            },
            {
                title: "",
                image: "/gerakharadi/images/g5.webp",
                description: "Spacious bedrooms with modern aesthetics",
            },
            {
                title: "",
                image: "/gerakharadi/images/g6.webp",
                description: "Spacious bedrooms with modern aesthetics",
            },
        ],
    },

    map: {
        title: "Location",
        description: "Strategically located for your convenience",
        googleMapIframe: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.2678355667866!2d73.97132601436873!3d18.54297428739669!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c3a8886b09bd%3A0xa5958211d3cbe30!2sGera's%20Island%20of%20Joy!5e0!3m2!1sen!2sin!4v1716043428239!5m2!1sen!2sin",

        image: {
            src: "/gerakharadi/images/map.webp",
            alt: "Location Map",
        },
        landmarks: [
            {
                title: "EON IT Park ",
                description: "2.8 KM",
            },
            {
                title: "Gera Commerzone",
                description: "1.6 KM",
            },
            {
                title: "Ascendas IT Park",
                description: "1 KM",
            },
            {
                title: "Wellington International School",
                description: "3 KM",
            },
            {
                title: "World Trade Center",
                description: "4 KM",
            },
            {
                title: "Oxford World School",
                description: "3 KM",
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
        description: "Experience Gera Island Of Joy from the comfort of your home",
        cta: {
            title: "Request Virtual Tour",
            description: "Schedule at your convenience",
        },
        image: {
            src: "/gerakharadi/images/b1.webp",
            alt: "Virtual Tour",
        },
        videoTitle: "Virtual Tour",
        videoDescription:
            "Experience Gera Island Of Joy from the comfort of your home",
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
                src: "/gerakharadi/images/ride.png",
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
                "Gera Island Of Joy has been registered via MahaRERA registration number:  P52100056106 and is available on the website <a href='https://maharera.mahaonline.gov.in/'>https://maharera.mahaonline.gov.in/</a> under registered projects.",
            details: [
                {
                    title: "Gera Island Of Joy",
                    reraNumber: "Project Maha RERA - P52100056106",
                    qrCode: "/gerakharadi/images/qr.jpg",
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
                    "RERA Project Registration No.: P52100056106 | P52100077635",
            },
            {
                title: "Site Address",
                description:
                    "Gera Island Of Joy: Kharadi, Pune",
            },
        ],
        disclaimer:
            "The content is for information purposes only and does not constitute an offer to avail of any service. Prices mentioned are subject to change without notice and properties mentioned are subject to availability. Images for representation purposes only. This is the official website of authorized marketing partner. We may also send updates to the mobile number/email id registered with us. All Rights Reserved.",
    },

    seo: {
        title: "Gera Island Of Joy | Luxury Apartments in Pune",
        description:
            "Experience luxury living at Gera Island Of Joy, Pune. 2 & 3 BHK apartments with world-class amenities.",
        keywords: [
            "luxury apartments",
            "Pune",
            "Gera Island Of Joy",
            "2 bhk",
            "3 bhk",
        ],
    },

    termsAndConditions: {
        seo: {
            title: "Gera Island Of Joy | Terms & Conditions",
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
            title: "Gera Island Of Joy | Privacy Policy",
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
            title: "Gera Island Of Joy | Cookies Policy",
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
            title: "Gera Island Of Joy | Thank You",
            description: "Thank you for your interest in Gera Island Of Joy",
        },
    },

    formSubmission: {
        crm: {
            formId: "vtigerWebForm_129",
            publicId: "3f9f710860637c0e9d8c635a0932d645",
            baseUrl: "https://company133638.od2.vtiger.com",
            __vtrftk: "sid:d0b203e8fb8ff53c5b3673fb24119e03ae930517,1680088576",
            __vtCurrency: "1",
            name: "Gera Kharadi",
            cfLeadsProjectSite: "Swaminarayan City",
            leadSource: "Web",
            emailOptin: "1",
        },
        email: {
            apiEndpoint: "/api/send-email",
            template: {
                subject: "New Enquiry from Gera Island Of Joy",
            },
        },
    },
};

export type GeraSiteConfig = typeof geraKharadiConfig;
