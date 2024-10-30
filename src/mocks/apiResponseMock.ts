import { ContactMethod, SocialPlatform } from 'src/constants/commonConstants';
import { Product } from 'src/constants/schema';

export const products: Product[] = [
    {
        id: '190012',
        brand: 'Ghar Soaps',
        title: 'Magic Soap (Sandal Wood and Saffron Soap)',
        images: [
            {
                imageName: '190012-001.png',
                isIcon: true,
                backgroundColor: '#ffffff',
            },
        ],
        link: 'https://www.gharsoaps.shop/',
        backgroundColor: '#ffffff',
    },
    {
        id: '190013',
        brand: 'mama earth',
        title: 'Onion Shampoo for Hair Fall Control and Hair Growth with Onion & Plant Keratin - 650 ml',
        images: [
            {
                imageName: '190013-001.png',
                isIcon: true,
                backgroundColor: '#ffffff',
            },
        ],
        link: 'https://mamaearth.in/',
        backgroundColor: '#ffffff',
    },
    {
        id: '190014',
        brand: 'Ghar Soaps',
        title: 'Magic Soap (Sandal Wood and Saffron Soap)',
        images: [
            {
                imageName: '190012-001.png',
                isIcon: true,
                backgroundColor: '#ffffff',
            },
        ],
        link: 'https://www.gharsoaps.shop/',
        backgroundColor: '#ffffff',
    },
    {
        id: '190015',
        brand: 'mama earth',
        title: 'Onion Shampoo for Hair Fall Control and Hair Growth with Onion & Plant Keratin - 650 ml',
        images: [
            {
                imageName: '190013-001.png',
                isIcon: true,
                backgroundColor: '#ffffff',
            },
        ],
        link: 'https://mamaearth.in/',
        backgroundColor: '#ffffff',
    },
    {
        id: '190016',
        brand: 'Ghar Soaps',
        title: 'Magic Soap (Sandal Wood and Saffron Soap)',
        images: [
            {
                imageName: '190012-001.png',
                isIcon: true,
                backgroundColor: '#ffffff',
            },
        ],
        link: 'https://www.gharsoaps.shop/',
        backgroundColor: '#ffffff',
    },
];

export const contactOptions = [
    {
        method: ContactMethod.Email,
        address: 'mydelishbowl.letterbox@gmail.com',
        addressText: 'mydelishbowl.letterbox@gmail.com',
    },
    {
        method: ContactMethod.Phone,
        address: '+919876122345',
        addressText: '9876122345',
    },
];

export const socialProfiles = [
    {
        name: 'Instagram',
        platform: SocialPlatform.Instagram,
        followers: '1.2M',
        link: 'https://www.instagram.com/mydelishbowl/',
    },
    {
        name: 'YouTube',
        platform: SocialPlatform.YouTube,
        followers: '828K',
        link: 'https://www.youtube.com/@mydelishbowl/',
    },
    {
        name: 'Facebook',
        platform: SocialPlatform.Facebook,
        followers: '134K',
        link: 'https://www.facebook.com/mydelishbowl/',
    },
    {
        name: 'Threads',
        platform: SocialPlatform.Threads,
        followers: '522K',
        link: 'https://www.threads.com/mydelishbowl/',
    },
];
