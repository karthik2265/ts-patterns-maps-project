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
}
