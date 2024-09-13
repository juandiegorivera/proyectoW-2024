//Colocar marcadores .........................................................................................................................................................
<!DOCTYPE html>
<!--
 @license
 Copyright 2024 Google LLC. All Rights Reserved.
 SPDX-License-Identifier: Apache-2.0
-->
<html>
  <head>
    <title>Complex Marker Icons</title>
    <style>
      /**
       * @license
       * Copyright 2024 Google LLC. All Rights Reserved.
       * SPDX-License-Identifier: Apache-2.0
       */

      /* Optional: Makes the sample page fill the window. */
      html, body {
        height: 100%;
        margin: 0;
      }

      /* Shift the flag icon to the right so that the bottom of the flagpole
       * aligns with the anchor point. */
      .flag-icon {
        position: relative;
        left: 10px;
      }
    </style>
  </head>
  <body>
    <gmp-map center="-33.9,151.2" zoom="10" map-id="DEMO_MAP_ID">
      <gmp-advanced-marker position="-33.890542, 151.274856" title="Bondi Beach">
        <img class="flag-icon"
             src="https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png"/>
      </gmp-advanced-marker>
      <gmp-advanced-marker position="-33.923036, 151.259052" title="Coogee Beach">
        <img class="flag-icon"
             src="https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png"/>
      </gmp-advanced-marker>
      <gmp-advanced-marker position="-34.028249, 151.157507" title="Cronulla Beach">
        <img class="flag-icon"
             src="https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png"/>
      </gmp-advanced-marker>
      <gmp-advanced-marker position="-33.800101, 151.287478" title="Manly Beach">
        <img class="flag-icon"
             src="https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png"/>
      </gmp-advanced-marker>
      <gmp-advanced-marker position="-33.950198, 151.259302" title="Maroubra Beach">
        <img class="flag-icon"
             src="https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png"/>
      </gmp-advanced-marker>
    </gmp-map>
    <script
      src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAcOwXuYm7szYIAvaDd7mEWTWy9IZpSrYM&loading=async&libraries=marker&v=beta&solution_channel=GMP_CCS_complexmarkers_v3"
      defer
    ></script>
  </body>
</html>



//Emergentes para ubicaciones...................................................................................................................................................

<!doctype html>
<!--
 @license
 Copyright 2023 Google LLC. All Rights Reserved.
 SPDX-License-Identifier: Apache-2.0
-->
<html>
  <head>
    <title>Info Windows</title>
    <script>
      /**
       * @license
       * Copyright 2023 Google LLC. All Rights Reserved.
       * SPDX-License-Identifier: Apache-2.0
       */

      // This example displays a marker at the center of Australia.
      // When the user clicks the marker, an info window opens.
      async function initMap() {
        const contentString = `
          <div>
            <h1>Uluru</h1>
            <div>
              <p>
                <b>Uluru</b>, also referred to as <b>Ayers Rock</b>, is a large
                sandstone rock formation in the southern part of the
                Northern Territory, central Australia. It lies 335&#160;km (208&#160;mi)
                south west of the nearest large town, Alice Springs; 450&#160;km
                (280&#160;mi) by road. Kata Tjuta and Uluru are the two major
                features of the Uluru - Kata Tjuta National Park. Uluru is
                sacred to the Pitjantjatjara and Yankunytjatjara, the
                Aboriginal people of the area. It has many springs, waterholes,
                rock caves and ancient paintings. Uluru is listed as a World
                Heritage Site.
              </p>
              <p>
                Attribution: Uluru,
                <a href="https://en.wikipedia.org/w/index.php?title=Uluru&oldid=297882194">
                  https://en.wikipedia.org/w/index.php?title=Uluru
                </a>
                (last visited June 22, 2009).
              </p>
            </div>
          </div>`;
        const infoWindow = new google.maps.InfoWindow({
          content: contentString,
          ariaLabel: "Uluru",
        });

        const marker = document.querySelector('gmp-advanced-marker');
        marker.addEventListener('gmp-click', () => {
          infoWindow.open({anchor: marker});
        });
      }

      window.initMap = initMap;
    </script>
    <style>
      /**
       * @license
       * Copyright 2023 Google LLC. All Rights Reserved.
       * SPDX-License-Identifier: Apache-2.0
       */

      /*
       * Optional: Makes the sample page fill the window.
       */
      html,
      body {
        height: 100%;
        margin: 0;
      }
    </style>
  </head>
  <body>
    <gmp-map center="-25.363, 131.044" zoom="4" map-id="DEMO_MAP_ID">
      <gmp-advanced-marker position="-25.363, 131.044" title="Uluru" gmp-clickable></gmp-advanced-marker>
    </gmp-map>
    <script
      src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAcOwXuYm7szYIAvaDd7mEWTWy9IZpSrYM&callback=initMap&libraries=marker&v=beta&solution_channel=GMP_CCS_infowindows_v2"
      defer
    ></script>
  </body>
</html>


//Agregar figuras sobre el mapa (zonas de peligro en nuestro caso)


<!DOCTYPE html>
<!--
 @license
 Copyright 2019 Google LLC. All Rights Reserved.
 SPDX-License-Identifier: Apache-2.0
-->
<html>
  <head>
    <title>Simple Polygon</title>
    <script>
      /**
       * @license
       * Copyright 2019 Google LLC. All Rights Reserved.
       * SPDX-License-Identifier: Apache-2.0
       */
      // This example creates a simple polygon representing the Bermuda Triangle.
      function initMap() {
        const map = new google.maps.Map(document.getElementById("map"), {
          zoom: 5,
          center: { lat: 24.886, lng: -70.268 },
          mapTypeId: "terrain",
        });
        // Define the LatLng coordinates for the polygon's path.
        const triangleCoords = [
          { lat: 25.774, lng: -80.19 },
          { lat: 18.466, lng: -66.118 },
          { lat: 32.321, lng: -64.757 },
          { lat: 25.774, lng: -80.19 },
        ];
        // Construct the polygon.
        const bermudaTriangle = new google.maps.Polygon({
          paths: triangleCoords,
          strokeColor: "#FF0000",
          strokeOpacity: 0.8,
          strokeWeight: 2,
          fillColor: "#FF0000",
          fillOpacity: 0.35,
        });

        bermudaTriangle.setMap(map);
      }

      window.initMap = initMap;
    </script>
    <style>
      /**
       * @license
       * Copyright 2019 Google LLC. All Rights Reserved.
       * SPDX-License-Identifier: Apache-2.0
       */
      /** 
       * Always set the map height explicitly to define the size of the div element
       * that contains the map. 
       */
      #map {
        height: 100%;
      }

      /* Optional: Makes the sample page fill the window. */
      html,
      body {
        height: 100%;
        margin: 0;
        padding: 0;
      }
    </style>
  </head>
  <body>
    <div id="map"></div>
    <script
      src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAcOwXuYm7szYIAvaDd7mEWTWy9IZpSrYM&callback=initMap&v=weekly&solution_channel=GMP_CCS_simplepolygon_v2"
      defer
    ></script>
  </body>
</html>

// "localizador" de ubicaciones , ejemplo con lanin 2020 (Epet 20)

<!--
  Copyright 2023 Google LLC

  Licensed under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License.
  You may obtain a copy of the License at

      https://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing, software
  distributed under the License is distributed on an "AS IS" BASIS,
  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  See the License for the specific language governing permissions and
  limitations under the License.
-->
<!DOCTYPE html>
<html>
  <head>
    <title>Locator</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width,initial-scale=1">
    <style>
      html,
      body {
        height: 100%;
        margin: 0;
      }

      gmpx-store-locator {
        width: 100%;
        height: 100%;

        /* These parameters customize the appearance of Locator Plus. See the documentation at
           https://github.com/googlemaps/extended-component-library/blob/main/src/store_locator/README.md
           for more information. */
        --gmpx-color-surface: #fff;
        --gmpx-color-on-surface: #212121;
        --gmpx-color-on-surface-variant: #757575;
        --gmpx-color-primary: #1967d2;
        --gmpx-color-outline: #e0e0e0;
        --gmpx-fixed-panel-width-row-layout: 28.5em;
        --gmpx-fixed-panel-height-column-layout: 65%;
        --gmpx-font-family-base: "Roboto", sans-serif;
        --gmpx-font-family-headings: "Roboto", sans-serif;
        --gmpx-font-size-base: 0.875rem;
        --gmpx-hours-color-open: #188038;
        --gmpx-hours-color-closed: #d50000;
        --gmpx-rating-color: #ffb300;
        --gmpx-rating-color-empty: #e0e0e0;
      }
    </style>
    <script>
      const CONFIGURATION = {
        "locations": [
          {"title":"Lanín 2020","address1":"Lanín 2020","address2":"Q8300 Neuquén, Argentina","coords":{"lat":-38.964681678328034,"lng":-68.08775679325409},"placeId":"ChIJAWtbeEgzCpYR-Jlz_4QIV0w"}
        ],
        "mapOptions": {"center":{"lat":38.0,"lng":-100.0},"fullscreenControl":true,"mapTypeControl":false,"streetViewControl":false,"zoom":4,"zoomControl":true,"maxZoom":17,"mapId":""},
        "mapsApiKey": "AIzaSyAcOwXuYm7szYIAvaDd7mEWTWy9IZpSrYM",
        "capabilities": {"input":true,"autocomplete":true,"directions":false,"distanceMatrix":true,"details":false,"actions":false}
      };

    </script>
    <script type="module">
      document.addEventListener('DOMContentLoaded', async () => {
        await customElements.whenDefined('gmpx-store-locator');
        const locator = document.querySelector('gmpx-store-locator');
        locator.configureFromQuickBuilder(CONFIGURATION);
      });
    </script>
  </head>
  <body>
    <!-- Please note unpkg.com is unaffiliated with Google Maps Platform. -->
    <script type="module" src="https://unpkg.com/@googlemaps/extended-component-library@0.6"></script>

    <!-- Uses components from the Extended Component Library; see
         https://github.com/googlemaps/extended-component-library for more information
         on these HTML tags and how to configure them. -->
    <gmpx-api-loader key="AIzaSyAcOwXuYm7szYIAvaDd7mEWTWy9IZpSrYM" solution-channel="GMP_QB_locatorplus_v10_cABD"></gmpx-api-loader>
    <gmpx-store-locator map-id="DEMO_MAP_ID"></gmpx-store-locator>
  </body>
</html>