import Header from "./components/Header";
import Logo from "./components/Logo";

export default function Home() {
  return (
    <div 
      className="relative min-h-screen"
      style={{
        backgroundImage: 'url("/background.png")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50">
        <div className="relative grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
          <Header />
          <main className="flex flex-col gap-12 row-start-2 items-center">
            <h1 className="text-5xl font-bold text-white">ALiN Group of Companies</h1>
            <Logo />
          </main>
        </div>
      </div>
    </div>
  );  
}
