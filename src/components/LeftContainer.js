/* importing data*/ 

import React from 'react'
import {ReactComponent as LeftImage} from '../assets/images/LeftImage.svg'


/* function starts */

function LeftContainer(){
    return (
    
        <div className="left-container">

        <div className="text-container">
        
        <div className="image">
            {/* container with svg image inside */}
        <LeftImage />
        </div>
        </div>
      </div>

    )
}

export default LeftContainer