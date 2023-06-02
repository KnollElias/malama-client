import React from 'react';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';

const Map = ({ initialPosition, markers }) => {
  return (
    <MapView
      provider={PROVIDER_GOOGLE}
      style={{ flex: 1, borderRadius: 20 }}
      initialRegion={initialPosition}
    >
      {markers.map((marker, index) => (
        <Marker
          key={index}
          coordinate={marker.coordinate}
          title={marker.title}
          description={marker.description}
          // onPress={() => onMarkerPress(marker)}
        />
      ))}
    </MapView>
  );
};

export default Map;
