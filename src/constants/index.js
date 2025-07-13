import {
  Home,
  Activity,
  Calendar,
  User,
  ChevronLeft,
  Menu,
  MessageSquare,
  Plus,
  Settings,
  LogOut,
} from "lucide-react";

export default {
  NAVLINKS: [
    {
      path: "patprofile",
      icon: User,
      label: "Profile",
      color: "text-pink-500",
    },
    {
      path: "pathome",
      icon: Home,
      label: "Dashboard",
      color: "text-blue-500",
    },
    {
      path: "feed",
      icon: Activity,
      label: "Health Feed",
      color: "text-teal-500",
    },
    {
      path: "appointments",
      icon: Calendar,
      label: "Appointments",
      color: "text-purple-500",
    },
    {
      path: "messages",
      icon: MessageSquare,
      label: "Messages",
      color: "text-amber-500",
    },
  ],
};
