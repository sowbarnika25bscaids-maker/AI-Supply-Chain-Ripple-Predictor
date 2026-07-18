import { useEffect } from "react";

function AnimatedCursor() {

  useEffect(() => {

    const cursor = document.createElement("div");

    cursor.className = "custom-cursor";

    document.body.appendChild(cursor);

    const move = (e) => {

      cursor.style.left = e.clientX + "px";

      cursor.style.top = e.clientY + "px";

    };

    window.addEventListener("mousemove", move);

    return () => {

      window.removeEventListener("mousemove", move);

      document.body.removeChild(cursor);

    };

  }, []);

  return null;

}

export default AnimatedCursor;