import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
// import { dashboardAPI } from "@/services/api";
import {
  Calendar,
  Clock,
  MapPin,
  Users,
  Globe,
  ArrowLeft,
} from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const EventsDetailPage = () => {
  const { id } = useParams();
  const [event, setEvent] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEvent = async () => {
      try {
        // const response = await dashboardAPI.getEventById(id);
        // setEvent(response?.data?.data || null);
      } catch (error) {
        console.error("Failed to load event", error);
        setEvent(null);
      } finally {
        setLoading(false);
      }
    };

    fetchEvent();
  }, [id]);

  if (loading) {
    return (
      <>
        <Navbar />
        <div className="min-h-screen flex items-center justify-center text-slate-400">
          Loading event details...
        </div>
      </>
    );
  }

  if (!event) {
    return (
      <>
        <Navbar />
        <div className="min-h-screen flex flex-col items-center justify-center text-slate-500">
          <p className="text-lg font-semibold">Event not found</p>
          <a href="/events" className="text-blue-600 mt-4 hover:underline">
            ← Back to Events
          </a>
        </div>
      </>
    );
  }

  const eventDate = new Date(event.eventDate);
  const isPast = eventDate < new Date();

  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-slate-50 pt-20">
        {/* HERO */}
        <div className="relative h-[360px]">
          <img
            src={event.bannerImage || "/images/default-event.jpg"}
            alt={event.title}
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />

          <div className="relative max-w-6xl mx-auto px-6 h-full flex flex-col justify-center text-white">
            <a
              href="/events"
              className="flex items-center gap-2 text-sm mb-4 opacity-80 hover:opacity-100"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Events
            </a>

            <Badge className="w-fit bg-blue-600 border-none mb-3">
              {event.eventType || "Event"}
            </Badge>

            <h1 className="text-4xl md:text-5xl font-bold max-w-3xl leading-tight">
              {event.title}
            </h1>
          </div>
        </div>

        {/* CONTENT */}
        <div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="lg:col-span-2"
          >
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              About this event
            </h2>
            <p className="text-slate-600 leading-relaxed whitespace-pre-line">
              {event.description || "No description available."}
            </p>
          </motion.div>

          {/* RIGHT SIDEBAR */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-white border border-slate-200 rounded-xl shadow-sm p-6 h-fit"
          >
            <h3 className="font-bold text-lg mb-5">Event Details</h3>

            <div className="space-y-4 text-sm text-slate-600">
              <div className="flex items-center gap-3">
                <Calendar className="w-4 h-4 text-blue-600" />
                {eventDate.toLocaleDateString("en-US", {
                  weekday: "long",
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                })}
              </div>

              <div className="flex items-center gap-3">
                <Clock className="w-4 h-4 text-blue-600" />
                {event.duration || "Duration not specified"}
              </div>

              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-blue-600" />
                {event.mode === "Offline"
                  ? event.location || "Offline Event"
                  : "Virtual Event"}
              </div>

              <div className="flex items-center gap-3">
                <Users className="w-4 h-4 text-blue-600" />
                {event.capacity || "Unlimited"} Participants
              </div>

              {event.mode === "Online" && (
                <div className="flex items-center gap-3">
                  <Globe className="w-4 h-4 text-blue-600" />
                  Online
                </div>
              )}
            </div>

            <div className="mt-6">
              {isPast || event.isRegistrationOpen === false ? (
                <Button disabled className="w-full">
                  Registration Closed
                </Button>
              ) : (
                <a
                  href={event.registrationLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="w-full">
                    Register Now
                  </Button>
                </a>
              )}
            </div>
          </motion.div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default EventsDetailPage;
