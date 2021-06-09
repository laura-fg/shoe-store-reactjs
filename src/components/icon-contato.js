import React from 'react';
import ReactDOM from 'react-dom';
import { Chip } from 'primereact/chip';
import '../css/icon-contato.css';


const IconContato = () => {
    return (
        <div>
            <div className="card">
        

             
                <div className="p-d-flex p-ai-center p-flex-wrap">
                    <Chip label="Chat" icon="pi pi-comment" className="p-mr-2 p-mb-2 custom-chip" />
                    <Chip label="+55 51 3447-1230 " icon="pi pi-phone" className="p-mr-2 p-mb-2 custom-chip" />    
                </div>
            </div>
        </div>
    );
}
export default IconContato;