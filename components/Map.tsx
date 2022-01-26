import React from "react";
import {
  GoogleMap,
  Marker,
  LoadScript,
  StreetViewService,
} from "@react-google-maps/api";

function Map({ coordinates }: { coordinates: number[] }) {
  const center = { lat: coordinates[0], lng: coordinates[1] };
  return (
    <LoadScript
      googleMapsApiKey={`${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}`}
    >
      <GoogleMap
        zoom={16}
        center={center}
        mapContainerStyle={{ width: "100%", height: "42vh" }}
      >
        <StreetViewService
          onLoad={(streetViewService) => {
            streetViewService?.getPanorama(
              {
                location: center,
                radius: 50,
              },
              (data, status) => {
                if (status !== "OK") {
                  console.log(data);
                }
              }
            );
          }}
        />
        <Marker position={center} />
      </GoogleMap>
    </LoadScript>
  );
}

export default Map;
