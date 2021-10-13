/* importing files */

import React from 'react'
import '../index.css'
import AccordionData from './AccordionData'


/* function starts */

function RightContainer (){
    return (

        <div className="right-container">

        <div>
          <h1 className="faq">FAQ</h1>
        </div>

        <div className="question-container">
    
{/* Accordion data */}

            <AccordionData
            
            details={{
            
            summary:'How many members can I invite?',
            p:'You can invite only 20 members.'
                
                }} 
            
            />

            <AccordionData
            
            details={{
            
            summary:'How can I reset my password?',
            p:'Should it happen, please follow this link'
                
                }}
            
            />


            <AccordionData
            
            details={{
            
            summary:'Can I cancel my subscription?',
            p:'Please, visit this page'
        
                    }}
            
            />


            <AccordionData
            
            details={{
            
            summary:'Do you offer support?',
            p:'For more info please click on this link'
        
                    }}
            
            />

          </div>
        
      </div>
    )
}


export default RightContainer