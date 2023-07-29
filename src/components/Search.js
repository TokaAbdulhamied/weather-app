import React, { useEffect, useState } from "react"
import Select from "react-select"
import axios from "axios"

export default function Search({ handleChange }) {
  const [selectValue, setSelectValue] = useState(null)

  let options = [
    {
      value: "Aixirivall",
      label: "Aixirivall",
      id: 3350606,
      wikiDataId: "Q24668",
      type: "CITY",
      city: "Aixirivall",
      name: "Aixirivall",
      country: "Andorra",
      countryCode: "AD",
      region: "Sant Julià de Lòria",
      regionCode: "06",
      latitude: 42.46245,
      longitude: 1.50209,
      population: 0,
    },
  ]

  return (
    <div>
      <Select
        value={selectValue}
        onChange={(item) => {
          console.log(item)
          setSelectValue(item)
          handleChange()
        }}
        className="basic-single"
        classNamePrefix="select"
        defaultValue={options[0]}
        // isDisabled={isDisabled}
        isLoading={false}
        isClearable={true}
        isSearchable={true}
        name="cities"
        options={options}
      />
    </div>
  )
}
