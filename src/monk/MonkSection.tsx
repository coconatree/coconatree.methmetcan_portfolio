import { FunctionComponent, PropsWithChildren } from "react"

import "../assets/style/layout.css"

export interface MonkSectionProps extends React.HTMLProps<HTMLDivElement>{}

export const MonkSection: FunctionComponent<PropsWithChildren<MonkSectionProps>> = ({children, className = ""}) => {
    return (
        <section className = { "monk-section" + " " + className }>
            { children }
        </section>
    )
}
