import React from "react";
import { useParams  } from 'react-router-dom'

export const DetailPage: React.FC = () => {
    const {id} = useParams();
    const params =useParams()
    // console.log(params.id);
    return (
        <h1>Detail页面,路线ID:{id}</h1>
    )
}