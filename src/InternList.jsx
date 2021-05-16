import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

const InternList = () => {

    const [interns, setInterns] = useState([]);

    useEffect(() => {
        const fetchInterns = async () => {
            const response = await fetch('http://localhost:3001/interns');
            const interns = await response.json();
            setInterns(interns);
        }
        fetchInterns();
    }, []);

    return (
        <div class="container-interns">
            <div class="logo">
                <img src="/logo.png" alt="logo"></img>
            </div>
            <div class="intern-list">
                <h2>Participants</h2>
                {interns.map(u => (<div class="intern-row" key={u.id}>{u.name} <NavLink to={`/interns/${u.id}`}><i class="far fa-edit"></i>Edit</NavLink></div>))}
            </div>
        </div>
    );
};

export default InternList;