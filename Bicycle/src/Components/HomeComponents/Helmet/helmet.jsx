import React from "react";
import {Helmet} from "react-helmet";
 
const Helmet = ()=>{
  
    return (
        <div className="application">
            <Helmet>
                <meta name="description" content="Your page description" />
                <title>My Title</title>
             
            </Helmet>

            <h1>Hello Helmet</h1>
        </div>
    );
  
};
export default Helmet