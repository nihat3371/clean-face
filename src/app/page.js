"use client";
import { useState } from "react";
import {
  HomeIcon,
  ClockIcon,
  UserIcon,
  ChevronLeftIcon,
  ShoppingCartIcon,
} from "@heroicons/react/24/solid";
import { Square3Stack3DIcon } from "@heroicons/react/24/outline";

const analysisHistory = [
  {
    id: 1,
    date: "2024-01-15",
    time: "14:30",
    skinType: "Karma Cilt",
    mainIssues: ["Akne", "Kızarıklık"],
    recommendedProduct: "Niacinamide 10% + Zinc 1%",
    confidence: 92,
    image: "/face1.jpg",
  },
  {
    id: 2,
    date: "2024-01-10",
    time: "09:15",
    skinType: "Yağlı Cilt",
    mainIssues: ["Gözenek", "Parlaklık"],
    recommendedProduct: "Salicylic Acid Cleanser",
    confidence: 88,
    image: "/face2.jpg",
  },
  {
    id: 3,
    date: "2024-01-08",
    time: "16:45",
    skinType: "Kuru Cilt",
    mainIssues: ["Kuruluk", "İnce Çizgiler"],
    recommendedProduct: "Moisturizing Lotion",
    confidence: 95,
    image: "/face3.jpg",
  },
];

const products = [
  {
    id: 1,
    name: "Niacinamide 10% + Zinc 1%",
    skinType: "Karma Cilt",
    targetIssues: ["Akne", "Kızarıklık", "Gözenek"],
    price: "₺89",
    image: "/niacinamide.jpg",
    brand: "The Ordinary",
    description: "Sebum kontrolü ve gözenek görünümünü azaltır",
  },
  {
    id: 2,
    name: "Salicylic Acid Cleanser",
    skinType: "Yağlı Cilt",
    targetIssues: ["Gözenek", "Parlaklık", "Akne"],
    price: "₺156",
    image: "/salicylic-cleanser.jpg",
    brand: "CeraVe",
    description: "Derinlemesine temizlik ve yağ kontrolü",
  },
  {
    id: 3,
    name: "Moisturizing Lotion",
    skinType: "Kuru Cilt",
    targetIssues: ["Kuruluk", "İnce Çizgiler", "Sıkılık"],
    price: "₺134",
    image: "/products/moisturizing-lotion.jpg",
    brand: "CeraVe",
    description: "24 saat nem ve koruma",
  },
  {
    id: 4,
    name: "Vitamin C Serum",
    skinType: "Normal Cilt",
    targetIssues: ["Leke", "Parlaklık", "Yaşlanma"],
    price: "₺198",
    image: "/products/vitamin-c-serum.jpg",
    brand: "Skinceuticals",
    description: "Aydınlatıcı ve anti-aging etki",
  },
  {
    id: 5,
    name: "Hyaluronic Acid Serum",
    skinType: "Kuru Cilt",
    targetIssues: ["Kuruluk", "İnce Çizgiler", "Nem"],
    price: "₺112",
    image: "/products/hyaluronic-acid.jpg",
    brand: "The Ordinary",
    description: "Yoğun nemlendirme ve dolgunluk",
  },
  {
    id: 6,
    name: "Retinol Treatment",
    skinType: "Yaşlanan Cilt",
    targetIssues: ["Kırışıklık", "Leke", "Doku"],
    price: "₺245",
    image: "/products/retinol-treatment.jpg",
    brand: "Paula's Choice",
    description: "Gece bakımı ve yenilenme",
  },
  {
    id: 7,
    name: "Sunscreen SPF 50",
    skinType: "Tüm Cilt Tipleri",
    targetIssues: ["UV Koruma", "Leke", "Yaşlanma"],
    price: "₺167",
    image: "/products/sunscreen-spf50.jpg",
    brand: "La Roche Posay",
    description: "Geniş spektrum güneş koruması",
  },
  {
    id: 8,
    name: "AHA/BHA Exfoliant",
    skinType: "Karma Cilt",
    targetIssues: ["Ölü Deri", "Gözenek", "Parlaklık"],
    price: "₺89",
    image: "/products/aha-bha-exfoliant.jpg",
    brand: "Paula's Choice",
    description: "Haftalık peeling ve yenilenme",
  },
];

export default function HomePage() {
  const [activeSection, setActiveSection] = useState("home");

  function renderContent() {
    switch (activeSection) {
      case "history":
        return <HistorySection />;
      case "products":
        return <ProductsSection />;
      default:
        return <HomeSection />;
    }
  }

  function getHeaderTitle() {
    switch (activeSection) {
      case "history":
        return "Geçmiş";
      case "products":
        return "Ürünler";
      default:
        return "Ana Sayfa";
    }
  }

  return (
    <main className="min-h-screen bg-gray-50 flex flex-col">
      {/* Header - Mobile First */}
      <header className="flex items-center justify-between px-4 py-3 bg-gray-50 md:px-6 md:py-4">
        <button className="p-1 md:p-2">
          <ChevronLeftIcon className="w-5 h-5 text-blue-600 md:w-6 md:h-6" />
        </button>
        <h1 className="text-lg font-semibold text-blue-900 md:text-xl">
          {getHeaderTitle()}
        </h1>
        <div className="w-7 md:w-10"></div>
      </header>

      {renderContent()}

      {/* Bottom Tab Bar - Mobile First */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-2 py-1 md:px-4 md:py-2">
        <div className="flex justify-around items-center max-w-sm mx-auto md:max-w-md">
          <TabBarItem
            active={activeSection === "home"}
            onClick={() => setActiveSection("home")}
            icon={<HomeIcon className="w-5 h-5 md:w-6 md:h-6" />}
            label="Ana Sayfa"
          />
          <TabBarItem
            active={activeSection === "history"}
            onClick={() => setActiveSection("history")}
            icon={<ClockIcon className="w-5 h-5 md:w-6 md:h-6" />}
            label="Geçmiş"
          />
          <TabBarItem
            active={activeSection === "products"}
            onClick={() => setActiveSection("products")}
            icon={<Square3Stack3DIcon className="w-5 h-5 md:w-6 md:h-6" />}
            label="Ürünler"
          />
          <TabBarItem
            active={activeSection === "profile"}
            onClick={() => setActiveSection("profile")}
            icon={<UserIcon className="w-5 h-5 md:w-6 md:h-6" />}
            label="Hesabım"
          />
        </div>
      </nav>
    </main>
  );
}

function HomeSection() {
  return (
    <div className="flex-1 flex flex-col items-center justify-center px-4 pb-24 md:px-8 md:pb-32">
      {/* Profile Photo Circle - Mobile First */}
      <div className="w-64 h-64 rounded-full bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center mb-6 shadow-lg md:w-80 md:h-80 md:mb-8">
        <img
          src="/profile-placeholder.jpg"
          alt="Profil Fotoğrafı"
          className="w-56 h-56 rounded-full object-cover md:w-72 md:h-72"
        />
      </div>

      {/* Title - Mobile First */}
      <h2 className="text-xl font-bold text-blue-900 mb-6 text-center md:text-2xl md:mb-8">
        Fotoğrafımı Seç
      </h2>

      {/* Action Button - Mobile First */}
      <button className="w-full max-w-xs bg-blue-600 text-white text-base font-semibold py-3 rounded-full shadow-lg hover:bg-blue-700 transition-colors md:max-w-sm md:text-lg md:py-4">
        Fotoğrafını Seç
      </button>
    </div>
  );
}

function HistorySection() {
  return (
    <div className="flex-1 px-4 py-4 pb-24 md:px-6 md:py-6 md:pb-32">
      <div className="max-w-md mx-auto space-y-3 md:space-y-4">
        {analysisHistory.map((analysis) => (
          <div
            key={analysis.id}
            className="bg-white rounded-lg shadow-md p-4 md:p-5"
          >
            <div className="flex items-start gap-3 md:gap-4">
              {/* Analysis Image */}
              <div className="flex-shrink-0">
                <img
                  src={analysis.image}
                  alt="Analiz Fotoğrafı"
                  className="w-14 h-14 rounded-lg object-cover md:w-16 md:h-16"
                />
              </div>

              {/* Analysis Info */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs text-gray-500 md:text-sm">
                    {analysis.date} • {analysis.time}
                  </span>
                  <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full md:text-sm">
                    %{analysis.confidence} doğruluk
                  </span>
                </div>

                <h3 className="text-sm font-semibold text-gray-900 mb-1 md:text-base">
                  {analysis.skinType}
                </h3>

                <div className="flex flex-wrap gap-1 mb-2">
                  {analysis.mainIssues.map((issue, index) => (
                    <span
                      key={index}
                      className="text-xs bg-red-100 text-red-700 px-2 py-0.5 rounded md:text-sm"
                    >
                      {issue}
                    </span>
                  ))}
                </div>

                <p className="text-xs text-blue-600 font-medium md:text-sm">
                  Önerilen: {analysis.recommendedProduct}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function ProductsSection() {
  return (
    <div className="flex-1 px-4 py-4 pb-24 md:px-6 md:py-6 md:pb-32">
      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4 lg:grid-cols-4">
          {products.map((product, index) => {
            const gradients = [
              "bg-gradient-to-br from-pink-100 via-purple-50 to-indigo-100",
              "bg-gradient-to-br from-rose-100 via-pink-50 to-fuchsia-100",
              "bg-gradient-to-br from-blue-100 via-cyan-50 to-teal-100",
            ];

            return (
              <div
                key={product.id}
                className={`${
                  gradients[index % 3]
                } rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 overflow-hidden h-64 md:h-80 flex flex-col`}
              >
                {/* Product Image - Fixed Height */}
                <div className="h-32 md:h-40 p-3 md:p-4 flex items-center justify-center">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-20 h-20 md:w-24 md:h-24 object-contain drop-shadow-lg"
                  />
                </div>

                {/* Product Info - Flex Grow */}
                <div className="flex-1 p-3 md:p-4 bg-white/80 backdrop-blur-sm flex flex-col justify-between">
                  <div>
                    <div className="mb-2">
                      <h3 className="text-sm font-bold text-gray-900 leading-tight mb-1 md:text-base line-clamp-2">
                        {product.name}
                      </h3>
                      <p className="text-xs text-gray-600 md:text-sm">
                        {product.brand}
                      </p>
                    </div>

                    <div className="mb-2">
                      <span className="text-xs text-blue-600 font-semibold bg-blue-50 px-2 py-1 rounded-full md:text-sm">
                        {product.skinType}
                      </span>
                    </div>

                    <div className="flex flex-wrap gap-1 mb-3">
                      {product.targetIssues.slice(0, 2).map((issue, index) => (
                        <span
                          key={index}
                          className="text-xs bg-emerald-100 text-emerald-700 px-2 py-0.5 rounded-full font-medium"
                        >
                          {issue}
                        </span>
                      ))}
                      {product.targetIssues.length > 2 && (
                        <span className="text-xs text-gray-500 font-medium">
                          +{product.targetIssues.length - 2}
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-lg font-bold text-purple-600 md:text-xl">
                      {product.price}
                    </span>
                    <button className="bg-gradient-to-r from-pink-500 to-purple-600 text-white text-xs font-semibold px-3 py-2 rounded-full hover:from-pink-600 hover:to-purple-700 transition-all duration-300 shadow-md hover:shadow-lg md:text-sm md:px-4">
                      Satın Al
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

function TabBarItem({ icon, label, active, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`flex flex-col items-center py-1 md:py-2 ${
        active ? "text-blue-600" : "text-gray-400"
      }`}
    >
      {icon}
      <span className="text-xs font-medium mt-0.5 md:mt-1">{label}</span>
    </button>
  );
}
