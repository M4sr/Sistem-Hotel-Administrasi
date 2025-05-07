"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Upload, ImageIcon } from "lucide-react"
import { cn } from "@/lib/utils"

const MAX_FILE_SIZE = 5 * 1024 * 1024 // 5MB
const ACCEPTED_IMAGE_TYPES = ["image/jpeg", "image/png", "image/webp"]

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Nama harus minimal 2 karakter",
  }),
  email: z.string().email({
    message: "Email tidak valid",
  }),
  password: z.union([
    z.string().min(6, {
      message: "Password harus minimal 6 karakter",
    }),
    z.string().length(0)
  ]),
  roleId: z.string({
    required_error: "Role harus dipilih"
  }),
  telepon: z.string().optional(),
  image: z.any().optional()
})

interface Role {
  id: string
  name: string
}

interface EditUserFormProps {
  initialData: {
    id: string
    name: string | null
    email: string | null
    roleId: string | null
    telepon: string | null
    image: string | null
    role: {
      id: string
      name: string
    } | null
  }
  roles: Role[]
}

export default function EditUserForm({ initialData, roles }: EditUserFormProps) {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [imagePreview, setImagePreview] = useState<string | null>(initialData.image)
  const [isDragging, setIsDragging] = useState(false)
  const [imageFile, setImageFile] = useState<File | null>(null)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: initialData.name || "",
      email: initialData.email || "",
      password: "",
      roleId: initialData.roleId || initialData.role?.id || "",
      telepon: initialData.telepon || "",
    },
  })

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      setLoading(true)
      
      // Buat FormData untuk mengirim file
      const formData = new FormData()
      formData.append('name', values.name)
      formData.append('email', values.email)
      // Hanya kirim password jika diisi
      if (values.password && values.password.length > 0) {
        formData.append('password', values.password)
      }
      formData.append('roleId', values.roleId)
      if (values.telepon) formData.append('telepon', values.telepon)
      if (imageFile) formData.append('image', imageFile)
      
      const response = await fetch(`/api/users/${initialData.id}`, {
        method: "PATCH",
        body: formData,
      })

      if (!response.ok) {
        const error = await response.json()
        throw new Error(error.error || "Failed to update user")
      }

      router.push("/dashboard-admin-secure/users")
      router.refresh()
    } catch (error: any) {
      console.error("Error updating user:", error)
      alert(error.message || "Terjadi kesalahan saat mengupdate user")
    } finally {
      setLoading(false)
    }
  }

  const handleImageChange = (files: FileList | null) => {
    const file = files?.[0]
    if (file) {
      // Validasi ukuran file
      if (file.size > MAX_FILE_SIZE) {
        alert("Ukuran file terlalu besar (maksimal 5MB)")
        return
      }
      
      // Validasi tipe file
      if (!ACCEPTED_IMAGE_TYPES.includes(file.type)) {
        alert("Format file tidak didukung (gunakan JPG, PNG, atau WEBP)")
        return
      }

      const reader = new FileReader()
      reader.onloadend = () => {
        setImagePreview(reader.result as string)
      }
      reader.readAsDataURL(file)
      setImageFile(file)
    } else {
      setImagePreview(initialData.image)
      setImageFile(null)
    }
  }

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setIsDragging(true)
  }

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setIsDragging(false)
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setIsDragging(false)
    
    const files = e.dataTransfer.files
    handleImageChange(files)
  }

  return (
    <div className="container mx-auto py-6">
      <Card>
        <CardHeader>
          <CardTitle>Edit Pengguna</CardTitle>
          <CardDescription>
            Ubah informasi pengguna sistem hotel
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <div className="flex flex-col md:flex-row md:items-start gap-8">
                <div className="w-full md:w-auto">
                  <div
                    className={cn(
                      "relative mx-auto md:mx-0 w-32 h-32 rounded-full overflow-hidden border-2 border-dashed cursor-pointer transition-colors",
                      isDragging ? "border-primary bg-primary/10" : "border-gray-300 hover:border-primary"
                    )}
                    onDragOver={handleDragOver}
                    onDragLeave={handleDragLeave}
                    onDrop={handleDrop}
                    onClick={() => document.getElementById('image-upload')?.click()}
                  >
                    {imagePreview ? (
                      <Avatar className="w-full h-full">
                        <AvatarImage 
                          src={imagePreview} 
                          alt="Foto profil"
                          className="object-cover" 
                        />
                        <AvatarFallback>
                          {initialData.name?.charAt(0).toUpperCase() || "U"}
                        </AvatarFallback>
                      </Avatar>
                    ) : (
                      <div className="absolute inset-0 flex flex-col items-center justify-center text-gray-500">
                        <ImageIcon className="w-8 h-8 mb-2" />
                        <span className="text-xs text-center px-2">
                          Drag foto atau klik untuk upload
                        </span>
                      </div>
                    )}
                  </div>
                  <FormField
                    control={form.control}
                    name="image"
                    render={({ field: { onChange, value, ...field } }) => (
                      <FormItem>
                        <FormControl>
                          <div className="flex items-center justify-center md:justify-start gap-2 mt-4">
                            <Input
                              type="file"
                              accept="image/*"
                              className="hidden"
                              id="image-upload"
                              onChange={(e) => handleImageChange(e.target.files)}
                              {...field}
                            />
                            <Button
                              type="button"
                              variant="outline"
                              onClick={() => document.getElementById('image-upload')?.click()}
                            >
                              <Upload className="w-4 h-4 mr-2" />
                              Pilih Foto
                            </Button>
                          </div>
                        </FormControl>
                        <FormDescription className="text-center md:text-left mt-2">
                          Format: JPG, PNG, WEBP. Maks: 5MB
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="flex-1 space-y-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Nama</FormLabel>
                        <FormControl>
                          <Input placeholder="Masukkan nama" {...field} />
                        </FormControl>
                        <FormDescription>
                          Nama lengkap pengguna
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input placeholder="email@example.com" type="email" {...field} />
                        </FormControl>
                        <FormDescription>
                          Email akan digunakan untuk login
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Password Baru (Opsional)</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="Kosongkan jika tidak ingin mengubah" 
                            type="password" 
                            {...field} 
                            value={field.value || ""}
                          />
                        </FormControl>
                        <FormDescription>
                          Minimal 6 karakter. Biarkan kosong jika tidak ingin mengubah password.
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="roleId"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Role</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Pilih role pengguna" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {roles.map((role) => (
                              <SelectItem key={role.id} value={role.id}>
                                {role.name}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <FormDescription>
                          Role menentukan hak akses pengguna dalam sistem
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="telepon"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Nomor Telepon</FormLabel>
                        <FormControl>
                          <Input placeholder="08xxxxxxxxxx" {...field} value={field.value || ""} />
                        </FormControl>
                        <FormDescription>
                          Opsional
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>

              <div className="flex flex-col-reverse sm:flex-row sm:justify-end gap-2">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => router.back()}
                  className="w-full sm:w-auto"
                >
                  Kembali
                </Button>
                <Button 
                  type="submit" 
                  disabled={loading}
                  className="w-full sm:w-auto"
                >
                  {loading ? "Menyimpan..." : "Simpan"}
                </Button>
              </div>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  )
} 