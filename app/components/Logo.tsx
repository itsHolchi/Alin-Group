"use client";

import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  const logos = [
    { name: "cargo", title: "Alin Cargo" },
    { name: "broker", title: "Alin Broker" },
    { name: "logistics", title: "Alin Logistics" },
    { name: "express", title: "Alin Express" }
  ];

  return (
    // Adjust these classes to control spacing:
    // gap-20: controls the space between grid items (both vertical and horizontal)
    // px-8: adds horizontal padding
    // max-w-7xl: controls the maximum width of the grid
    // mx-auto: centers the grid horizontally
    <div className="w-full px-8 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-32 items-center justify-items-center">
        {logos.map((logo) => (
          <Link
            key={logo.name}
            href={`/${logo.name}`}
            className="transform hover:scale-110 transition-transform duration-300"
          >
            <Image
              src={`/alin-${logo.name}.png`}
              alt={logo.title}
              width={365}
              height={365}
              className="object-contain"
              priority
            />
          </Link>
        ))}
      </div>
    </div>
  );
}
