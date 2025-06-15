import Header from './components/organisms/Header/Header.tsx';
import Footer from './components/organisms/Footer/Footer.tsx';
import Hero from './components/organisms/Hero/Hero.tsx';
import Features from './components/organisms/Features.tsx';
import Downloads from './components/organisms/Downloads/Downloads.tsx';
import Faqs from './components/organisms/Faqs/Faqs.tsx';
import Contact from './components/organisms/Contact/Contact.tsx';

function App() {
    return (
        <>
            <Header />
            <Hero />
            <Features />
            <Downloads />
            <Faqs />
            <Contact />
            <Footer />
        </>
    );
}

export default App;
