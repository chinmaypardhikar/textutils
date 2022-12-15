import React, {useState}from "react"

export default function TextForm(props){

    const [text, setText] = useState("Enter your text");
    const handleUpClick = () =>{
        let upper_text = text.toUpperCase();
        setText(upper_text);
        props.showAlert("Upper Case is Done","success");
    }

    const handleLoClick =()=>{
        let lower_text = text.toLowerCase();
        setText(lower_text);
        props.showAlert("Lower Case is Done","success");
    }

    const handleReplaceClick=()=>{
      setText(text.replaceAll('"',"'"));
      props.showAlert("Replace is Done","success");
    }

    const handleClearClick =()=>{
      setText("");
      props.showAlert("Text is clear","success");
    }

    const handleOnChange = (event)=>{
         setText(event.target.value);
    }
    return(
        <>
          <div className={`text-${props.mode==='dark'?'light':'dark'} `}>
            <div>
                <p style={{fontSize:25}}>{props.heading}</p>
                <div className="mb-3">
                  <textarea className='form-control' value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'#424348':'white',color:props.mode==='dark'?'white':'black'}} id="myBox" rows="8"></textarea>
                  <button className="btn btn-primary  my-2 mx-1" onClick={handleUpClick}>Convert to Upper Case </button>
                  <button className="btn btn-primary  my-2 mx-1" onClick={handleLoClick}>Convert to Lower Case</button>
                  <button className="btn btn-primary  my-2 mx-1" onClick={handleReplaceClick} data-toggle="modal" data-target="#exampleModal">Replace " by ' </button>
                  <button className="btn btn-primary  my-2 mx-1" onClick={handleClearClick}>Clear Text </button>
                </div>
            </div>
            <div className="container">
              <h1>Text Summary :</h1>
              <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters.</p>
              <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} minutes to read the content.</p>
              <h2>Preview : </h2>
              <pre>{text}</pre>
            </div>
            
          </div>
           
          
        </>
    )
}
