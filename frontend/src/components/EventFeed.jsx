function EventFeed({ history }) {

  return (

    <div className="bg-white shadow rounded-xl p-5">

      <h2 className="text-xl font-bold mb-4">
        📡 Live Event Feed
      </h2>

      {history.length === 0 ? (

        <p>No events</p>

      ) : (

        history.map((item, index) => (

          <div
            key={index}
            className="border-b py-3"
          >

            <p>
              🚨 {item.detection.event}
            </p>

            <small>
              Severity :
              {" "}
              {item.detection.severity}
            </small>

          </div>

        ))

      )}

    </div>

  );

}

export default EventFeed;