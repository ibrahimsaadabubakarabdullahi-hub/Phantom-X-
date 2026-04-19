import { useState } from "react";
function App() {
  const [chat, setChat] = useState([]);
  const [input, setInput] = useState("");
  const [persona, setPersona] = useState("default");

  const send = async () => {
    const res = await fetch("http://localhost:4000/api/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ userMessage: input, persona }),
    });
    const data = await res.json();
    setChat([...chat, { user: input }, { phantomx: data.aiResponse }]);
    setInput("");
  };

  return (
    <div>
      <h1>Phantom X (Kantana AI Industries Ltd)</h1>
      <div>
        <label>
          Persona: 
          <select value={persona} onChange={e => setPersona(e.target.value)}>
            <option value="default">Default</option>
            <option value="coder">Coder</option>
            <option value="friendly">Friendly</option>
          </select>
        </label>
      </div>
      <div>
        {chat.map((c, i) => (
          <div key={i}>
            <b>{c.user ? "You" : "PhantomX"}:</b> {c.user || c.phantomx}
          </div>
        ))}
      </div>
      <input value={input} onChange={e => setInput(e.target.value)} />
      <button onClick={send}>Send</button>
    </div>
  );
}
export default App;