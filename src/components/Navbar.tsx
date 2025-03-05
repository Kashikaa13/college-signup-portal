const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <img
            src="https://images.unsplash.com/photo-1592280771190-3e2e4d571952?w=50&h=50&fit=crop"
            alt="College Logo"
            className="w-10 h-10 rounded-full"
          />
          <span className="text-xl font-bold text-blue-800">Symbiosis Institue of Technology</span>
        </div>
        <div className="flex gap-4">
          <a href="#" className="text-gray-600 hover:text-blue-800">Home</a>
          <a href="#" className="text-gray-600 hover:text-blue-800">About</a>
          <a href="#" className="text-gray-600 hover:text-blue-800">Contact</a>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
