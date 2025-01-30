import { ContactMethod, DelishBowlCategory, SocialPlatform } from 'src/constants/commonConstants';
import { Product } from 'src/constants/schema';

export const products: Product[] = [
    {
        id: '100006',
        brand: 'Nature Sure',
        title: 'Nature Sure Moringa Leaf Atta Mix | Drumstick Powder Superfood for Iron, Calcium and Vitamins | Sourced directly from farms',
        images: [
            {
                imageName: '100006-001.png',
                isIcon: true,
                backgroundColor: '#f4f4f4',
            },
        ],
        links: [
            {
                title: 'Website',
                link: 'https://bit.ly/3CvFSSK',
            },
            {
                title: 'Amazon',
                link: 'https://amzn.to/49JMk4J',
            },
            {
                title: 'Flipkart',
                link: 'https://bit.ly/43cqT8d',
            },
            {
                title: 'Meesho',
                link: 'https://bit.ly/3qm2COq',
            },
        ],
        categories: [DelishBowlCategory.Beauty, DelishBowlCategory.Lifestyle],
        isFeatured: true,
        available: true,
    },
    {
        id: '100002',
        brand: 'Nature Sure',
        title: 'Nature Sure Tulsi Leaf Powder 200g. Pure and natural tulsi leaf powder (holy basil) sourced directly from farms',
        images: [
            {
                imageName: '100002-001.png',
                isIcon: true,
                backgroundColor: '#f4f4f4',
            },
        ],
        links: [
            {
                title: 'Website',
                link: 'https://bit.ly/4gTKO2G',
            },
            {
                title: 'Amazon',
                link: 'https://amzn.to/3C4Qjwu',
            },
            {
                title: 'Flipkart',
                link: 'https://bit.ly/40kXVmn',
            },
            {
                title: 'Meesho',
                link: 'https://bit.ly/4g63ElQ',
            },
        ],
        categories: [DelishBowlCategory.Beauty, DelishBowlCategory.Lifestyle],
        isFeatured: true,
        available: true,
    },
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
        categories: [DelishBowlCategory.Beauty],
        isFeatured: true,
        available: true,
    },
    {
        id: '100004',
        brand: 'Alps Goodness',
        title: 'Alps Goodness Pure Essential Oil - Rosemary (10 ml) | Essential oil for Hair & Skin | Paraben Free, Fragnance Free, Mineral Oil Free | Healthy Hair Growth | Fights Acne',
        images: [
            {
                imageName: '100004-001.png',
                isIcon: true,
                backgroundColor: '#f4f4f4',
            },
        ],
        links: [
            {
                title: 'Website',
                link: 'https://mlpl.link/dgyuHINF',
            },
        ],
        categories: [DelishBowlCategory.Beauty],
        isFeatured: true,
        available: true,
    },
    {
        id: '100001',
        brand: 'Orashora',
        title: 'Orashora Karan Herbs Melt And Pour Clear Transparent Soap Base (Sls, Sles & Paraben-Free) - 950Gm',
        images: [
            {
                imageName: '100001-001.png',
                isIcon: true,
                backgroundColor: '#f4f4f4',
            },
        ],
        links: [
            {
                title: 'View on Amazon',
                link: 'https://amzn.to/47st5Lr',
            },
        ],
        categories: [DelishBowlCategory.Beauty, DelishBowlCategory.Lifestyle],
        isFeatured: true,
        available: true,
    },
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
