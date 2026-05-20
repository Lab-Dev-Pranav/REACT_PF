import { useEffect } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'





import DigitalIntro from './degitalintro.jsx'
import Home from './pages/home/home.jsx'
import Skills from './pages/skills/skills.jsx'
import Projects from './pages/projects/projects.jsx'
import Experience from './pages/experience/experience.jsx'
import Contact from './pages/contact/contact.jsx'
import NotFound from './pages/not-found/not-found.jsx'
import AddSkils from './ADD/addSkils.jsx'
import AddProjects from './ADD/addProjects.jsx'

import Navbar from './pages/include/navbar.jsx'
import Footer from './pages/include/footer.jsx'

function App() {
  const location = useLocation()
  const isIntroRoute = location.pathname === '/'

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location.pathname])

  return (
    <div className={isIntroRoute ? 'app-shell app-shell-intro' : 'app-shell'}>
      {!isIntroRoute && <Navbar />}

      <main className={isIntroRoute ? 'app-content app-content-intro' : 'app-content'}>
        <Routes>
          <Route path="/" element={<DigitalIntro />} />
          <Route path="/home" element={<Home />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />

          <Route path="/add-skills" element={<AddSkils />} />
          <Route path="/add-projects" element={<AddProjects />} />

        </Routes>
      </main>

      {!isIntroRoute && <Footer />}

    </div>
  )
}

export default App
