const Footer = () => (
  <footer className="bg-gray-900 text-gray-200 py-8 mt-16">
    <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
      <div>
        <h2 className="text-lg font-bold mb-2">Royce Tours & Travels</h2>
        <p className="text-sm mb-2">Discover the magic of Sri Lanka with our expertly crafted tours. We’re passionate about sharing the beauty, culture, and wonders of this island nation.</p>
        <p className="text-xs">123 Main Road, Colombo 03, Sri Lanka</p>
        <p className="text-xs">+94 77 123 4567</p>
        <p className="text-xs">info@roycetours.lk</p>
      </div>
      <div>
        <h3 className="font-semibold mb-2">Quick Links</h3>
        <ul className="space-y-1 text-sm">
          <li><a href="/" className="hover:underline">Home</a></li>
          <li><a href="/tours" className="hover:underline">Tour Packages</a></li>
          <li><a href="/about" className="hover:underline">About Us</a></li>
          <li><a href="/gallery" className="hover:underline">Gallery</a></li>
          <li><a href="/contact" className="hover:underline">Contact</a></li>
        </ul>
      </div>
      <div>
        <h3 className="font-semibold mb-2">Popular Tours</h3>
        <ul className="space-y-1 text-sm">
          <li>Cultural Triangle</li>
          <li>Beach Escape</li>
          <li>Hill Country</li>
          <li>Wildlife Safari</li>
          <li>Honeymoon Packages</li>
        </ul>
      </div>
      <div>
        <h3 className="font-semibold mb-2">Follow us</h3>
        <div className="flex space-x-4 mt-2">
          <a href="#" className="hover:text-blue-400"><i className="fab fa-facebook-f"></i>FB</a>
          <a href="#" className="hover:text-blue-400"><i className="fab fa-instagram"></i>IG</a>
          <a href="#" className="hover:text-blue-400"><i className="fab fa-twitter"></i>TW</a>
        </div>
      </div>
    </div>
    <div className="text-center text-xs text-gray-400 mt-8">© 2024 Royce Tours & Travels. All rights reserved.</div>
  </footer>
);

export default Footer; 