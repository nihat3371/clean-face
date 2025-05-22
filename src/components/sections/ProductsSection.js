import { products } from "../../data/products";

export function ProductsSection() {
  return (
    <div className="flex-1 px-4 py-6 pb-28 bg-gradient-to-b from-pink-50 to-purple-50 md:px-6 md:py-6 md:pb-32">
      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-4 md:grid-cols-3 md:gap-4 lg:grid-cols-4">
          {products.map((product, index) => {
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
                key={product.id}
                className={`${gradients[index]} rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-102 overflow-hidden bg-white/20 backdrop-blur-sm border border-white/30 flex flex-col h-[420px] sm:h-[380px] md:h-[420px]`}
              >
                {/* Product Image - Full Coverage */}
                <div className="h-48 sm:h-40 md:h-48 flex-shrink-0 overflow-hidden relative rounded-t-3xl">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500 filter brightness-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent"></div>
                </div>

                {/* Product Info - Flex Grow */}
                <div className="flex-1 flex flex-col p-6 sm:p-4 md:p-5 bg-white/90 backdrop-blur-md">
                  {/* Product Details */}
                  <div className="flex-1 flex flex-col">
                    {/* Name & Brand */}
                    <div className="mb-4">
                      <h3 className="text-lg font-bold text-gray-800 leading-tight mb-2 sm:text-base md:text-lg min-h-[3rem] sm:min-h-[2.5rem] md:min-h-[3rem] flex items-start">
                        <span className="line-clamp-2">{product.name}</span>
                      </h3>
                      <p className="text-sm text-gray-600 font-medium sm:text-xs md:text-sm">
                        {product.brand}
                      </p>
                    </div>

                    {/* Skin Type Badge */}
                    <div className="mb-4">
                      <span className="inline-block text-sm text-purple-700 font-bold bg-gradient-to-r from-purple-100 to-pink-100 px-4 py-2 rounded-full border border-purple-200 sm:text-xs sm:px-3 md:text-sm md:px-4">
                        {product.skinType}
                      </span>
                    </div>

                    {/* Target Issues */}
                    <div className="mb-6 sm:mb-4">
                      <div className="flex flex-wrap gap-1.5 items-center">
                        {product.targetIssues
                          .slice(0, 3)
                          .map((issue, index) => (
                            <span
                              key={index}
                              className="text-xs bg-gradient-to-r from-teal-50 to-emerald-50 text-teal-700 px-3 py-1.5 rounded-full font-semibold border border-teal-100 shadow-sm hover:shadow-md transition-all duration-200 hover:scale-105"
                            >
                              ✨ {issue}
                            </span>
                          ))}
                        {product.targetIssues.length > 3 && (
                          <span className="text-xs text-purple-600 font-bold bg-gradient-to-r from-purple-50 to-pink-50 px-3 py-1.5 rounded-full border border-purple-200 shadow-sm hover:shadow-md transition-all duration-200 hover:scale-105">
                            +{product.targetIssues.length - 3} daha
                          </span>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Price & Button - Fixed at Bottom */}
                  <div className="flex items-center justify-between pt-4 border-t border-white/20">
                    <span className="text-2xl font-black bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent sm:text-xl md:text-2xl">
                      {product.price}
                    </span>
                    <button className="bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-white text-sm font-bold px-6 py-3 rounded-full hover:from-pink-600 hover:via-purple-600 hover:to-indigo-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 sm:text-xs sm:px-4 sm:py-2 md:text-sm md:px-6 md:py-3 whitespace-nowrap">
                      💕 Satın Al
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
