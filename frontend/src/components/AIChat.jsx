import { useState } from "react";
import axios from "axios";

function AIChat({ result }) {

  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  const [loading, setLoading] = useState(false);
  const askAI = async () => {

  if (!question || !result) return;

  setLoading(true);

  try {

    const res = await axios.post(
      `${import.meta.env.VITE_API_URL}/chat`,
      {
        question,
        result
      }
    );

    setAnswer(res.data.answer);

  } catch (err) {

    console.log(err);

    setAnswer("AI is unavailable.");

  } finally {

    setLoading(false);

  }

};
  return (

    <div className="bg-white shadow rounded-xl p-5">

      <h2 className="text-xl font-bold mb-4">
        🤖 AI Chat Assistant
      </h2>

      <input
        className="border p-3 rounded-lg w-full"
        placeholder="Ask about risks, suppliers, recovery strategies..."
        value={question}
        onChange={(e)=>setQuestion(e.target.value)}
      />

<div className="flex flex-wrap gap-2 mt-3">

<button
className="bg-gray-200 px-3 py-1 rounded"
onClick={()=>setQuestion("Why is this supplier recommended?")}
>
Why this supplier?
</button>

<button
className="bg-gray-200 px-3 py-1 rounded"
onClick={()=>setQuestion("What is the business impact?")}
>
Business Impact
</button>

<button
className="bg-gray-200 px-3 py-1 rounded"
onClick={()=>setQuestion("How can I reduce this risk?")}
>
Reduce Risk
</button>

<button
className="bg-gray-200 px-3 py-1 rounded"
onClick={()=>setQuestion("Suggest long-term prevention.")}
>
Prevention
</button>

</div>
      <button
        onClick={askAI}
        className="bg-blue-600 text-white px-5 py-2 rounded-lg mt-3"
      >
        {loading ? "Thinking..." : "Ask"}
      </button>

      <div className="mt-4">

       {loading ? (

<p className="text-blue-600 font-semibold">
🤖 AI is thinking...
</p>

) : (

<pre className="whitespace-pre-wrap">
{answer}
</pre>

)}

      </div>

    </div>

  );

}

export default AIChat;