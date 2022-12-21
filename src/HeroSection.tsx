
import "./assets/style/hero.css"
import { MonkSection } from "./monk/MonkSection"

const NavBar = () => {
    return (
        <div className = "navbar-container">
          <ul className = "navbar-list">
            <li className = "navbar-list-item navbar-list-item-1">
              <a className = "navbar-list-item-link">
                Experience
              </a>
            </li>
            <li className = "navbar-list-item navbar-list-item-2">
              <a className = "navbar-list-item-link">
                Home
              </a>
            </li>
            <li className = "navbar-list-item navbar-list-item-3">
              <a className = "navbar-list-item-link">
                Projects
              </a>
            </li>
          </ul>
        </div>
    )
}

export const HeroSection = () => {
  return (
    <MonkSection className = "bg-color-hero hero-section-container">
        <NavBar/>
        <div className = "hero-content-container">
            <h1 className = "hero-title">
              Creating Efficient Solutions That Delivers Value
            </h1>
            <div className = "hero-text-container">
              <p className = "hero-text">
                I am Mehmetcan, an [adjective] with more than 3 years experience in international consulting. 
                A passionate economist with a keen interest in institutional finance and macro economics. 
              </p>
            </div>
            <div className = "hero-button-container">
              <button className = "hero-button">
                Learn More
              </button>
            </div>
        </div>  
    </MonkSection>
  )
}
