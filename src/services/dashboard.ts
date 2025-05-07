import axios from "axios";

export interface DashboardStats {
  totalHotels: number;
  activeBookings: number;
  totalUsers: number;
  monthlyRevenue: number;
  stats: {
    hotelsGrowth: number;
    bookingsGrowth: number;
    usersGrowth: number;
    revenueGrowth: number;
  };
}

export interface BookingStats {
  labels: string[];
  data: number[];
}

export interface PopularHotel {
  id: number;
  name: string;
  image: string;
  bookings: number;
  rating: number;
}

export interface RecentBooking {
  id: number;
  hotelName: string;
  hotelImage: string;
  duration: number;
  createdAt: string;
}

export const getDashboardStats = async (): Promise<DashboardStats> => {
  const response = await axios.get("/api/dashboard/stats");
  return response.data;
};

export const getBookingStats = async (): Promise<BookingStats> => {
  const response = await axios.get("/api/dashboard/booking-stats");
  return response.data;
};

export const getPopularHotels = async (): Promise<PopularHotel[]> => {
  const response = await axios.get("/api/dashboard/popular-hotels");
  return response.data;
};

export const getRecentBookings = async (): Promise<RecentBooking[]> => {
  const response = await axios.get("/api/dashboard/recent-bookings");
  return response.data;
}; 