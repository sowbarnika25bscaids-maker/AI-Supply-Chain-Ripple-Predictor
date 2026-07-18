function TechStack() {
  const techs = [
    "⚛ React",
    "⚡ FastAPI",
    "🤖 Gemini AI",
    "🧠 Agentic AI",
    "🌐 NetworkX",
    "🎨 Tailwind CSS",
    "📡 Axios",
    "🐍 Python"
  ];

  return (
    <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20 shadow-2xl">

      <h2 className="text-3xl font-bold text-cyan-300 text-center mb-8">
        💻 Technology Stack
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-5">

        {techs.map((tech, index) => (

          <div
            key={index}
            className="bg-white/10 rounded-2xl p-5 text-center text-lg font-semibold hover:scale-110 transition-all duration-300 shadow-lg"
          >
            {tech}
          </div>

        ))}

      </div>

    </div>
  );
}

export default TechStack;