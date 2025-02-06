import React,{useState} from 'react'



export default function TextForm(props) {
  const [ text, setText ] = useState("");
  const handleUpClick = () => {
    // console.log("Upercase Btn Was Clicked"+ text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Conerted To UpperCase","success");
  }

  const handleLoClick = () => {
    // console.log("Upercase Btn Was Clicked"+ text);
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Conerted To LowerCase","success");
  }

  const handleClearClick = () => {
    // console.log("Upercase Btn Was Clicked"+ text);
    let newText = ''
    setText(newText);
    props.showAlert("Text Cleared","success");
  }

  


  const handleOnChange = (event) => {
    // console.log("On Change");
    setText(event.target.value);
  }

  return (
    <>
    <div className='container' style={{color: props.mode==='dark'?'white':'black'}}>
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea className="form-control" style={{backgroundColor: props.mode==='dark'?'grey':'white',color: props.mode==='dark'?'white':'black'}} id="exampleFormControlTextarea1" value={text} onChange={handleOnChange} rows="8"></textarea>
      </div>
      <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to UpperCase</button>
      <button className="btn btn-primary mx-1" onClick={handleLoClick}>Convert to UpperCase</button>
      <button className="btn btn-primary mx-1" onClick={handleClearClick}>Clear Text</button>
    </div>
    <div className="container my-3" style={{color: props.mode==='dark'?'white':'black'}}>
      <h2>Your Summary : </h2>
      <p>{text.split(" ").length} words and {text.length} Characters</p>
      <p>{0.008 * text.split(" ").length} Minutes to Read</p>
      <h2>Preview : </h2>
      <p>{text.length>0?text:"Enter Something in textbox above to Preview it Here"}</p>
    </div>
    </>
  )
}
