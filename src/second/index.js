import {useState} from "react"


import "./index.css"
import {CustomPassage} from "../styledComponent"

const SecondHome=()=>{
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
        <div className="subContainer2">
            <div className="firstCrad2">
            <div className="firstContainer2">
                <button type="button" className="buttonStyle2" onClick={getBold}>Bold</button>
                <button type="button"  className="buttonStyle2" onClick={getItalic}>Italic</button>
                <button type="button"  className="buttonStyle2" onClick={getUnderline}>UnderLine</button>
                <input type="number" onChange={setNumber} placeholder="enter the font weight" className="numberData2"/>
                <input type="color" className="colorData2" onChange={setColor}/>
            </div>
            <div className="secondContainer2">
            <CustomPassage 
  size={numberData} colorChange={colorData}
  className={data ? "boldData" : italicData ? "italicData" : underLineData ? "underlineData" : ""}>
  The big building was blazing with lights.
</CustomPassage>
            </div>
            </div>
           
        </div>
    )
}

export default SecondHome
