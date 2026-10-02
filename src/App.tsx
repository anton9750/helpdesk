import { useEffect } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import styled from 'styled-components'
import Henvendelse from './pages/henvendelse.tsx'
import Home from './pages/home.tsx'
import Kontakt from './pages/kontakt.tsx'
import Sporgsmaal from './pages/sporgsmaal.tsx'
import Footer from './partials/Footer.tsx'
import NavBar from './partials/navBar.tsx'

const Page = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`

const Main = styled.main`
  flex: 1;
`

function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}

function App() {
  return (
    <Page>
      <ScrollToTop />
      <NavBar />
      <Main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/henvendelse" element={<Henvendelse />} />
          <Route path="/spoergsmaal" element={<Sporgsmaal />} />
          <Route path="/kontakt" element={<Kontakt />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </Main>
      <Footer />
    </Page>
  )
}

export default App
