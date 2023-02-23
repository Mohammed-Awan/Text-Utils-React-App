import React, { useState } from 'react'



export default function TextForm(props) {


    const [text, setText] = useState('');

    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Text converted to uppercase","success");
    }

    const handleOnChange = (event) => {
        setText(event.target.value);
    }

    const handleLowClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Text converted to lowercase","success");
    }

    const handleClearClick = () => {
        let newText = '';
        setText(newText);
        props.showAlert("Text cleared","success");
    }

    const handleCopy = () => {
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Text copied to clipboard","success");
    }

    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Removed extra spaces","success");
    }

    return (
        <>
            <div className='container' style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" id="myBox" rows="12" value={text} onChange={handleOnChange} style={{ backgroundColor: props.mode === 'dark' ? 'grey' : 'white' , color: props.mode === 'dark' ? 'white' : '#042743'}}></textarea>
                </div>
                <button className="btn btn-primary mx-1" onClick={handleUpClick}>Covert To Uppercase</button>
                <button className="btn btn-primary mx-1" onClick={handleLowClick}>Convert To Lowercase</button>
                <button className="btn btn-primary mx-1" onClick={handleClearClick}>Clear Text</button>
                <button className="btn btn-primary mx-1" onClick={handleCopy}>Copy Text</button>
                <button className="btn btn-primary mx-1" onClick={handleExtraSpaces}>Remove Extra Space</button>
            </div>
            <div className='container my-2' style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}>
                <h2>Your text summary</h2>
                <p>{text.split(" ").length} words and {text.length} characters</p>
                <p>Number of minute to read the text {0.008 * text.split(" ").length}m</p>
                <h2>Preview</h2>
                <p>{text.length>0 ? text : "Enter something to preview it here"}</p>
            </div>
        </>
    )
}
