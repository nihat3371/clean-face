"use client";
import { useState } from "react";

export function useNavigation() {
  const [activeSection, setActiveSection] = useState("home");

  const getHeaderTitle = () => {
    switch (activeSection) {
      case "history":
        return "Geçmiş";
      case "products":
        return "Ürünler";
      case "profile":
        return "Hesabım";
      default:
        return "Ana Sayfa";
    }
  };

  return {
    activeSection,
    setActiveSection,
    getHeaderTitle,
  };
}
