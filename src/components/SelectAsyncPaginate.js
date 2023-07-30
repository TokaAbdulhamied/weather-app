import React, { useEffect, useState } from "react"
import PropTypes from "prop-types"
import { AsyncPaginate } from "react-select-async-paginate"
import axios from "axios"
import { getCities } from "../apis"

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
        value: id,
        data: { lon: longitude, lat: latitude },
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
    <div style={{ width: "30%" }}>
      <AsyncPaginate
        debounceTimeout={1000}
        value={props.value || ""}
        loadOptions={loadOptions}
        getOptionValue={(option) => option.value}
        getOptionLabel={(option) => option.label}
        onChange={onChange}
        isSearchable={true}
        placeholder="Select House"
        additional={{
          page: 1,
        }}
      />
    </div>
  )
}

SelectAsyncPaginate.propTypes = {
  value: PropTypes.object,
  onChange: PropTypes.func,
}

export default SelectAsyncPaginate
