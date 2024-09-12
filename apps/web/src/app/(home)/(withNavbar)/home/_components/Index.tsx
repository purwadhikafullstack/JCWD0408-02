"use client"

import HeroSection from "@/components/homepageComp/HeroSection";
import AuthGuard from "@/hoc/AuthGuard";
import React from "react";

const Homepage = () => {
  return (
    <div className="bg-latar">
      <HeroSection />
    </div>
  );
};

export default AuthGuard(Homepage);
