import { useMap } from 'react-leaflet'

interface ChangeMapViewProps {
	center: [number, number]
}

export function ChangeMapView({ center }: ChangeMapViewProps) {
	const map = useMap()
	map.setView(center, map.getZoom())

	return null
}
