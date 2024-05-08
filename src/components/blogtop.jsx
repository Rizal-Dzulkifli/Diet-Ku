import React from 'react';
import Image from 'react-bootstrap/Image';
import Top from '../assets/image.png';

function FluidExample() {
    return (
        <div style={{ position: 'relative', textAlign: 'center' }}>
            <div style={{ width: '100%', height: '600px', overflow: 'hidden', position: 'relative' }}>
                <Image
                    src={Top}
                    fluid
                    style={{
                        objectFit: 'cover',
                        width: '100%',
                        height: '100%',
                        
                    }}
                />
                <div style={{ position: 'absolute', top: '85%', left: '50%', transform: 'translate(-50%, -50%)', color: '#fff',width:'400px' }}>
                    <h1><b>
                        NOURISH
                        YOUR MIND,BODY
                        AND SOUL</b></h1>
                </div>
            </div>
        </div>
    );
}

export default FluidExample;
