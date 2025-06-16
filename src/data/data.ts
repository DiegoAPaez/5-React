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

export interface Faq {
    question: string;
    answer: string;
}

export const FAQS: Faq[] = [
    {
        question: 'What is Bookmark Manager?',
        answer: 'Bookmark Manager is a browser extension that allows you to easily manage and organize your bookmarks. You can save, edit, and share your bookmarks with just a few clicks.',
    },
    {
        question: 'How do I install Bookmark Manager?',
        answer: 'You can install Bookmark Manager from the Chrome Web Store, Firefox Add-ons, or Opera Add-ons. Simply search for "Bookmark Manager" and click "Add to Browser".',
    },
    {
        question: 'Is Bookmark Manager free?',
        answer: 'Yes, Bookmark Manager is completely free to use. There are no hidden fees or subscriptions required.',
    },
    {
        question: 'Can I sync my bookmarks across devices?',
        answer: 'Yes, Bookmark Manager allows you to sync your bookmarks across all your devices. Just log in with your account and your bookmarks will be available everywhere.',
    },
    {
        question: 'Is there a mobile version of Bookmark Manager?',
        answer: 'Currently, Bookmark Manager is available as a browser extension for desktop browsers. A mobile version is in development and will be released soon.',
    },
];
