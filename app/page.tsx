import Image from "next/image";
import Link from "next/link";

export default function Home() {
  // Sample product data
  const categories = ["Men", "Women", "Kids", "Accessories"];
  const products = [
    {
      id: 1,
      name: "Classic White Shirt",
      price: 49.99,
      category: "Men",
      image: "/images/white-shirt.jpg",
    },
    {
      id: 2,
      name: "Summer Floral Dress",
      price: 79.99,
      category: "Women",
      image: "/images/floral-dress.jpg",
    },
    {
      id: 3,
      name: "Kids Denim Jacket",
      price: 39.99,
      category: "Kids",
      image: "/images/denim-jacket.jpg",
    },
    {
      id: 4,
      name: "Leather Handbag",
      price: 99.99,
      category: "Accessories",
      image: "/images/handbag.jpg",
    },
    {
      id: 5,
      name: "Men's Casual Sneakers",
      price: 69.99,
      category: "Men",
      image: "/images/sneakers.jpg",
    },
    {
      id: 6,
      name: "Silk Scarf",
      price: 29.99,
      category: "Accessories",
      image: "/images/scarf.jpg",
    },
  ];

  return (
    <div className="font-sans min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm fixed w-full top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <Link href="/" className="flex items-center">
              <Image
                src="/logo.svg" // Replace with your logo
                alt="Kliin Fashions Logo"
                width={40}
                height={40}
                priority
              />
              <h1 className="text-2xl font-bold text-gray-900 ml-2">Kliin Fashions</h1>
            </Link>
            <nav className="hidden md:flex space-x-4">
              {categories.map((category) => (
                <Link
                  key={category}
                  href={`#${category.toLowerCase()}`}
                  className="text-gray-600 hover:text-gray-900"
                >
                  {category}
                </Link>
              ))}
            </nav>
            <div className="flex items-center space-x-4">
              <button className="md:hidden">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
              <button className="relative">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">0</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="pt-20 pb-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <section className="mb-12">
          <div className="relative h-64 sm:h-96 rounded-lg overflow-hidden">
            <Image
              src="/images/hero-banner.jpg" // Replace with your hero image
              alt="Kliin Fashions Hero"
              layout="fill"
              objectFit="cover"
              priority
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
              <div className="text-center text-white">
                <h2 className="text-3xl sm:text-4xl font-bold mb-4">Discover Your Style</h2>
                <Link
                  href="#shop"
                  className="bg-white text-gray-900 px-6 py-3 rounded-full font-medium hover:bg-gray-100"
                >
                  Shop Now
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Categories */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-center sm:text-left">Shop by Category</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {categories.map((category) => (
              <Link
                key={category}
                href={`#${category.toLowerCase()}`}
                className="relative h-40 rounded-lg overflow-hidden group"
              >
                <Image
                  src={`/images/${category.toLowerCase()}-category.jpg`} // Replace with category images
                  alt={category}
                  layout="fill"
                  objectFit="cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center group-hover:bg-opacity-30 transition-all">
                  <span className="text-white text-lg font-semibold">{category}</span>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Products */}
        <section id="shop" className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-center sm:text-left">Featured Products</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <div key={product.id} className="bg-white rounded-lg shadow-sm overflow-hidden">
                <div className="relative h-64">
                  <Image
                    src={product.image}
                    alt={product.name}
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold">{product.name}</h3>
                  <p className="text-gray-600 text-sm">{product.category}</p>
                  <p className="text-gray-900 font-medium mt-2">${product.price.toFixed(2)}</p>
                  <button className="mt-4 w-full bg-gray-900 text-white py-2 rounded-md hover:bg-gray-800">
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Kliin Fashions</h3>
              <p className="text-gray-400">Discover the latest trends in fashion with Kliin Fashions.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                {categories.map((category) => (
                  <li key={category}>
                    <Link href={`#${category.toLowerCase()}`} className="text-gray-400 hover:text-white">
                      {category}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact</h3>
              <p className="text-gray-400">Email: support@kliinfashions.com</p>
              <p className="text-gray-400">Phone: (555) 123-4567</p>
            </div>
          </div>
          <div className="mt-8 text-center text-gray-400">
            &copy; {new Date().getFullYear()} Kliin Fashions. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}