import bookingFeature from '../assets/images/illustration-features-tab-1.svg';
import searchFeature from '../assets/images/illustration-features-tab-2.svg';
import shareFeature from '../assets/images/illustration-features-tab-3.svg';
import chromeBrowser from '../assets/images/logo-chrome.svg';
import firefoxBrowser from '../assets/images/logo-firefox.svg';
import operaBrowser from '../assets/images/logo-opera.svg';

export interface Feature {
    title: string;
    subtitle: string;
    image: string;
    description: string;
}

export const FEATURES: Record<string, Feature> = {
    Booking: {
        title: 'Simple Booking',
        subtitle: 'Bookmark in one click',
        image: bookingFeature,
        description:
            'Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favorite sites.',
    },
    Search: {
        title: 'Speedy Searching',
        subtitle: 'Intelligent search',
        image: searchFeature,
        description:
            'Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.',
    },
    Share: {
        title: 'Easy Sharing',
        subtitle: 'Share your bookmarks',
        image: shareFeature,
        description:
            'Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.',
    },
};

export interface Browser {
    name: string;
    image: string;
    version: number;
}

export const BROWSERS: Record<string, Browser> = {
    Chrome: {
        name: 'Chrome',
        image: chromeBrowser,
        version: 62,
    },
    Firefox: {
        name: 'Firefox',
        image: firefoxBrowser,
        version: 55,
    },
    Opera: {
        name: 'Opera',
        image: operaBrowser,
        version: 46,
    },
};
