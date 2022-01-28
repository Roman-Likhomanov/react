import React from 'react';
// import s from './../Friends.module.css';
import { NavLink } from 'react-router-dom';

const Friends = (props) => {
    return (
        <div>
            <NavLink to={"/friends/" + props.id}>{props.name}</NavLink>
        </div>
    )
}

export default Friends;