import {useState} from "react"

import SecondHome from "../second"
import ThirdHome from "../third"
import FourthHome from "../fourth"
import "./index.css"
import {CustomPassage} from "../styledComponent"

const Home=()=>{
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
        <div className="subContainer">
            <div className="firstCrad">
            <div className="firstContainer">
                <button type="button" className="buttonStyle" onClick={getBold}>Bold</button>
                <button type="button"  className="buttonStyle" onClick={getItalic}>Italic</button>
                <button type="button"  className="buttonStyle" onClick={getUnderline}>UnderLine</button>
                <input type="number" onChange={setNumber} placeholder="enter the font weight" className="numberData"/>
                <input type="color" className="colorData" onChange={setColor}/>
            </div>
            <div className="secondContainer">
            <CustomPassage 
  size={numberData} colorChange={colorData}
  className={data ? "boldData" : italicData ? "italicData" : underLineData ? "underlineData" : ""}>
  He's not the sharpest knife in the drawer
</CustomPassage>
            </div>
            </div>
            <SecondHome/>
            <ThirdHome/>
            <FourthHome/>
        </div>
    )
}

export default Home