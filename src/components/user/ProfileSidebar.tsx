import React from 'react';
import { UserCircleIcon, ClipboardDocumentListIcon, StarIcon, BellIcon, ArrowRightOnRectangleIcon } from '@heroicons/react/24/outline';
import { motion, AnimatePresence } from 'framer-motion';
import { signOut } from 'next-auth/react';

const menu = [
  { key: 'profile', label: 'Profil', icon: UserCircleIcon, path: '/user/profile' },
  { key: 'bookings', label: 'Booking', icon: ClipboardDocumentListIcon, path: '/user/bookings' },
  { key: 'reviews', label: 'Ulasan', icon: StarIcon, path: '/user/reviews' },
  { key: 'notifications', label: 'Notif', icon: BellIcon, path: '/user/notifications' },
  { key: 'logout', label: 'Logout', icon: ArrowRightOnRectangleIcon },
];

export default function ProfileSidebar({ active, onChange }: { active?: string, onChange?: (key: string) => void }) {
  const handleMenuClick = (key: string) => {
    if (key === 'logout') {
      signOut({ 
        callbackUrl: '/',
        redirect: true 
      });
    } else {
      onChange && onChange(key);
    }
  };

  return (
    <>
      {/* Sidebar (desktop) */}
      <aside className="hidden md:flex flex-col w-44 min-h-screen bg-white border-r border-gray-100 py-8 px-2 gap-1.5">
        {menu.map(item => (
          <button
            key={item.key}
            className={`text-left px-4 py-2 rounded-lg font-medium transition-colors flex items-center gap-2 ${active === item.key ? 'bg-pink-100 text-pink-600' : 'text-gray-700 hover:bg-gray-50'}`}
            onClick={() => handleMenuClick(item.key)}
          >
            <item.icon className="w-5 h-5" />
            {item.label}
          </button>
        ))}
      </aside>
    </>
  );
} 