import Switch from "react-switch"
import React, { useState } from "react"

export default function ToggleSwitch({ onChange }) {
  const [checked, setChecked] = useState(true)

  return (
    <Switch
      checked={checked}
      onChange={() => {
        setChecked(!checked)
        onChange(!checked)
      }}
      onColor="#888"
      handleDiameter={15}
      uncheckedIcon={
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontSize: 17,
            color: "white",
            paddingRight: 2,
          }}
        >
          C
        </div>
      }
      checkedIcon={
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontSize: 17,
            color: "white",
            paddingRight: 2,
          }}
        >
          F
        </div>
      }
      boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
      height={20}
      width={48}
      id="material-switch"
    />
  )
}
