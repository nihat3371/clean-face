import {
  HomeIcon,
  ClockIcon,
  ShoppingBagIcon,
  UserIcon,
} from "@heroicons/react/24/solid";

const products = [
  {
    face: "/face1.jpg",
    title: "Bugün",
    product: "Rosacea Gel",
    site: "Kapatmlartitkl.co",
    productImg: null,
  },
  {
    face: "/face2.jpg",
    title: "Niacinamide 10% + Zinc 1%",
    product: null,
    site: "siteorneagi.com",
    productImg: "/product1.png",
  },
  {
    face: "/face3.jpg",
    title: "Moisturizing Lotion",
    product: null,
    site: "parnameo.merket",
    productImg: "/product2.png",
  },
];

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-white to-blue-100 flex flex-col items-center justify-between">
      <div className="flex-1 flex flex-col items-center w-full pt-6 pb-32 px-2">
        <div className="w-full max-w-md bg-white rounded-3xl shadow-lg p-4 sm:p-6 mx-auto">
          <div className="space-y-4">
            {products.map((item, i) => (
              <div key={i}>
                <div className="flex items-center gap-4">
                  <div className="flex-shrink-0">
                    <img
                      src={item.face}
                      alt="Yüz"
                      width={72}
                      height={72}
                      className="rounded-2xl object-cover w-18 h-18"
                    />
                  </div>
                  <div className="flex-1 flex flex-col justify-center min-h-[72px]">
                    <span className="text-base font-medium text-blue-900 leading-tight">
                      {item.title}
                    </span>
                    {item.product && (
                      <span className="text-lg font-bold text-blue-800 leading-tight">
                        {item.product}
                      </span>
                    )}
                    <span className="text-sm text-blue-600 truncate">
                      {item.site}
                    </span>
                  </div>
                  {item.productImg && (
                    <div className="flex-shrink-0">
                      <img
                        src={item.productImg}
                        alt="Ürün"
                        width={48}
                        height={64}
                        className="object-contain w-12 h-16"
                      />
                    </div>
                  )}
                </div>
                {i !== products.length - 1 && (
                  <hr className="my-4 border-blue-100" />
                )}
              </div>
            ))}
          </div>
          <button className="w-full mt-6 bg-blue-600 text-white text-lg font-semibold py-3 rounded-xl shadow hover:bg-blue-700 transition-colors">
            Fotoğrafını Seç
          </button>
        </div>
      </div>
      {/* Alt Tab Bar */}
      <nav className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-md bg-white rounded-t-3xl shadow-t px-2 py-2 flex justify-between border-t border-blue-100 z-50 md:static md:rounded-3xl md:shadow md:mt-8 md:mb-4 md:w-[400px] md:left-auto md:translate-x-0">
        <TabBarItem
          active
          icon={<HomeIcon className="w-7 h-7" />}
          label="Ana Sayfa"
        />
        <TabBarItem icon={<ClockIcon className="w-7 h-7" />} label="Geçmiş" />
        <TabBarItem
          icon={<ShoppingBagIcon className="w-7 h-7" />}
          label="Ürünler"
        />
        <TabBarItem icon={<UserIcon className="w-7 h-7" />} label="Hesabım" />
      </nav>
    </main>
  );
}

function TabBarItem({ icon, label, active }) {
  return (
    <button
      className={`flex flex-col items-center flex-1 py-1 ${
        active ? "text-blue-700" : "text-gray-400"
      }`}
    >
      {icon}
      <span className="text-xs font-medium">{label}</span>
    </button>
  );
}
