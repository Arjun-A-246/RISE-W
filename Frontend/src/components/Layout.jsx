import React from "react";
import { Outlet } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";

const Layout = () => {
  return (
    <div className="min-h-screen w-full bg-wayanad-bg text-wayanad-text transition-colors duration-500 font-sans relative flex flex-col selection:bg-emerald-500/30">
      {/* ANIMATED BACKGROUND BLOBS */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        {/* Blob 1 */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-emerald-400/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob dark:bg-emerald-500/10 dark:mix-blend-screen" />
        {/* Blob 2 */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-400/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob delay-2000 dark:bg-cyan-500/10 dark:mix-blend-screen" />
        {/* Blob 3 */}
        <div className="absolute -bottom-32 left-20 w-96 h-96 bg-teal-400/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob delay-4000 dark:bg-teal-500/10 dark:mix-blend-screen" />
      </div>

      {/* HEADER */}
      <header className="sticky top-0 z-50 w-full bg-wayanad-bg/80 backdrop-blur-xl border-b border-wayanad-border/50 transition-all duration-300">
        <div className="w-full px-6 md:px-12 py-4 flex justify-between items-center">
          <h1 className="text-xl md:text-2xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-teal-500 cursor-pointer hover:opacity-80 transition-opacity">
            WAYANAD CONNECT
          </h1>
          <div className="flex items-center gap-4">
            <ThemeToggle />
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-emerald-400 to-cyan-600 p-[2px] cursor-pointer hover:scale-105 transition-transform shadow-lg shadow-emerald-500/20">
              <div className="w-full h-full rounded-full bg-wayanad-bg/90 backdrop-blur-sm" />{" "}
              {/* Profile Avatar Placeholder */}
            </div>
          </div>
        </div>
      </header>

      {/* CONTENT */}
      <div className="flex-1 w-full max-w-4xl mx-auto relative z-10">
        <main className="p-6 md:p-10 pb-24">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Layout;
