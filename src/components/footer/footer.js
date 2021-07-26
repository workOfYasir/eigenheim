import React from 'react'
import "../footer/footer.scss"
import tickIcon from "../../images/haken_green.png"

export default function Footer() {
    return (
        <div id="footer">
            <div className="footer-wrapper md-css">
                <div className="footer-item footer-item-m-l" id="footer-item-left">
                    <img className="footer-icon-check" src={tickIcon}></img>
                    100% kostenlos & unverbindlich
                </div>
                <div className="footer-item footer-item-m-l" id="footer-item-middle">
                    <img className="footer-icon-check" src={tickIcon}></img>
                    Absolute Datensicherheit
                </div>
                <div className="footer-item" id="footer-item-right">
                    <img className="footer-icon-check" src={tickIcon}></img>
                    Vom Fachmann aus der Region
                </div>
            </div>
            <div id="footer-description">
                <span>
                *Rechtlicher Hinweis: Der Service ist für Sie komplett kostenfrei und unverbindlich. Wir finanzieren den Service über die Provision unserer Anbieter.
                </span>
            </div>
            <div id="footer-link">
                <a href="https://einfach-zum-angebot.de/impressum/">Impressum</a>
                &nbsp;-&nbsp;  
                <a href=" https://einfach-zum-angebot.de/datenschutzerklaerung/">Datenschutz</a>  
            </div>
            
        </div>
    )
}
