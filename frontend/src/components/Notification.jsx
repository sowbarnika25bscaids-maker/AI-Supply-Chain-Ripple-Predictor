function Notification({ title, message }) {

  return (

    <div className="fixed top-5 left-1/2 -translate-x-1/2 bg-red-600 text-white px-6 py-4 rounded-xl shadow-2xl z-50 animate-pulse">

      <h3 className="font-bold text-lg">
        {title}
      </h3>

      <p>
        {message}
      </p>

    </div>

  );

}

export default Notification;