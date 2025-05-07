"use client"
export const dynamic = "force-dynamic";
import { useState, useEffect } from "react"
import { useForm, SubmitHandler } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
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
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Hotel } from "../page"
import { Plus, X, Upload, ImageIcon } from "lucide-react"
import Image from "next/image"
import { cn } from "@/lib/utils"

type FormValues = z.infer<typeof formSchema>

const formSchema = z.object({
  nama: z.string().min(2, {
    message: "Nama hotel harus minimal 2 karakter",
  }),
  deskripsi: z.string().nullable(),
  alamat: z.string().min(5, {
    message: "Alamat harus minimal 5 karakter",
  }),
  kota: z.string().min(2, {
    message: "Kota harus minimal 2 karakter",
  }),
  negara: z.string().min(2, {
    message: "Negara harus minimal 2 karakter",
  }),
  rating: z.number().min(0).max(5).nullable(),
})

interface HotelDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  hotel: Hotel | null
  onSubmit: () => void
}

export function HotelDialog({
  open,
  onOpenChange,
  hotel,
  onSubmit,
}: HotelDialogProps) {
  const [loading, setLoading] = useState(false)

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      nama: "",
      deskripsi: null,
      alamat: "",
      kota: "",
      negara: "",
      rating: null,
    },
  })

  // Reset form ketika hotel berubah
  useEffect(() => {
    if (hotel) {
      form.reset({
        nama: hotel.nama,
        deskripsi: hotel.deskripsi || null,
        alamat: hotel.alamat,
        kota: hotel.kota,
        negara: hotel.negara,
        rating: hotel.rating || null,
      })
    } else {
      form.reset({
        nama: "",
        deskripsi: null,
        alamat: "",
        kota: "",
        negara: "",
        rating: null,
      })
    }
  }, [hotel, form])

  const onSubmitForm: SubmitHandler<FormValues> = async (values) => {
    try {
      setLoading(true)
      const hotelData = {
        nama: values.nama,
        deskripsi: values.deskripsi || "",
        alamat: values.alamat,
        kota: values.kota,
        negara: values.negara,
        rating: values.rating || undefined,
      }
      const response = await fetch(
        hotel ? `/api/hotels/${hotel.id}` : "/api/hotels",
        {
          method: hotel ? "PATCH" : "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(hotelData),
        }
      )
      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData.message || `Gagal ${hotel ? "mengupdate" : "membuat"} hotel`)
      }
      const result = await response.json()
      onSubmit()
      onOpenChange(false)
    } catch (error: any) {
      console.error("Submit error:", error)
      alert(error.message || `Terjadi kesalahan saat ${hotel ? "mengupdate" : "membuat"} hotel`)
    } finally {
      setLoading(false)
    }
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px] max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>{hotel ? "Edit Hotel" : "Tambah Hotel"}</DialogTitle>
          <DialogDescription>
            {hotel
              ? "Ubah informasi hotel dalam sistem"
              : "Tambahkan hotel baru ke dalam sistem"}
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmitForm)} className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="nama"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Nama Hotel</FormLabel>
                    <FormControl>
                      <Input placeholder="Masukkan nama hotel" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="rating"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Rating</FormLabel>
                    <FormControl>
                      <Input 
                        type="number" 
                        min={0} 
                        max={5} 
                        step={0.1}
                        placeholder="Masukkan rating (0-5)" 
                        {...field}
                        onChange={(e) => field.onChange(e.target.value ? parseFloat(e.target.value) : null)}
                        value={field.value ?? ""}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <FormField
              control={form.control}
              name="deskripsi"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Deskripsi</FormLabel>
                  <FormControl>
                    <Textarea 
                      placeholder="Masukkan deskripsi hotel" 
                      {...field} 
                      value={field.value || ""}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="grid grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="alamat"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Alamat</FormLabel>
                    <FormControl>
                      <Input placeholder="Masukkan alamat hotel" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="kota"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Kota</FormLabel>
                    <FormControl>
                      <Input placeholder="Masukkan kota" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <FormField
              control={form.control}
              name="negara"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Negara</FormLabel>
                  <FormControl>
                    <Input placeholder="Masukkan negara" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="flex flex-col-reverse sm:flex-row sm:justify-end gap-2 pt-4 border-t mt-2">
              <Button
                type="button"
                variant="outline"
                onClick={() => onOpenChange(false)}
                className="w-full sm:w-auto"
              >
                Batal
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
      </DialogContent>
    </Dialog>
  )
} 