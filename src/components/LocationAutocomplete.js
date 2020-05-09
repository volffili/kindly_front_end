import PlacesAutocomplete from "react-places-autocomplete"
import { geocodeByAddress, getLatLng } from "react-places-autocomplete"
import React, { useState } from "react"
import { ListGroup, ListGroupItem } from "reactstrap"
import styled from "styled-components/macro"
import { Input } from "reactstrap"

const Wrap = styled.div`
  position: relative;
`

const ListGroupOnTop = styled(ListGroup)`
  position: absolute;
  z-index: 1000;
`
const HandCursorListGroupItem = styled(ListGroupItem)`
  cursor: pointer;
`

export default (props) => {
  const [address, setAddress] = useState("")

  const handleSelect = (address) => {
    setAddress(address)
    geocodeByAddress(address)
      .then((results) => getLatLng(results[0]))
      .then((latLng) => {
        props.onAddressSelect({
          formatted_address: address,
          lat: latLng.lat,
          lng: latLng.lng,
        })
      })
      .catch((error) => console.error("Error", error))
  }

  const searchOptions = {
    //Prague location
    location: new window.google.maps.LatLng(49.8600624, 15.5860745),
    radius: 100000,
    types: ["address"],
  }

  return (
    <PlacesAutocomplete value={address} onChange={setAddress} onSelect={handleSelect} searchOptions={searchOptions}>
      {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
        <Wrap>
          <Input
            {...getInputProps({
              placeholder: props.placeholder,
              className: "location-search-input address-input",
            })}
          />
          <ListGroupOnTop>
            {loading && <HandCursorListGroupItem>Loading...</HandCursorListGroupItem>}
            {suggestions.map((suggestion) => {
              return (
                <HandCursorListGroupItem
                  key="suggestion"
                  color={suggestion.active && "info"}
                  {...getSuggestionItemProps(suggestion)}
                >
                  <span>{suggestion.description}</span>
                </HandCursorListGroupItem>
              )
            })}
          </ListGroupOnTop>
        </Wrap>
      )}
    </PlacesAutocomplete>
  )
}
