import React, { useState } from 'react';
import './App.css';

function App() {
  const [responseMessage, setResponseMessage] = useState("");

  // Function to call the backend based on the button clicked
  const handleClick = async (messageType) => {
    let url;

    // Determine URL based on button clicked
    if (messageType === "hello") {
      url = 'https://flaskapp-new-test.apps.ocp4.ocp1.local/hello';
    } else if (messageType === "bye") {
      url = "https://flaskapp-new-test.apps.ocp4.ocp1.local/goodbye ";
    } else if (messageType === "test") {
      url = "https://flaskapp-new-test.apps.ocp4.ocp1.local/test1";
    }

    try {
      // Fetch response from the backend
      const response = await fetch(url);
      const data = await response.json();
      setResponseMessage(data.message); // Assuming the response has a "message" field
    } catch (error) {
      console.error("Error fetching message:", error);
      setResponseMessage("Failed to fetch message");
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>React Button Click Example</h1>
        <div>
          <button onClick={() => handleClick("hello")}>Hello</button>
          <button onClick={() => handleClick("bye")}>Bye</button>
          <button onClick={() => handleClick("test")}>Test</button>
        </div>
        <div className="response">
          <p>{responseMessage}</p>
        </div>
      </header>
    </div>
  );
}

export default App;
