import { HomeIcon, ClockIcon, UserIcon } from "@heroicons/react/24/solid";
import { Square3Stack3DIcon } from "@heroicons/react/24/outline";
import { TabBarItem } from "../ui/TabBarItem";

export function Navigation({ activeSection, setActiveSection }) {
  return (
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
  );
}
