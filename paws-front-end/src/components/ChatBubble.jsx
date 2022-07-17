import react, { useState } from "react";

export default function ChatBubble() {
  const [bubble, setBubble] = useState(false);
  const makeBubble = (event) => {
    setBubble((current) => !current);
  };
  return <div className="messages">{makeBubble}</div>;
}
