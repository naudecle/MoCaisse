
import React, {useState, useEffect} from "react";
import {Text, TouchableOpacity} from 'react-native';
import { BarCodeScanner } from "expo-barcode-scanner";


import { View } from "react-native";
import CameraStyle from "../style/CameraCss";

function Camera(){
    const [hasPermission, setHasPermission] = useState(null);
    const [scanned, setScanned] = useState(false);

    useEffect(()=>{
        (async()=>{
            const { status } = await BarCodeScanner.requestPermissionsAsync();
            setHasPermission( status === 'granted');
        })();
    }, []);

    const handlerBarcodeScanner = ({type, data}) =>{
        setScanned(true);
        alert('Barcode with type '+ type +' and data ' + data + ' has been scanned.');
    };

    if(hasPermission == null){
        return <Text>Requesting for Camera Permission...</Text>
    }
    if(hasPermission === false){
        return <Text>No access to camera</Text>
    }

    return(
        <View style={CameraStyle.ViewContainer}>
             <BarCodeScanner
             style={CameraStyle.barcode}
            onBarCodeScanned={scanned ? undefined : handlerBarcodeScanner}
        />
        {scanned && <TouchableOpacity style={CameraStyle.button} onPress={()=> setScanned(false)}><Text style={CameraStyle.buttonText}>Scann the product</Text></TouchableOpacity>}
        </View>
       
    );
};

export default Camera;