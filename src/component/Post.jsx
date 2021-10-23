import React,{useEffect, useState} from 'react'


const Post = ({pokemon}) => {
   const {name, url} = pokemon //get the data for the specific pokemon

    useEffect

    return(
        <div className="post">
            <h1> {name} </h1>
            

        </div>
    )
}