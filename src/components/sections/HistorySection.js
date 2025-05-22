import { analysisHistory } from "../../data/analysisHistory";

export function HistorySection() {
  return (
    <div className="flex-1 px-4 py-6 pb-28 bg-gradient-to-b from-pink-50 to-purple-50 md:px-6 md:py-6 md:pb-32">
      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-4 md:grid-cols-2 md:gap-6 lg:grid-cols-3">
          {analysisHistory.map((analysis, index) => {
            const gradients = [
              "bg-gradient-to-br from-rose-100 via-pink-100 to-purple-100",
              "bg-gradient-to-br from-purple-100 via-fuchsia-100 to-pink-100",
              "bg-gradient-to-br from-pink-100 via-rose-100 to-red-100",
              "bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100",
              "bg-gradient-to-br from-cyan-100 via-blue-100 to-indigo-100",
              "bg-gradient-to-br from-emerald-100 via-teal-100 to-cyan-100",
              "bg-gradient-to-br from-amber-100 via-orange-100 to-pink-100",
              "bg-gradient-to-br from-violet-100 via-purple-100 to-fuchsia-100",
            ];

            return (
              <div
                key={analysis.id}
                className={`${
                  gradients[index % gradients.length]
                } rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-102 overflow-hidden bg-white/20 backdrop-blur-sm border border-white/30 flex flex-col h-[400px] sm:h-[380px] md:h-[400px]`}
              >
                {/* Analysis Image - Full Coverage */}
                <div className="h-40 sm:h-36 md:h-40 flex-shrink-0 overflow-hidden relative rounded-t-3xl">
                  <img
                    src={analysis.image}
                    alt="Analiz Fotoğrafı"
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500 filter brightness-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent"></div>

                  {/* Confidence Badge */}
                  <div className="absolute top-3 right-3">
                    <span className="bg-white/90 backdrop-blur-sm text-purple-700 text-xs font-bold px-3 py-1.5 rounded-full border border-purple-200 shadow-sm">
                      %{analysis.confidence} doğruluk
                    </span>
                  </div>
                </div>

                {/* Analysis Info - Flex Grow */}
                <div className="flex-1 flex flex-col p-6 sm:p-4 md:p-5 bg-white/90 backdrop-blur-md">
                  {/* Analysis Details */}
                  <div className="flex-1 flex flex-col">
                    {/* Date & Time */}
                    <div className="mb-4">
                      <div className="flex items-center gap-2 text-sm text-gray-600 font-medium sm:text-xs md:text-sm">
                        <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                        {analysis.date} • {analysis.time}
                      </div>
                    </div>

                    {/* Skin Type Badge */}
                    <div className="mb-4">
                      <span className="inline-block text-sm text-purple-700 font-bold bg-gradient-to-r from-purple-100 to-pink-100 px-4 py-2 rounded-full border border-purple-200 sm:text-xs sm:px-3 md:text-sm md:px-4">
                        {analysis.skinType}
                      </span>
                    </div>

                    {/* Main Issues */}
                    <div className="mb-4">
                      <div className="flex flex-wrap gap-1.5 items-center">
                        {analysis.mainIssues.slice(0, 3).map((issue, idx) => (
                          <span
                            key={idx}
                            className="text-xs bg-gradient-to-r from-red-50 to-pink-50 text-red-700 px-3 py-1.5 rounded-full font-semibold border border-red-100 shadow-sm hover:shadow-md transition-all duration-200 hover:scale-105"
                          >
                            🔍 {issue}
                          </span>
                        ))}
                        {analysis.mainIssues.length > 3 && (
                          <span className="text-xs text-red-600 font-bold bg-gradient-to-r from-red-50 to-pink-50 px-3 py-1.5 rounded-full border border-red-200 shadow-sm hover:shadow-md transition-all duration-200 hover:scale-105">
                            +{analysis.mainIssues.length - 3} sorun
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Recommended Product */}
                    <div className="mb-4 flex-1">
                      <div className="bg-gradient-to-r from-emerald-50 to-green-50 p-3 rounded-2xl border border-emerald-100">
                        <p className="text-xs text-emerald-700 font-semibold leading-relaxed">
                          <span className="inline-block w-2 h-2 bg-emerald-400 rounded-full mr-2"></span>
                          Önerilen: {analysis.recommendedProduct}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Action Button - Fixed at Bottom */}
                  <div className="pt-4 border-t border-white/20">
                    <button className="w-full bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-white text-sm font-bold py-3 rounded-full hover:from-pink-600 hover:via-purple-600 hover:to-indigo-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 sm:text-xs md:text-sm">
                      📋 Analizi Görüntüle
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
