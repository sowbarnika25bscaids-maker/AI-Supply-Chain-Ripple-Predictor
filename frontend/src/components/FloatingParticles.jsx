function FloatingParticles() {

  return (

    <div className="fixed inset-0 -z-10 overflow-hidden">

      <div className="absolute w-64 h-64 bg-cyan-500/20 rounded-full blur-3xl top-20 left-20 animate-pulse"></div>

      <div className="absolute w-72 h-72 bg-purple-500/20 rounded-full blur-3xl bottom-10 right-10 animate-pulse"></div>

      <div className="absolute w-48 h-48 bg-blue-500/20 rounded-full blur-3xl top-1/2 left-1/2 animate-ping"></div>

    </div>

  );

}

export default FloatingParticles;