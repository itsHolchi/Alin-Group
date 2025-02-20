"use client";

import Image from "next/image";
import Link from "next/link";

export default function FooterLinks() {
  const handleMapClick = () => {
    window.open("https://www.google.com/maps/place/ALiN+Group+of+Companies,+Inc./@10.324808,123.9263698,17z/data=!3m1!4b1!4m6!3m5!1s0x33a999004e55f7bb:0x9e47e1393ca0a709!8m2!3d10.324808!4d123.9312407!16s%2Fg%2F11y7bxtxs3?entry=ttu&g_ep=EgoyMDI1MDIxOC4wIKXMDSoASAFQAw%3D%3D", "_blank");
  };

  return (
    <section className="bg-black text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-alin-gold">Let&apos;s connect</h2>
            <div className="space-y-4">
              <div>
                <span className="font-semibold">Phone: </span>
                <a href="tel:+639173131146" className="hover:text-alin-gold transition">+63 9173131146</a>
              </div>
              <div>
                <span className="font-semibold">Email: </span>
                <a href="mailto:info@alin-group.com" className="hover:text-alin-gold transition">info@alin-group.com</a>
              </div>
              <div>
                <span className="font-semibold">Headquarter:</span>
                <p className="mt-1">
                  2nd/F Tipolo Square Building, Lopez<br />
                  Jaena St., Tipolo Mandaue City,<br />
                  Cebu Philippines
                </p>
              </div>
            </div>
          </div>
          <div className="cursor-pointer transform hover:scale-105 transition duration-300">
            <Image
              src="/map.png"
              alt="Location Map"
              width={800}
              height={400}
              className="rounded-lg"
              onClick={handleMapClick}
            />
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-gray-400">
              {new Date().getFullYear()} ALIN Group of Companies, Inc. All rights reserved
            </p>
            <div className="flex space-x-6 text-sm text-gray-400">
              <Link href="/about" className="hover:text-alin-gold transition">About Us</Link>
              <Link href="/privacy" className="hover:text-alin-gold transition">Privacy Policy</Link>
              <Link href="/cookies" className="hover:text-alin-gold transition">Cookies Policy</Link>
              <Link href="/terms" className="hover:text-alin-gold transition">Terms and Conditions</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
