import React from 'react';


const ErrorApi = (props) => {
    console.log(props.errorMessage);

    /* return (
         <div>
             { props.errorVisible ? <p> {props.errorMessage} Please enter a valid city. </p> : null}
         </div>
     );*/
    return (
        props.errorVisible !== false && (
            <p> {props.errorMessage} Please enter a valid city. </p>
        )
    )

};


export default ErrorApi;
