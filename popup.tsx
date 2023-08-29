import axios from "axios"
import { useReducer, useState } from "react"

function IndexPopup() {
  const [ipAddress, setIpAddress] = useState("")

  const handleClick = async (e) => {
    try {
      e.preventDefault()
      const response = await axios.get("https://api.ipify.org?format=json")
      setIpAddress(response.data.ip)
    } catch (err) {
      console.log(err)
    }
  }
  return <button onClick={handleClick}>{ipAddress}</button>
}

export default IndexPopup
