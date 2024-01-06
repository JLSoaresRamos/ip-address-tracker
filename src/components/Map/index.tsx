import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import L from 'leaflet'

import iconLocation from '/images/icon-location.svg'

import { ChangeMapView } from '../ChangeMapView'

export default function Map({
	lat,
	long,
}: {
	lat: number
	long: number
}) {
	const customIcon = new L.Icon({
		iconUrl: iconLocation,
		iconSize: new L.Point(50, 75),
	})

	return (
		<MapContainer
			center={[lat, long]}
			zoom={15}
			className='h-full w-full'
			scrollWheelZoom={false}
			zoomControl={false}
		>
			<TileLayer
				attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
				url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
			/>
			<Marker position={[lat, long]} icon={customIcon}>
				<Popup>Here come this IP address</Popup>
			</Marker>
			<ChangeMapView center={[lat, long]} />
		</MapContainer>
	)
}
