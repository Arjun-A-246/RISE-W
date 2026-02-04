import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, CheckCircle2, XCircle, ExternalLink } from "lucide-react";

const MyReports = () => {
  const navigate = useNavigate();
  const [filter, setFilter] = useState("active");

  const [reports, setReports] = useState([
    {
      id: "#343387",
      category: "Water Supply",
      issue: "Muddy Water",
      location: "Sector A",
      date: "2 hours ago",
      status: "In Progress",
      statusColor: "text-orange-500 bg-orange-500/10",
      authorityMessage: null,
      authorityProof: null,
    },
    {
      id: "#99281",
      category: "Power Issue",
      issue: "Streetlight Failure",
      location: "Main St, Sector B",
      date: "1 day ago",
      status: "Resolved",
      statusColor: "text-blue-500 bg-blue-500/10",
      authorityMessage: "Bulb replaced and wiring checked.",
      // FIX 1: Using a reliable placeholder image URL
      authorityProof:
        "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=600&q=80",
    },
    {
      id: "#11029",
      category: "Wildlife",
      issue: "Elephant Sighting",
      location: "Forest Edge",
      date: "3 days ago",
      status: "Closed",
      statusColor: "text-emerald-500 bg-emerald-500/10",
      authorityMessage: "Forest rangers deployed.",
      authorityProof: null,
    },
  ]);

  const handleVerify = (id) => {
    setReports((prev) =>
      prev.map((r) =>
        r.id === id
          ? {
              ...r,
              status: "Closed",
              statusColor: "text-emerald-500 bg-emerald-500/10",
            }
          : r,
      ),
    );
  };

  const handleReopen = (id) => {
    setReports((prev) =>
      prev.map((r) =>
        r.id === id
          ? { ...r, status: "Open", statusColor: "text-red-500 bg-red-500/10" }
          : r,
      ),
    );
  };

  const filteredReports = reports.filter((r) =>
    filter === "active"
      ? ["Open", "In Progress", "Resolved"].includes(r.status)
      : r.status === "Closed",
  );

  return (
    <div className="w-full max-w-3xl mx-auto animate-fade-in">
      {/* Header */}
      <div className="flex items-center gap-4 mb-8">
        <button
          onClick={() => navigate(-1)}
          className="p-2 -ml-2 rounded-full hover:bg-wayanad-panel transition-colors text-wayanad-muted hover:text-wayanad-text"
        >
          <ArrowLeft size={20} />
        </button>
        <h1 className="text-xl font-bold text-wayanad-text">My Reports</h1>
      </div>

      {/* Tabs */}
      <div className="flex p-1 bg-wayanad-panel border border-wayanad-border rounded-xl mb-6">
        <button
          onClick={() => setFilter("active")}
          className={`flex-1 py-2 rounded-lg text-sm font-bold transition-all ${filter === "active" ? "bg-emerald-500 text-white shadow-sm" : "text-wayanad-muted hover:text-wayanad-text"}`}
        >
          Active Issues
        </button>
        <button
          onClick={() => setFilter("history")}
          className={`flex-1 py-2 rounded-lg text-sm font-bold transition-all ${filter === "history" ? "bg-emerald-500 text-white shadow-sm" : "text-wayanad-muted hover:text-wayanad-text"}`}
        >
          History
        </button>
      </div>

      {/* List */}
      <div className="space-y-4">
        {filteredReports.length === 0 ? (
          <div className="text-center py-20 text-wayanad-muted border-2 border-dashed border-wayanad-border rounded-2xl">
            <p>No reports found.</p>
          </div>
        ) : (
          filteredReports.map((report) => (
            <div
              key={report.id}
              className="bg-wayanad-panel border border-wayanad-border p-5 rounded-2xl shadow-sm hover:shadow-md transition-all"
            >
              <div className="flex justify-between items-start mb-4">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs font-mono font-bold text-emerald-600 bg-emerald-100 dark:bg-emerald-500/20 px-1.5 py-0.5 rounded">
                      {report.id}
                    </span>
                    <span className="text-xs text-wayanad-muted">
                      • {report.date}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-wayanad-text">
                    {report.issue}
                  </h3>
                  <p className="text-sm text-wayanad-muted">
                    {report.location}
                  </p>
                </div>
                <div
                  className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${report.statusColor}`}
                >
                  {report.status}
                </div>
              </div>

              {/* RESOLUTION SECTION */}
              {report.status === "Resolved" && (
                <div className="mt-4 pt-4 border-t border-wayanad-border animate-fade-up">
                  <div className="mb-4">
                    <p className="text-xs font-bold text-wayanad-muted uppercase mb-2">
                      Authority Response
                    </p>
                    <div className="bg-wayanad-bg p-3 rounded-xl border border-wayanad-border">
                      <p className="text-sm text-wayanad-text mb-3">
                        "{report.authorityMessage}"
                      </p>

                      {/* THE PROOF IMAGE */}
                      {report.authorityProof && (
                        // FIX 2: Added 'group' class and removed 'opacity-0' from overlay for better visibility
                        <div
                          className="relative h-48 w-full rounded-lg overflow-hidden border border-wayanad-border cursor-pointer"
                          onClick={() =>
                            window.open(report.authorityProof, "_blank")
                          }
                        >
                          <img
                            src={report.authorityProof}
                            alt="Proof of fix"
                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                            onError={(e) => {
                              e.target.onerror = null;
                              e.target.src =
                                "https://placehold.co/600x400?text=Image+Unavailable";
                            }}
                          />

                          {/* FIX 3: Overlay is now always visible (bg-black/30) with button */}
                          <div className="absolute inset-0 bg-black/10 flex items-center justify-center">
                            <span className="bg-black/70 text-white text-xs px-3 py-1.5 rounded-full flex items-center gap-2 backdrop-blur-sm hover:bg-black/90 transition-colors">
                              <ExternalLink size={14} /> View Full Image
                            </span>
                          </div>

                          <div className="absolute bottom-2 right-2 bg-emerald-500 text-white text-[10px] font-bold px-2 py-1 rounded shadow-sm z-10">
                            PROOF ATTACHED
                          </div>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <button
                      onClick={() => handleVerify(report.id)}
                      className="flex-1 bg-emerald-600 text-white py-3 rounded-xl text-sm font-bold hover:bg-emerald-500 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/20"
                    >
                      <CheckCircle2 size={18} /> Verify & Close
                    </button>
                    <button
                      onClick={() => handleReopen(report.id)}
                      className="flex-1 bg-wayanad-bg border border-wayanad-border text-wayanad-text py-3 rounded-xl text-sm font-bold hover:bg-red-500/5 hover:text-red-500 hover:border-red-500/30 transition-colors flex items-center justify-center gap-2"
                    >
                      <XCircle size={18} /> Not Fixed
                    </button>
                  </div>
                </div>
              )}
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default MyReports;
