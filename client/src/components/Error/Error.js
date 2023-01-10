import React from 'react';
import { useNavigate } from "react-router-dom"
// import "./Error.css"
const Error = () => {
    const redirect = useNavigate();
    return (
        <>
            <div className='card'>
                <div className="error d-flex flex-column justify-content-lg-center align-items-center">
                    <h3>Whoa! Looks lije there was an error with your location😭</h3>
                    <button className='btn btn-primary' onClick={() => redirect("/")}>Try again</button>
                </div>

            </div>
        </>
    )
}

export default Error