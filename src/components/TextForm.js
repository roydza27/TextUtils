import React,{useState} from 'react'



export default function TextForm(props) {
  const [ text, setText ] = useState("");
  const handleUpClick = () => {
    // console.log("Upercase Btn Was Clicked"+ text);
    let newText = text.toUpperCase();
    setText(newText);
  }

  const handleLoClick = () => {
    // console.log("Upercase Btn Was Clicked"+ text);
    let newText = text.toLowerCase();
    setText(newText);
  }

  const handleClearClick = () => {
    // console.log("Upercase Btn Was Clicked"+ text);
    let newText = ''
    setText(newText);
  }

  


  const handleOnChange = (event) => {
    // console.log("On Change");
    setText(event.target.value);
  }

  return (
    <>
    <div className='container'>
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea className="form-control" id="exampleFormControlTextarea1" value={text} onChange={handleOnChange} rows="8"></textarea>
      </div>
      <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to UpperCase</button>
      <button className="btn btn-primary mx-1" onClick={handleLoClick}>Convert to UpperCase</button>
      <button className="btn btn-primary mx-1" onClick={handleClearClick}>Clear Text</button>
    </div>
    <div className="container">
      <h2>Your Summary : </h2>
      <p>{text.split(" ").length} words and {text.length} Characters</p>
      <p>{0.008 * text.split(" ").length} Minutes to Read</p>
      <h2>Preview : </h2>
      <p>{text}</p>
    </div>
    </>
  )
}
