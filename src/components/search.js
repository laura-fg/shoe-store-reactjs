import React, { useState } from 'react';
import { InputText } from 'primereact/inputtext';

const Search = () => {
    const [value1, setValue1] = useState('');


    return (
        <div>
            <div className="card">
                <span className="p-input-icon-left">
                    <i className="pi pi-search" />
                    <InputText value={value1} onChange={(e) => setValue1(e.target.value)} placeholder="O que você procura hoje? " style={{width: "350px"}}/>
                </span>

            </div>
        </div>
    )
}
                
export default Search;