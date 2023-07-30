import React from "react"
import { AsyncPaginate } from "react-select-async-paginate"
import { getCities } from "../../apis"
import CurrentLocation from "./CurrentLocation"
import "./search.css"
const SelectAsyncPaginate = (props) => {
  function wait(milliseconds) {
    return new Promise((resolve) => {
      setTimeout(resolve, milliseconds)
    })
  }
  const loadOptions = async (searchQuery, loadedOptions, { page }) => {
    let response
    await wait(1000)
    response = await getCities({ searchQuery, page })
    const dataOptions = response.data.data.map(
      ({ id, name, longitude, latitude, countryCode }) => ({
        label: `${name}, ${countryCode}`,
        value: { lon: longitude, lat: latitude },
      })
    )
    return {
      options: dataOptions,
      hasMore: dataOptions.length >= 1,
      additional: {
        page: page + 1,
      },
    }
  }

  const onChange = (option) => {
    if (typeof props.onChange === "function") {
      props.onChange(option)
    }
  }

  return (
    <div className="search-container">
      <AsyncPaginate
        styles={{
          control: (baseStyles, state) => ({
            ...baseStyles,
            height: "inherit",
          }),
        }}
        className="select-input"
        debounceTimeout={1000}
        value={props.value || ""}
        loadOptions={loadOptions}
        getOptionValue={(option) => option.value}
        getOptionLabel={(option) => option.label}
        onChange={onChange}
        isSearchable={true}
        placeholder="Search For The City ..."
        additional={{
          page: 1,
        }}
      />
      <CurrentLocation handleChange={props.onChange} />
    </div>
  )
}

export default SelectAsyncPaginate
