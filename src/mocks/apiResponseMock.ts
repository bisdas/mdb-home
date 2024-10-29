import { ContactMethod } from 'src/constants/commonConstants';
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
