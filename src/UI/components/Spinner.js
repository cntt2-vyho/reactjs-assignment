import React from 'react';
import { Spinner } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Spin = () => {
    return (
        <div className="col-12 spinner-container">
            <Spinner animation="border" />
        </div>
        
    );
}

export default Spin;