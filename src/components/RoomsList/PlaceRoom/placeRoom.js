import React from 'react';
import * as Element from 'react-bootstrap';

function PlaceRoom({ image, name, handleClick }) {
    return (
        <Element.Button onClick={handleClick} style={{
            border: 'none',
            background: 'none'
        }}>
            <Element.Card style={{
                display: 'flex',
                justifyContent: 'center',
                width: '160px',
                height: 'auto',
                border: '1px solid rgba(0,0,0, 0.5)',
                borderRadius: '5px',
                boxShadow: '0 2px 4px rgba(0,0,0,.35)',
                marginInline: '5px',
                maxWidth: '210px'
            }}>
                <Element.Col style={{
                    width: 'auto',
                    height: 'auto',
                    marginLeft: '10px',
                    marginRight: '10px'
                }}>
                    <Element.Row style={{

                    }}>
                        <p style={{
                            margin: '0',
                            marginTop: '10px',
                            fontWeight: '350',
                            fontSize: '25px'
                        }}>{name}</p>
                    </Element.Row>
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
                            marginTop: '10px',
                            marginBottom: '5px'
                        }}>
                        </Element.Image>
                    </Element.Row>
                </Element.Col>
            </Element.Card>
        </Element.Button>

    );
} export default PlaceRoom;