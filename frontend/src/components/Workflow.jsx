function Workflow() {
  const steps = [
    "🚨 Disruption Event",
    "🤖 Detection Agent",
    "🌊 Ripple Engine",
    "📊 Risk Analysis",
    "📦 Recovery Agent",
    "💎 Gemini AI",
    "📈 Dashboard Output",
  ];

  return (
    <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20 shadow-2xl mt-8">

      <h2 className="text-3xl font-bold text-cyan-300 text-center mb-8">
        🔄 AI Workflow
      </h2>

      <div className="flex flex-col items-center gap-4">

        {steps.map((step, index) => (
          <div key={index} className="flex flex-col items-center">

            <div className="bg-blue-600 px-6 py-3 rounded-xl text-white font-bold shadow-lg hover:scale-105 transition">
              {step}
            </div>

            {index !== steps.length - 1 && (
              <div className="text-3xl text-cyan-300 my-2">
                ↓
              </div>
            )}

          </div>
        ))}

      </div>

    </div>
  );
}

export default Workflow;