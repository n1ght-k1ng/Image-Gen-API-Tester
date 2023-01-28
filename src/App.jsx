import { useState } from 'react'
import './App.css'
import {Configuration, OpenAIApi } from 'openai'

function App() {
  const [prompt, setPrompt] = useState("")
  const [result, setResult] = useState("")
  const configuration = new Configuration({
    apiKey: import.meta.env.VITE_Open_AI_Key,
  })
  console.log(import.meta.env.VITE_Open_AI_Key)

  const openai = new OpenAIApi(configuration)
  // Initialize the API client with your API key
  const generateImage = async () => {
    const res = await openai.createImage({
      prompt: prompt,
      n:1,
      // placeholder: "Enter your text to generate the image",
      size: "1024x1024",
    })
    setResult(res.data.data[0].url)
    console.log(res.data.data[0].url) 

  }

  return (
    <div className="app-main">
      <h1>OpenAI Image Generator</h1>
      <input className='app-input' placeholder="Enter your text to generate the image" onChange={(e) => setPrompt(e.target.value)}/>
      <button onClick={generateImage}>Generate an Image</button>    
    {result.length >0 ? <img className="res-img" src={result} alt="result"/> : <></>}
    </div>
  )
}

export default App

