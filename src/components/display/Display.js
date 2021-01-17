import './Display.css'

function CalculatorDisplay({displayValue, theme}) {
    return (
        <div className={`display-container ${theme}`}>
            <input type="text" readOnly value={displayValue}/>
        </div>
    )
}

export default CalculatorDisplay