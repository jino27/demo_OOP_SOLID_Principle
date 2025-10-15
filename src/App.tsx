import { use, useState } from "react";
import NavBar from "./components/navbar";

export default function App() {
  const [showPage1, setShowPage1] = useState(false);
  const [showPage2, setShowPage2] = useState(false);
  const [showPage3, setShowPage3] = useState(false);
  

  function togglePage1(): void{

      setShowPage1((prev) =>{
        return !prev;
      });
  }
  function togglePage2(): void{

      setShowPage2((prev) =>{
        return !prev;
      });
  }
  function togglePage3(): void{

    setShowPage3((prev) =>{
      return !prev;
    });
  }

  return (
    <div>
      <div className="flex flex-col bg-gray-600"> 
        <NavBar onClickBtn1={togglePage1} onClickBtn2={togglePage2} onClickBtn3={togglePage3}/>
      </div>

      <div className="w-full flex flex-col justify-center items-center mt-20 gap-4 pt-20">
        { showPage1 &&
         <img src="https://cfcdn.remaker.ai/solutions/gif-face-swap-memes/1.gif" height={1000} width={1000} className=""/>
        }

        { showPage2 &&
         <img src="https://media.tenor.com/5TEif4FkR-UAAAAM/hanosaurs-filipino.gif" height={1000} width={1000} className=""/>
          
        }
        { showPage3 &&
         <img src="https://img.wattpad.com/681e48d7187d244be265579e1c92230c21a19525/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f776174747061642d6d656469612d736572766963652f53746f7279496d6167652f454969746634696b385a6f5041513d3d2d3434372e313437373066646533343865353262303632343538383931333539322e676966" height={1000} width={1000} className=""/>
        }
      </div>
      
      

    </div>
  )
}