import React from "react";
import './Step.css';

function Step(props) {

    return (
        <div className="step">
            <input type="number" value={props.value} onChange={(e) => {
                if (e.target.value >= 1) {
                    props.stepMethod(e.target.value);
                }
            }} />
        </div>
    );
}

export default Step;