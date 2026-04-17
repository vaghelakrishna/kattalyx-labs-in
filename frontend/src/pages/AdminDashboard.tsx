"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Users,
  Calendar,
  Video,
  GraduationCap,
  Mic,
  CalendarClock,
  MonitorPlay,
  Award,
  // Activity,
  // BookOpen,
  // DollarSign,
  // Eye,
  // MessageSquare,
  // TrendingUp,
} from "lucide-react";
import { DashboardCard } from "../components/ui/dashboard-card";
import { RevenueChart } from "../components/ui/revenue-chart";
import { UsersTable } from "../components/ui/users-table";
import { QuickActions } from "../components/ui/quick-actions";
// import { SystemStatus } from "../components/ui/system-status";
import { RecentActivity } from "../components/ui/recent-activity";
import { DashboardHeader } from "../components/ui/dashboard-header";
import { downloadZipOfCsvs } from "@/utils/exportZip";
import { AdminSidebar } from "../components/ui/admin-sidebar";
import EventsTab from "../components/dashboard/EventsTab";
import OnlineSessionsTab from "../components/dashboard/OnlineSessionsTab";
import SpeakersTab from "../components/dashboard/SpeakersTab";
import SchoolsTab from "../components/dashboard/SchoolsTab";
import UsersTab from "../components/dashboard/UsersTab";
import ModulesTab from "../components/dashboard/ModulesTab";
import CertificateIssue from "../components/dashboard/CertificateIssue";
// import EventTestComponent from "../components/EventTestComponent";
import { dashboardAPI } from "../services/api";
import BlogsTab from "@/components/dashboard/BlogsTab";

// User roles
type UserRole = "Student" | "Speaker" | "School" | "Super Admin";

// Role-based stats data
// const getRoleBasedStats = (role: UserRole) => {
//   const baseStats = {
//     Student: [
//       {
//         title: "My Courses",
//         value: "8",
//         change: "+2",
//         changeType: "positive" as const,
//         icon: BookOpen,
//         color: "text-blue-500",
//         bgColor: "bg-blue-500/10",
//       },
//       {
//         title: "Completed Sessions",
//         value: "24",
//         change: "+6",
//         changeType: "positive" as const,
//         icon: Award,
//         color: "text-green-500",
//         bgColor: "bg-green-500/10",
//       },
//       {
//         title: "Upcoming Events",
//         value: "3",
//         change: "0",
//         changeType: "positive" as const,
//         icon: Calendar,
//         color: "text-purple-500",
//         bgColor: "bg-purple-500/10",
//       },
//       {
//         title: "Study Hours",
//         value: "156",
//         change: "+12%",
//         changeType: "positive" as const,
//         icon: TrendingUp,
//         color: "text-orange-500",
//         bgColor: "bg-orange-500/10",
//       },
//     ],
//     Speaker: [
//       {
//         title: "Total Sessions",
//         value: "45",
//         change: "+8",
//         changeType: "positive" as const,
//         icon: Mic,
//         color: "text-blue-500",
//         bgColor: "bg-blue-500/10",
//       },
//       {
//         title: "Participants",
//         value: "2,340",
//         change: "+15%",
//         changeType: "positive" as const,
//         icon: Users,
//         color: "text-green-500",
//         bgColor: "bg-green-500/10",
//       },
//       {
//         title: "Upcoming Sessions",
//         value: "5",
//         change: "+2",
//         changeType: "positive" as const,
//         icon: Calendar,
//         color: "text-purple-500",
//         bgColor: "bg-purple-500/10",
//       },
//       {
//         title: "Feedback Rating",
//         value: "4.8",
//         change: "+0.2",
//         changeType: "positive" as const,
//         icon: MessageSquare,
//         color: "text-orange-500",
//         bgColor: "bg-orange-500/10",
//       },
//     ],
//     School: [
//       {
//         title: "Total Students",
//         value: "1,250",
//         change: "+5%",
//         changeType: "positive" as const,
//         icon: GraduationCap,
//         color: "text-blue-500",
//         bgColor: "bg-blue-500/10",
//       },
//       {
//         title: "Active Programs",
//         value: "12",
//         change: "+3",
//         changeType: "positive" as const,
//         icon: BookOpen,
//         color: "text-green-500",
//         bgColor: "bg-green-500/10",
//       },
//       {
//         title: "Events This Month",
//         value: "8",
//         change: "+2",
//         changeType: "positive" as const,
//         icon: Calendar,
//         color: "text-purple-500",
//         bgColor: "bg-purple-500/10",
//       },
//       {
//         title: "Program Success Rate",
//         value: "94%",
//         change: "+3%",
//         changeType: "positive" as const,
//         icon: TrendingUp,
//         color: "text-orange-500",
//         bgColor: "bg-orange-500/10",
//       },
//     ],
//     "Super Admin": [
//       {
//         title: "Total Users",
//         value: "12,345",
//         change: "+12%",
//         changeType: "positive" as const,
//         icon: Users,
//         color: "text-blue-500",
//         bgColor: "bg-blue-500/10",
//       },
//       {
//         title: "Revenue",
//         value: "$45,678",
//         change: "+8.2%",
//         changeType: "positive" as const,
//         icon: DollarSign,
//         color: "text-green-500",
//         bgColor: "bg-green-500/10",
//       },
//       {
//         title: "Active Sessions",
//         value: "2,456",
//         change: "+15%",
//         changeType: "positive" as const,
//         icon: Activity,
//         color: "text-purple-500",
//         bgColor: "bg-purple-500/10",
//       },
//       {
//         title: "Page Views",
//         value: "34,567",
//         change: "-2.4%",
//         changeType: "negative" as const,
//         icon: Eye,
//         color: "text-orange-500",
//         bgColor: "bg-orange-500/10",
//       },
//     ],
//   };

//   return baseStats[role] || baseStats["Super Admin"];
// };

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
    School: {
      title: "Welcome back, School Admin!",
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
  const [userRole] = useState<UserRole>("Super Admin");
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [stats, setStats] = useState({
    totalStudents: 0,
    totalOfflineEvents: 0,
    totalOnlineSessions: 0,
    totalSchools: 0,
    totalSpeakers: 0,
    upcomingEvents: 0,
    upcomingSessions: 0,
  });
  const [, setLoading] = useState(true);

  // Use React Router hooks for URL handling
  // const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();
  const currentTab = searchParams.get('tab') || 'overview';

  const welcomeMessage = getWelcomeMessage(userRole);

  // Handle tab change
  const handleTabChange = (value: string) => {
    if (value === 'overview') {
      setSearchParams({});
    } else {
      setSearchParams({ tab: value });
    }
  };

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const response = await dashboardAPI.getStats();
        setStats(response.data.data || {
          totalStudents: 0,
          totalOfflineEvents: 0,
          totalOnlineSessions: 0,
          totalSchools: 0,
          totalSpeakers: 0,
          upcomingEvents: 0,
          upcomingSessions: 0,
        });
      } catch (error) {
        console.error("Error fetching stats:", error);
        setStats({
          totalStudents: 0,
          totalOfflineEvents: 0,
          totalOnlineSessions: 0,
          totalSchools: 0,
          totalSpeakers: 0,
          upcomingEvents: 0,
          upcomingSessions: 0,
        });
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
  }, []);

  // Dynamic stats based on API data - 7 cards as per spec
  const getDynamicStats = () => {
    if (!stats) return [];

    return [
      {
        title: "Total Students",
        value: stats.totalStudents?.toString() || "0",
        change: "",
        changeType: "positive" as const,
        icon: Users,
        color: "text-blue-500",
        bgColor: "bg-blue-500/10",
      },
      {
        title: "Total Offline Events",
        value: stats.totalOfflineEvents?.toString() || "0",
        change: "",
        changeType: "positive" as const,
        icon: Calendar,
        color: "text-green-500",
        bgColor: "bg-green-500/10",
      },
      {
        title: "Total Online Sessions",
        value: stats.totalOnlineSessions?.toString() || "0",
        change: "",
        changeType: "positive" as const,
        icon: Video,
        color: "text-purple-500",
        bgColor: "bg-purple-500/10",
      },
      {
        title: "Total Schools",
        value: stats.totalSchools?.toString() || "0",
        change: "",
        changeType: "positive" as const,
        icon: GraduationCap,
        color: "text-orange-500",
        bgColor: "bg-orange-500/10",
      },
      {
        title: "Total Speakers",
        value: stats.totalSpeakers?.toString() || "0",
        change: "",
        changeType: "positive" as const,
        icon: Mic,
        color: "text-pink-500",
        bgColor: "bg-pink-500/10",
      },
      {
        title: "Upcoming Events",
        value: stats.upcomingEvents?.toString() || "0",
        change: "",
        changeType: "positive" as const,
        icon: CalendarClock,
        color: "text-cyan-500",
        bgColor: "bg-cyan-500/10",
      },
      {
        title: "Upcoming Sessions",
        value: stats.upcomingSessions?.toString() || "0",
        change: "",
        changeType: "positive" as const,
        icon: MonitorPlay,
        color: "text-indigo-500",
        bgColor: "bg-indigo-500/10",
      },
    ];
  };

  const roleStats = getDynamicStats();

  const handleRefresh = async () => {
    setIsRefreshing(true);
    try {
      const response = await dashboardAPI.getStats();
      setStats(response.data.data || {
        totalStudents: 0,
        totalOfflineEvents: 0,
        totalOnlineSessions: 0,
        totalSchools: 0,
        totalSpeakers: 0,
        upcomingEvents: 0,
        upcomingSessions: 0,
      });
    } catch (error) {
      console.error("Error refreshing stats:", error);
    } finally {
      setTimeout(() => setIsRefreshing(false), 500);
    }
  };
  const handleExport = async (mode: "current" | "zip-all" = "current") => {
    // Current-tab export can be added per-tab later; for now we implement ZIP export of all dashboard tables.
    if (mode !== "zip-all") {
      console.log("Exporting current tab...");
      return;
    }

    // Fetch latest data for each admin tab and zip into multiple CSVs
    try {
      const [
        eventsRes,
        sessionsRes,
        usersRes,
        speakersRes,
        schoolsRes,
        modulesRes,
      ] = await Promise.allSettled([
        // These are expected to exist in your backend api layer; if any are missing, we fall back to empty.
        (dashboardAPI as any).getEvents?.(),
        (dashboardAPI as any).getOnlineSessions?.(),
        (dashboardAPI as any).getUsers?.(),
        (dashboardAPI as any).getSpeakers?.(),
        (dashboardAPI as any).getSchools?.(),
        (dashboardAPI as any).getModules?.(),
      ]);

      const safeData = (r: PromiseSettledResult<any>) =>
        r.status === "fulfilled" ? r.value?.data?.data ?? r.value?.data ?? [] : [];

      const events = safeData(eventsRes);
      const sessions = safeData(sessionsRes);
      const users = safeData(usersRes);
      const speakers = safeData(speakersRes);
      const schools = safeData(schoolsRes);
      const modules = safeData(modulesRes);

      const stamp = new Date().toISOString().slice(0, 19).replace(/[:T]/g, "-");

      await downloadZipOfCsvs({
        zipName: `admin-dashboard-export-${stamp}`,
        files: [
          { name: "offline-events.csv", rows: Array.isArray(events) ? events : [] },
          {
            name: "online-sessions.csv",
            rows: Array.isArray(sessions) ? sessions : [],
          },
          { name: "users.csv", rows: Array.isArray(users) ? users : [] },
          { name: "speakers.csv", rows: Array.isArray(speakers) ? speakers : [] },
          { name: "schools.csv", rows: Array.isArray(schools) ? schools : [] },
          { name: "modules.csv", rows: Array.isArray(modules) ? modules : [] },
        ],
      });
    } catch (e) {
      console.error("Export ZIP failed:", e);
    }
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
              {/* <QuickActions onAddUser={handleAddUser} onExport={handleExport} /> */}
              {/* <RecentActivity /> */}
            </div>
          </div>
        );

      case "School":
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
              {/* <SystemStatus /> */}
              {/* <RecentActivity /> */}
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
              {/* <SystemStatus /> */}
              {/* <RecentActivity /> */}
            </div>
          </div>
        );
    }
  };

  return (
    <SidebarProvider>
      <AdminSidebar />
      <SidebarInset className="flex-1 overflow-auto">
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

              {/* Stats Cards - 7 cards as per spec */}
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-4 xl:grid-cols-7">
                {roleStats.map((stat, index) => (
                  <DashboardCard key={stat.title} stat={stat} index={index} />
                ))}
              </div>

              {/* Management Tabs */}
              <Tabs value={currentTab} onValueChange={handleTabChange} className="space-y-4">
                <TabsList className="grid w-full grid-cols-9">
                  <TabsTrigger value="overview">Overview</TabsTrigger>
                  <TabsTrigger value="events">Events</TabsTrigger>
                  <TabsTrigger value="sessions">Online Sessions</TabsTrigger>
                  <TabsTrigger value="users">Users</TabsTrigger>
                  <TabsTrigger value="speakers">Speakers</TabsTrigger>
                  <TabsTrigger value="schools">Schools</TabsTrigger>
                  <TabsTrigger value="modules">Modules</TabsTrigger>
                  <TabsTrigger value="certificates">Certificates</TabsTrigger>
                  <TabsTrigger value="blogs">Blogs</TabsTrigger>
                </TabsList>

                <TabsContent value="overview">
                  {renderRoleSpecificComponents()}
                </TabsContent>

                <TabsContent value="events">
                  <EventsTab />
                </TabsContent>

                <TabsContent value="sessions">
                  <OnlineSessionsTab />
                </TabsContent>

                <TabsContent value="users">
                  <UsersTab />
                </TabsContent>

                <TabsContent value="speakers">
                  <SpeakersTab />
                </TabsContent>

                <TabsContent value="schools">
                  <SchoolsTab />
                </TabsContent>

                <TabsContent value="modules">
                  <ModulesTab />
                </TabsContent>

                <TabsContent value="certificates">
                  <CertificateIssue />
                </TabsContent>  
                

                <TabsContent value="blogs">
                  <BlogsTab />
                </TabsContent>  
              </Tabs>
            </div>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
