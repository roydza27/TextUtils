import React,{useState} from 'react'



export default function TextForm(props) {
  const [ text, setText ] = useState("Enter Text Here...");
  const handleUpClick = () => {
    // console.log("Upercase Btn Was Clicked"+ text);
    let newText = text.toUpperCase();
    setText(newText);
  }

  const handleOnChange = (event) => {
    // console.log("On Change");
    setText(event.target.value);
  }

  return (
    <div>
        <h1>{props.heading}</h1>
        <div className="mb-3">
            <textarea className="form-control" id="exampleFormControlTextarea1" value={text} onChange={handleOnChange} rows="8"></textarea>
        </div>
        <button className="btn btn-primary" onClick={handleUpClick}>Convert to UpperCase</button>
    </div>
  )
}
