export interface Mappable {
  location: {
    lat: number;
    lng: number;
  };
  color: string
}
export class CustomMap {
  private googleMap: google.maps.Map;

  constructor(divElement: HTMLElement) {
    this.googleMap = new google.maps.Map(divElement, {
      zoom: 3,
      center: {
        lat: 22,
        lng: 122,
      },
    });
  }

  addMarker(mappable: Mappable) {
    const marker = new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: mappable.location.lat,
        lng: mappable.location.lng,
      },
    });

    marker.addListener("click", () => {
      const infoWindow = new google.maps.InfoWindow({ content: "wow" });
      infoWindow.open(this.googleMap, marker);
    });
  }
}
