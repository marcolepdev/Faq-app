import React from 'react'

/* props data */

function AccordionData(props){

    return (

        <div>
        <details className="accordion">
    
            <summary>{props.details.summary}</summary>
            <p>{props.details.p}</p>

        </details>
    
        </div>

    )
}


export default AccordionData