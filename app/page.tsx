import Header from "./components/Header";
import Logo from "./components/Logo";
import Services from "./components/Services";
import Contact from "./components/Contact";
import FooterLinks from "./components/FooterLinks";

export default function Home() {
  return (
    <div 
      className="min-h-screen relative"
      style={{
        backgroundImage: 'url("/background.png")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed'
      }}
    >
      <Header />
      <main>
        <section id="home" className="relative h-screen">
          <div className="absolute inset-0 bg-black bg-opacity-50" />
          <div className="relative h-full flex items-center justify-center">
            <div className="text-center">
              <h1 className="text-5xl font-bold text-white mb-12">ALiN Group of Companies</h1>
              <Logo />
            </div>
          </div>
        </section>
        <Services />
        <Contact />
        <FooterLinks />
      </main>
    </div>
  );  
}
