import React from 'react'

const Reminder = () => {
    return (
        <div className="container d-flex justify-content-center align-items-center" >
            <div className="p-3 d-flex justify-content-center align-items-center"
                style={{ width: "280px", height: "80px", border: ".5px solid rgba(0,0,0,0.3)" }} >
                <h5> No reminder yet</h5>
            </div>
        </div>
    )
}

export default Reminder
