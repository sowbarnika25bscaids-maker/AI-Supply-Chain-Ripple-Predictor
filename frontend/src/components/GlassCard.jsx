function GlassCard({ title, children, className = "" }) {
  return (
    <div
      className={`bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl shadow-2xl p-6 card-glow transition-all duration-300 ${className}`}
    >
      {title && (
        <h2 className="text-2xl font-bold text-cyan-300 mb-5">
          {title}
        </h2>
      )}

      {children}
    </div>
  );
}

export default GlassCard;