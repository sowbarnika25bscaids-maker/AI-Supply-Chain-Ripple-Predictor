function Architecture() {
  return (
    <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-white/20">

      <h2 className="text-3xl font-bold text-cyan-300 mb-8 text-center">
        🏗 AI System Architecture
      </h2>

      <div className="flex flex-col items-center gap-4 text-xl">

        <div className="bg-blue-600 px-6 py-3 rounded-xl">
          React Dashboard
        </div>

        ↓

        <div className="bg-green-600 px-6 py-3 rounded-xl">
          FastAPI Backend
        </div>

        ↓

        <div className="bg-purple-600 px-6 py-3 rounded-xl">
          Detection Agent
        </div>

        ↓

        <div className="bg-red-600 px-6 py-3 rounded-xl">
          Ripple Engine
        </div>

        ↓

        <div className="bg-yellow-600 px-6 py-3 rounded-xl">
          Recovery Agent
        </div>

        ↓

        <div className="bg-pink-600 px-6 py-3 rounded-xl">
          Gemini AI
        </div>

        ↓

        <div className="bg-cyan-600 px-6 py-3 rounded-xl">
          Final Dashboard
        </div>

      </div>

    </div>
  );
}

export default Architecture;