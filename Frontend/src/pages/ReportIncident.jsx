import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Zap,
  Droplets,
  PawPrint,
  Construction,
  ArrowLeft,
  Camera,
  CheckCircle2,
} from "lucide-react";

const ReportIncident = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [formData, setFormData] = useState({
    specificIssue: "",
    poleNumber: "",
    description: "",
  });

  const categories = [
    {
      id: "water",
      label: "Water & Sanitation",
      icon: Droplets,
      color: "text-blue-500",
      bg: "bg-blue-500/10",
      border: "group-hover:border-blue-500/50",
    },
    {
      id: "wildlife",
      label: "Wildlife Intrusion",
      icon: PawPrint,
      color: "text-orange-500",
      bg: "bg-orange-500/10",
      border: "group-hover:border-orange-500/50",
    },
    {
      id: "power",
      label: "Power Issue",
      icon: Zap,
      color: "text-yellow-500",
      bg: "bg-yellow-500/10",
      border: "group-hover:border-yellow-500/50",
    },
    {
      id: "infra",
      label: "Infrastructure",
      icon: Construction,
      color: "text-gray-500",
      bg: "bg-gray-500/10",
      border: "group-hover:border-gray-500/50",
    },
  ];

  const handleCategorySelect = (cat) => {
    setSelectedCategory(cat);
    setStep(2);
  };
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  const handleSubmit = async () => {
    setTimeout(() => setStep(3), 800);
  };

  // --- SCREEN 1: SELECT CATEGORY ---
  if (step === 1)
    return (
      <div className="w-full max-w-2xl mx-auto opacity-0 animate-fade-up">
        <button
          className="flex items-center gap-2 text-wayanad-muted mb-8 hover:text-wayanad-primary transition-colors hover:-translate-x-1 duration-200"
          onClick={() => navigate(-1)}
        >
          <ArrowLeft size={20} />{" "}
          <span className="text-sm font-semibold">Back to Home</span>
        </button>

        <div className="bg-wayanad-panel border border-wayanad-border p-8 md:p-10 rounded-3xl shadow-2xl backdrop-blur-xl">
          <div className="mb-8 text-center">
            <h2 className="text-3xl font-bold text-wayanad-text">
              What's the issue?
            </h2>
            <p className="text-wayanad-muted mt-2">
              Select a category to notify authorities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {categories.map((cat, idx) => (
              <div
                key={cat.id}
                onClick={() => handleCategorySelect(cat)}
                style={{ animationDelay: `${idx * 100}ms` }}
                className={`group flex md:flex-col items-center md:justify-center p-5 md:p-8 rounded-2xl bg-wayanad-bg/50 border border-wayanad-border cursor-pointer transition-all duration-300 hover:scale-[1.03] hover:shadow-lg ${cat.border} opacity-0 animate-fade-up`}
              >
                <div
                  className={`p-4 rounded-full ${cat.bg} ${cat.color} mb-0 md:mb-4 mr-4 md:mr-0 transition-transform group-hover:scale-110`}
                >
                  <cat.icon size={28} />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-wayanad-text">
                    {cat.label}
                  </h3>
                  <p className="text-xs text-wayanad-muted mt-1 opacity-0 group-hover:opacity-100 transition-opacity md:block hidden">
                    Click to report
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );

  // --- SCREEN 2: DETAILS FORM ---
  if (step === 2)
    return (
      <div className="w-full max-w-2xl mx-auto opacity-0 animate-fade-up">
        <button
          className="flex items-center gap-2 text-wayanad-muted mb-6 hover:text-wayanad-primary transition-colors"
          onClick={() => setStep(1)}
        >
          <ArrowLeft size={20} />{" "}
          <span className="text-sm font-semibold">Back to Categories</span>
        </button>

        <div className="bg-wayanad-panel p-8 md:p-10 rounded-3xl border border-wayanad-border shadow-2xl backdrop-blur-xl">
          <div className="flex items-center gap-4 pb-6 border-b border-wayanad-border/50 mb-6">
            <div
              className={`p-3 rounded-2xl ${selectedCategory.bg} ${selectedCategory.color}`}
            >
              <selectedCategory.icon size={26} />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-wayanad-text">
                {selectedCategory.label}
              </h2>
              <p className="text-xs text-wayanad-muted font-medium uppercase tracking-wider">
                New Report
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="space-y-2">
              <label className="text-xs font-bold text-wayanad-muted uppercase tracking-wider ml-1">
                Specific Issue
              </label>
              <div className="relative">
                <select
                  name="specificIssue"
                  value={formData.specificIssue}
                  onChange={handleInputChange}
                  className="w-full bg-wayanad-bg border border-wayanad-border rounded-xl p-4 text-wayanad-text appearance-none focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all cursor-pointer hover:bg-wayanad-bg/80"
                >
                  <option value="">Select Option...</option>
                  <option>General Failure</option>
                  <option>Critical Emergency</option>
                </select>
                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-wayanad-muted">
                  ▼
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold text-wayanad-muted uppercase tracking-wider ml-1">
                Description
              </label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                rows="4"
                placeholder="Describe location and details..."
                className="w-full bg-wayanad-bg border border-wayanad-border rounded-xl p-4 text-wayanad-text focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all resize-none hover:bg-wayanad-bg/80"
              />
            </div>

            <button
              onClick={handleSubmit}
              className="w-full py-4 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 font-bold text-white text-lg shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/40 hover:-translate-y-0.5 active:scale-[0.99] transition-all duration-300 mt-4"
            >
              Submit Incident
            </button>
          </div>
        </div>
      </div>
    );

  // --- SCREEN 3: SUCCESS ---
  if (step === 3)
    return (
      <div className="h-[60vh] flex flex-col items-center justify-center text-center space-y-8 animate-fade-up max-w-lg mx-auto">
        <div className="relative">
          <div className="absolute inset-0 bg-emerald-500/20 blur-2xl rounded-full animate-pulse-slow"></div>
          <CheckCircle2
            size={100}
            className="text-emerald-500 relative z-10 drop-shadow-xl"
          />
        </div>
        <div className="space-y-3">
          <h2 className="text-4xl font-bold text-wayanad-text tracking-tight">
            Report Sent!
          </h2>
          <p className="text-wayanad-muted text-lg">
            Ticket{" "}
            <span className="text-emerald-500 font-mono font-bold">
              #343387
            </span>{" "}
            created.
          </p>
        </div>
        <div className="w-full max-w-xs space-y-3 pt-6">
          <button
            onClick={() => navigate("/my-reports")}
            className="w-full bg-wayanad-panel border border-wayanad-border py-4 rounded-xl font-bold text-wayanad-text hover:bg-wayanad-primary/5 hover:border-emerald-500/30 transition-all shadow-sm"
          >
            Track Status
          </button>
          <button
            onClick={() => {
              setStep(1);
              navigate("/");
            }}
            className="w-full text-wayanad-muted py-3 text-sm font-medium hover:text-wayanad-text transition-colors"
          >
            Back to Home
          </button>
        </div>
      </div>
    );
};

export default ReportIncident;
