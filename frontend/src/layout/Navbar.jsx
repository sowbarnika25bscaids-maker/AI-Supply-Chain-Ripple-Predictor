function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white/10 backdrop-blur-xl border-b border-white/20 shadow-lg">
      <div className="max-w-7xl mx-auto px-8 py-4 flex justify-between items-center">

        {/* Left */}

        <div>
          <h1 className="text-2xl font-bold text-cyan-300">
            🚀 AI Supply Chain Ripple Predictor
          </h1>

          <p className="text-sm text-gray-300">
            Real-Time AI Disruption Detection
          </p>
        </div>

        {/* Right */}

        <div className="flex items-center gap-3">

          <span className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></span>

          <span className="text-white font-semibold">
            System Online
          </span>

        </div>

      </div>
    </nav>
  );
}

export default Navbar;