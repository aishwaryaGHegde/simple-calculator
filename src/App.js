import {useState} from 'react'
import CalculatorDisplay from './components/display/Display'
import CalculatorKeys from './components/keys/Keys'
import Toggle from './components/toggle/Toggle'
import Scientific from './components/scientific/Scientific'
import {PerformBasicAirthmeticCalculations} from './helper'
import Constants from './constants'
import './App.css'

function App() {
  const [displayVal, setDisplayVal] = useState(0)
  const [inputs, setInputs] = useState({})
  const [theme, setTheme] = useState("light")
  function keyClickHanlder(key) {
    if (!isNaN(key)) {
      if (inputs["operator"]) {
        let currentOp = inputs["op2"]
        setInputs(Object.assign(inputs, {
          "op2": currentOp ? currentOp + key : key
        }))
        setDisplayVal(inputs["op2"])
      } else {
        let currentOp = inputs["op1"]
        setInputs(Object.assign(inputs, {
          "op1": currentOp ? currentOp + key : key
        }))
        setDisplayVal(inputs["op1"])
      }
    } else {
      switch(key) {
        case "Clear":
          setDisplayVal(0)
          setInputs({})
          break;
        case "=":
          let ans = PerformBasicAirthmeticCalculations(inputs.operator, inputs.op1, inputs.op2)
          setDisplayVal(ans)
          break;
        default:
          if (inputs["operator"]) {
            let ans = PerformBasicAirthmeticCalculations(inputs.operator, inputs.op1, inputs.op2)
            setDisplayVal(ans)
            setInputs(Object.assign(inputs, {
              "operator": key,
              "op1": ans,
              "op2": ""
            }))
          } else {
            setInputs(Object.assign(inputs, {
              "operator": key 
            }))
          }
          break;
      }
    }
  }

  function handleScientificBtnClick(event) {
    let temp = displayVal
    switch(event) {
      case Constants.KEYS.SCIENTIFIC_BUTTONS[0]:
        temp = (Number(displayVal) * -1)+""
        break;
      case Constants.KEYS.SCIENTIFIC_BUTTONS[1]:
        temp = (Number(displayVal) * Number(displayVal))+""
        break;
      case Constants.KEYS.SCIENTIFIC_BUTTONS[2]:
        temp = (Math.sqrt(Number(displayVal)))+""
        break;
      default:
        console.log("Invalid Scientifc Operation")
        break;
    }
    setDisplayVal(temp)
    if (inputs["operator"]) {
      setInputs(Object.assign(inputs, {
        "op2": temp 
      }))
    } else {
      setInputs(Object.assign(inputs, {
        "op1": temp 
      }))
    }
  }

  function handleThemeClick(theme) {
    setTheme(theme)
  }

  return (
    <div className={`claculator ${theme}`}>
      <h2>{Constants.GENERIC.APP_TITLE}</h2>
      <Toggle themeClickHandler={handleThemeClick}/>
      <Scientific theme={theme} handleClick={handleScientificBtnClick}/>
      <div className={`claculator-container ${theme}`}>
        <CalculatorDisplay displayValue={displayVal} theme={theme}/>
        <CalculatorKeys keyClickHandler={keyClickHanlder} theme={theme}/>
      </div>
    </div>
  )
}

export default App