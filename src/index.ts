import { User } from "./User";
import { Company } from "./Company";
import { CustomMap } from "./CustomMap";

const user = new User();
console.log(user);

const company = new Company();

const mapElement: HTMLElement =
  document.getElementById("map") || document.createElement("div");

const myMap = new CustomMap(mapElement);
myMap.addMarker(user)
myMap.addMarker(company);
