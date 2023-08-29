import axios from "axios"
import { useEffect, useState } from "react"

import "./styles.css"

const apiKey = process.env.REACT_APP_API_KEY

function IndexPopup() {
  const [ipAddress, setIpAddress] = useState("")
  const [city, setCity] = useState("")
  const [country, setCountry] = useState("")
  const [text, setText] = useState("Get my location")
  useEffect(() => {
    axios
      .get("https://api.ipify.org?format=json")
      .then((res) => setIpAddress(res.data.ip))
      .catch((err) => console.log(err))
    axios
      .get(`https://ipinfo.io/${ipAddress}?token=bc8e873c16773f`)
      .then((res) => {
        setCity(res.data.city)
        setCountry(res.data.country)
      })
      .catch((err) => console.log(err))
  }, [])
  const handleClick = () => {
    setText(`Your country is ${country} and city is ${city}`)
  }
  return (
    <button className="bg-sky-500 w-96 h-96 text-white" onClick={handleClick}>
      {text}
    </button>
  )
}

export default IndexPopup
