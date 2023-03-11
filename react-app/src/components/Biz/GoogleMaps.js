import React from 'react'
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const containerStyle = {
  width: '500px',
  height: '400px',
  border: "thin solid",
  padding: "10px"
};

function MyComponent({biz}) {
  return (
    <LoadScript
      googleMapsApiKey="AIzaSyD6Boi-1gBAbcH4GugbnxiwKr2ImX0Ildg"
    >
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={{lat: biz.lat, lng: biz.lng}}
        zoom={15}
      >
        { /* Child components, such as markers, info windows, etc. */ }
        <>
        <Marker position={{lat: biz.lat, lng: biz.lng }} />
        </>
      </GoogleMap>
    </LoadScript>
  )
}

export default React.memo(MyComponent)