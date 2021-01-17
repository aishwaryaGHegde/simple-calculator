import {useState} from 'react'
import Constants from '../../constants'
import './Scientific.css'

function Scientific({handleClick, theme}) {
    const [shouldRender, setShouldRender] = useState(false)
    return (
        <div className={`scientific-contianer ${theme}`}>
            <button className={`button scientific-mode ${theme}`} onClick={() => setShouldRender(!shouldRender)}>{Constants.GENERIC.SCIENTIFIC}</button>
            {shouldRender && Constants.KEYS.SCIENTIFIC_BUTTONS.map((val, index) => {
                return (
                    <button className={`button scientific-keys ${theme}`} key={index} onClick={event => handleClick(event.target.innerText)}>{val}</button>
                )
            })
            }
        </div>
    )
}

export default Scientific