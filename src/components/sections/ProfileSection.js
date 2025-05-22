import { UserIcon } from "@heroicons/react/24/solid";

export function ProfileSection() {
  return (
    <div className="flex-1 px-4 py-6 pb-28 bg-gradient-to-b from-purple-50 via-pink-50 to-rose-50 md:px-6 md:py-6 md:pb-32">
      <div className="max-w-md mx-auto">
        {/* Welcome Card */}
        <div className="bg-white/80 backdrop-blur-md rounded-3xl shadow-xl border border-white/30 p-6 md:p-8 mb-6">
          <div className="text-center mb-8">
            <div className="w-20 h-20 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full mx-auto mb-4 flex items-center justify-center shadow-lg">
              <UserIcon className="w-10 h-10 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-gray-800 mb-2 md:text-3xl">
              Hoş Geldin! 💖
            </h2>
            <p className="text-gray-600 text-sm md:text-base">
              Cilt analizine başlamak için giriş yap veya misafir olarak devam
              et
            </p>
          </div>

          {/* Login Options */}
          <div className="space-y-4">
            {/* Google Login */}
            <button className="w-full bg-white border-2 border-gray-200 text-gray-700 text-sm font-semibold py-4 px-6 rounded-2xl hover:border-purple-300 hover:bg-purple-50 transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center gap-3 md:text-base">
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path
                  fill="#4285F4"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                />
                <path
                  fill="#34A853"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                  fill="#FBBC05"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                />
                <path
                  fill="#EA4335"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                />
              </svg>
              Google ile Giriş Yap
            </button>

            {/* Email Login */}
            <button className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white text-sm font-bold py-4 px-6 rounded-2xl hover:from-purple-600 hover:to-pink-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 md:text-base">
              📧 E-mail ile Giriş Yap
            </button>

            {/* Guest Continue */}
            <button className="w-full bg-gradient-to-r from-gray-100 to-gray-200 text-gray-700 text-sm font-semibold py-4 px-6 rounded-2xl hover:from-gray-200 hover:to-gray-300 transition-all duration-300 shadow-md hover:shadow-lg border border-gray-300 md:text-base">
              👤 Misafir Olarak Devam Et
            </button>
          </div>
        </div>

        {/* Features Card */}
        <div className="bg-white/60 backdrop-blur-sm rounded-3xl shadow-lg border border-white/30 p-6 md:p-8">
          <h3 className="text-lg font-bold text-gray-800 mb-4 text-center md:text-xl">
            Üyelik Avantajları ✨
          </h3>

          <div className="space-y-4">
            {[
              {
                icon: "💾",
                title: "Analiz Geçmişi",
                desc: "Tüm cilt analizlerini kaydet",
              },
              {
                icon: "🎯",
                title: "Kişisel Öneriler",
                desc: "Size özel ürün tavsiyeleri",
              },
              {
                icon: "📈",
                title: "İlerleme Takibi",
                desc: "Cilt sağlığı gelişimini izle",
              },
              {
                icon: "🔔",
                title: "Hatırlatıcılar",
                desc: "Bakım rutini bildirimler",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="flex items-center gap-4 p-3 bg-white/40 rounded-2xl"
              >
                <div className="text-2xl">{feature.icon}</div>
                <div className="flex-1">
                  <h4 className="text-sm font-semibold text-gray-800 md:text-base">
                    {feature.title}
                  </h4>
                  <p className="text-xs text-gray-600 md:text-sm">
                    {feature.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
