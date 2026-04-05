import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';

// Fix Leaflet default icon issue with bundlers
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png',
});

const LOCATIONS = [
  { name: 'BÍLOVICE', lat: 48.53, lng: 16.89, vehicle: 'Koloběžka' },
  { name: 'MORAVSKÁ', lat: 49.20, lng: 16.65, vehicle: 'Kolo' },
  { name: 'HODONÍN', lat: 48.85, lng: 17.13, vehicle: 'Motorka' },
];

// Center of the three cities
const CENTER = [48.86, 16.89];

export default function CrewMap() {
  return (
    <section className="section" id="mapa" style={{ padding: 0 }}>
      <div style={{ padding: 'clamp(2rem, 4vw, 4rem) clamp(1rem, 4vw, 4rem) 1rem' }}>
        <div className="text-sub" style={{ opacity: 0.4, marginBottom: '0.5rem' }}>
          [003] — MAPA
        </div>
        <h2 className="text-section">NAŠE ÚZEMÍ</h2>
      </div>

      <div className="map-wrapper">
        <MapContainer
          center={CENTER}
          zoom={9}
          scrollWheelZoom={false}
          style={{ height: '100%', width: '100%' }}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OSM</a> | <a href="https://carto.com/">CARTO</a>'
            url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
          />
          {LOCATIONS.map((loc) => (
            <Marker key={loc.name} position={[loc.lat, loc.lng]}>
              <Popup>
                <strong>{loc.name}</strong>
                <br />
                {loc.vehicle}
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </section>
  );
}
