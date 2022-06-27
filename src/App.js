import "./styles.css";
import { useState } from "react";
import Multi from "./multiSelect";
export default function App() {
  const [data, setData] = useState([
    {
      id: 1,
      city: "Delhi"
    },
    {
      id: 2,
      city: "faridabad"
    },
    {
      id: 3,
      city: "Gurgaon"
    },
    {
      id: 4,
      city: "Noida"
    },
    {
      id: 5,
      city: "Luckhnow"
    }
  ]);
  const newArray = [...data];
  // console.log("???????????", newArray);

  const handleChange = (event) => {
    // console.log("+++++++", event.target.value);
  };

  const handleClick = (event) => {
    console.log("input clicked");
  };
  return (
    <div className="card shadow p-3 mb-5 bg-white rounded ">
      <h1> Single Select </h1>

      <input
        type="search"
        list="cityName"
        name="cityName"
        onChange={handleChange}
      />

      <datalist id="cityName" onClick={handleClick}>
        {data.map((item, i) => {
          return <option key={i} value={item.city}></option>;
        })}
      </datalist>

      <Multi data={data} />
    </div>
  );
}
