import Image from 'next/image';

const services = [
  {
    title: 'Customs Brokerage',
    description: 'Your professional, reliable, and efficient partner for your regulatory clearance from complex to simplest shipments locally and internationally.',
    image: '/brokerage.png'
  },
  {
    title: 'Forwarding and Logistics',
    description: 'We provide a wide array of transport services including door-to-door deliveries of goods using the most efficient modes of transport anywhere and anytime.',
    image: '/forwarding.png'
  },
  {
    title: 'Trucking',
    description: 'We deliver breakbulk, outsized, containerized cargo with the most competitive rates.',
    image: '/trucking.png'
  },
  {
    title: 'Money Transfer',
    description: 'Your easy and faster money transfers at your fingertips.',
    image: '/transfer.png'
  }
];

export default function Services() {
  return (
    <section id="services" className="pt-4 pb-20 bg-black/50">
      <div className="container mx-auto px-4"> {/*container for the grids*/}
        <h2 className="text-4xl font-bold text-center mb-16 text-white">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {services.map((service, index) => (
            <div key={index} className="flex flex-col items-center text-center group  rounded-lg p-8 transition-all duration-300">
              <div className="relative w-32 h-32 mb-6 rounded-full bg-white/50 p-4 group-hover:bg-alin-gold transition-all duration-300">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-contain p-4"
                />
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-white">{service.title}</h3>
              <p className="text-gray-200">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
