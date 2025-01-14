import React from "react";
import "./MapView.css";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";


const MapView = ({ assets }) => {
  const mapContainerStyle = {
    width: "100%",
    height: "400px",
  };

  const center = assets.length > 0
    ? { lat: assets[0].location.lat, lng: assets[0].location.lng }
    : { lat: 37.7749, lng: -122.4194 }; // Default center (San Francisco)
    const livePingIcon = {
      url: "https://upload.wikimedia.org/wikipedia/commons/8/88/Map_marker.svg", // Replace with your ping icon URL
      scaledSize: new window.google.maps.Size(50, 50), // Adjust the size
      origin: new window.google.maps.Point(0, 0),
      anchor: new window.google.maps.Point(25, 25), // Center the icon
    };

  return (
    <div className="map-view">
      <h2>Map View</h2>
      <LoadScript googleMapsApiKey="AIzaSyDdfBAd4GUSQpO6xj9P2oivYS2ix6yerTw">
        <GoogleMap
          mapContainerStyle={mapContainerStyle}
          center={center}
          zoom={10}
        >
          {assets.map((asset) => (
            <Marker
            key={asset.id}
              position={{ lat: asset.location.lat, lng: asset.location.lng }}
              icon={livePingIcon} // Apply the custom icon here
              label={{
                text: asset.name,
                color: "black",
                fontSize: "12px",
                fontWeight: "bold",
              }}
            />
          ))}
        </GoogleMap>
      </LoadScript>
    </div>
  );
};

export default MapView;
