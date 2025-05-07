'use client'

import { useState, useEffect } from 'react'
export const dynamic = "force-dynamic";
import { useSession } from 'next-auth/react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Switch } from '@/components/ui/switch'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import { toast } from 'sonner'
import { Loader2, User, Lock, Bell } from 'lucide-react'

export default function SettingsPage() {
  const { data: session, update } = useSession()
  const [activeTab, setActiveTab] = useState('profile')
  const [loading, setLoading] = useState(false)
  const [notifications, setNotifications] = useState({
    email: true,
    booking: true,
    review: true
  })
  const [imagePreview, setImagePreview] = useState<string | null>(null)
  const [dragActive, setDragActive] = useState(false)
  const [imgCacheBuster, setImgCacheBuster] = useState('')

  useEffect(() => {
    const fetchNotifications = async () => {
      const res = await fetch('/api/settings/notifications')
      if (res.ok) {
        const data = await res.json()
        setNotifications(data)
      }
    }
    fetchNotifications()
  }, [])

  useEffect(() => {
    if (session?.user?.image) {
      setImagePreview(session.user.image)
    }
  }, [session])

  useEffect(() => {
    setImgCacheBuster('?t=' + Date.now())
  }, [])

  const handleProfileUpdate = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    const formData = new FormData(e.target as HTMLFormElement)
    const res = await fetch('/api/settings/profile', {
      method: 'PUT',
      body: formData
    })
    if (res.ok) {
      await update()
      toast.success('Profil berhasil diperbarui')
      window.location.reload()
    } else {
      toast.error('Gagal memperbarui profil')
    }
    setLoading(false)
  }

  const handlePasswordChange = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    const formData = new FormData(e.target as HTMLFormElement)
    const res = await fetch('/api/settings/security/change-password', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        oldPassword: formData.get('oldPassword'),
        newPassword: formData.get('newPassword')
      })
    })
    if (res.ok) {
      toast.success('Password berhasil diubah')
      ;(e.target as HTMLFormElement).reset()
    } else {
      const data = await res.json()
      toast.error(data.error || 'Gagal mengubah password')
    }
    setLoading(false)
  }

  const handleNotificationChange = async (key: string, value: boolean) => {
    const newNotif = { ...notifications, [key]: value }
    setNotifications(newNotif)
    const res = await fetch('/api/settings/notifications', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newNotif)
    })
    if (res.ok) {
      toast.success('Preferensi notifikasi berhasil diperbarui')
    } else {
      toast.error('Gagal memperbarui preferensi notifikasi')
    }
  }

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true)
    } else if (e.type === "dragleave") {
      setDragActive(false)
    }
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setDragActive(false)
    const file = e.dataTransfer.files?.[0]
    if (file && file.type.startsWith("image/")) {
      setImagePreview(URL.createObjectURL(file))
      const input = document.getElementById("image") as HTMLInputElement
      if (input) {
        input.files = e.dataTransfer.files
      }
    }
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      setImagePreview(URL.createObjectURL(file))
    }
  }

  return (
    <div className="container mx-auto p-6 sm:p-8">
      <h1 className="text-2xl sm:text-3xl font-bold mb-8 sm:mb-10">Pengaturan</h1>
      <Tabs value={activeTab} onValueChange={setActiveTab} className="flex flex-col sm:block space-y-6 sm:space-y-8">
        <TabsList className="flex flex-row sm:grid sm:grid-cols-3 w-full gap-3 sm:gap-0">
          <TabsTrigger value="profile" className="flex items-center gap-2">
            <User className="h-4 w-4" />
            <span className="hidden sm:inline">Profil</span>
          </TabsTrigger>
          <TabsTrigger value="security" className="flex items-center gap-2">
            <Lock className="h-4 w-4" />
            <span className="hidden sm:inline">Keamanan</span>
          </TabsTrigger>
          <TabsTrigger value="notifications" className="flex items-center gap-2">
            <Bell className="h-4 w-4" />
            <span className="hidden sm:inline">Notifikasi</span>
          </TabsTrigger>
        </TabsList>

        <TabsContent value="profile">
          <Card>
            <CardHeader>
              <CardTitle>Profil</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleProfileUpdate} className="space-y-4">
                <input
                  id="image"
                  name="image"
                  type="file"
                  accept="image/*"
                  onChange={handleFileChange}
                  className="hidden"
                />
                <div className="flex flex-col items-center justify-center mb-4">
                  <div className="relative group cursor-pointer" onClick={() => document.getElementById('image')?.click()}>
                    <img
                      src={
                        imagePreview ||
                        (session?.user?.image
                          ? session.user.image + imgCacheBuster
                          : "/default-profile.png")
                      }
                      alt="Foto Profil"
                      className="h-28 w-28 object-cover rounded-full border-2 border-gray-300 bg-white transition duration-200 group-hover:brightness-90 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 rounded-full transition">
                      <span className="text-white text-xs font-semibold">Ganti Foto</span>
                    </div>
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="name">Nama</Label>
                  <Input
                    id="name"
                    name="name"
                    defaultValue={session?.user?.name || ''}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="telepon">Telepon</Label>
                  <Input
                    id="telepon"
                    name="telepon"
                    defaultValue=""
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    defaultValue={session?.user?.email || ''}
                    disabled
                  />
                </div>
                <Button type="submit" disabled={loading}>
                  {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                  Simpan Perubahan
                </Button>
              </form>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="security">
          <Card>
            <CardHeader>
              <CardTitle>Ganti Password</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handlePasswordChange} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="oldPassword">Password Lama</Label>
                  <Input
                    id="oldPassword"
                    name="oldPassword"
                    type="password"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="newPassword">Password Baru</Label>
                  <Input
                    id="newPassword"
                    name="newPassword"
                    type="password"
                    required
                  />
                </div>
                <Button type="submit" disabled={loading}>
                  {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                  Ganti Password
                </Button>
              </form>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="notifications">
          <Card>
            <CardHeader>
              <CardTitle>Preferensi Notifikasi</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <Label htmlFor="email-notif">Notifikasi Email</Label>
                  <Switch
                    id="email-notif"
                    checked={notifications.email}
                    onCheckedChange={(checked: boolean) => handleNotificationChange('email', checked)}
                  />
                </div>
                <div className="flex items-center justify-between">
                  <Label htmlFor="booking-notif">Notifikasi Booking Baru</Label>
                  <Switch
                    id="booking-notif"
                    checked={notifications.booking}
                    onCheckedChange={(checked: boolean) => handleNotificationChange('booking', checked)}
                  />
                </div>
                <div className="flex items-center justify-between">
                  <Label htmlFor="review-notif">Notifikasi Ulasan Baru</Label>
                  <Switch
                    id="review-notif"
                    checked={notifications.review}
                    onCheckedChange={(checked: boolean) => handleNotificationChange('review', checked)}
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
} 