import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import * as Element from 'react-bootstrap';
import PlaceList from "../PlaceList/placeList";
import RoomsList from "../RoomsList/roomslist";
function Detail() {
    const params = useParams();
    return (
        <div>
            <PlaceList />
            <Element.Row style={{
                display: 'flex'
            }}>
                <Element.Col>
                    <RoomsList id={params.placeId}></RoomsList>
                </Element.Col>
            </Element.Row>
        </div>
    );
} export default Detail