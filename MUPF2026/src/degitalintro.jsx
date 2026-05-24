import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import NameIntro from './nameintro'
import { Helmet } from "react-helmet-async";

const INTRO_DURATION_MS = 6600
const FADE_OUT_DURATION_MS = 600 // Duration of the fade out effect

function DigitalIntro() {
  const navigate = useNavigate()
  const [isFadingOut, setIsFadingOut] = useState(false)

  useEffect(() => {
    // Start fading out slightly before the full duration
    const fadeOutTimer = window.setTimeout(() => {
      setIsFadingOut(true)
    }, INTRO_DURATION_MS - FADE_OUT_DURATION_MS)

    const navigateTimer = window.setTimeout(() => {
      navigate('/home', { replace: true })
    }, INTRO_DURATION_MS)

    return () => {
      window.clearTimeout(fadeOutTimer)
      window.clearTimeout(navigateTimer)
    }
  }, [navigate])

  return (
    <section className={`intro-screen ${isFadingOut ? 'fade-out' : ''}`} aria-label="Portfolio intro animation">

      <Helmet>
        <title>Pranav | Portfolio</title>
        <meta name="description" content="Pranav | Intro" />
        <meta name="keywords" content="Pranav | Intro" />
        <meta name="author" content="Pranav" />
      </Helmet>

      <div className="intro-orbit intro-orbit-one" />
      <div className="intro-orbit intro-orbit-two" />

      <div className="intro-content">
        <p className="intro-kicker">My Portfolio</p>
        <h1 className="intro-title">
          <NameIntro />
        </h1>
        <h4 className="intro-copy">
          Entering In a World Of TECH
        </h4>

        <div className="intro-loader" aria-hidden="true">
          <span
            className="intro-loader-bar"
            style={{ animationDuration: `${INTRO_DURATION_MS}ms` }}
          />
        </div>
      </div>
    </section>
  )
}

export default DigitalIntro
