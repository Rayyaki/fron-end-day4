import { useEffect, useState } from "react";

export default function TestPage() {
  //   let name = "";
  const [name, setName] = useState("");

  const [arrName, setArrName] = useState(["Rizki", "Afri", "Nata"]);

  const [num, setNum] = useState(0);
  const [angka1, setAngka1] = useState(0);
  const [angka2, setAngka2] = useState(0);

  function cName() {
    const newName = document.getElementById("input").value;
    setName(newName);
    console.log(name);
  }

  function Add() {
    // console.log(arrName);
    setArrName([...arrName, name]);
    setName("");
  }

  function change(val) {
    console.log(val);
    setName(val);
  }

  function sum() {
    let result1 = document.getElementById("num").value;
    let result2 = document.getElementById("num2").value;
    setNum(parseInt(result1) + parseInt(result2));
    // console.log(result);
  }

  function asignAngka(value, className) {
    value = parseInt(value);
    if (angka1 === className) {
      setAngka1(value);
    } else setAngka2(value);
  }

  function Sum2() {
    setNum(angka1 + angka2);
  }

  useEffect(() => setNum(angka1 + angka2), [angka1, angka2]);

  return (
    <div>
      <h1>Test Drive</h1>
      <h2>{name}</h2>
      <div>
        {arrName.map((val) => (
          <div>{val}</div>
        ))}
      </div>

      <input
        style={{ backgroundColor: "grey" }}
        type="text"
        id="input"
        onChange={cName}
        value={name}
      />
      <button onClick={Add}>Add</button>

      <div>
        <input
          style={{ backgroundColor: "orangered" }}
          type="text"
          value={name}
          onChange={(e) => change(e.target.value)}
        />
      </div>

      <div>
        <input
          type="text"
          style={{ width: "20px", backgroundColor: "grey", color: "black" }}
          id="num"
          onChange={(e) => asignAngka(e.target.value)}
        />{" "}
        +{" "}
        <input
          type="text"
          name=""
          style={{ width: "20px", backgroundColor: "grey", color: "black" }}
          id="num2"
          onChange={(e) => asignAngka(e.target.className)}
          //   onChange={sum}
        />{" "}
        = {num}
      </div>
    </div>
  );
}
