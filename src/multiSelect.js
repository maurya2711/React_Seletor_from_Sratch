import "./multi.css";
import { useState } from "react";
export default function Multi(props) {
  const [multiData, setMultiData] = useState(props.data);
  const [selected, setSelected] = useState([]);
  let res = [];
  let filteredData = [];
  const handleChange = (event) => {
    console.log("+++++++", event.target.value);
    filteredData = multiData.filter((item) => {
      setSelected([...selected, event.target.value]);
      return item.city !== event.target.value;
    });
    setMultiData(filteredData);
  };

  console.log("---------", multiData);
  console.log(";;;;;;;;;;;;;;;;;;;;", selected);
  res = selected.filter((element) => element !== "");
  const handleClick = (event) => {
    console.log("badge Clicked");
  };

  return (
    <div className="card shadow p-3 mb-5 bg-white rounded ">
      <h3>Multi Select Box</h3>
      <input
        className="form-select"
        type="search"
        list="multi"
        name="multi"
        onChange={handleChange}
        multiple
        // value={selected}
      />
      {/* <h1>{selected}</h1> */}
      {res.map((item, i) => {
        return (
          <div className="badge badge-pill badge-light " key={i}>
            {item}
            <span id="span" onClick={handleClick}>
              x
            </span>
          </div>
        );
      })}

      <datalist id="multi">
        {multiData.map((item, i) => {
          return <option key={i} value={item.city}></option>;
        })}
      </datalist>
    </div>
  );
}
