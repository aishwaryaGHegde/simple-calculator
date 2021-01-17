import Constants from '../../constants'
import './Toggle.css'

function Toggle({themeClickHandler}) {
    return(
        <div className="toggle-container">
            <button className="button light" onClick={() => themeClickHandler("light")}>{Constants.GENERIC.LIGHT_BTN}</button>
            <button className="button dark" onClick={() => themeClickHandler("dark")}>{Constants.GENERIC.DARK_BTN}</button>
        </div>
    )
}

export default Toggle