import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
} from "react-leaflet";

import "leaflet/dist/leaflet.css";

import L from "leaflet";

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  iconUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
});

const suppliers = [
  {
    name: "Supplier S1",
    city: "Chennai",
    position: [13.0827, 80.2707],
  },
  {
    name: "Supplier S2",
    city: "Bengaluru",
    position: [12.9716, 77.5946],
  },
  {
    name: "Supplier S3",
    city: "Mumbai",
    position: [19.0760, 72.8777],
  },
  {
    name: "Supplier S4",
    city: "Hyderabad",
    position: [17.3850, 78.4867],
  },
  {
    name: "Supplier S5",
    city: "Delhi",
    position: [28.6139, 77.2090],
  },
  {
    name: "Supplier S6",
    city: "Kolkata",
    position: [22.5726, 88.3639],
  },
  {
    name: "Supplier S7",
    city: "Ahmedabad",
    position: [23.0225, 72.5714],
  },
  {
    name: "Supplier S8",
    city: "Pune",
    position: [18.5204, 73.8567],
  },
  {
    name: "Supplier S9",
    city: "Jaipur",
    position: [26.9124, 75.7873],
  },
  {
    name: "Supplier S10",
    city: "Coimbatore",
    position: [11.0168, 76.9558],
  },
];

// 🔴 Red icon
const redIcon = new L.Icon({
  iconUrl:
    "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-red.png",
  shadowUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

// 🟢 Green icon
const greenIcon = new L.Icon({
  iconUrl:
    "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-green.png",
  shadowUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

// 🔵 Default icon
const blueIcon = new L.Icon({
  iconUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

function SupplierMap({
  affectedSupplier,
  recommendedSupplier,
}) {

  return (

    <div
      style={{
        height: "600px",
        width: "100%",
      }}
    >

      <MapContainer
        center={[22.5937, 78.9629]}
        zoom={5}
        style={{
          height: "100%",
          width: "100%",
        }}
      >

        <TileLayer
          attribution="&copy; OpenStreetMap contributors"
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {suppliers.map((supplier) => {

          let icon = blueIcon;

          if (supplier.name === affectedSupplier) {
            icon = redIcon;
          }

          if (supplier.name === recommendedSupplier) {
            icon = greenIcon;
          }

          return (

            <Marker
              key={supplier.name}
              position={supplier.position}
              icon={icon}
            >

              <Popup>

                <b>{supplier.name}</b>

                <br />

                {supplier.city}

                <br />

                {supplier.name === affectedSupplier &&
                  "🔴 Failed Supplier"}

                {supplier.name === recommendedSupplier &&
                  "🟢 Recommended Supplier"}

              </Popup>

            </Marker>

          );

        })}

      </MapContainer>

    </div>

  );

}

export default SupplierMap;