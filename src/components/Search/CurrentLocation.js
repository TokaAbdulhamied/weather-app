import React from "react"
export default function CurrentLocation({ handleChange }) {
  const showPosition = ({ coords }) => {
    handleChange({
      label: "Current Location",
      value: { lat: coords?.latitude, lon: coords?.longitude },
    })
    console.log(coords)
  }
  const onGeoError = (err) => {
    console.log(err)
    alert(err.message)
  }
  return (
    <div>
      <img
        onClick={() => {
          if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(showPosition, onGeoError)
          } else {
            alert("Geolocation is not supported.")
          }
        }}
        src="icons/location-icon.svg"
        alt="location"
        className="location-btn"
      />
    </div>
  )
}
