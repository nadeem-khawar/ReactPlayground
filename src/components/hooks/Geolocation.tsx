import { useEffect, useState } from 'react';
import { FC } from 'react';
const GeolocationContainer = () => {
    const [latitude, setLatitude] = useState<number | null>(null);
    const [longitude, setLongitude] = useState<number | null>(null);

    useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                setLatitude(position.coords.latitude);
                setLongitude(position.coords.longitude);
            });
        }
    }, []);

    return <Geolocation latitude={latitude} longitude={longitude}></Geolocation>;
};

type Props = {
    latitude: number | null;
    longitude: number | null;
};

const Geolocation: FC<Props> = ({ latitude, longitude }) => {
    return (
        <div id="geolocation">
            <h1>Geolocation</h1>
            <p>Latitude: {latitude}</p>
            <p>Longitude: {longitude}</p>
        </div>
    );
};

export default GeolocationContainer;
