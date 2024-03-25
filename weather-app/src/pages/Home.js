import React, { useEffect, useState } from "react";
import Display from "../components/Display/Display";
import ZipCodeForm from "../components/ZipCodeForm/ZipCodeForm";

const Home = () => {

  const submit = async (zipCodes) => {
    await fetchWeatherData(zipCodes)
  };

  const [weatherData, setWeatherData] = useState([]);

  const fetchWeatherData = async (zipCodes) => {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      mode: 'cors',
      body: JSON.stringify({
        zip_codes: zipCodes
      }),
    };
    await fetch(`${process.env.APP_URL}/api/v1/fetch_weather_data`, options)
      .then(res => res.json())
      .then(result => {
        setWeatherData(result.data ?? [])
        console.log(result);
      });
  }

  useEffect(() => {

    // fetchWeatherData();
  }, [])

  return (
    <>
      <div className="container">
        <ZipCodeForm submit={submit} />
        {weatherData.map((data, index) => <Display key={index} data={data} />)}
      </div>

    </>
  );
}

export default Home;
