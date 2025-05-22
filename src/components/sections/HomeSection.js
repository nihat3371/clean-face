export function HomeSection() {
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
