//HOC : A component(HOC) that render other regular component

import React from "react";
import ReactDOM from "react-dom";

const Info=(props)=>(
    
    <div>
    <h1>Info</h1>
    <p>the info is :{props.info}</p>
    </div>
    
);
const withAdminWarning = (WrappedComponent)=>{
    return(props)=>(
        <div>
        {props.isAdmin && <p> this is warning!!</p>}
        <WrappedComponent {...props}/>
        </div>

    )
}

const AdminInfo = withAdminWarning(Info);
ReactDOM.render(<AdminInfo isAdmin={true} info="there are more details"/> , document.getElementById("app"));
