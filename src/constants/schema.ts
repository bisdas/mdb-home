import { ContactMethod, SocialPlatform } from './commonConstants';

export type ProductImage = {
    imageName: string;
    isIcon: boolean;
    backgroundColor: string;
};

export type Product = {
    id: string;
    brand: string;
    title: string;
    images: ProductImage[];
    link: string;
    backgroundColor: string;
};

export type ContactOption = {
    method: ContactMethod;
    address: string;
    addressText: string;
};

export type SocialProfile = {
    name: string;
    platform: SocialPlatform;
    followers: string;
    link: string;
};
