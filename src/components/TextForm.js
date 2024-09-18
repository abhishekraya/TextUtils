import React, { useState } from 'react'



export default function TextForm(props) {
    const handleUpClick = () => {
        // console.log("Clicked");
        setText(text.toUpperCase())

    }
    const handleLoClick = () => {
        // console.log("Clicked");
        setText(text.toLowerCase())

    }
    const handleClClick = () => {
        // console.log("Clicked");
        setText("")

    }
    const handleCopy=()=>{
        var text=document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
    }
    const handleExSpace=()=>{
        let newText=text.split(/[ ]+/);
        setText(newText.join(" "));
    }
    const handleOnChange = (event) => {
        setText(event.target.value);
    }
    
    const [text, setText] = useState('');
    return (
        <>
            <h1>{props.heading}</h1>
            <div className="container">
                {/* <label htmlFor="myBox" className="form-label">Example textarea</label> */}
                <div className="mb-3">
                <textarea className="form-control" id="myBox" rows="8" value={text} onChange={handleOnChange}></textarea>
                </div>
                <button className="btn btn-primary" onClick={handleUpClick}>Convert to Ucase</button>
                <button className="btn btn-primary mx-3" onClick={handleLoClick}>Convert to Lcase</button>
                <button className="btn btn-primary" onClick={handleClClick}>Clear Text</button>
                <button className="btn btn-primary mx-3" onClick={handleCopy}>Copy</button>
                <button className="btn btn-primary" onClick={handleExSpace}>Remove Extra Space</button>
            </div>
            <div className="container my-3">
                <h2>Your Text Summary</h2>
                <p>{text.split(" ").length} words and {text.length}</p>
                <h2>Preview</h2>
                <p>{text}</p>
            </div>
        </>
    )
}
