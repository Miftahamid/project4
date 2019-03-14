import React, { Component } from "react";

class Map extends Component {
  componentDidMount = () => {
    this.renderMap();
  };
  renderMap = () => {
    loadScript(
      "https://maps.googleapis.com/maps/api/js?key=AIzaSyDfaaavTK16OByvKBs7waphV_ku-JkWTIU&callback=initMap"
    );
    window.initMap = this.initMap;
  };

  initMap = () => {
    var map = new window.google.maps.Map(document.getElementById("map"), {
      center: { lat: -34.397, lng: 150.644 },
      zoom: 8
    });
  };

  render() {
    return (
      <main>
        <div id="map" />
      </main>
    );
  }
}

// <script src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap"
//     async defer></script>

function loadScript(url) {
  var index = window.document.getElementsByTagName("script")[0];
  var script = window.document.createElement("script");
  script.src = url;
  script.async = true;
  script.defer = true;
  index.parentNode.insertBefore(script, index);
}

// <script src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap"
//     async defer></script>
export default Map;
