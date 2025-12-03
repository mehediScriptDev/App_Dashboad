import { NavLink, useNavigate } from "react-router-dom";
import { HiMenuAlt2, HiX } from "react-icons/hi";
import {
    LayoutDashboard,
    Users,
    FileText,
    HelpCircle,
    BarChart3,
    CreditCard,
    Bell,
} from "lucide-react";
import { RiLogoutBoxLine } from "react-icons/ri";
import { useAuth } from "../context/AuthContext";

const SideBar = ({ sidebarOpen, setSidebarOpen }) => {
    const navigate = useNavigate();
    const { logout } = useAuth();

    // Admin menu items based on the image
    const menuItems = [
        { name: "Dashboard", icon: LayoutDashboard, path: "/" },
        { name: "Users", icon: Users, path: "/users" },
        { name: "Content", icon: FileText, path: "/content" },
        { name: "Questions", icon: HelpCircle, path: "/questions" },
        { name: "Analytics", icon: BarChart3, path: "/analytics" },
        { name: "Subscriptions", icon: CreditCard, path: "/subscriptions" },
        { name: "Notifications", icon: Bell, path: "/notifications" },
    ];

    const handleLogout = () => {
        logout();
        navigate("/login");
    };

    return (
        <>
            {/* Mobile Menu Button (only when sidebar is closed) */}
            {!sidebarOpen && (
                <div className="lg:hidden fixed bg-white w-full z-50">
                    <button
                        onClick={() => setSidebarOpen(true)}
                        className="p-3 hover:bg-gray-50 transition-all duration-200 rounded-full"
                    >
                        <HiMenuAlt2 className="w-8 h-7 text-gray-700" />
                    </button>
                </div>
            )}

            {/* Sidebar */}
            <div
                className={`bg-[#FAF7F2] shadow-lg transform ${sidebarOpen ? "translate-x-0" : "-translate-x-full"
                    } lg:translate-x-0 transition-transform duration-300 ease-in-out
                  fixed inset-y-0 left-0 z-50 w-[300px] flex flex-col`}
            >
                {/* Mobile Close Button */}
                {sidebarOpen && (
                    <div className="lg:hidden absolute top-4 right-4 z-50">
                        <button
                            onClick={() => setSidebarOpen(false)}
                            className="p-2 hover:bg-gray-100 rounded-full transition-all duration-200"
                        >
                            <HiX className="w-6 h-6 text-gray-700" />
                        </button>
                    </div>
                )}

                <div className="flex-1 flex flex-col">
                    {/* Logo */}
                    <div className="px-6 py-8">
                        <div className="flex items-center gap-2">
                            <div className="w-10 h-10 bg-[#FFAC00] rounded-lg flex items-center justify-center">
                                <span className="text-white font-bold text-lg">U</span>
                            </div>
                            <div>
                                <h2 className="text-[#FFAC00] font-semibold text-2xl">UltraStudy</h2>
                                <p className="text-base text-[#6A6A6A]">Admin Panel</p>
                            </div>
                        </div>
                    </div>

                    {/* Menu Items */}
                    <nav className="flex-1 px-4 space-y-1 overflow-y-auto">
                        {menuItems.map((item) => {
                            const Icon = item.icon;
                            return (
                                <NavLink
                                    key={item.path}
                                    to={item.path}
                                    end={item.path === "/"}
                                    className={({ isActive }) =>
                                        `w-full flex items-center gap-3 px-4 py-3 text-left rounded-lg transition-all duration-200 ${isActive
                                            ? "bg-[#FFFFFF] text-[#4D4D4D] shadow-sm font-medium"
                                            : "text-[#6A6A6A] hover:bg-white/90"
                                        }`
                                    }
                                    onClick={() => window.innerWidth < 1024 && setSidebarOpen(false)}
                                >
                                    <Icon className="w-5 h-5" />
                                    <span className="text-sm">{item.name}</span>
                                </NavLink>
                            );
                        })}
                    </nav>
                </div>

                {/* Logout Button at the bottom */}
                <div className="px-4 pb-6">
                    <button
                        onClick={handleLogout}
                        className="w-full flex items-center gap-3 px-4 py-3 text-left rounded-lg bg-black text-white hover:bg-gray-800 transition-all duration-200"
                    >
                        <RiLogoutBoxLine className="w-5 h-5" />
                        <span className="text-sm font-medium">Go out</span>
                    </button>
                </div>
            </div>

            {/* Overlay for Mobile */}
            {sidebarOpen && (
                <div
                    className="fixed inset-0 z-30 bg-black/40 lg:hidden"
                    onClick={() => setSidebarOpen(false)}
                />
            )}
        </>
    );
};

export default SideBar;

