import Hero from '@/components/hero/Hero';
import Header from '@/components/header/Header';
import About from '@/components/about/About';
import Footer from '@/components/footer/Footer';
import Contacts from '@/components/contacts/Contacts';
import Projects from '@/components/projects/Projects';

export default function HomePage() {
  return (
    <main>
      <Header />
      <Hero />
      <About />
      <Projects />
      <Contacts />
      <Footer />
    </main>
  );
}
