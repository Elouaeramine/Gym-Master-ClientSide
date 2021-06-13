import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment'


import { GeoJson } from '../../Model/map';
import * as mapboxgl from 'mapbox-gl';
// const mapboxgl = require('mapbox-gl');


@Injectable()
export class MapService {

 constructor() {
    (mapboxgl as any).accessToken = environment.mapbox.accessToken;
  }


  // We don't need any of these methods for now

  // getMarkers(): FirebaseListObservable<any> {
  //   return this.db.list('/markers')
  // }

  // createMarker(data: GeoJson) {
  //   return this.db.list('/markers')
  //                 .push(data)
  // }

  // removeMarker($key: string) {
  //   return this.db.object('/markers/' + $key).remove()
  // }

}
