import {useState} from "react"


import "./index.css"
import {CustomPassage} from "../styledComponent"

const FourthHome=()=>{
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
        <div className="subContainer4">
            <div className="firstCrad4">
            <div className="firstContainer4">
                <button type="button" className="buttonStyle4" onClick={getBold}>Bold</button>
                <button type="button"  className="buttonStyle4" onClick={getItalic}>Italic</button>
                <button type="button"  className="buttonStyle4" onClick={getUnderline}>UnderLine</button>
                <input type="number" onChange={setNumber} placeholder="enter the font weight" className="numberData4"/>
                <input type="color" className="colorData4" onChange={setColor}/>
            </div>
            <div className="secondContainer4">
            <CustomPassage 
  size={numberData} colorChange={colorData}
  className={data ? "boldData" : italicData ? "italicData" : underLineData ? "underlineData" : ""}>
  Get your Act Together!
</CustomPassage>
            </div>
            </div>
           
        </div>
    )
}

export default FourthHome
