import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { NavLink } from 'react-router-dom';
import { InternForm } from './internForm.jsx'
import {util} from './util.js';

const EditIntern =  () => {
    const { id } = useParams();
    const [internData, setIntern] = useState([]);
    
    
    useEffect( () => {

        //TODO: get intern from REST api http://localhost:3001/interns/:id
        const fetchIntern = async () => {
            const response = await fetch(`http://localhost:3001/interns/${id}`);
            const internData = await response.json();
            
            internData.internshipStart = internData.internshipStart.substring(0,10);
            internData.internshipEnd = internData.internshipEnd.substring(0,10);            
            setIntern(internData);
            
        }
        fetchIntern();
    }, [id]);
    const submitInternUpdate = (data) => {
        const dataValidated = util.validateData(data);
        //TODO: get intern from REST api http://localhost:3001/interns/:id
        if (dataValidated) {
            const fetchUpdateIntern = async () => {
                await fetch(`http://localhost:3001/interns/${id}`, {
                    headers: {
                        'Content-type': 'application/json'
                    },
                        method: 'PUT',
                        body: JSON.stringify(data)
                    }
                );
            }
            fetchUpdateIntern();
            setTimeout(window.location.reload());
        }
    }
    return (
        <div class="container">
            <div class="logo">
                <img src="/logo.png" alt="logo"></img>
            </div>
            <NavLink class="home" to="/"><i class="fas fa-arrow-left"></i>Back to list</NavLink>
            
            <InternForm internData={internData} handleData={submitInternUpdate}/>

        </div>
    );
};

export default EditIntern;