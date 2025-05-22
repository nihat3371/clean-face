"use client";
import { useNavigation } from "../hooks/useNavigation";
import { Header } from "../components/ui/Header";
import { Navigation } from "../components/layout/Navigation";
import { HomeSection } from "../components/sections/HomeSection";
import { HistorySection } from "../components/sections/HistorySection";
import { ProductsSection } from "../components/sections/ProductsSection";
import { ProfileSection } from "../components/sections/ProfileSection";

export default function HomePage() {
  const { activeSection, setActiveSection, getHeaderTitle } = useNavigation();

  const handleBackClick = () => {
    setActiveSection("home");
  };

  function renderContent() {
    switch (activeSection) {
      case "history":
        return <HistorySection />;
      case "products":
        return <ProductsSection />;
      case "profile":
        return <ProfileSection />;
      default:
        return <HomeSection />;
    }
  }

  return (
    <main className="min-h-screen bg-gray-50 flex flex-col">
      <Header
        title={getHeaderTitle()}
        onBackClick={handleBackClick}
        showBackButton={activeSection !== "home"}
      />
      {renderContent()}
      <Navigation
        activeSection={activeSection}
        setActiveSection={setActiveSection}
      />
    </main>
  );
}
