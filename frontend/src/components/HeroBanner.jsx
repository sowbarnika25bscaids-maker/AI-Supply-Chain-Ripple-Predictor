import robot from "../assets/ai-robot.png";
function HeroBanner() {
  return (
    <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-slate-900 via-blue-900 to-cyan-900 p-10 mb-8 shadow-2xl border border-cyan-500/30">

      {/* Background Glow */}
      <div className="absolute -top-20 -right-20 w-72 h-72 bg-cyan-500 opacity-20 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 left-0 w-60 h-60 bg-purple-500 opacity-20 blur-3xl rounded-full"></div>

      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between">

        {/* Left Side */}
        <div>

          <p className="text-cyan-300 font-semibold mb-2">
            🤖 Powered by Agentic AI + Gemini AI
          </p>

          <h1 className="text-5xl font-extrabold text-white leading-tight">
            AI Supply Chain <br />
            Ripple Predictor
          </h1>

          <p className="mt-5 text-gray-300 text-lg max-w-xl">
            Predict disruptions, analyze ripple effects,
            recommend recovery plans and reduce business risk
            using Artificial Intelligence.
          </p>

          <div className="mt-8 flex gap-4">

            <button className="bg-cyan-500 hover:bg-cyan-600 px-6 py-3 rounded-xl font-bold transition">
              🚀 Explore
            </button>

            <button className="border border-cyan-400 px-6 py-3 rounded-xl text-white hover:bg-cyan-500/20 transition">
              📊 Dashboard
            </button>

          </div>

        </div>

        {/* Right Side */}

        {/* Right Side */}

<div className="mt-8 md:mt-0">
  <img
    src={robot}
    alt="AI Robot"
    className="w-80 md:w-96 animate-pulse drop-shadow-[0_0_40px_cyan]"
  />
</div>

      </div>

    </div>
  );
}

export default HeroBanner;