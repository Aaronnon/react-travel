import React from "react";
import { useParams  } from 'react-router-dom'

export const DetailPage: React.FC = () => {
    const {id} = useParams();
    return (
        <h1>Detail页面,路线ID:{id}</h1>
    )
}