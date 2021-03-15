import * as Location from "expo-location";

const tenMetersWithDegrees = 0.0001;
let counter = 0;

const getLocation = incrment => {
    return {
        timeStamp: 10000000,
        coords:{
            speed:0,
            heading:0,
            accuracy: 5,
            altudeAccuracy:5,
            altitude:5,
            longitude: -122.0312186 +incrment * tenMetersWithDegrees,
            latitude: 37.33233141 +incrment * tenMetersWithDegrees,
        }
    }
};

setInterval(() =>{
    Location.EventEmitter.emit("Expo.locationChanged", {
        watchId:Location._getCurrentWatchId(),
        location: getLocation(counter)
    });
    counter++;
}, 1000);