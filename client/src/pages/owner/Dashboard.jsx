import React, { useEffect, useState } from "react";
import { assets, dummyDashboardData } from "../../assets/assets";
import Title from "../../components/owner/Title";
import { useActionData } from "react-router-dom";
import { Link } from "react-router-dom";
import { useAppContext } from "../../context/AppContext";
import toast from "react-hot-toast";
import { colorIcon } from "../../assets/assests2";
import { Car, ClipboardList, MoveLeft, TriangleAlert } from "lucide-react";
const Dashboard = () => {
  const { axios, isOwner, currency } = useAppContext();

  const [data, setData] = useState({
    totalCars: 0,
    totalBookings: 0,
    pendingBookings: 0,
    completedBookings: 0,
    recentBookings: [],
    monthlyRevenue: 0,
  });

  const dashboardCards = [
    {
      title: "Total Cars",
      value: data.totalCars,
      icon: <Car className="text-[#0d9488]" />,
    },
    {
      title: "Total Bookings",
      value: data.totalBookings,
      icon: <ClipboardList className="text-[#0d9488]" />,
    },
    {
      title: "Pending",
      value: data.pendingBookings,
      icon: <TriangleAlert className="text-[#0d9488]" />,
    },
    {
      title: "Confirmed",
      value: data.completedBookings,
      icon: <ClipboardList className="text-[#0d9488]" />,
    },
  ];

  const fetchDashboardData = async () => {
    try {
      const { data } = await axios.get("/api/owner/dashboard");
      if (data.success) {
        setData(data.dashboardData);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  useEffect(() => {
    if (isOwner) {
      fetchDashboardData();
    }
  }, [isOwner]);

  return (
    <>
      <Link className="flex items-start" to={"/"}>
        <div className="flex h-11  items-center px-4  md:px-6 gap-2 text-[#0d9488] hover:scale-110 hover:text-red-500">
          <MoveLeft />
          <div className="">Home</div>
        </div>
      </Link>
      <div className="px-4 pt-10 md:px-10 flex-1">
        <Title
          title="Admin Dashboard"
          subTitle="Monitor overall platform performance including total cars, bookings, revenue, and recent activites"
        />

        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 my-8 max-w-3xl">
          {dashboardCards.map((card, index) => (
            <div
              key={index}
              className="flex gap-2 items-center justify-between p-4 rounded-md border border-borderColor"
            >
              <div>
                <h1 className="text-xs text-gray-500">{card.title}</h1>
                <p className="text-lg font-semibold">{card.value}</p>
              </div>
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10">
                {card.icon}
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap items-start gap-6 mb-8 w-full">
          {/* recent bookings */}
          <div className="p-4 md:p-6 border border-borderColor rounded-md max-w-lg w-full">
            <h1 className="text-left font-medium">Recent Bookings</h1>
            <p className="text-gray-500">Latest customer bookings</p>
            {data.recentBookings.map((booking, index) =>
              booking.car ? (
                <div
                  key={index}
                  className="mt-4 flex items-center justify-between"
                >
                  <div className="flex items-center gap-2">
                    <div className="hidden md:flex items-center justify-center w-12 h-12 rounded-full bg-primary/10">
                      {colorIcon}
                    </div>
                    <div>
                      <p>
                        {booking.car.brand} {booking.car.model}
                      </p>
                      <p className="text-sm text-gray-500">
                        {booking.createdAt.split("T")[0]}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 font-medium">
                    <p className="text-sm text-gray-500">
                      {currency} {booking.price}
                    </p>
                    <p className="px-3 py-0.5 border border-borderColor rounded-full text-sm">
                      {booking.status}
                    </p>
                  </div>
                </div>
              ) : (
                <div key={index} className="mt-4 text-sm text-red-500 italic">
                  Booking info missing (Car unavailable)
                </div>
              )
            )}
          </div>

          {/* monthly revenue */}
          <div className="p-4 md:p-6 mb-6 border border-borderColor rounded-md w-full md:max-w-xs">
            <h1 className="text-lg font-medium">Monthly Revenue</h1>
            <p className="text-gray-500">Revenu for current month</p>
            <p className="text-3xl mt-6 font-semibold text-[#0d9488]">
              {currency} {data.monthlyRevenue}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
