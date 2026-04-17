"use client";

import { useEffect, useState } from "react";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import {
  Users,
  BookOpen,
  Mic,
  GraduationCap,
  Calendar,
  TrendingUp,
  Award,
  MessageSquare,
} from "lucide-react";
import { DashboardCard } from "../ui/dashboard-card";
import { RevenueChart } from "../ui/revenue-chart";
import { UsersTable } from "../ui/users-table";
import { QuickActions } from "../ui/quick-actions";
import { SystemStatus } from "../ui/system-status";
import { RecentActivity } from "../ui/recent-activity";
import { DashboardHeader } from "../ui/dashboard-header";
import { AdminSidebar } from "../ui/admin-sidebar";
import { dashboardAPI } from "@/services/api";

// User roles
type UserRole = "Student" | "Speaker" | "College" | "Super Admin";

// Role-based stats data
const getRoleBasedStats = (role: UserRole, dashboardStats?: any) => {
  const summary = {
    totalUsers: dashboardStats?.totalUsers ?? 0,
    totalColleges: dashboardStats?.totalColleges ?? 0,
    totalSpeakers: dashboardStats?.totalSpeakers ?? 0,
    totalEvents: dashboardStats?.totalEvents ?? 0,
    totalRequests: dashboardStats?.totalRequests ?? 0,
  };

  const baseStats = {
    Student: [
      {
        title: "My Courses",
        value: "8",
        change: "+2",
        changeType: "positive" as const,
        icon: BookOpen,
        color: "text-blue-500",
        bgColor: "bg-blue-500/10",
      },
      {
        title: "Completed Sessions",
        value: "24",
        change: "+6",
        changeType: "positive" as const,
        icon: Award,
        color: "text-green-500",
        bgColor: "bg-green-500/10",
      },
      {
        title: "Upcoming Events",
        value: "3",
        change: "0",
        changeType: "positive" as const,
        icon: Calendar,
        color: "text-purple-500",
        bgColor: "bg-purple-500/10",
      },
      {
        title: "Study Hours",
        value: "156",
        change: "+12%",
        changeType: "positive" as const,
        icon: TrendingUp,
        color: "text-orange-500",
        bgColor: "bg-orange-500/10",
      },
    ],
    Speaker: [
      {
        title: "Total Sessions",
        value: "45",
        change: "+8",
        changeType: "positive" as const,
        icon: Mic,
        color: "text-blue-500",
        bgColor: "bg-blue-500/10",
      },
      {
        title: "Participants",
        value: "2,340",
        change: "+15%",
        changeType: "positive" as const,
        icon: Users,
        color: "text-green-500",
        bgColor: "bg-green-500/10",
      },
      {
        title: "Upcoming Sessions",
        value: "5",
        change: "+2",
        changeType: "positive" as const,
        icon: Calendar,
        color: "text-purple-500",
        bgColor: "bg-purple-500/10",
      },
      {
        title: "Feedback Rating",
        value: "4.8",
        change: "+0.2",
        changeType: "positive" as const,
        icon: MessageSquare,
        color: "text-orange-500",
        bgColor: "bg-orange-500/10",
      },
    ],
    College: [
      {
        title: "Total Students",
        value: "1,250",
        change: "+5%",
        changeType: "positive" as const,
        icon: GraduationCap,
        color: "text-blue-500",
        bgColor: "bg-blue-500/10",
      },
      {
        title: "Active Programs",
        value: "12",
        change: "+3",
        changeType: "positive" as const,
        icon: BookOpen,
        color: "text-green-500",
        bgColor: "bg-green-500/10",
      },
      {
        title: "Events This Month",
        value: "8",
        change: "+2",
        changeType: "positive" as const,
        icon: Calendar,
        color: "text-purple-500",
        bgColor: "bg-purple-500/10",
      },
      {
        title: "Program Success Rate",
        value: "94%",
        change: "+3%",
        changeType: "positive" as const,
        icon: TrendingUp,
        color: "text-orange-500",
        bgColor: "bg-orange-500/10",
      },
    ],
    "Super Admin": [
      {
        title: "Total Users",
        value: summary.totalUsers.toString(),
        change: "",
        changeType: "positive" as const,
        icon: Users,
        color: "text-blue-500",
        bgColor: "bg-blue-500/10",
      },
      {
        title: "Total Colleges",
        value: summary.totalColleges.toString(),
        change: "",
        changeType: "positive" as const,
        icon: GraduationCap,
        color: "text-green-500",
        bgColor: "bg-green-500/10",
      },
      {
        title: "Total Speakers",
        value: summary.totalSpeakers.toString(),
        change: "",
        changeType: "positive" as const,
        icon: Mic,
        color: "text-purple-500",
        bgColor: "bg-purple-500/10",
      },
      {
        title: "Total Events",
        value: summary.totalEvents.toString(),
        change: "",
        changeType: "positive" as const,
        icon: Calendar,
        color: "text-orange-500",
        bgColor: "bg-orange-500/10",
      },
    ],
  };

  return baseStats[role] || baseStats["Super Admin"];
};

// Role-based welcome messages
const getWelcomeMessage = (role: UserRole) => {
  const messages = {
    Student: {
      title: "Welcome back, Student!",
      subtitle: "Continue your learning journey and track your progress.",
    },
    Speaker: {
      title: "Welcome back, Speaker!",
      subtitle: "Manage your sessions and connect with your audience.",
    },
    College: {
      title: "Welcome back, College Admin!",
      subtitle: "Oversee your institution's programs and student engagement.",
    },
    "Super Admin": {
      title: "Welcome back, Super Admin!",
      subtitle: "Here's what's happening with your platform today.",
    },
  };

  return messages[role] || messages["Super Admin"];
};

export default function AdminDashboard() {
  // Simulate user role - in real app, this would come from authentication context
  const [userRole, setUserRole] = useState<UserRole>("Super Admin");
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [dashboardStats, setDashboardStats] = useState<any | null>(null);

  const fetchStats = async () => {
    try {
      const response = await dashboardAPI.getStats();
      setDashboardStats(response.data.data);
    } catch (error) {
      console.error("Error fetching dashboard stats:", error);
    }
  };

  useEffect(() => {
    fetchStats();
  }, []);

  useEffect(() => {
    try {
      const storedUser = localStorage.getItem("user");
      if (storedUser) {
        const parsed = JSON.parse(storedUser);
        const backendRole = parsed.role as string;
        let mappedRole: UserRole = "Super Admin";

        if (backendRole === "Student") mappedRole = "Student";
        else if (backendRole === "Speaker") mappedRole = "Speaker";
        else if (backendRole === "College") mappedRole = "College";
        else mappedRole = "Super Admin";

        setUserRole(mappedRole);
      }
    } catch (error) {
      console.error("Error reading user role from storage:", error);
    }
  }, []);

  const stats = getRoleBasedStats(userRole, dashboardStats);
  const welcomeMessage = getWelcomeMessage(userRole);

  const handleRefresh = async () => {
    setIsRefreshing(true);
    await fetchStats();
    setIsRefreshing(false);
  };

  const handleExport = () => {
    console.log("Exporting data...");
  };

  const handleAddUser = () => {
    console.log("Adding new user...");
  };

  // Role-based component rendering
  const renderRoleSpecificComponents = () => {
    switch (userRole) {
      case "Student":
        return (
          <div className="grid grid-cols-1 gap-4 sm:gap-6 xl:grid-cols-3">
            <div className="space-y-4 sm:space-y-6 xl:col-span-2">
              <div className="bg-white rounded-lg p-6 shadow-sm border">
                <h3 className="text-lg font-semibold mb-4">
                  My Learning Progress
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">
                      Public Speaking
                    </span>
                    <span className="text-sm font-medium">75%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-orange-500 h-2 rounded-full"
                      style={{ width: "75%" }}
                    ></div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">
                      Communication Skills
                    </span>
                    <span className="text-sm font-medium">60%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-purple-500 h-2 rounded-full"
                      style={{ width: "60%" }}
                    ></div>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-sm border">
                <h3 className="text-lg font-semibold mb-4">
                  Upcoming Sessions
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div>
                      <p className="font-medium">
                        Advanced Presentation Skills
                      </p>
                      <p className="text-sm text-gray-600">Tomorrow, 2:00 PM</p>
                    </div>
                    <button className="px-4 py-2 bg-orange-500 text-white rounded-lg text-sm hover:bg-orange-600">
                      Join
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="space-y-4 sm:space-y-6">
              <div className="bg-white rounded-lg p-6 shadow-sm border">
                <h3 className="text-lg font-semibold mb-4">Achievements</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <Award className="w-8 h-8 text-yellow-500" />
                    <div>
                      <p className="font-medium">First Session Completed</p>
                      <p className="text-sm text-gray-600">
                        Earned 2 weeks ago
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <RecentActivity />
            </div>
          </div>
        );

      case "Speaker":
        return (
          <div className="grid grid-cols-1 gap-4 sm:gap-6 xl:grid-cols-3">
            <div className="space-y-4 sm:space-y-6 xl:col-span-2">
              <RevenueChart />
              <div className="bg-white rounded-lg p-6 shadow-sm border">
                <h3 className="text-lg font-semibold mb-4">My Sessions</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div>
                      <p className="font-medium">Leadership Communication</p>
                      <p className="text-sm text-gray-600">
                        45 participants • Live
                      </p>
                    </div>
                    <button className="px-4 py-2 bg-green-500 text-white rounded-lg text-sm hover:bg-green-600">
                      Start Session
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="space-y-4 sm:space-y-6">
              <QuickActions onAddUser={handleAddUser} onExport={handleExport} />
              <RecentActivity />
            </div>
          </div>
        );

      case "College":
        return (
          <div className="grid grid-cols-1 gap-4 sm:gap-6 xl:grid-cols-3">
            <div className="space-y-4 sm:space-y-6 xl:col-span-2">
              <RevenueChart />
              <UsersTable onAddUser={handleAddUser} />
            </div>
            <div className="space-y-4 sm:space-y-6">
              <div className="bg-white rounded-lg p-6 shadow-sm border">
                <h3 className="text-lg font-semibold mb-4">
                  Institution Overview
                </h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">
                      Active Programs
                    </span>
                    <span className="font-medium">12</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Total Faculty</span>
                    <span className="font-medium">45</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">
                      Events This Month
                    </span>
                    <span className="font-medium">8</span>
                  </div>
                </div>
              </div>
              <SystemStatus />
              <RecentActivity />
            </div>
          </div>
        );

      case "Super Admin":
      default:
        return (
          <div className="grid grid-cols-1 gap-4 sm:gap-6 xl:grid-cols-3">
            <div className="space-y-4 sm:space-y-6 xl:col-span-2">
              <RevenueChart />
              <UsersTable onAddUser={handleAddUser} />
            </div>
            <div className="space-y-4 sm:space-y-6">
              <QuickActions onAddUser={handleAddUser} onExport={handleExport} />
              <SystemStatus />
              <RecentActivity />
            </div>
          </div>
        );
    }
  };

  return (
    <SidebarProvider>
      <AdminSidebar />
      <SidebarInset>
        <DashboardHeader
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          onRefresh={handleRefresh}
          onExport={handleExport}
          isRefreshing={isRefreshing}
        />

        <div className="flex flex-1 flex-col gap-2 p-2 pt-0 sm:gap-4 sm:p-4">
          <div className="min-h-[calc(100vh-4rem)] flex-1 rounded-lg p-3 sm:rounded-xl sm:p-4 md:p-6">
            <div className="mx-auto max-w-6xl space-y-4 sm:space-y-6">
              <div className="px-2 sm:px-0">
                <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">
                  {welcomeMessage.title}
                </h1>
                <p className="text-muted-foreground text-sm sm:text-base">
                  {welcomeMessage.subtitle}
                </p>
              </div>

              {/* Stats Cards */}
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-4">
                {stats.map((stat, index) => (
                  <DashboardCard key={stat.title} stat={stat} index={index} />
                ))}
              </div>

              {/* Dynamic Content Based on Role */}
              {renderRoleSpecificComponents()}
            </div>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
