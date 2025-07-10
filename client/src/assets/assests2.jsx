// assets.jsx
import { Car, ClipboardList, LayoutDashboard, SquarePlus } from "lucide-react";

export const ownerMenuLinks = [
  {
    name: "Dashboard",
    path: "/owner",
    icon: <LayoutDashboard className="text-gray-600" />,
    coloredIcon: <LayoutDashboard className="text-[#0d9488]" />,
  },
  {
    name: "Add car",
    path: "/owner/add-car",
    icon: <SquarePlus className="text-gray-600" />,
    coloredIcon: <SquarePlus className="text-[#0d9488]" />,
  },
  {
    name: "Manage Cars",
    path: "/owner/manage-cars",
    icon: <Car className="text-gray-600" />,
    coloredIcon: <Car className="text-[#0d9488]" />,
  },
  {
    name: "Manage Bookings",
    path: "/owner/manage-bookings",
    icon: <ClipboardList className="text-gray-600" />,
    coloredIcon: <ClipboardList className="text-[#0d9488]" />,
  },
];

export const colorIcon = <ClipboardList className="text-[#0d9488]" />;

//
