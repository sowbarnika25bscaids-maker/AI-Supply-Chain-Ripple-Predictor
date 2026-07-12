function Timeline({ history }) {

  return (

    <div className="bg-white shadow rounded-xl p-5 md:col-span-2">

      <h2 className="text-xl font-bold mb-4">
        ⏱ Incident Timeline
      </h2>

      {history.length===0?

      <p>No events</p>

      :

      history.map((item,index)=>(

        <div
        key={index}
        className="border-l-4 border-blue-600 pl-4 mb-4">

          <h3 className="font-bold">

            {item.detection.event}

          </h3>

          <p>

            Failed Supplier :
            {item.detection.failed_node}

          </p>

          <p>

            Severity :
            {item.detection.severity}

          </p>

        </div>

      ))

      }

    </div>

  );

}

export default Timeline;