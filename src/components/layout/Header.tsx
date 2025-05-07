"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import { MagnifyingGlassIcon, HomeIcon, BuildingOffice2Icon, UserCircleIcon } from "@heroicons/react/24/outline";
import React from "react";
import { useSession, signOut } from "next-auth/react";
import { usePathname } from "next/navigation";

const menuItems = [
  { name: "Beranda", href: "/" },
  { name: "Hotel", href: "/hotels" },
  // { name: "Booking", href: "/user/bookings" },
  // { name: "Profil", href: "/user/profile" },
];

const mobileMenu = [
  { name: "Home", href: "/", icon: HomeIcon },
  { name: "Hotel", href: "/hotels", icon: BuildingOffice2Icon },
  { name: "Cari", href: "#search", icon: MagnifyingGlassIcon },
  { name: "Akun", href: "/user/profile", icon: UserCircleIcon },
];

const Header = () => {
  const { data: session, status } = useSession();
  const [dropdown, setDropdown] = useState(false);
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [isShrink, setIsShrink] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);
  const avatarRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  // Scroll shrink effect
  useEffect(() => {
    let lastScrollY = window.scrollY;
    function handleScroll() {
      if (window.scrollY > 40 && window.scrollY > lastScrollY) {
        setIsShrink(true);
      } else if (window.scrollY < lastScrollY || window.scrollY <= 10) {
        setIsShrink(false);
      }
      lastScrollY = window.scrollY;
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close dropdown jika klik di luar
  React.useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (avatarRef.current && !avatarRef.current.contains(e.target as Node)) {
        setDropdown(false);
      }
      if (searchRef.current && !searchRef.current.contains(e.target as Node)) {
        setIsSearchFocused(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  const handleLogout = async () => {
    await signOut({ redirect: true, callbackUrl: "/" });
  };

  return (
    <>
      <motion.header
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="fixed top-6 left-0 w-full z-50 flex justify-center pointer-events-none hidden md:flex"
      >
        <motion.div
          className="pointer-events-auto flex items-center gap-4 bg-white/80 backdrop-blur-md rounded-full shadow-2xl border border-white/60 mx-2"
          animate={{
            minHeight: isShrink ? 48 : 72,
            paddingTop: isShrink ? 4 : 12,
            paddingBottom: isShrink ? 4 : 12,
            paddingLeft: isShrink ? 16 : 24,
            paddingRight: isShrink ? 16 : 24,
            width: isShrink ? '60%' : '100%',
            maxWidth: isShrink ? 600 : 900,
            transition: { duration: 0.35, ease: 'easeInOut' }
          }}
          style={{
            width: '100%',
          }}
        >
          {/* Logo & Brand */}
          <Link href="/" className="flex items-center gap-2 min-w-[90px]">
            <Image
              src="/images/logo.svg"
              alt="Hotel Logo"
              width={isShrink ? 24 : 32}
              height={isShrink ? 24 : 32}
              className={isShrink ? "w-6 h-6" : "w-8 h-8"}
              style={{ transition: 'all 0.3s cubic-bezier(0.4,0,0.2,1)' }}
            />
            <span
              className={
                (isShrink
                  ? "font-bold text-base text-pink-600 tracking-tight"
                  : "font-bold text-lg text-pink-600 tracking-tight"
                )
              }
              style={{ transition: 'all 0.3s cubic-bezier(0.4,0,0.2,1)' }}
            >
              HotelKu
            </span>
          </Link>

          {/* Menu utama */}
          <nav className="flex-1 flex items-center justify-center gap-2 md:gap-4">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={
                  (isShrink
                    ? "text-gray-700 hover:text-pink-600 font-medium px-3 py-1 rounded transition-colors text-base"
                    : "text-gray-700 hover:text-pink-600 font-medium px-3 py-1 rounded transition-colors text-lg"
                  )
                }
                style={{ transition: 'all 0.3s cubic-bezier(0.4,0,0.2,1)' }}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Search Bar */}
          <div
            ref={searchRef}
            className="relative flex items-center"
            onMouseLeave={() => setIsSearchFocused(false)}
          >
            <motion.div
              className={`flex items-center rounded-full shadow-sm border border-pink-100 transition-colors ${isSearchFocused ? 'bg-gray-100 px-3 py-0.5' : 'bg-transparent px-0 py-0'}`}
              animate={{
                width: isSearchFocused ? 300 : (isShrink ? 40 : 48),
                marginRight: isSearchFocused ? 0 : 12,
                height: isShrink ? 40 : 48,
                transition: { duration: 0.3, ease: "easeInOut" }
              }}
              style={{ overflow: 'hidden' }}
            >
              <AnimatePresence>
                {isSearchFocused && (
                  <motion.input
                    initial={{ opacity: 0, width: 0 }}
                    animate={{ opacity: 1, width: "100%" }}
                    exit={{ opacity: 0, width: 0 }}
                    transition={{ duration: 0.2 }}
                    type="text"
                    placeholder="Cari hotel atau destinasi..."
                    className="flex-1 bg-transparent outline-none text-gray-700 text-sm px-2"
                    autoFocus
                  />
                )}
              </AnimatePresence>
              <motion.button
                type="button"
                onClick={() => setIsSearchFocused((v) => !v)}
                className="ml-0 bg-pink-600 hover:bg-pink-700 transition-colors text-white rounded-full flex items-center justify-center p-0 flex-shrink-0 shadow-lg"
                animate={{
                  width: isShrink ? 36 : 48,
                  height: isShrink ? 36 : 48,
                  transition: { duration: 0.3, ease: "easeInOut" }
                }}
                style={{ zIndex: 1 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <MagnifyingGlassIcon className={isShrink ? "w-5 h-5" : "w-6 h-6"} />
              </motion.button>
            </motion.div>
          </div>

          {/* User avatar & dropdown */}
          <div className="relative" ref={avatarRef}>
            <button
              className="flex items-center justify-center rounded-full border-2 border-white bg-gray-100 hover:ring-2 hover:ring-pink-200 transition focus:outline-none"
              onClick={() => setDropdown((v) => !v)}
              aria-label="User menu"
              type="button"
              style={{
                width: isShrink ? 36 : 48,
                height: isShrink ? 36 : 48,
                transition: 'all 0.3s cubic-bezier(0.4,0,0.2,1)'
              }}
            >
              <Image
                src={session?.user?.image || "/user.svg"}
                alt={session?.user?.name || "User"}
                width={isShrink ? 28 : 36}
                height={isShrink ? 28 : 36}
                className={isShrink ? "w-7 h-7 rounded-full object-cover" : "w-9 h-9 rounded-full object-cover"}
                style={{ transition: 'all 0.3s cubic-bezier(0.4,0,0.2,1)' }}
              />
            </button>
            {/* Dropdown menu */}
            {dropdown && (
              <div className="absolute right-0 mt-2 w-52 bg-white rounded-xl shadow-xl border border-gray-100 py-2 z-50 animate-fadeIn">
                {status === "authenticated" ? (
                  <>
                    <div className="px-4 py-2 border-b border-gray-100">
                      <p className="font-medium text-gray-900">{session.user?.name}</p>
                      <p className="text-sm text-gray-500">{session.user?.email}</p>
                    </div>
                    <Link href="/user/profile" className="block px-4 py-2 text-gray-700 hover:bg-pink-50">Profil</Link>
                    <Link href="/user/bookings" className="block px-4 py-2 text-gray-700 hover:bg-pink-50">Booking</Link>
                    <Link href="/user/reviews" className="block px-4 py-2 text-gray-700 hover:bg-pink-50">Ulasan Saya</Link>
                    <Link href="/user/notifications" className="block px-4 py-2 text-gray-700 hover:bg-pink-50">Notifikasi</Link>
                    {session.user?.role === "Admin" && (
                      <Link href="/dashboard-admin-secure" className="block px-4 py-2 text-gray-700 hover:bg-pink-50">Dashboard Admin</Link>
                    )}
                    <button
                      onClick={handleLogout}
                      className="w-full text-left px-4 py-2 text-red-600 hover:bg-red-50"
                    >
                      Logout
                    </button>
                  </>
                ) : (
                  <>
                    <Link href="/login" className="block px-4 py-2 text-pink-600 hover:bg-pink-50">Login</Link>
                    <Link href="/register" className="block px-4 py-2 text-gray-700 hover:bg-pink-50">Register</Link>
                  </>
                )}
              </div>
            )}
          </div>
        </motion.div>
      </motion.header>
      {/* Bottom Navigation Mobile */}
      <nav className="md:hidden fixed bottom-4 left-1/2 -translate-x-1/2 z-50 flex items-center justify-center px-2 w-full">
        <motion.div
          layout
          className="flex bg-white/90 border border-pink-200 rounded-full shadow-xl px-3 py-2 w-full max-w-md justify-between items-center gap-2 relative backdrop-blur-md"
        >
          {mobileMenu.map((item, idx) => {
            const isActive = (item.href === "/" && pathname === "/") || (item.href !== "/" && pathname.startsWith(item.href.replace('#','')));
            return (
              <Link
                key={item.name}
                href={item.href}
                scroll={false}
                className="relative flex-1 flex items-center justify-center min-w-0"
                style={{zIndex:2}}
              >
                <motion.div
                  layout
                  className={`flex items-center justify-center gap-0.35 px-2 py-2 rounded-full transition-all duration-300
                    ${isActive ? 'bg-pink-100/80 border border-pink-400 shadow-md text-pink-600 font-semibold min-w-[90px]' : 'text-gray-400 font-normal min-w-[35px] border border-transparent'}
                  `}
                >
                  <item.icon className={isActive ? "w-4 h-4" : "w-4 h-4 opacity-60"} />
                  {isActive && (
                    <motion.span
                      layout
                      initial={{ opacity: 0, x: 10 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 10 }}
                      className="ml-2 text-base font-semibold whitespace-nowrap"
                    >
                      {item.name}
                    </motion.span>
                  )}
                </motion.div>
              </Link>
            );
          })}
        </motion.div>
      </nav>
    </>
  );
};

export default Header; 