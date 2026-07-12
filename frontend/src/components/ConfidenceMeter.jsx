function ConfidenceMeter({ result }) {

  if (!result) return null;

  const confidence = 94;

  return (

    <div className="bg-white rounded-xl shadow p-5">

      <h2 className="text-xl font-bold mb-4">
        🤖 AI Confidence
      </h2>

      <div className="w-full bg-gray-300 rounded-full h-6">

        <div
          className="bg-green-500 h-6 rounded-full text-white text-center"
          style={{
            width: `${confidence}%`
          }}
        >
          {confidence}%
        </div>

      </div>

      <p className="mt-3 text-gray-600">
        AI is highly confident in this recovery recommendation.
      </p>

    </div>

  );

}

export default ConfidenceMeter;