import { ContactMethod, DelishBowlCategory, SocialPlatform } from 'src/constants/commonConstants';
import { Product } from 'src/constants/schema';

export const products: Product[] = [
    {
        id: '100017',
        brand: 'Floradust',
        title: '100% Pure Moringa Leaves & Drumstick Powder | Herbal Supplement for Immunity, Skin, Hair & Weight Management | Vitamins & Antioxidants',
        images: [
            {
                imageName: '100017-001.png',
                isIcon: true,
                backgroundColor: '#f4f4f4',
            },
        ],
        links: [
            {
                title: 'Amazon',
                link: 'https://amzn.to/456rBI9',
            },
        ],
        categories: [DelishBowlCategory.HealthBeauty, DelishBowlCategory.Food],
        isFeatured: true,
        available: true,
    },
    {
        id: '100016',
        brand: 'Vedriti',
        title: 'Vedriti Wood Pressed White Sesame Oil, Cold Pressed, Kolhu/Kacchi Ghani, Chemical Free, Naturally Cholesterol Free, Sesame Oil with Rich Aroma & Flavour of Real Sesame Seeds, Can Be Used in Daily Cooking, Multipurpose Usage, A1 Grade Sesame Seeds, Purity in Every Drop',
        images: [
            {
                imageName: '100016-001.png',
                isIcon: true,
                backgroundColor: '#f4f4f4',
            },
        ],
        links: [
            {
                title: 'Amazon',
                link: 'https://amzn.to/4jCQuyP',
            },
            {
                title: 'Website',
                link: 'https://www.vedriti.in/products/vedriti-wood-pressed-white-sesame-oil-cold-pressed-kolhu-kacchi-ghani-chemical-free-cold-pressed-white-sesame-oil-for-cooking-vedriti_sesame_oil_p?variant=46585226854676',
            },
        ],
        categories: [DelishBowlCategory.HealthBeauty],
        isFeatured: true,
        available: true,
    },
    {
        id: '100015',
        brand: 'Vedriti',
        title: 'Vedriti Wood Pressed Coconut Oil, Cold Pressed, Kolhu/Kacchi Ghani, Chemical Free, Multipurpose Usage, A1 Grade Coconuts, Purity In Every Drop',
        images: [
            {
                imageName: '100015-001.png',
                isIcon: true,
                backgroundColor: '#f4f4f4',
            },
        ],
        links: [
            {
                title: 'Amazon',
                link: 'https://amzn.to/3Gm1cvr',
            },
            {
                title: 'Website',
                link: 'https://www.vedriti.in/products/vedriti-wood-pressed-coconut-oil-cold-pressed-kolhu-kacchi-ghani-chemical-free-cold-pressed-coconut-oil-for-cooking-vedriti_coconut_oil_p?variant=46585225052436',
            },
        ],
        categories: [DelishBowlCategory.HealthBeauty],
        isFeatured: true,
        available: true,
    },
    {
        id: '100014',
        brand: 'RLB-CHOICE',
        title: 'Rlb Choice-Detox Loose Leaves Green Tea-Your Path To Wellness-Purity In Every Sip, Better Digestion, Boost Immunity, Skin Glow',
        images: [
            {
                imageName: '100014-001.png',
                isIcon: true,
                backgroundColor: '#f4f4f4',
            },
        ],
        links: [
            {
                title: 'Amazon',
                link: 'https://amzn.in/d/9HEwSap',
            },
            {
                title: 'Website',
                link: 'https://www.rlbchoice.com/product-page/detox-green-tea',
            },
        ],
        categories: [DelishBowlCategory.HealthBeauty],
        isFeatured: true,
        available: true,
    },
    {
        id: '100013',
        brand: 'Proskire',
        title: 'Proskire Intense Hair Growth Serum with Redensyl, Anagain, Procapil, Capilia Longa, Biotin & Ashwagandha',
        images: [
            {
                imageName: '100013-001.png',
                isIcon: true,
                backgroundColor: '#f4f4f4',
            },
        ],
        links: [
            {
                title: 'Amazon',
                link: 'https://amzn.to/44mAtc8',
            },
        ],
        categories: [DelishBowlCategory.HealthBeauty],
        isFeatured: true,
        available: true,
    },
    {
        id: '100012',
        brand: 'Vedriti',
        title: 'Vedriti Wood Pressed Groundnut Oil | Cold Pressed | Kolhu/Kacchi Ghani | Chemical Free | Cold Pressed Groundnut Oil for Cooking',
        images: [
            {
                imageName: '100012-001.png',
                isIcon: true,
                backgroundColor: '#f4f4f4',
            },
        ],
        links: [
            {
                title: 'Amazon',
                link: 'https://amzn.to/4kJbxRJ',
            },
            {
                title: 'Website',
                link: 'https://www.vedriti.in/products/vedriti-wood-pressed-groundnut-oil-cold-pressed-kolhu-kacchi-ghani-chemical-free-cold-pressed-groundnut-oil-for-cooking-vedriti_groundnut_oil_p?variant=46585225871636',
            },
        ],
        categories: [DelishBowlCategory.Food],
        isFeatured: true,
        available: true,
    },
    {
        id: '100011',
        brand: 'Ayuzera',
        title: 'Ayuzera Himalayan Sea Buckthorn Pulp Concentrate 300ml | Liquid Supplements | Makes up to 50 Glass Juice (Rich in Vitamin C) | Lab Tested | Omega 3, 6, 7, and 9, and Antioxidants',
        images: [
            {
                imageName: '100011-001.png',
                isIcon: true,
                backgroundColor: '#f4f4f4',
            },
        ],
        links: [
            {
                title: 'Amazon',
                link: 'https://amzn.to/4iss6j0',
            },
            {
                title: 'Website',
                link: 'https://ayuzera.com/products/product-details/ayuzera-himalayan-sea-buckthorn-pulp-juice-concentrate-300ml-with-999-pure-sea-buckthorn-pulp-/8908023909008',
            },
        ],
        categories: [DelishBowlCategory.HealthBeauty],
        isFeatured: true,
        available: true,
    },
    {
        id: '100010',
        brand: 'Ayurica Herbal',
        title: 'Ayurica Herbal 100% Natural Hair Shampoo with Methidana, Shikakai, Reetha and Amla Powder - 171g For Man And Women | Paraben And Sulphate Free Shampoo',
        images: [
            {
                imageName: '100010-001.png',
                isIcon: true,
                backgroundColor: '#f4f4f4',
            },
        ],
        links: [
            {
                title: 'Amazon',
                link: 'https://amzn.in/d/bGLzqC1',
            },
            {
                title: 'Website',
                link: 'https://ayuricaherbal.com/product/natural-hair-shampoo/',
            },
        ],
        categories: [DelishBowlCategory.HealthBeauty],
        isFeatured: true,
        available: true,
    },
    {
        id: '100009',
        brand: 'Vedriti',
        title: 'Vedriti Wood Pressed Black Mustard Oil for Cooking, Naturally Cholesterol Free. Rich Aroma & Flavour of Real A1 Grade Mustard Seeds. Can Be Used in Daily Cooking. Purity in Every Drop, 1000 ML',
        images: [
            {
                imageName: '100009-001.png',
                isIcon: true,
                backgroundColor: '#f4f4f4',
            },
        ],
        links: [
            {
                title: 'Amazon',
                link: 'https://amzn.to/3QAYAf1',
            },
        ],
        categories: [DelishBowlCategory.Food, DelishBowlCategory.HealthBeauty],
        isFeatured: true,
        available: true,
    },
    {
        id: '100008',
        brand: 'LAKMÉ',
        title: 'Sun Expert Dry Matte Fluid SPF 50++++ Sunscreen with 1% niacinamide & ceramide, for oily skin & combination skin 50ml',
        images: [
            {
                imageName: '100008-001.png',
                isIcon: true,
                backgroundColor: '#f4f4f4',
            },
        ],
        links: [
            {
                title: 'Amazon',
                link: 'https://amzn.to/3D3xLNl',
            },
        ],
        categories: [DelishBowlCategory.HealthBeauty],
        isFeatured: true,
        available: true,
    },
    {
        id: '100007',
        brand: 'Fresh Dew',
        title: 'Fresh Dew Dark Spot Corrector Brightening Face Cream - With Alpha Arbutin, Kojic Acid and Niacinamide | Helps Reducing Dark Spots, Pigmentation, Sun Spots, Uneven Skin tone & Acne Marks',
        images: [
            {
                imageName: '100007-001.png',
                isIcon: true,
                backgroundColor: '#f4f4f4',
            },
        ],
        links: [
            {
                title: 'Amazon',
                link: 'https://amzn.to/4gvfkz4',
            },
            {
                title: 'Flipkart',
                link: 'https://dl.flipkart.com/s/L__I4PuuuN',
            },
        ],
        categories: [DelishBowlCategory.HealthBeauty],
        isFeatured: true,
        available: true,
    },
    // {
    //     id: '100006',
    //     brand: 'Nature Sure',
    //     title: 'Nature Sure Moringa Leaf Atta Mix | Drumstick Powder Superfood for Iron, Calcium and Vitamins | Sourced directly from farms',
    //     images: [
    //         {
    //             imageName: '100006-001.png',
    //             isIcon: true,
    //             backgroundColor: '#f4f4f4',
    //         },
    //     ],
    //     links: [
    //         {
    //             title: 'Website',
    //             link: 'https://bit.ly/3CvFSSK',
    //         },
    //         {
    //             title: 'Amazon',
    //             link: 'https://amzn.to/49JMk4J',
    //         },
    //         {
    //             title: 'Flipkart',
    //             link: 'https://bit.ly/43cqT8d',
    //         },
    //         {
    //             title: 'Meesho',
    //             link: 'https://bit.ly/3qm2COq',
    //         },
    //     ],
    //     categories: [DelishBowlCategory.HealthBeauty, DelishBowlCategory.Lifestyle],
    //     isFeatured: true,
    //     available: true,
    // },
    // {
    //     id: '100002',
    //     brand: 'Nature Sure',
    //     title: 'Nature Sure Tulsi Leaf Powder 200g. Pure and natural tulsi leaf powder (holy basil) sourced directly from farms',
    //     images: [
    //         {
    //             imageName: '100002-001.png',
    //             isIcon: true,
    //             backgroundColor: '#f4f4f4',
    //         },
    //     ],
    //     links: [
    //         {
    //             title: 'Website',
    //             link: 'https://bit.ly/4gTKO2G',
    //         },
    //         {
    //             title: 'Amazon',
    //             link: 'https://amzn.to/3C4Qjwu',
    //         },
    //         {
    //             title: 'Flipkart',
    //             link: 'https://bit.ly/40kXVmn',
    //         },
    //         {
    //             title: 'Meesho',
    //             link: 'https://bit.ly/4g63ElQ',
    //         },
    //     ],
    //     categories: [DelishBowlCategory.HealthBeauty, DelishBowlCategory.Lifestyle],
    //     isFeatured: true,
    //     available: true,
    // },
    {
        id: '100003',
        brand: 'Proskire',
        title: 'Proskire 10% Vitamin C Serum With Hyaluronic Acid & Papaya Ext For Skin Brightening  (30 ml)',
        images: [
            {
                imageName: '100003-001.png',
                isIcon: true,
                backgroundColor: '#f4f4f4',
            },
        ],
        links: [
            {
                title: 'Flipkart',
                link: 'https://dl.flipkart.com/s/JytQ8GuuuN',
            },
        ],
        categories: [DelishBowlCategory.HealthBeauty],
        isFeatured: true,
        available: true,
    },
    // {
    //     id: '100004',
    //     brand: 'Alps Goodness',
    //     title: 'Alps Goodness Pure Essential Oil - Rosemary (10 ml) | Essential oil for Hair & Skin | Paraben Free, Fragnance Free, Mineral Oil Free | Healthy Hair Growth | Fights Acne',
    //     images: [
    //         {
    //             imageName: '100004-001.png',
    //             isIcon: true,
    //             backgroundColor: '#f4f4f4',
    //         },
    //     ],
    //     links: [
    //         {
    //             title: 'Website',
    //             link: 'https://mlpl.link/dgyuHINF',
    //         },
    //     ],
    //     categories: [DelishBowlCategory.HealthBeauty],
    //     isFeatured: true,
    //     available: false,
    // },
    // {
    //     id: '100001',
    //     brand: 'Orashora',
    //     title: 'Orashora Karan Herbs Melt And Pour Clear Transparent Soap Base (Sls, Sles & Paraben-Free) - 950Gm',
    //     images: [
    //         {
    //             imageName: '100001-001.png',
    //             isIcon: true,
    //             backgroundColor: '#f4f4f4',
    //         },
    //     ],
    //     links: [
    //         {
    //             title: 'View on Amazon',
    //             link: 'https://amzn.to/47st5Lr',
    //         },
    //     ],
    //     categories: [DelishBowlCategory.HealthBeauty, DelishBowlCategory.Lifestyle],
    //     isFeatured: true,
    //     available: true,
    // },
];

export const amazonInfluencerShopCarousalmages = [
    '001.png',
    '002.png',
    '003.png',
    '004.png',
    '005.png',
    '006.png',
    '007.png',
    '008.png',
];

export const contactOptions = [
    {
        method: ContactMethod.Email,
        address: 'mydelishbowl.letterbox@gmail.com',
        addressText: 'mydelishbowl.letterbox@gmail.com',
    },
    // {
    //     method: ContactMethod.Phone,
    //     address: '+919876122345',
    //     addressText: '9876122345',
    // },
];

export const socialProfiles = [
    {
        name: 'Instagram',
        platform: SocialPlatform.Instagram,
        followers: '1.4M',
        link: 'https://www.instagram.com/mydelishbowl',
    },
    {
        name: 'YouTube',
        platform: SocialPlatform.YouTube,
        followers: '819K',
        link: 'https://www.youtube.com/@mydelishbowl',
    },
    {
        name: 'Facebook',
        platform: SocialPlatform.Facebook,
        followers: '154K',
        link: 'https://www.facebook.com/mydelishbowl',
    },
    {
        name: 'Threads',
        platform: SocialPlatform.Threads,
        followers: '163K',
        link: 'https://www.threads.net/mydelishbowl',
    },
];
