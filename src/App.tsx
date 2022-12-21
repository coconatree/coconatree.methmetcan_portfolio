
import { HeroSection } from './HeroSection'
import { MonkSection } from './monk/MonkSection'
import { Panel } from './Panel'

function App() {

  // document.body.style.overflowY = "hidden" 

  return (
    <>
        <HeroSection/>
        <Panel/>
        <MonkSection className = "bg-dark"> Hello From The 3. Section </MonkSection>
    </>
  )
}

export default App
