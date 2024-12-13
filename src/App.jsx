import { useState } from "react"
import './App.css'
import { languages } from "./languages"
console.log(languages)

export default function App() {
  const [currentWord, setCurrentWord] = useState("react")

  return (
    <main>
      <header>
        <h1>Assembly-Endgame</h1>
        <p>Guess the word within 8 attempts!</p>
      </header>

      <section className="game-status">
        <h2>You win!</h2>
        <p>Well done!</p>
      </section>

      <section className="language-list">
        {languages.map(language => (
          <article
            key={language.name}
            style={{
              backgroundColor: language.backgroundColor,
              color: language.color,
            }}
          >
            {language.name}
          </article>
        ))}
      </section>

      <section className="word">
        {currentWord.split("").map((letter, index) => (
          <span key={index}>{letter.toUpperCase()}</span>
        ))}
      </section>
    </main>
  )
}
  