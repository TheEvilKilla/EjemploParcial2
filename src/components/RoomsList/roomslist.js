import React, { useEffect, useState } from 'react';
import * as Element from 'react-bootstrap';
import PlaceRoom from './PlaceRoom/placeRoom';
import Room from '../../assets/room.png';
import Kitchen from '../../assets/kitchen.png';
import Dinner from '../../assets/dinner.png';
import './roomslist.css';


function RoomsList({ id }) {
    const [rooms, setRooms] = useState([]);
    const [devices, setDevices] = useState([]);
    const [isClicked, setClicked] = useState(false);
    useEffect(() => {
        if (!navigator.onLine) {
            if (localStorage.getItem("rooms") === null) {
                setRooms("Loading...")
            } else {
                setRooms(localStorage.getItem("rooms"));
            }
        } else {
            const URL =
                "https://gist.githubusercontent.com/josejbocanegra/92c90d5f2171739bd4a76d639f1271ea/raw/9effd124c825f7c2a7087d4a50fa4a91c5d34558/rooms.json";
            fetch(URL)
                .then((data) => data.json())
                .then((data) => {
                    setRooms(data.filter(e => e.homeId === id));
                    localStorage.setItem("rooms", data.filter(e => e.homeId === id));
                });
        }
    }, [rooms]);

    function getImage(name) {
        if (name === 'Kitchen') {
            return Kitchen;
        }
        else if (name === 'Living room') {
            return Room;
        }
        else if (name === 'Dinner Room') {
            return Dinner;
        }
        else {
            return Room;
        }
    }

    const getDevices = (e) => {
        rooms.filter(room => {
            if (room.name === e) {
                setDevices(room.devices)
            }
        });
        setClicked(true)
    }

    const drawTable = () => {
        return (
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">ID</th>
                        <th scope="col">Device</th>
                        <th scope="col">Value</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        devices.map((a, i) => {
                            return (<tr>
                                <td>{i + 1}</td>
                                <td>{a.id}</td>
                                <td>{a.name}</td>
                                <td>{a.desired.value}</td>
                            </tr>);
                        })
                    }
                </tbody>
            </table>
        );
    }

    return (
        <div>
            <div className='list-container' style={{
            }}>
                <h1>My rooms</h1>

                <Element.Row style={{
                    display: 'flex',
                }}>
                    {rooms.map(room => {
                        return (
                            <Element.Col>
                                <PlaceRoom image={getImage(room.name)} name={room.name} handleClick={e => getDevices(room.name)}></PlaceRoom>
                            </Element.Col>
                        );
                    })}
                    <Element.Col style={{
                        marginLeft: '10px'
                    }}>
                        {
                            isClicked ? drawTable() : <></>
                        }
                    </Element.Col>
                </Element.Row>
            </div>
        </div>
    );
} export default RoomsList;