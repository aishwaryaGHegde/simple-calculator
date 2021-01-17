import Constants from '../../constants';
import './Keys.css'

const KEY_LABELS = [["1", "2", "3", Constants.KEYS.ADD], 
["4", "5", "6", Constants.KEYS.SUBTRACT], 
["7", "8", "9", Constants.KEYS.MULTIPLY], 
[Constants.KEYS.CLEAR, "0", Constants.KEYS.ANS, Constants.KEYS.DIVIDE]]

function CalculatorKeys({keyClickHandler, theme}) {
    return (
        <div className="keypad-container">
            {KEY_LABELS.map((row, index) => {
                return (
                    <div className={`row ${theme}`} key={index}>
                        {row.map((key, keyIndex) => {
                            return <input className={`btn ${theme}`} type="button" value={key} key={keyIndex} onClick={event => keyClickHandler(event.target.value)}/>
                        })}
                    </div>
                )
            })}
        </div>
    )
}

export default CalculatorKeys