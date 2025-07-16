const Home = () => (
  <main className="pt-24">
    {/* Hero Section */}
    <section className="bg-gradient-to-b from-blue-200 to-blue-400 text-center py-24 relative">
      <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Experience Sri Lanka with <span className="text-blue-900">Royce Tours & Travels</span></h1>
      <p className="text-lg text-white mb-8">Unforgettable journeys through the Pearl of the Indian Ocean</p>
      <div className="flex justify-center gap-4">
        <button className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600">Explore Our Tour Packages</button>
        <button className="bg-white text-blue-500 px-6 py-2 rounded hover:bg-blue-100">Watch Video</button>
      </div>
    </section>
    {/* Packages Section */}
    <section className="py-16 bg-white">
      <h2 className="text-3xl font-bold text-center mb-4"><span className="text-blue-500">Curated Tour</span> Packages</h2>
      <p className="text-center text-gray-500 mb-10">Discover Sri Lanka's diverse beauty with our expertly crafted tour packages.</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {/* Example package cards */}
        <div className="bg-gray-100 rounded-lg shadow p-6 flex flex-col items-start">
          <div className="h-32 w-full bg-blue-200 rounded mb-4"></div>
          <h3 className="font-semibold text-lg mb-2">Cultural Triangle Adventure</h3>
          <p className="text-sm text-gray-600 mb-4">Explore ancient kingdoms, temples, and UNESCO World Heritage sites.</p>
          <button className="mt-auto bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">View Details & Book</button>
        </div>
        <div className="bg-gray-100 rounded-lg shadow p-6 flex flex-col items-start">
          <div className="h-32 w-full bg-blue-200 rounded mb-4"></div>
          <h3 className="font-semibold text-lg mb-2">Beach & Chill Escape</h3>
          <p className="text-sm text-gray-600 mb-4">Pristine beaches, whale watching, and coastal relaxation.</p>
          <button className="mt-auto bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">View Details & Book</button>
        </div>
        <div className="bg-gray-100 rounded-lg shadow p-6 flex flex-col items-start">
          <div className="h-32 w-full bg-blue-200 rounded mb-4"></div>
          <h3 className="font-semibold text-lg mb-2">Hill Country Train Journey</h3>
          <p className="text-sm text-gray-600 mb-4">Scenic train rides through tea plantations and misty mountains.</p>
          <button className="mt-auto bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">View Details & Book</button>
        </div>
      </div>
      <div className="flex justify-center mt-8">
        <button className="bg-orange-400 text-white px-6 py-2 rounded hover:bg-orange-500">View All Packages</button>
      </div>
    </section>
    {/* About Section */}
    <section className="py-16 bg-gray-50">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Welcome to <span className="text-blue-500">Royce Tours & Travels</span></h2>
        <p className="text-gray-600 mb-6">For over 15 years, we’ve been sharing the magic of Sri Lanka with travelers from around the world. Our passion for our beautiful island nation drives us to create authentic, memorable, and safe journeys that showcase the very best of Sri Lankan culture, nature, and hospitality.</p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
          <div>
            <div className="text-2xl font-bold text-blue-500">15+</div>
            <div className="text-xs text-gray-500">Years Experience</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-blue-500">5000+</div>
            <div className="text-xs text-gray-500">Happy Travelers</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-blue-500">100%</div>
            <div className="text-xs text-gray-500">Safety Record</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-blue-500">99%</div>
            <div className="text-xs text-gray-500">Customer Satisfaction</div>
          </div>
        </div>
      </div>
    </section>
    {/* Gallery Section */}
    <section className="py-16 bg-white">
      <h2 className="text-3xl font-bold text-center mb-4"><span className="text-blue-500">Gallery</span> of Wonders</h2>
      <p className="text-center text-gray-500 mb-10">Discover the breathtaking beauty of Sri Lanka through the eyes of our travelers.</p>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
        <div className="h-32 bg-blue-200 rounded"></div>
        <div className="h-32 bg-blue-200 rounded"></div>
        <div className="h-32 bg-blue-200 rounded"></div>
        <div className="h-32 bg-blue-200 rounded"></div>
        <div className="h-32 bg-blue-200 rounded"></div>
        <div className="h-32 bg-blue-200 rounded"></div>
      </div>
    </section>
    {/* Contact/Inquiry Section */}
    <section className="py-16 bg-gray-50">
      <h2 className="text-3xl font-bold text-center mb-4">Start Your <span className="text-blue-500">Sri Lankan Adventure</span></h2>
      <p className="text-center text-gray-500 mb-10">Ready to explore the Pearl of the Indian Ocean? Get in touch with our travel experts to create your perfect Sri Lankan experience.</p>
      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
        <div>
          <div className="mb-4">
            <div className="font-semibold">Phone</div>
            <div>+94 77 123 4567</div>
          </div>
          <div className="mb-4">
            <div className="font-semibold">Email</div>
            <div>info@roycetours.lk</div>
          </div>
          <div className="mb-4">
            <div className="font-semibold">Address</div>
            <div>123 Main Road, Colombo 03, Sri Lanka</div>
          </div>
          <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 mt-4 w-full">Chat with us on WhatsApp</button>
        </div>
        <form className="bg-white rounded-lg shadow p-6 flex flex-col gap-4">
          <input className="border rounded px-3 py-2" placeholder="Full Name" />
          <input className="border rounded px-3 py-2" placeholder="Email Address" />
          <input className="border rounded px-3 py-2" placeholder="Phone Number" />
          <textarea className="border rounded px-3 py-2" placeholder="Your Message" rows={3} />
          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Send Inquiry</button>
        </form>
      </div>
    </section>
  </main>
);

export default Home; 