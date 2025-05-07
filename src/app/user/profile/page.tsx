"use client";
import { useState } from 'react';
import ProfileSidebar from '../../../components/user/ProfileSidebar';
import ProfileContent from '../../../components/user/ProfileContent';
import SmartTouchMenu from '../../../components/user/SmartTouchMenu';
import MobileHeader from '../../../components/user/MobileHeader';
import { SparklesIcon } from '@heroicons/react/24/outline';

export default function UserProfilePage() {
  const [active, setActive] = useState('profile');
  return (
    <>
      {/* Mobile */}
      <div className="block md:hidden min-h-screen bg-gray-50">
        <MobileHeader title="Akun Saya">
          <SparklesIcon className="w-7 h-7 text-pink-400" />
        </MobileHeader>
        <ProfileSidebar active={active} onChange={setActive} />
        <div className="pt-4 pb-20 px-2">
          <ProfileContent active={active} onChange={setActive} />
        </div>
        <SmartTouchMenu onSelect={setActive} />
      </div>
      {/* Desktop */}
      <div className="hidden md:flex min-h-screen bg-gradient-to-br from-white to-pink-50">
        <div className="flex w-full max-w-6xl mx-auto mt-34 mb-12 rounded-3xl shadow-xl overflow-hidden border border-pink-100 bg-white">
          <div className="w-64 bg-white border-r border-pink-100 py-10 px-4">
            <ProfileSidebar active={active} onChange={setActive} />
          </div>
          <div className="flex-1 p-10">
            <ProfileContent active={active} onChange={setActive} />
          </div>
        </div>
      </div>
    </>
  );
} 