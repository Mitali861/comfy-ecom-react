
import React from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import { mockProducts, categories } from '../data/mockData';

const Home = () => {
  const featuredProducts = mockProducts.slice(0, 6);
  
  const banners = [
    {
      id: 1,
      title: "iPhone 15 Series",
      subtitle: "Now Available",
      description: "Starting from ₹79,900",
      image: "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?w=800",
      cta: "Shop Now",
      bgColor: "bg-gradient-to-r from-blue-600 to-purple-600"
    },
    {
      id: 2,
      title: "Laptop Sale",
      subtitle: "Up to 40% Off",
      description: "Premium laptops from top brands",
      image: "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=800",
      cta: "Explore",
      bgColor: "bg-gradient-to-r from-green-500 to-teal-600"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Banner */}
      <section className="relative">
        <div className="grid md:grid-cols-2 gap-4 p-4">
          {banners.map((banner) => (
            <div
              key={banner.id}
              className={`${banner.bgColor} rounded-xl p-8 text-white relative overflow-hidden min-h-[300px] flex items-center`}
            >
              <div className="flex-1 z-10">
                <h2 className="text-3xl md:text-4xl font-bold mb-2">{banner.title}</h2>
                <p className="text-xl mb-2 opacity-90">{banner.subtitle}</p>
                <p className="text-lg mb-6 opacity-80">{banner.description}</p>
                <Link
                  to="/products"
                  className="bg-white text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-block"
                >
                  {banner.cta}
                </Link>
              </div>
              <div className="absolute right-0 top-0 h-full w-1/2 hidden md:block">
                <img
                  src={banner.image}
                  alt={banner.title}
                  className="h-full w-full object-cover opacity-20"
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Categories */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Shop by Category</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {categories.map((category) => (
              <Link
                key={category.id}
                to={`/products?category=${category.id}`}
                className="bg-white rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300 border border-gray-100 group"
              >
                <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">
                  {category.icon}
                </div>
                <h3 className="font-semibold text-gray-700 group-hover:text-blue-600">
                  {category.name}
                </h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-gray-800">Featured Products</h2>
            <Link
              to="/products"
              className="text-blue-600 hover:text-blue-700 font-semibold flex items-center space-x-1"
            >
              <span>View All</span>
              <span>→</span>
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Special Offers */}
      <section className="py-12 bg-gradient-to-r from-orange-500 to-red-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Limited Time Offers</h2>
          <p className="text-xl mb-8 opacity-90">Don't miss out on these amazing deals!</p>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <h3 className="text-2xl font-bold mb-2">Free Shipping</h3>
              <p className="opacity-90">On orders above ₹999</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <h3 className="text-2xl font-bold mb-2">Easy Returns</h3>
              <p className="opacity-90">30-day return policy</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <h3 className="text-2xl font-bold mb-2">24/7 Support</h3>
              <p className="opacity-90">Customer service anytime</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
