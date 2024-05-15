import { useState } from "react";
import "./App.css";
import { useCallback } from "react";
import { useEffect } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [isUpperCase, setIsUpperCase] = useState(true);
  const [isSymbol, setIsSymbol] = useState(true);
  const [isNumber, setIsNumber] = useState(true);
  const [password, setPassword] = useState("");
  const generatePassword = useCallback(() => {
    let ans = "";
    let pass = "abcdefghijklmnopqrstuvwxyz";
    if (isUpperCase == true) {
      pass += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }
    if (isNumber) {
      pass += "0123456789";
    }

    if (isSymbol) {
      pass += "~`!@#$%^&*()_-=+''";
    }

    for (let i = 1; i <= length; i++) {
      let rand = Math.floor(Math.random() * pass.length) + 1;
      ans += pass.charAt(rand);
    }
    setPassword(ans);
  }, [length, isUpperCase, setPassword, isNumber, isSymbol]);
  /* 
  useEffect(() => {
    generatePassword();
  }, [length, isUpperCase, isSymbol, setPassword, isNumber]); */

  return (
    <>
      <h2>Password generator</h2>
      <p>Enter Length of the password</p>
      <input
        type="number"
        value={length}
        onChange={(e) => setLength(e.target.value)}
      />

      <div>
        <label htmlFor="">Include Uppercase</label>
        <input
          type="checkbox"
          defaultChecked={isUpperCase}
          onChange={() => setIsUpperCase((prev) => !prev)}
        />
        <label htmlFor="">Include Number</label>
        <input
          type="checkbox"
          defaultChecked={isNumber}
          onChange={() => setIsNumber(!isNumber)}
        />
        <label htmlFor="">Include Symbol</label>
        <input
          type="checkbox"
          defaultChecked={isSymbol}
          onChange={() => setIsSymbol(!isSymbol)}
        />
      </div>

      <button onClick={() => generatePassword()}>Generate Password</button>

      <p>Generated password: 👇</p>

      <input readOnly value={password} />
    </>
  );
}

export default App;
