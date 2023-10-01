import React from "react";
import { StyleSheet, View } from "react-native";
import Mapbox from "@rnmapbox/maps";
import { useSelector } from "react-redux";
import { Camera } from "@rnmapbox/maps";
import { useEffect, useRef } from "react";
import {MAP_BOX_KEY} from '@env'

Mapbox.setAccessToken(MAP_BOX_KEY);

const Map = () => {
  const origin = useSelector((state) => state.nav.origin);

  const userLatitude = origin.location.latitude;
  const userLongitude = origin.location.longitude;

  


  return (
    <View style={styles.page}>
      <View style={styles.container}>
        <Mapbox.MapView style={styles.map} styleURL={Mapbox.StyleURL.Street}>
        <Mapbox.Camera
          zoomLevel={15}
          centerCoordinate={[userLongitude, userLatitude]}
          animationMode="flyTo"
          animationDuration={2000}
        />

        <Mapbox.PointAnnotation
          id="userLocation"
          coordinate={[userLongitude, userLatitude]}
          title="Your location"
        /></Mapbox.MapView>
      </View>
    </View>
  );
};

export default Map;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "stretch",
  },
  container: {
    height: "100%",
    width: "100%",
  },
  map: {
    flex: 1,
  },
});
