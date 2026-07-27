import { useState } from "react";
import reactLogo from "./assets/react.svg";
import { invoke } from "@tauri-apps/api/core";
import "./App.css";

const [provider, setProvider] = useState("openai");
const [apiKey, setApiKey] = useState("");
const [saveStatus, setSaveStatus] = useState("");

async function handleSaveKey(){
    try {
        await invoke("save_api_key", {provider, key: apiKey});
        setSaveStatus(`Key for ${provider} saves`);
        setApiKey("");
    }
    catch (error) {
        setSaveStatus(`Error ${error}`);
    }
}


function App() {
  const [greetMsg, setGreetMsg] = useState("");
  const [name, setName] = useState("");
  const [screenshotPath, setScreenshotPath] = useState("");

  async function greet() {
    setGreetMsg(await invoke("greet", { name }));
  }

  async function handleScreenshot() {
    try {
      const path = await invoke<string>("capture_screenshot");
      setScreenshotPath(path);
      console.log("Скриншот сохранён:", path);
    } catch (error) {
      console.error("Ошибка захвата:", error);
      setScreenshotPath(`Ошибка: ${error}`);
    }
  }

  return (
    <main className="container">
      <h1>Welcome to Tauri + React</h1>

      <div className="row">
        <a href="https://vite.dev" target="_blank">
          <img src="/vite.svg" className="logo vite" alt="Vite logo" />
        </a>
        <a href="https://tauri.app" target="_blank">
          <img src="/tauri.svg" className="logo tauri" alt="Tauri logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <p>Click on the Tauri, Vite, and React logos to learn more.</p>

      <form
        className="row"
        onSubmit={(e) => {
          e.preventDefault();
          greet();
        }}
      >
        <input
          id="greet-input"
          onChange={(e) => setName(e.currentTarget.value)}
          placeholder="Enter a name..."
        />
        <button type="submit">Greet</button>
      </form>
      <p>{greetMsg}</p>

      <div className="row">
        <button onClick={handleScreenshot}>Сделать скриншот</button>
      </div>
      <p>{screenshotPath}</p>
    </main>
  );
}

export default App;