import React, { useEffect, memo } from "react";

function Utterances({ id }: { id: string }) {
  const initUtterances = () => {
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.async = true;
    script.setAttribute("issue-number", id);
    script.setAttribute("theme", "photon-dark");
    script.setAttribute("repo", "gamelifezhao/smallZhaoBlog");
    script.crossOrigin = "anonymous";
    script.src = "https://utteranc.es/client.js";

    const comment = document.getElementById("comment");
    if (comment) {
      comment.appendChild(script);
    }
  };


  useEffect(() => {
    if (!document.querySelector("#comment script")) {
      initUtterances();
    }
  }, [id]);
  

  return <div id="comment"></div>;
}

export default memo(Utterances);
