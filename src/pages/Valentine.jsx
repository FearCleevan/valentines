import { useState, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import confetti from 'canvas-confetti'

export default function Valentine() {
  const navigate = useNavigate()
  const [noPos, setNoPos] = useState({ top: '60%', left: '55%' })

  const noSound = useRef(new Audio('/sounds/no.mp3'))
  const yesSound = useRef(new Audio('/sounds/yes.mp3'))

  const moveNo = () => {
    noSound.current.currentTime = 0
    noSound.current.play()

    const top = Math.random() * 70 + 10
    const left = Math.random() * 70 + 10
    setNoPos({ top: `${top}%`, left: `${left}%` })
  }

  const handleYes = () => {
    yesSound.current.play()

    confetti({
      particleCount: 150,
      spread: 90,
      origin: { y: 0.6 }
    })

    setTimeout(() => navigate('/yes'), 800)
  }

  return (
    <div className="container">
      <img
        src="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExNW91dzIzeHgxemt6ZzgxdHZsb3F3YXltdHl1NDF6Y2k0am1mOXY3ZyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/2aw9gwZlltbdX92b4w/giphy.gif"
        className="gif"
        alt="cute"
      />

      <h1>Will you be my Valentine? 💖</h1>

      <div className="buttons">
        <button className="yes" onClick={handleYes}>
          Yes 💘
        </button>

        <button
          className="no"
          style={{ top: noPos.top, left: noPos.left }}
          onMouseEnter={moveNo}
          onTouchStart={moveNo}
        >
          No 💔
        </button>
      </div>
    </div>
  )
}
