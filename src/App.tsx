import { useState } from "react";
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
async function handleCheckKey(){
    try {
        const key = await invoke<string>("get_api_key",{provider});
        setSaveStatus(`Key needed: ${key.slice(0, 4)}...`);
    }
    catch (error){
        setSaveStatus(`Key not need for ${provider}`);
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
        <div className="row">
            <select value={provider} onChange={(e) => setProvider(e.target.value)}>
                <option value="openai">OpenAI</option>
                <option value="gemini">Google Gemini</option>
                <option value="anthropic">Anthropic</option>
            </select>
            <input
                type="password"
                placeholder="Вставь API-ключ"
                value={apiKey}
                onChange={(e) => setApiKey(e.target.value)}
            />
            <button onClick={handleSaveKey}>Сохранить ключ</button>
            <button onClick={handleCheckKey}>Проверить</button>
        </div>
        <p>{saveStatus}</p>
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