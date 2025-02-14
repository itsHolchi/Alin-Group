import Header from "../components/Header";
import Link from "next/link";

export default function BrokerPage() {
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
          <main className="flex flex-col gap-8 row-start-2 items-center">
            <Link href="/">
              <button className="bg-alin-gold hover:bg-alin-gold-dark text-white font-bold py-2 px-4 rounded transition-colors duration-300">
                Back to Home
              </button>
            </Link>
            <h1 className="text-4xl font-bold text-white">Alin Broker Office</h1>
            {/* Add broker specific content here */}
          </main>
        </div>
      </div>
    </div>
  );
}
