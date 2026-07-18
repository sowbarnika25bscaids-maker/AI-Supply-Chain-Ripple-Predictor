function Features() {

  const features = [
    "🤖 AI Detection",
    "🌊 Ripple Prediction",
    "📊 Risk Analysis",
    "📦 Recovery Recommendation",
    "💬 AI Chat",
    "📄 PDF Report",
    "🗺 Supply Chain Network",
    "📈 Analytics Dashboard"
  ];

  return (

    <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20 shadow-2xl">

      <h2 className="text-3xl font-bold text-cyan-300 text-center mb-8">

        🚀 Key Features

      </h2>

      <div className="grid md:grid-cols-4 gap-5">

        {features.map((item,index)=>(

          <div
            key={index}
            className="bg-white/10 rounded-2xl p-5 text-center hover:scale-105 transition-all duration-300"
          >

            {item}

          </div>

        ))}

      </div>

    </div>

  );

}

export default Features;