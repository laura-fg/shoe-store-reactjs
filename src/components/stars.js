

import React, { useState } from 'react';
import { Rating } from 'primereact/rating';
import "../css/stars.css";

const Stars = () => {
    
    const [val2, setVal2] = useState(null);

    return (
        <div>
            <div className="card" style={{border:'none', background:'transparent', margin: "20px"}}>
               
                <h5>Avalie sua compra</h5>
                <Rating value={val2} cancel={false} onChange={(e) => setVal2(e.value)} />

             
            </div>
        </div>
    )
}
                
export default Stars;