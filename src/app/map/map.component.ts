import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {
  private map: any;

  ngOnInit(): void {
    this.initMap();
    this.setUserLocation();
  }

  private initMap(): void {
    this.map = L.map('map').setView([51.505, -0.09], 13); // Vista inicial
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 18,
      attribution: '&copy; OpenStreetMap contributors'
    }).addTo(this.map);
  }

  private setUserLocation(): void {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const coords: L.LatLngTuple = [position.coords.latitude, position.coords.longitude];
        this.map.setView(coords, 15);
        L.marker(coords).addTo(this.map).bindPopup('Estás aquí').openPopup();
      }, (error) => {
        console.error('Error obteniendo la ubicación: ', error);
      });
    } else {
      console.error('Geolocalización no soportada por el navegador.');
    }
  }
}
