import React, { createContext, useState, useContext } from "react";

const ReportContext = createContext();

export const useReports = () => useContext(ReportContext);

export const ReportProvider = ({ children }) => {
  // Initialize with some dummy data for demo purposes
  const [reports, setReports] = useState([
    {
      id: "#99281",
      category: "Power Issue",
      issue: "Streetlight Failure",
      description: "The streetlight at the corner has been flickering for a week and is now completely out. It's very dark here at night.",
      location: "Sector B",
      date: "2 hours ago",
      status: "Resolved",
      statusColor: "text-blue-500 bg-blue-500/10",
      userImage: "https://images.unsplash.com/photo-1595878715977-2a8f87b81b2a?auto=format&fit=crop&w=600&q=80",
      authorityMessage: "Bulb replaced.",
      authorityProof:
        "https://images.unsplash.com/photo-1563245372-f21724e3a899?auto=format&fit=crop&w=600&q=80",
    },
    {
      id: "#99282",
      category: "Road Issue",
      issue: "Pothole on Main Road",
      description: "Deep pothole causing traffic slowdowns and potential vehicle damage.",
      location: "Main Market Road",
      date: "5 hours ago",
      status: "Open",
      statusColor: "text-orange-500 bg-orange-500/10",
      userImage: "https://images.unsplash.com/photo-1515162816999-a0c47dc192f7?auto=format&fit=crop&w=600&q=80",
      authorityMessage: "",
      authorityProof: "",
    },
  ]);

  const addReport = (newReport) => {
    setReports((prev) => [newReport, ...prev]);
  };

  const updateReportStatus = (id, newStatus) => {
    setReports((prev) =>
      prev.map((r) => {
        if (r.id === id) {
          let color = "text-orange-500 bg-orange-500/10";
          if (newStatus === "Resolved") color = "text-blue-500 bg-blue-500/10";
          if (newStatus === "Closed")
            color = "text-emerald-500 bg-emerald-500/10";
          if (newStatus === "Revoked")
            color = "text-gray-500 bg-gray-500/10";

          return { ...r, status: newStatus, statusColor: color };
        }
        return r;
      }),
    );
  };

  return (
    <ReportContext.Provider value={{ reports, addReport, updateReportStatus }}>
      {children}
    </ReportContext.Provider>
  );
};
