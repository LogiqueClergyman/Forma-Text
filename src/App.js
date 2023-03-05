import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React, { useState } from "react";
import About from "./components/About";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Alert from "./components/Alert";

function App() {
  const [Mode, setMode] = useState("light");
  const [textColor, setTextcolor] = useState("dark");

  const toggleMode = () => {
    if (Mode === "light") {
      setMode("dark");
      setTextcolor("light");
      document.body.style.backgroundColor = "#0f161f";
      showAlert("Dark mode activated", "Success");
    } else {
      setMode("light");
      setTextcolor("dark");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode activated", "Success");
    }
  };

  const [alert, setAlert] = useState(null);
  const showAlert = (msg, type) => {
    setAlert({ msg: msg, type: type });

    setTimeout(() => {
      setAlert(null);
    }, 1000);
  };

  return (
    <>
      <Navbar
        title="FormaText.io"
        aboutText="About"
        mode={Mode}
        toggleMode={toggleMode}
        textColor={textColor}
      />

      <Alert alert={alert} />

      <div className="container">
        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element={
                <TextForm
                  showAlert={showAlert}
                  heading="FormaText"
                  textColor={textColor}
                  mode={Mode}
                />
              }
            />
            <Route
              path="home"
              element={
                <TextForm
                  showAlert={showAlert}
                  heading="Text Utils"
                  textColor={textColor}
                  mode={Mode}
                />
              }
            />

            <Route
              path="about"
              element={<About textColor={textColor} mode={Mode} />}
            />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
