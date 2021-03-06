import { Component, Input, OnChanges, OnInit } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';
import { MapService } from '../../services/map.service';
import { GeoJson, FeatureCollection } from '../../../Model/map';


@Component({
  selector: 'app-map-box',
  templateUrl: './map-box.component.html',
  styleUrls: ['./map-box.component.scss']
})
export class MapBoxComponent implements OnInit, OnChanges{

  /// default settings
  map: mapboxgl.Map | any;
  style = 'mapbox://styles/mapbox/streets-v11';
  @Input() latitude : number = 10.22;
  @Input() longitude: number = 10.5488;
  message = 'Hello World!';

  // data
  source: any;
  markers: any;

  constructor(private mapService: MapService) {
  }

  ngOnInit() {
    // this.markers = this.mapService.getMarkers()
    //this.initializeMap()
    console.log('init map');

  }
  
  ngOnChanges() {
    if(this.latitude && this.longitude)
    {
      console.log("latitude = " +this.latitude)
      console.log("longitude = " + this.longitude)
      this.initializeMap();
    }
  }

  private initializeMap() {
    /// locate the user
    if (navigator.geolocation) {
       navigator.geolocation.getCurrentPosition(position => {
        this.latitude = position.coords.latitude;
        this.longitude = position.coords.longitude;
        this.map.flyTo({
          center: [this.longitude, this.latitude]
        })
      });
    }

    this.buildMap()

  }

  buildMap() {
    this.map = new mapboxgl.Map({
      container: 'map',
      style: this.style,
      zoom: 8,
      center: [this.latitude, this.longitude]
      
    });

     //mapboxgl.accessToken = 'pk.eyJ1IjoibWVyeWVlZW0xOCIsImEiOiJja3B2NmxzeDgwaXZ3MnFwYW40MXdwaTFnIn0.W9RWIyaOXH2kH5kKRr-rug';


  // Create a default Marker, colored black.
   
    /// Add map controls
    this.map.addControl(new mapboxgl.NavigationControl());
    var marker2 = new mapboxgl.Marker({ color: 'black'})
    .setLngLat([this.latitude, this.longitude])
    .addTo(this.map); 

    /* Add Marker on Click
    this.map.on('click', (event: { lngLat: { lng: any; lat: any; }; }) => {
      const coordinates = [event.lngLat.lng, event.lngLat.lat]
      const newMarker   = new GeoJson(coordinates, { message: this.message })
      // this.mapService.createMarker(newMarker)
    })*/


    /// Add realtime firebase data on map load
    this.map.on('load', (_event: any) => {

      /// register source
      this.map.addSource('firebase', {
         type: 'geojson',
         data: {
           type: 'FeatureCollection',
           features: []
         }
      });

      /// get source
      // this.source = this.map.getSource('firebase')

      /// subscribe to realtime database and set data source

      // this.markers.subscribe((markers: GeoJson[]) => {
      //     let data = new FeatureCollection(markers)
      //     this.source.setData(data)
      // })

      /// create map layers with realtime data
      this.map.addLayer({
        id: 'firebase',
        source: 'firebase',
        type: 'symbol',
        layout: {
          'text-field': '{message}',
          'text-size': 24,
          'text-transform': 'uppercase',
          'icon-image': 'rocket-15',
          'text-offset': [0, 1.5]
        },
        paint: {
          'text-color': '#f16624',
          'text-halo-color': '#fff',
          'text-halo-width': 2
        }
      })

    })

  }


  /// Helpers

  // removeMarker(marker) {
  //   this.mapService.removeMarker(marker.$key)
  // }

  flyTo(data: GeoJson) {
    this.map.flyTo({
      center: data.geometry.coordinates
    })
  }
}

