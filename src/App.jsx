import {useState, usState} from "react"
import Background from "./Components/Background/Background";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";

const App = () => {
  let heroData =[
    {text1:"Dive into",text2:"what you love"},
    {text1:"indulge",text2:"your passions"},
    {text1:"Give in to",text2:"your passions"},
  ]
  const [heroCount,setHeroCount] = useState(0);
  const [playStatus,setPlayStatus]= useState(false);
  return (
    <div>
      <Background playStatus= {playStatus} heroCount ={heroCount}/>
      <Navbar/>
      <Hero setPlayStatus = {setPlayStatus}
         heroData ={heroData[heroCount]}
         heroCount ={heroCount}
         setHeroCount ={setHeroCount}
         playStatus = {playStatus}
      >
         
      </Hero>
    </div>
  )
}

export default App
