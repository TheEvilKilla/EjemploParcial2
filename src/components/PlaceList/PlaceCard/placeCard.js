import React from 'react';
import * as Element from 'react-bootstrap';
import { Link } from "react-router-dom";
import './placeCard.css'

function PlaceCard({ image, name, address, id }) {
    return (

        <Element.Card style={{
            display: 'flex',
            width: 'auto',
            height: 'auto',
            border: '1px solid rgba(0,0,0, 0.5)',
            borderRadius: '5px',
            boxShadow: '0 2px 4px rgba(0,0,0,.35)',
            marginInline: '5px',
            maxWidth: '210px'
        }}>
                <Link to={`/${id}`} style={{
                textDecoration: 'none',
                color: 'black'
            }}>
                    <Element.Col style={{
                        marginLeft: '10px',
                        marginRight: '10px'
                    }}>
                        <Element.Row style={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignContent: 'center',
                        }}>
                            <Element.Image src={image} style={{
                                width: '90px',
                                height: '90px',
                                maxWidth: '90px',
                                maxHeight: '90px',
                                marginTop: '10px'
                            }}>

                            </Element.Image>
                        </Element.Row>
                        <Element.Row style={{

                        }}>
                            <h1 style={{
                                margin: '0',
                                fontWeight: '500',
                                marginRight: '5px'
                            }}>{name}</h1>
                            <p style={{
                                margin: '0',
                                marginRight: '5px',
                                marginBottom: '5px'
                            }}>{address}</p>
                        </Element.Row>
                    </Element.Col>
                </Link>
        </Element.Card>
    );
} export default PlaceCard;