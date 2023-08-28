import axios from "axios"
import { useReducer, useState } from "react"

function IndexPopup() {
  const [count, increase] = useReducer((c) => c + 1, 0)
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

  return <button onClick={handleClick}>Get {ipAddress}</button>
}

export default IndexPopup
