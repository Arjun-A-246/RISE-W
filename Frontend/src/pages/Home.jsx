import React from "react";
import { useNavigate } from "react-router-dom";
import { AlertTriangle, Bell, History } from "lucide-react";

const Home = () => {
  const navigate = useNavigate();

  return (
    // Main container: Centered vertical stack with a max-width for desktop
    <div className="flex flex-col items-center justify-center min-h-[70vh] space-y-10 animate-fade-in max-w-3xl mx-auto text-center">
      {/* 1. Hero Section */}
      <div className="space-y-3">
        <h1 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-500">
          Township Incident Portal
        </h1>
        <p className="text-wayanad-muted text-lg md:text-xl max-w-xl mx-auto">
          Report and track critical issues in your area instantly.
        </p>
      </div>

      {/* 2. Main Action Area */}
      <div className="w-full max-w-md space-y-4">
        {/* Primary "Report" Button */}
        <button
          onClick={() => navigate("/report")}
          className="group w-full py-4 px-6 bg-gradient-to-r from-rose-500 to-red-600 rounded-2xl shadow-lg shadow-red-500/20 hover:shadow-red-500/40 hover:scale-[1.02] transition-all duration-300"
        >
          <span className="text-xl font-bold text-white tracking-wide">
            Report an Incident
          </span>
        </button>

        {/* Sub-text underneath */}
        <p className="text-wayanad-muted text-sm font-medium">
          Maintenance • Utilities • Safety
        </p>
      </div>

      {/* 3. Secondary Actions (Stack on mobile, side-by-side on desktop) */}
      <div className="flex flex-col md:flex-row gap-4 w-full max-w-md">
        <button
          onClick={() => navigate("/alerts")}
          className="flex-1 flex items-center justify-center gap-3 py-3.5 px-6 bg-wayanad-panel/80 border border-wayanad-border/50 rounded-xl hover:bg-wayanad-primary/10 hover:border-wayanad-primary/30 transition-all group"
        >
          <Bell
            size={20}
            className="text-yellow-500 group-hover:scale-110 transition-transform"
          />
          <span className="font-semibold text-wayanad-text">View Alerts</span>
        </button>

        <button
          onClick={() => navigate("/my-reports")}
          className="flex-1 flex items-center justify-center gap-3 py-3.5 px-6 bg-wayanad-panel/80 border border-wayanad-border/50 rounded-xl hover:bg-wayanad-primary/10 hover:border-wayanad-primary/30 transition-all group"
        >
          <History
            size={20}
            className="text-blue-500 group-hover:scale-110 transition-transform"
          />
          <span className="font-semibold text-wayanad-text">My Reports</span>
        </button>
      </div>

      {/* 4. Critical Alert Ticker (Optional) */}
      <div className="w-full max-w-xl bg-red-500/10 border border-red-500/20 p-4 rounded-2xl flex items-start gap-3 backdrop-blur-sm text-left mt-4">
        <AlertTriangle className="text-red-500 shrink-0 mt-0.5" size={20} />
        <div>
          <h4 className="text-red-500 font-bold text-sm tracking-wide uppercase">
            Wildlife Alert
          </h4>
          <p className="text-sm text-red-500/90 mt-1 leading-relaxed dark:text-red-200/90">
            Elephant sighted near Sector B (10 mins ago). Please stay indoors.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
