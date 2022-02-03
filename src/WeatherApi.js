import { useState } from "react";
import WeatherApp from "./component/WeatherApp";

function WeatherApi() {
  const [inputVal, setInputVal] = useState("");
  const [cityArr, setCityArr] = useState([]);
  const [apierror, setApiError] = useState("");
  // const [ inputFocus, setInputFocus] = ()

  const handleForm = (e) => {
    e.preventDefault();

    fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${inputVal}&cnt=5&appid=d72c7bd9d994dd5a5baa5e1d2b1e66a2`
    )
      .then(async (data) => {
        if (data.ok) {
          data = await data.json();
          setCityArr(data);
          setApiError("");
        } else {
          throw new Error();
        }
      })
      .catch((e) => {
        setApiError("Bele seher yoxdu");
        setCityArr([""]);
      });
  };

  const handleInput = (e) => {
    setInputVal(e.target.value);
  };
  return (
    <>
      <form onSubmit={handleForm}>
        <input
          type="text"
          name="weather"
          value={inputVal}
          onChange={handleInput}
          ref={(input) => input && input.focus()}
          placeholder="Enter a city"
        />
      </form>
      <h1 className="error">{apierror}</h1>
      <WeatherApp cityArr={cityArr} />
    </>
  );
}

export default WeatherApi;
