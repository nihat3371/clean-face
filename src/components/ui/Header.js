import { ChevronLeftIcon } from "@heroicons/react/24/solid";

export function Header({ title, onBackClick, showBackButton = true }) {
  const handleBackClick = () => {
    if (onBackClick) {
      onBackClick();
    }
  };

  return (
    <header className="flex items-center justify-between px-4 py-3 bg-gray-50 md:px-6 md:py-4">
      <div className="w-7 md:w-10">
        {showBackButton && (
          <button
            onClick={handleBackClick}
            className="p-1 md:p-2 hover:bg-gray-200 rounded-lg transition-colors duration-200"
          >
            <ChevronLeftIcon className="w-5 h-5 text-blue-600 md:w-6 md:h-6" />
          </button>
        )}
      </div>
      <h1 className="text-lg font-semibold text-blue-900 md:text-xl">
        {title}
      </h1>
      <div className="w-7 md:w-10"></div>
    </header>
  );
}
