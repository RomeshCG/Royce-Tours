import backgroundImage from '../assets/background.jpg';
import TourPackageCard from '../components/TourPackageCard';
import AnimatedStat from '../components/AnimatedStat';

// Sample tour package data
const sampleTourPackages = [
  {
    id: 1,
    title: "Cultural Triangle Adventure",
    description: "Explore ancient kingdoms, temples, and UNESCO World Heritage sites",
    price: 899,
    rating: 4.9,
    duration: "7 Days",
    groupSize: "2-8 People",
    highlights: ["Sigiriya Rock Fortress", "Ancient Polonnaruwa", "Cave Temples of Dambulla"],
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
  },
  {
    id: 2,
    title: "Beach & Chill Escape",
    description: "Pristine beaches, whale watching, and coastal relaxation",
    price: 699,
    rating: 4.8,
    duration: "5 Days",
    groupSize: "2-8 People",
    highlights: ["Mirissa Beach", "Whale Watching", "Galle Fort"],
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
  },
  {
    id: 3,
    title: "Hill Country Train Journey",
    description: "Scenic train rides through tea plantations and misty mountains",
    price: 799,
    rating: 4.9,
    duration: "6 Days",
    groupSize: "2-8 People",
    highlights: ["Nine Arch Bridge", "Tea Factory Tours", "Little Adam's Peak"],
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
  },
  {
    id: 4,
    title: "Wildlife Safari Adventure",
    description: "Discover Sri Lanka's incredible wildlife in their natural habitats",
    price: 649,
    rating: 4.7,
    duration: "4 Days",
    groupSize: "2-6 People",
    highlights: ["Yala National Park", "Elephant Gathering", "Leopard Spotting"],
    image: "https://images.unsplash.com/photo-15493660219f761d450615?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
  },
  {
    id: 5,
    title: "Spice Garden & Ayurveda",
    description: "Immerse yourself in traditional healing and aromatic spice gardens",
    price: 549,
    rating: 4.6,
    duration: "3 Days",
    groupSize: "2-4 People",
    highlights: ["Spice Gardens", "Ayurvedic Treatments", "Traditional Cooking"],
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
  },
  {
    id: 6,
    title: "Adventure & Waterfalls",
    description: "Thrilling adventures through waterfalls and scenic landscapes",
    price: 749,
    rating: 4.8,
    duration: "5 Days",
    groupSize: "2-8 People",
    highlights: ["Bambarakanda Falls", "Hiking Trails", "River Rafting"],
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
  }
];

const Home = () => (
  <main>
    {/* Hero Section */}
    <section
      className="min-h-screen flex items-center justify-center text-center relative"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Orange Overlay */}
      <div className="absolute inset-0 bg-orange-500 opacity-50"></div>
      {/* Hero Content */}
      <div className="relative z-10 px-6 w-full">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 flex flex-col items-center justify-center">
          Experience Sri Lanka with <span className="text-orange-300">Royce Tours & Travels</span>
        </h1>
        <p className="text-xl text-white mb-8 max-w-2xl mx-auto">
          Unforgettable journeys through the Pearl of the Indian Ocean
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <button className="bg-orange-500 text-white px-8 py-3 rounded-lg hover:bg-orange-600 transition duration-300 text-lg font-semibold">
            Explore Our Tour Packages
          </button>
          <button className="bg-white text-orange-600 px-8 py-3 rounded-lg hover:bg-orange-100 transition duration-300 text-lg font-semibold border-2 border-white">
            Watch Video
          </button>
        </div>
      </div>
    </section>

    {/* Packages Section */}
    <section className="py-16 bg-white">
      <h2 className="text-3xl font-bold text-center mb-4"><span className="text-orange-500">Curated Tour</span> Packages</h2>
      <p className="text-center text-gray-500 mb-10">Discover Sri Lanka's diverse beauty with our expertly crafted tour packages.</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-6">
        {sampleTourPackages.map((tourPackage) => (
          <TourPackageCard key={tourPackage.id} tourPackage={tourPackage} />
        ))}
      </div>
      <div className="flex justify-center mt-8">
        <button className="bg-orange-400 text-white px-6 py-2 rounded hover:bg-orange-500">View All Packages</button>
      </div>
    </section>
    {/* About Section */}
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-3xl font-bold mb-6">
              Welcome to <span className="text-orange-500">Royce Tours & Travels</span>
            </h2>
            <div className="space-y-4 mb-8">
              <p className="text-gray-600 leading-relaxed">
                For over 15 years, we've been sharing the magic of Sri Lanka with travelers from around the world. Our passion for our beautiful island nation drives us to create authentic, memorable experiences that showcase the very best of Sri Lankan culture, nature, and hospitality.
              </p>
              <p className="text-gray-600 leading-relaxed">
                From the ancient kingdoms of the Cultural Triangle to the pristine beaches of the south coast, from the misty mountains of the hill country to the wildlife-rich national parks, our expert team ensures every journey is a transformative experience.
              </p>
            </div>
            
            {/* Statistics Grid */}
            <div className="grid grid-cols-2 gap-4">
              <AnimatedStat
                icon="👤"
                endValue={15}
                label="Years of Experience"
                delay={200}
                suffix="+"
              />
              <AnimatedStat
                icon="👥"
                endValue={5000}
                label="Happy Travelers"
                delay={400}
                suffix="+"
              />
              <AnimatedStat
                icon="🛡️"
                endValue={100}
                label="Safety Record"
                delay={600}
                suffix="%"
              />
              <AnimatedStat
                icon="❤️"
                endValue={99}
                label="Customer Satisfaction"
                delay={800}
                suffix="%"
              />
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80"
              alt="Serene forest scene"
              className="w-full h-96 object-cover rounded-lg"
            />
            {/* Our Promise Overlay */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white bg-opacity-95 rounded-lg p-4 shadow-lg">
              <div className="flex items-center gap-3">
                <span className="text-orange-500 text-xl">❤️</span>
                <div>
                  <div className="font-bold text-gray-800">Our Promise</div>
                  <div className="text-sm text-gray-600">Safety, authenticity, and unforgettable memories</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* Gallery Section */}
    <section className="py-16 bg-white">
      <h2 className="text-3xl font-bold text-center mb-4"><span className="text-orange-500">Gallery of</span> Wonders</h2>
      <p className="text-center text-gray-500 mb-10 max-w-3xl mx-auto">
        Discover the breathtaking beauty of Sri Lanka through the eyes of our travelers. Each image tells a story of adventure, culture, and natural splendor.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto px-6">
        {/* Row 1 */}
        <div className="h-64 bg-gray-200 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
          <img
            src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
            alt="Sigiriya Rock Fortress"
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="h-64 bg-gray-200 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
          <img
            src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
            alt="Tropical Beach"
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="h-64 bg-gray-200 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
          <img
            src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
            alt="Hill Country Train"
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
          />
        </div>
        
        {/* Row 2 */}
        <div className="h-64 bg-gray-200 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
          <img
            src="https://images.unsplash.com/photo-1549366021-9f761d450615?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
            alt="Elephant Family"
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="h-64 bg-gray-200 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
          <img
            src="https://images.unsplash.com/photo-1549366021-9f761d450615?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
            alt="Spotted Deer"
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="h-64 bg-gray-200 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
          <img
            src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
            alt="Mountain Landscape"
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
          />
        </div>
        
        {/* Row 3 */}
        <div className="h-64 bg-gray-200 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
          <img
            src="https://images.unsplash.com/photo-1549366021-9f761d450615?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
            alt="Wildlife Safari"
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="h-64 bg-gray-200 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
          <img
            src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
            alt="Serene Water"
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="h-64 bg-gray-200 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
          <img
            src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
            alt="Canyon River"
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
          />
        </div>
      </div>
    </section>
    {/* Contact/Inquiry Section */}
    <section className="py-16 bg-gray-50">
      <h2 className="text-3xl font-bold text-center mb-4">Start Your <span className="text-orange-500">Sri Lankan Adventure</span></h2>
      <p className="text-center text-gray-500 mb-10">Ready to explore the Pearl of the Indian Ocean? Get in touch with our travel experts to create your perfect Sri Lankan experience.</p>
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 px-6">
        {/* Contact Information */}
        <div className="bg-white rounded-lg shadow-lg p-8 space-y-6">
          <h3 className="text-2xl font-bold text-gray-800 mb-6">Get in Touch</h3>
          
          {/* Phone */}
          <div className="flex items-start gap-4">
            <div className="bg-orange-100 p-3 rounded-full">
              <span className="text-orange-600 text-xl">📞</span>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-1">Phone</h4>
              <p className="text-gray-600">+94 77 123 4567</p>
              <p className="text-gray-600">+94 11 234 5678</p>
            </div>
          </div>

          {/* Email */}
          <div className="flex items-start gap-4">
            <div className="bg-orange-100 p-3 rounded-full">
              <span className="text-orange-600 text-xl">✉️</span>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-1">Email</h4>
              <p className="text-gray-600">info@roycetours.lk</p>
              <p className="text-gray-600">bookings@roycetours.lk</p>
            </div>
          </div>

          {/* Address */}
          <div className="flex items-start gap-4">
            <div className="bg-orange-100 p-3 rounded-full">
              <span className="text-orange-600 text-xl">📍</span>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-1">Office Address</h4>
              <p className="text-gray-600">123 Main Street, Colombo 03</p>
              <p className="text-gray-600">Western Province, Sri Lanka</p>
            </div>
          </div>

          {/* Office Hours */}
          <div className="flex items-start gap-4">
            <div className="bg-orange-100 p-3 rounded-full">
              <span className="text-orange-600 text-xl">🕒</span>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-1">Office Hours</h4>
              <p className="text-gray-600">Monday - Sunday: 8:00 AM - 6:00 PM</p>
            </div>
          </div>

          {/* WhatsApp Button */}
          <div className="pt-4">
            <button className="bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition duration-300 w-full flex items-center justify-center gap-2">
              <span className="text-xl">💬</span>
              Chat with us on WhatsApp
            </button>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h3 className="text-2xl font-bold text-gray-800 mb-6">Send us a Message</h3>
          <form className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
                <input 
                  type="text" 
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  placeholder="Enter your full name"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email Address *</label>
                <input 
                  type="email" 
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  placeholder="Enter your email"
                  required
                />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                <input 
                  type="tel" 
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  placeholder="Enter your phone number"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Preferred Tour</label>
                <select className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-orange-500 focus:border-transparent">
                  <option value="">Select a tour package</option>
                  <option value="cultural">Cultural Triangle Adventure</option>
                  <option value="beach">Beach & Chill Escape</option>
                  <option value="hill">Hill Country Train Journey</option>
                  <option value="wildlife">Wildlife Safari Adventure</option>
                  <option value="spice">Spice Garden & Ayurveda</option>
                  <option value="adventure">Adventure & Waterfalls</option>
                  <option value="custom">Custom Tour</option>
                </select>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Travel Dates</label>
              <input 
                type="text" 
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                placeholder="Preferred travel dates (e.g., March 15-25, 2024)"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Number of Travelers</label>
              <input 
                type="number" 
                min="1"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                placeholder="Number of people"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Your Message *</label>
              <textarea 
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                rows={4}
                placeholder="Tell us about your dream Sri Lankan adventure..."
                required
              ></textarea>
            </div>
            <button 
              type="submit" 
              className="w-full bg-orange-500 text-white py-3 px-6 rounded-lg font-semibold hover:bg-orange-600 transition duration-300"
            >
              Send Inquiry
            </button>
          </form>
        </div>
      </div>
    </section>
  </main>
);

export default Home; 