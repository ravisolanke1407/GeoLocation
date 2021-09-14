import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"
import React from "react"
import UseGeoLocation from "./CustomHook/UseGeoLocation"


function Map(){
  const geoLocation = UseGeoLocation();
  console.log("location",JSON.stringify(geoLocation))
  return <GoogleMap 
  defaultZoom={8}
  defaultCenter={{ lat: -34.397, lng: 150.644 }}
  >
    <Marker position={{ lat: -34.397, lng: 150.644 }} />
  </GoogleMap>
}

const WrappedMap = withScriptjs(withGoogleMap(Map))


function App() {
  return (
    <div style={{ height: '100vh', width: '100%' }}>
        
      <WrappedMap
        // isMarkerShown
        googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyDeTXs8t-ZU6FBOCzheyZ8puzj8LoCaoDg"
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `100%` }} />}
        mapElement={<div style={{ height: `100%` }} />}
      />
      </div>
  );
}

export default App;
