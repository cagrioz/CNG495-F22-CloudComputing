import { useGeolocated } from 'react-geolocated';
import { useLoadScript, GoogleMap, Marker } from '@react-google-maps/api';
import { useEffect, useState } from 'react';
import database from './firebase';

const Map = () => {
    const [peopleId, setId] = useState([]);
    useEffect(() => {
        database
            .collection('people')
            .get()
            .then((querySnapshot) => {
                querySnapshot.forEach((doc) => setId(querySnapshot.docs.map((doc) => doc.data())));
            });
    }, []);
    const libraries = ['places'];

    const { isLoaded, loadError } = useLoadScript({
        googleMapsApiKey: 'AIzaSyBprF-C58pY218YsW6TzTp6GraK5TByRnQ',
        libraries,
    });
    const { coords } = useGeolocated({
        watchPosition: true,
    });

    if (loadError) return 'Error loading maps';
    if (!isLoaded) return 'Loading Maps';

    return (
        <GoogleMap
            id="map"
            mapContainerStyle={{
                height: '700px',
                width: '100%',
            }}
            zoom={8}
            center={coords ? { lat: coords.latitude, lng: coords.longitude } : { lat: 35.323711, lng: 33.314941 }}
        >
            {peopleId.map((userData) => (
                <Marker
                    key={userData.name}
                    position={{ lat: userData.latitude, lng: userData.longitude }}
                    label={{
                        text: userData.name,
                        fontSize: '20px',
                        fontWeight: 'bold',
                        color: 'black',
                        padding: '5px',
                    }}
                ></Marker>
            ))}
        </GoogleMap>
    );
};

export default Map;
