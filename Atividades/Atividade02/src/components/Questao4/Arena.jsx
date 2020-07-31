import React from 'react'

export default (props)=>{
    return(
        <div>
            <h1>{props.arena}</h1>
            {React.Children.map(props.Children, personagem =>{
                return React.cloneElement(personagem, {...props})
            })}
        </div>
    )
}

 