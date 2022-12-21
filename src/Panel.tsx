import { MonkSection } from "./monk/MonkSection"

import "./assets/style/panel.css"

const EducationCard = () => {
    return (
        <div className = "monk-card education-card bg-yellow"> 
            <h1 className = "panel-card-title">
                Education
            </h1> 
            <div className = "education-card-list-container">
                <ul className = "education-card-list">
                    <li className = "education-card-list-item">
                        Industrial Engineering Metu
                    </li>
                    <li className = "education-card-list-item">
                        Economics Metu
                    </li>
                    <li className = "education-card-list-item">
                        Financial Engineering
                    </li>
                    <li className = "education-card-list-item">
                        MS. Economics
                    </li>
                </ul>
            </div>
        </div>
    )
}

export const Panel = () => {
    return (
        <MonkSection className = "bg-color-primary">
            <div className ="monk-panel-container">
                <div className = "panel-grid">
                    <EducationCard/>
                    <div className = "monk-card social-card bg-green"> Green </div>
                    <div className = "monk-card experience-card bg-pink"> Pink </div>
                    <div className = "monk-card empty-card bg-black"> Black </div>
                    <div className = "monk-card academic-work-card bg-wheat"> Wheat </div>
                </div>
            </div>
        </MonkSection>
    )
}
