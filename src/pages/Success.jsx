import { useEffect } from 'react'
import confetti from 'canvas-confetti'

export default function Success() {
  useEffect(() => {
    confetti({
      particleCount: 250,
      spread: 120,
      origin: { y: 0.4 }
    })
  }, [])

  return (
    <div className="container">
      <img
        src="https://media.giphy.com/media/MDJ9IbxxvDUQM/giphy.gif"
        className="gif"
        alt="yay"
      />
      <h1>YAYYYY!! 🎉💖</h1>
      <p>You just made my Valentine extra special 🥰</p>
    </div>
  )
}
