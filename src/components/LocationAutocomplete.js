import PlacesAutocomplete from 'react-places-autocomplete';
import { geocodeByAddress, geocodeByPlaceId, getLatLng} from 'react-places-autocomplete';
import * as React from "react";
import  "./style.css";

class LocationInput extends React.Component {
    constructor( props ){
        super( props );
        this.state = {
            address: '',
            lat: '',
            lng: ''
        }
    }

    handleChange = address => {
        this.setState({
            address: address
        });
    };

    handleSelect = address => {
        this.setState({
            address: address
        });
        geocodeByAddress(address)
            .then(results => getLatLng(results[0]))
            .then(latLng => {
                console.log(latLng);
                this.setState(latLng)
            })
            .catch(error => console.error('Error', error));
    };


    searchOptions = {
        //Prague location
        location: new window.google.maps.LatLng(50.08019, 14.4180908),
        radius: 20000,
        types: ['address']
    };

    render() {
        return (
            <PlacesAutocomplete
                value={this.state.address}
                onChange={this.handleChange}
                onSelect={this.handleSelect}
                searchOptions={this.searchOptions}
            >
                {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
                    <div >
                        <input
                            {...getInputProps({
                                placeholder: 'Začněte psát jmeno ulice, my za Vás doplníme zbytek',
                                className: 'location-search-input address-input' ,
                            })}
                        />
                        <div className="autocomplete-dropdown-container">
                            {loading && <div>Loading...</div>}
                            {suggestions.map(suggestion => {
                                const className = suggestion.active
                                    ? 'suggestion-item--active'
                                    : 'suggestion-item';
                                // inline style for demonstration purpose
                                const style = suggestion.active
                                    ? { backgroundColor: '#fafafa', cursor: 'pointer' }
                                    : { backgroundColor: '#ffffff', cursor: 'pointer' };
                                return (
                                    <div
                                        {...getSuggestionItemProps(suggestion, {
                                            className,
                                            style,
                                        })}
                                    >
                                        <span>{suggestion.description}</span>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                )}
            </PlacesAutocomplete>
        );
    }
}

export default LocationInput
