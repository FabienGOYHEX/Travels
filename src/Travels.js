//import React from "react"

import React from "react";
import Travel from './travel'

const mytravels = [
  {
    destination: "New York",
    Country: "USA",
    distance : "8000",
    image:
      "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FHomerSimpson.png?1497567511939"
  },
  {
    destination: "New York",
    Country: "USA",
    distance : "8000",
    image:
      "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FHomerSimpson.png?1497567511939"
  },
  {
    destination: "New York",
    Country: "USA",
    distance : "8000",
    image:
      "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FHomerSimpson.png?1497567511939"
  },
  {
    destination: "New York",
    Country: "USA",
    distance : "8000",
    image:
      "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FHomerSimpson.png?1497567511939"
  },
  {
    destination: "New York",
    Country: "USA",
    distance : "8000",
    image:
      "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FHomerSimpson.png?1497567511939"
  },

];



const Quotes = () => (
  <div>
    {mytravels.map(x => <Travel destination={x.destination} image={x.image} country={x.country} distance={x.distance}/> )}
  </div>
);

export default Quotes;
