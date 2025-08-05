import Image from "next/image";
import Link from "next/link";

interface Product {
  id: number;
  title: string;
  price: number;
  category: string;
  image: string;
}

async function fetchProducts() {
  const response = await fetch("https://fakestoreapi.com/products", {
    cache: "force-cache",
  });
  if (!response.ok) {
    throw new Error("Failed to fetch products");
  }
  return response.json();
}

export default async function Home() {
  let products: Product[] = [];
  let error: string | null = null;

  try {
    products = await fetchProducts();
  } catch (err) {
    error = "Error fetching products. Please try again later.";
  }

  const categories = ["Men's Clothing", "Women's Clothing", "Jewelery", "Electronics"];

  return (
    <div className="font-sans min-h-screen bg-background">
      {/* Header */}
      <header className="bg-background shadow-md fixed w-full top-0 z-10">
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
              <h1 className="text-2xl font-bold text-primary-pink ml-2">Kliin Fashions</h1>
            </Link>
            <nav className="hidden md:flex space-x-4">
              {categories.map((category) => (
                <Link
                  key={category}
                  href={`#${category.toLowerCase().replace(" ", "-")}`}
                  className="text-foreground hover:text-primary-pink"
                >
                  {category}
                </Link>
              ))}
            </nav>
            <div className="flex items-center space-x-4">
              <button className="md:hidden">
                <svg className="w-6 h-6 text-primary-pink" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
              <button className="relative">
                <svg className="w-6 h-6 text-primary-pink" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                <span className="absolute -top-2 -right-2 bg-primary-pink text-background text-xs rounded-full h-5 w-5 flex items-center justify-center">0</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="pt-24 sm:pt-28 pb-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
            <div className="absolute inset-0 bg-primary-pink bg-opacity-40 flex items-center justify-center">
              <div className="text-center text-background">
                <h2 className="text-3xl sm:text-4xl font-bold mb-4">Discover Your Style</h2>
                <Link href="#shop" className="button">
                  Shop Now
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Categories */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-center sm:text-left text-foreground">Shop by Category</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {categories.map((category) => (
              <Link
                key={category}
                href={`#${category.toLowerCase().replace(" ", "-")}`}
                className="relative h-40 rounded-lg overflow-hidden group category-card"
              >
                <Image
                  src={`/images/${category.toLowerCase().replace(" ", "-")}-category.jpg`} // Replace with category images
                  alt={category}
                  layout="fill"
                  objectFit="cover"
                />
                <div className="overlay absolute inset-0 flex items-center justify-center">
                  <span className="text-background text-lg font-semibold">{category}</span>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Products */}
        <section id="shop" className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-center sm:text-left text-foreground">Featured Products</h2>
          {error ? (
            <div className="text-center text-primary-pink">{error}</div>
          ) : products.length === 0 ? (
            <div className="text-center text-foreground">No products available.</div>
          ) : (
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
              {products.map((product) => (
                <div key={product.id} className="product-card">
                  <div className="relative h-64">
                    <Image
                      src={product.image}
                      alt={product.title}
                      layout="fill"
                      objectFit="cover"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="product-name">{product.title}</h3>
                    <p className="text-accent-gray text-sm capitalize">{product.category}</p>
                    <p className="product-price">${product.price.toFixed(2)}</p>
                    <button className="mt-4 w-full button">Add to Cart</button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-foreground text-background py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Kliin Fashions</h3>
              <p className="text-accent-gray">Discover the latest trends in fashion with Kliin Fashions.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                {categories.map((category) => (
                  <li key={category}>
                    <Link
                      href={`#${category.toLowerCase().replace(" ", "-")}`}
                      className="text-accent-gray hover:text-primary-pink"
                    >
                      {category}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact</h3>
              <p className="text-accent-gray">Email: support@kliinfashions.com</p>
              <p className="text-accent-gray">Phone: (555) 123-4567</p>
            </div>
          </div>
          <div className="mt-8 text-center text-accent-gray">
            &copy; {new Date().getFullYear()} Kliin Fashions. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}