import React, { useContext } from "react";
import {Input, Button} from "react-native-elements";
import Spacer from "./Spacer";
import {Context as LocationContext} from "../context/LocationContext";
import useSaveTrack from "../hooks/useSaveTrack";
const TrackForm= ( ) => {
    const {state: {name, recording, locations},
        startRecording,
        stopRecording,
        changeName} = useContext(LocationContext);
    const [saveTrack] = useSaveTrack();
    console.log(locations.length);
    return <>
        <Spacer>
        <Input placeholder="Enter Name" onChangeText={changeName} />
        </Spacer>
        <Spacer>
        {recording 
        ? <Button title="Stop" onPress={stopRecording}/>
        : <Button title="Start Recording" onPress={startRecording}/>
        }
        </Spacer>
        {
            !recording && locations.length 
            ? <Button title="Save Record" onPress={saveTrack}/>
            : null
        }
        
    </>
}

export default TrackForm;