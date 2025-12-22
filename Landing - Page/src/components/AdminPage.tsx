import React from "react";
import { useNavigate } from "react-router-dom";
import { User, Users, ShoppingBag, Briefcase } from "lucide-react";

const AdminDashboard: React.FC = () => {
  const navigate = useNavigate();

  const cards = [
    {
      title: "Doctors",
      icon: <User className="w-10 h-10 text-blue-500" />,
      path: "/admin/doctors",
    },
    {
      title: "Companions",
      icon: <Users className="w-10 h-10 text-green-500" />,
      path: "/admin/companions",
    },
    {
      title: "Marketplace",
      icon: <ShoppingBag className="w-10 h-10 text-purple-500" />,
      path: "/admin/marketplace",
    },
    {
      title: "HR",
      icon: <Briefcase className="w-10 h-10 text-orange-500" />,
      path: "/admin/hr",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-10">
      <h1 className="text-3xl font-bold mb-8">Admin Dashboard</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-6xl">
        {cards.map((card) => (
          <div
            key={card.title}
            onClick={() => navigate(card.path)}
            className="cursor-pointer bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center justify-center transition transform hover:scale-105 hover:shadow-2xl"
          >
            {card.icon}
            <h2 className="mt-4 text-xl font-semibold">{card.title}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminDashboard;
