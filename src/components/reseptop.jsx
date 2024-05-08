import React from 'react';
import Image from 'react-bootstrap/Image';
import Top from '../assets/resep.png';

function FluidExample() {
    return (
        <div style={{  textAlign: 'left' }}>
            <div style={{ width: '100%', height: '520px', overflow: 'hidden', position: 'relative' }}>
                <Image
                    src={Top}
                    fluid
                    style={{
                        objectFit: 'cover',
                        width: '100%',
                        height: '100%'
                    }}
                />
                <div style={{ position: 'absolute', top: '50%', left: '15%', transform: 'translate(-50%, -50%)', color: '#5A9F4D',width:'300px' }}>
                    <h1><b>
                        Temukan
                        Keseimbangan
                        yang Sempurna
                        antara Kelezatan dan Kesehatan</b></h1>
                </div>
            </div>
        </div>
    );
}

export default FluidExample;
