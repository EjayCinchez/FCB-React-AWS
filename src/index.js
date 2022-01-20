import React from "react";
import ReactDOM from "react-dom";


//My first component

function HelloWorld() {
	return <h1>Hello, world!</h1> //h1 --> jsx element javascript xml
}

ReactDOM.render(<HelloWorld></HelloWorld>, document.getElementById("root"));