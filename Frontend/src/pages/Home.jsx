import React from "react";
import { useNavigate } from "react-router-dom";
import { AlertTriangle, Bell, History, ChevronRight } from "lucide-react";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] space-y-12 max-w-3xl mx-auto text-center">
      {/* 1. Hero Section (Fade Up) */}
      <div className="space-y-4 opacity-0 animate-fade-up">
        <h1 className="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-emerald-400 via-teal-500 to-cyan-600 drop-shadow-sm">
          Township Portal
        </h1>
        <p className="text-wayanad-muted text-lg md:text-xl max-w-xl mx-auto font-medium">
          Report and track critical issues in your sector instantly.
        </p>
      </div>

      {/* 2. Main Action (Fade Up + Delay) */}
      <div className="w-full max-w-sm space-y-4 opacity-0 animate-fade-up delay-100">
        <button
          onClick={() => navigate("/report")}
          className="group relative w-full py-5 px-8 bg-gradient-to-r from-rose-500 to-red-600 rounded-2xl shadow-xl shadow-red-500/20 hover:shadow-red-500/40 hover:-translate-y-1 active:scale-95 transition-all duration-300 overflow-hidden"
        >
          {/* Shine Effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />

          <span className="text-xl font-bold text-white tracking-wide flex items-center justify-center gap-2">
            Report Incident{" "}
            <ChevronRight className="group-hover:translate-x-1 transition-transform" />
          </span>
        </button>
        <p className="text-wayanad-muted text-xs font-semibold tracking-widest uppercase opacity-70">
          Maintenance • Utilities • Safety
        </p>
      </div>

      {/* 3. Secondary Actions (Fade Up + Delay 2) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-lg opacity-0 animate-fade-up delay-200">
        <button
          onClick={() => navigate("/alerts")}
          className="flex items-center justify-between p-5 bg-wayanad-panel border border-wayanad-border rounded-2xl hover:border-emerald-500/30 hover:shadow-lg hover:shadow-emerald-500/10 hover:-translate-y-1 transition-all group backdrop-blur-md"
        >
          <div className="flex items-center gap-4">
            <div className="p-3 bg-yellow-500/10 rounded-xl text-yellow-500 group-hover:bg-yellow-500 group-hover:text-white transition-colors">
              <Bell size={22} />
            </div>
            <span className="font-semibold text-lg text-wayanad-text">
              Alerts
            </span>
          </div>
          <ChevronRight
            size={18}
            className="text-wayanad-muted group-hover:text-emerald-500 transition-colors"
          />
        </button>

        <button
          onClick={() => navigate("/my-reports")}
          className="flex items-center justify-between p-5 bg-wayanad-panel border border-wayanad-border rounded-2xl hover:border-emerald-500/30 hover:shadow-lg hover:shadow-emerald-500/10 hover:-translate-y-1 transition-all group backdrop-blur-md"
        >
          <div className="flex items-center gap-4">
            <div className="p-3 bg-blue-500/10 rounded-xl text-blue-500 group-hover:bg-blue-500 group-hover:text-white transition-colors">
              <History size={22} />
            </div>
            <span className="font-semibold text-lg text-wayanad-text">
              History
            </span>
          </div>
          <ChevronRight
            size={18}
            className="text-wayanad-muted group-hover:text-emerald-500 transition-colors"
          />
        </button>
      </div>

      {/* 4. Ticker (Fade Up + Delay 3) */}
      <div className="w-full max-w-2xl opacity-0 animate-fade-up delay-300">
        <div className="bg-red-500/5 border border-red-500/10 p-4 rounded-xl flex items-center gap-4 backdrop-blur-sm hover:bg-red-500/10 transition-colors">
          <div className="shrink-0 animate-pulse-slow">
            <AlertTriangle className="text-red-500" size={20} />
          </div>
          <div className="text-left">
            <h4 className="text-red-500 font-bold text-xs tracking-wider uppercase">
              Wildlife Alert • 10m ago
            </h4>
            <p className="text-sm text-wayanad-text/80 mt-0.5">
              Elephant sighted near Sector B. Please stay indoors.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
