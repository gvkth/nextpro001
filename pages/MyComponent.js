import React, { useState } from "react";

const MyComponent = (props) => {
    const handleClick = (e) => {
        console.log(e);
    }

    const [mlabel, setmLabel] = useState("Click me");

    console.log(props.btn_label);
    let l = props.btn_label || mlabel;
    return (
        <>
            <button type="button" className="btn" onClick={handleClick}>{l}</button>
        </>
    );
}
export default MyComponent;