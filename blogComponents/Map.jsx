import React from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import * as L from 'leaflet';
 import 'leaflet/dist/leaflet.css';
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.webpack.css'; // Re-uses images from ~leaflet package

import 'leaflet-defaulticon-compatibility';
// import leaflet from 'leaflet'
 import locationIcon from '../assets/images/icon-location.svg'

const myIcon = new L.Icon({
  iconUrl: locationIcon,
  iconRetinaUrl:locationIcon,
  iconAnchor: null,
  popupAnchor: null,
  shadowUrl: null,
  shadowSize: null,
  shadowAnchor: null,
  iconSize:new L.Point(25, 25)
})
const Map = () => {
  return (
 

              <MapContainer center={[-4.365107800705721, 39.55487511132951]} zoom={12} scrollWheelZoom={false} style={{ height: 600, width: "100%" }}>
                  <TileLayer
                      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                      attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                  />

                  <Marker position={ [-4.365107800705721, 39.55487511132951]} icon={myIcon}>

                    <Popup>
                        <h1>
                            Ngozi Hub Massage Center
                        </h1>
                    </Popup>
                  </Marker>

              </MapContainer>

  )
}

export default Map