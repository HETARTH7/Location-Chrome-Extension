import axios from "axios"
import { useEffect, useState } from "react"

import "./styles.css"

const apiKey = process.env.REACT_APP_API_KEY || "bc8e873c16773f"

function IndexPopup() {
  const [ipAddress, setIpAddress] = useState("")
  const [city, setCity] = useState("")
  const [country, setCountry] = useState("")
  const [text, setText] = useState("Get my location")
  const [error, setError] = useState(null) // Add state for error

  useEffect(() => {
    axios
      .get("https://api.ipify.org?format=json")
      .then((res) => {
        setIpAddress(res.data.ip)
        axios
          .get(`https://ipinfo.io/${res.data.ip}?token=${apiKey}`)
          .then((res) => {
            setCity(res.data.city)
            setCountry(res.data.country)
          })
          .catch((err) => {
            setError("Error fetching location data.")
            console.log(err)
          })
      })
      .catch((err) => {
        setError("Error fetching IP address.")
        console.log(err)
      })
  }, [])

  const handleClick = () => {
    setText(`Your country is ${country} and city is ${city}`)
  }

  return (
    <div>
      {error && <p className="text-red-500">{error}</p>}
      <button
        className="bg-sky-500 w-96 h-96 text-white text-2xl"
        onClick={handleClick}>
        {text}
      </button>
    </div>
  )
}

export default IndexPopup
