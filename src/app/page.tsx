import Image from "next/image";

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Welcome to My E-commerce</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Product cards will go here */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="h-48 bg-gray-200 rounded-md mb-4"></div>
          <h2 className="text-xl font-semibold mb-2">Sample Product</h2>
          <p className="text-gray-600 mb-4">This is a sample product description. Replace this with real product data from Supabase.</p>
          <div className="flex justify-between items-center">
            <span className="text-lg font-bold">$99.99</span>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
