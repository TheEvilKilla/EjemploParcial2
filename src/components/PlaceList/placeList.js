import React, { useEffect, useState } from 'react';
import * as Element from 'react-bootstrap';
import Apartment from '../../assets/apartment.png';
import House from '../../assets/house.png';
import PlaceCard from './PlaceCard/placeCard';
import './placeList.css';

function PlaceList() {
    const [places, setPlaces] = useState([]);
    useEffect(() => {
        if (!navigator.onLine) {
            if (localStorage.getItem("places") === null) {
                setPlaces("Loading...")
            } else {
                setPlaces(localStorage.getItem("places"));
            }
        } else {
            const URL =
                "https://gist.githubusercontent.com/josejbocanegra/0067d2b28b009140fee423cfc84e40e6/raw/6e6b11160fbcacb56621b6422684d615dc3a0d33/spaces.json";
            fetch(URL)
                .then((data) => data.json())
                .then((data) => {
                    setPlaces(data);
                    localStorage.setItem("places", data);
                });
        }

    }, [places]);
    return (
        <div>
            <div className='list-container' style={{
            }}>
                <h1>My spaces</h1>
                <Element.Row style={{
                    display: 'flex',
                }}>
                    {places.map(place => {
                        const src = place.type === 'house' ? House : Apartment;
                        return (
                            <PlaceCard image={src} name={place.name} address={place.address} id={place.id}></PlaceCard>
                        );
                    })}
                </Element.Row>
            </div>
        </div>
    );
} export default PlaceList;