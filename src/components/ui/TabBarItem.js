export function TabBarItem({ icon, label, active, onClick }) {
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
