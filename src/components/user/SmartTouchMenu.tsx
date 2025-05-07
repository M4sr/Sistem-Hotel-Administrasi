import React, { useState, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { signOut } from 'next-auth/react';
import { UserCircleIcon, ClipboardDocumentListIcon, StarIcon, BellIcon, ArrowRightOnRectangleIcon } from '@heroicons/react/24/outline';
import { motion, AnimatePresence } from 'framer-motion';

const menu = [
  { key: 'profile', label: 'Profil', icon: UserCircleIcon, path: '/user/profile' },
  { key: 'bookings', label: 'Booking', icon: ClipboardDocumentListIcon, path: '/user/bookings' },
  { key: 'reviews', label: 'Ulasan', icon: StarIcon, path: '/user/reviews' },
  { key: 'notifications', label: 'Notif', icon: BellIcon, path: '/user/notifications' },
  { key: 'logout', label: 'Logout', icon: ArrowRightOnRectangleIcon },
];

const SAFE_MARGIN = 16; // px
const BTN_SIZE = 64; // px

export default function SmartTouchMenu({ onSelect }: { onSelect?: (key: string) => void }) {
  const [open, setOpen] = useState(false);
  const [pos, setPos] = useState({ x: SAFE_MARGIN, y: 200 });
  const [dragging, setDragging] = useState(false);
  const [side, setSide] = useState<'left' | 'right'>('left');
  const [blurring, setBlurring] = useState(false);
  const btnRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  // Set posisi awal ke kiri tengah setelah mount
  React.useEffect(() => {
    if (typeof window !== 'undefined') {
      setPos({ x: SAFE_MARGIN, y: window.innerHeight / 2 - BTN_SIZE / 2 });
      setSide('left');
    }
  }, []);

  // Drag logic (vertikal saja, snap ke kiri/kanan setelah drag)
  const handleDrag = (e: React.TouchEvent | React.MouseEvent) => {
    setDragging(true);
    let startY = 0;
    if (e.type === 'touchstart' && 'touches' in e) {
      startY = (e as React.TouchEvent).touches[0].clientY;
    } else if (e.type === 'mousedown' && 'clientY' in e) {
      startY = (e as React.MouseEvent).clientY;
    }
    const move = (ev: any) => {
      let clientY = 0;
      if (ev.type === 'touchmove' && ev.touches && ev.touches.length > 0) {
        clientY = ev.touches[0].clientY;
      } else if (ev.type === 'mousemove' && 'clientY' in ev) {
        clientY = ev.clientY;
      }
      if (typeof window !== 'undefined') {
        let y = clientY - BTN_SIZE / 2;
        const minY = SAFE_MARGIN;
        const maxY = window.innerHeight - BTN_SIZE - SAFE_MARGIN;
        y = Math.max(minY, Math.min(y, maxY));
        setPos(p => ({ ...p, y }));
      }
    };
    const up = (ev: any) => {
      setDragging(false);
      let clientX = 0;
      if (ev.type === 'touchend' && ev.changedTouches && ev.changedTouches.length > 0) {
        clientX = ev.changedTouches[0].clientX;
      } else if (ev.type === 'mouseup' && 'clientX' in ev) {
        clientX = ev.clientX;
      }
      if (typeof window !== 'undefined') {
        const middle = window.innerWidth / 2;
        const isLeft = clientX < middle;
        setSide(isLeft ? 'left' : 'right');
        setPos(p => ({
          x: isLeft ? SAFE_MARGIN : window.innerWidth - BTN_SIZE - SAFE_MARGIN,
          y: p.y
        }));
      }
      window.removeEventListener('mousemove', move);
      window.removeEventListener('mouseup', up);
      window.removeEventListener('touchmove', move);
      window.removeEventListener('touchend', up);
    };
    window.addEventListener('mousemove', move);
    window.addEventListener('mouseup', up);
    window.addEventListener('touchmove', move);
    window.addEventListener('touchend', up);
  };

  // Close menu on click outside
  React.useEffect(() => {
    if (!open) return;
    const handler = (e: MouseEvent) => {
      if (btnRef.current && !btnRef.current.contains(e.target as Node)) setOpen(false);
    };
    window.addEventListener('mousedown', handler);
    return () => window.removeEventListener('mousedown', handler);
  }, [open]);

  // Menu setengah lingkaran (180°) di sekitar tombol, distribusi sudut sempurna
  const N = menu.length;
  const angleStep = 180 / (N - 1);
  const angleStart = -90; // dari atas ke bawah
  const radius = 100;

  return (
    <div style={{ position: 'fixed', left: pos.x, top: pos.y, zIndex: 1000 }} ref={btnRef} className="select-none">
      {/* Menu Items */}
      <AnimatePresence>
        {open && menu.map((item, i) => {
          const angleDeg = angleStart + i * angleStep;
          const angle = (angleDeg * Math.PI) / 180;
          const x = (side === 'left' ? 1 : -1) * Math.cos(angle) * radius;
          const y = Math.sin(angle) * radius;
          return (
            <motion.button
              key={item.key}
              initial={{ opacity: 0, x: 0, y: 0, scale: 0.5 }}
              animate={{ opacity: 1, x, y, scale: 1 }}
              exit={{ opacity: 0, x: 0, y: 0, scale: 0.5 }}
              transition={{ type: 'spring', stiffness: 400, damping: 30, delay: i * 0.04 }}
              className="absolute bg-white shadow-lg rounded-full p-3 flex flex-col items-center border border-pink-100"
              style={{ left: 0, top: 0 }}
              onClick={() => {
                setOpen(false);
                setBlurring(true);
                setTimeout(() => {
                  if (item.key === 'logout') {
                    signOut({ callbackUrl: '/' });
                  } else if (item.path) {
                    router.push(item.path);
                  }
                  if (onSelect) onSelect(item.key);
                  setBlurring(false);
                }, 700);
              }}
            >
              <item.icon className="w-6 h-6 text-pink-600" />
              <span className="text-xs font-semibold text-pink-600 mt-1">{item.label}</span>
            </motion.button>
          );
        })}
      </AnimatePresence>
      {/* Floating Button */}
      <motion.div
        style={{ touchAction: 'none' }}
        className={`w-16 h-16 bg-pink-600 rounded-full flex items-center justify-center shadow-2xl border-4 border-white cursor-pointer z-50 ${dragging ? 'opacity-80' : ''}`}
        onPointerDown={handleDrag as any}
        onTouchStart={handleDrag as any}
        onClick={() => !dragging && setOpen(v => !v)}
        whileTap={{ scale: 0.92 }}
      >
        <UserCircleIcon className="w-9 h-9 text-white" />
      </motion.div>
      {/* Blur overlay */}
      {blurring && (
        <div className="fixed inset-0 z-[2000] bg-white/30 backdrop-blur transition-opacity duration-500 animate-fade-in" style={{ pointerEvents: 'auto' }} />
      )}
    </div>
  );
} 