import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import ReactDOMServer from "react-dom/server";
import "leaflet/dist/leaflet.css";
import Leaflet from "leaflet";
import { FaMapMarkerAlt } from "react-icons/fa";
import { Icon } from "@chakra-ui/react";

type Props = {
  coordinates: number[];
  address: string;
};
function Map({ coordinates, address }: Props) {
  const center = { lat: coordinates[0], lng: coordinates[1] };
  const iconMarkup = ReactDOMServer.renderToString(
    <Icon as={FaMapMarkerAlt} w={30} h={30} color="#e71f25" bg="none" />
  );
  const customMarkerIcon = new Leaflet.DivIcon({
    html: iconMarkup,
    iconSize: [0, 0],
    popupAnchor: [16, 0],
  });

  return (
    <MapContainer
      center={[center.lat, center.lng]}
      zoom={15}
      scrollWheelZoom={false}
      style={{ width: "100%", height: "42vh" }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}"
        subdomains={["mt0", "mt1", "mt2", "mt3"]}
      />
      <Marker
        key={center.lat}
        position={[center.lat, center.lng]}
        icon={customMarkerIcon}
      >
        <Popup>{address}</Popup>
      </Marker>
    </MapContainer>
  );
}

export default Map;
