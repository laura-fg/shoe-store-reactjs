import 'primeicons/primeicons.css';
import '../css/car.css';
import ReactDOM from 'react-dom';

import React from 'react';

import { Badge } from 'primereact/badge';

 const Car = () => {

    return (
        <div style={{margin: "10px", cursor: "pointer"}}>
            <div className="card">
               
               
                <i className="pi pi-shopping-cart p-mr-4 p-text-secondary p-overlay-badge" style={{ fontSize: '2rem' }}><Badge value="10+" severity="danger" ></Badge></i>
               
   
            </div>
        </div>
    );
}

export default Car;