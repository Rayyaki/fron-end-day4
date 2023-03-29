import bgimg from "../assets/bg2.jpg";
import { useState } from "react";

export default function ToDoList() {
  //   const [arrToDo, setArrToDo] = useState([]);
  const [arrList, setArrList] = useState([]);
  const [list, setList] = useState("");
  const [date, setDate] = useState("");

  const SimpanList = (event) => {
    setList(event.target.value);
  };

  function SimpanDate() {
    const newDate = document.getElementById("dating").value;
    setDate(newDate);
  }

  const Simpan = () => {
    if (list !== "" && date !== "") {
      setArrList([...arrList, { kegiatan: list, tanggal: date }]);
      setList("");
      setDate("");
    }
  };

  const Hapus = (index) => {
    const newList = [...arrList];
    newList.splice(index, 1);
    setArrList(newList);
  };

  return (
    <>
      <center>
        <div className="alas">
          <div className="judul">
            <h1>TO DO LIST</h1>
          </div>
          <div className="input">
            <input
              type="text"
              id="list"
              value={list}
              onChange={SimpanList}
              placeholder="Apa kegiatan kita Bozz..?"
            />
            <input type="date" id="dating" value={date} onChange={SimpanDate} />
            <button id="save" onClick={Simpan}>
              ✔
            </button>
          </div>

          <div className="output">
            <ul>
              {arrList.map((list, index) => (
                <li key={index}>
                  {list.kegiatan} ({list.tanggal})
                  <button id="clear" onClick={() => Hapus(index)}>
                    {" "}
                    selesai{" "}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </center>
    </>
  );
}

// ===========================================================
