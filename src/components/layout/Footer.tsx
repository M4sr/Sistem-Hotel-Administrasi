"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { 
  EnvelopeIcon, 
  PhoneIcon, 
  MapPinIcon,
  ChatBubbleLeftRightIcon,
  GlobeAltIcon,
  PhotoIcon
} from "@heroicons/react/24/outline";

const Footer = () => {
  const footerLinks = {
    company: [
      { name: "Tentang Kami", href: "/about" },
      { name: "Karir", href: "/careers" },
      { name: "Blog", href: "/blog" },
      { name: "Press", href: "/press" },
    ],
    support: [
      { name: "Bantuan", href: "/help" },
      { name: "Kontak", href: "/contact" },
      { name: "FAQ", href: "/faq" },
      { name: "Kebijakan Privasi", href: "/privacy" },
    ],
    legal: [
      { name: "Syarat & Ketentuan", href: "/terms" },
      { name: "Kebijakan Cookie", href: "/cookies" },
      { name: "Lisensi", href: "/license" },
    ],
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-xl font-bold mb-4">HotelKu</h3>
            <p className="text-gray-400 mb-4">
              Temukan pengalaman menginap terbaik dengan berbagai pilihan hotel mewah di seluruh Indonesia.
            </p>
            <div className="space-y-2">
              <div className="flex items-center text-gray-400">
                <PhoneIcon className="w-5 h-5 mr-2" />
                <span>+62 123 4567 890</span>
              </div>
              <div className="flex items-center text-gray-400">
                <EnvelopeIcon className="w-5 h-5 mr-2" />
                <span>info@hotelku.com</span>
              </div>
              <div className="flex items-center text-gray-400">
                <MapPinIcon className="w-5 h-5 mr-2" />
                <span>Jakarta, Indonesia</span>
              </div>
            </div>
          </motion.div>

          {/* Quick Links */}
          {Object.entries(footerLinks).map(([category, links], index) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <h3 className="text-lg font-semibold mb-4 capitalize">{category}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="border-t border-gray-800 mt-12 pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2025 Jokita.id. All rights reserved.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                <ChatBubbleLeftRightIcon className="w-6 h-6" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                <GlobeAltIcon className="w-6 h-6" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                <PhotoIcon className="w-6 h-6" />
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer; 