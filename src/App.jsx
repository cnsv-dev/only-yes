import { useState } from 'react';
import './App.css';

function App() {
  const [posLeft, setPosLeft] = useState(0);
  const [posTop, setPosTop] = useState(0);
  const [yesScale, setYesScale] = useState(1);
  const [text, setText] = useState("Vrei sa iesim la un date?");
  const [ok, setOk] = useState(false);

  function noClicked(){
    let newLeft = Math.random() * 100;
    setPosLeft(newLeft);

    let newTop = Math.random() * 300;
    setPosTop(newTop);

    setYesScale(yesScale + 0.5);

    if(ok===true){
      setText("De ce te-ai razgandit?");
    }
  }

  function yesClicked(){
    if(ok==true){
      setText("Asa ramane ;) ❤️")
    }
    else{
      setText("Ai ales corect <3")
    }

    setYesScale(1);
    setOk(true);
  }



  return (
    <div className="App">
      <h1 className="text">{text}</h1>

      <div className='butoane'>
        <button className='buton1'
        onClick={yesClicked}
        style={{
          transform: "scale("+ yesScale.toString() + ")"
        }}>Da</button>

        <button className='buton2' style={{
          position:'absolute',
          top: posTop+40,
          left: posLeft+150,
        }}
        onMouseEnter={noClicked}
        >Nu</button>
      </div>
    </div>
  );
}
// function Crestere(){
//   <div className='Crestere'>

//   </div>
// }

export default App;
