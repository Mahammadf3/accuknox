import {useState} from "react"

import "./index.css"
import {CustomPassage} from "../styledComponent"

const ThirdHome=()=>{
    const[data,setData]=useState(false)
    const[italicData,setItalic]=useState(false)
    const[underLineData,setUnderline]=useState(false)
    const[numberData,setNumber2]=useState("")
    const[colorData,setColor2]=useState("")

    const getBold=()=>{
        setData(true)
    }

    const getItalic=()=>{
        setItalic(true)
        setData(false)
    }
    const getUnderline=()=>{
        setUnderline(true)
        setItalic(false)
        setData(false)
    }

    const setNumber=(event)=>{
        setNumber2(event.target.value)
        setUnderline(false)
        setItalic(false)
        setData(false)

    }

    const setColor=(event)=>{
        setColor2(event.target.value)
    }

    return(
        <div className="subContainer3">
            <div className="firstCrad3">
            <div className="firstContainer3">
                <button type="button" className="buttonStyle3" onClick={getBold}>Bold</button>
                <button type="button"  className="buttonStyle3" onClick={getItalic}>Italic</button>
                <button type="button"  className="buttonStyle3" onClick={getUnderline}>UnderLine</button>
                <input type="number" onChange={setNumber} placeholder="enter the font weight" className="numberData3"/>
                <input type="color" className="colorData3" onChange={setColor}/>
            </div>
            <div className="secondContainer3">
            <CustomPassage 
  size={numberData} colorChange={colorData}
  className={data ? "boldData" : italicData ? "italicData" : underLineData ? "underlineData" : ""}>
  Now you must answer some big questions.
</CustomPassage>
            </div>
            </div>
           
        </div>
    )
}

export default ThirdHome
