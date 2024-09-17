import React, {useContext, useEffect, useState} from 'react';
import cl from './Modal.module.css';
import {ModalContext} from "../../App.jsx";
import useFetching from "../../hooks/useFetching.js";

const Modal = () => {

    const {isOpen, setIsOpen, modalContent} = useContext(ModalContext);
    const [regionData, setRegionData] = useState({});


    const [fetchRegionData, isLoading, error] = useFetching(async () => {
        const regionResponse = await fetch(`https://66cb44724290b1c4f199e933.mockapi.io/regionsData/${modalContent}`);
        const data = await regionResponse.json();
        setRegionData(data);
    });

    useEffect(() => {
        fetchRegionData();
    }, [modalContent]);

    return (
        <div className={isOpen ? cl.overlay : cl.disable} onClick={() => setIsOpen(false)}>
            <div className={cl.modal} onClick={event => event.stopPropagation()}>
                <div className={cl.modalHeader}>
                    <div style={{userSelect: "none"}}>{regionData.title}</div>
                    <div className={cl.closeButton} onClick={() => setIsOpen(false)}>X</div>
                </div>

                <div className={cl.contentBlock}>
                    {isLoading
                        ? <p>Loading...</p>
                        : <div>
                            <img src={regionData.sight} alt={regionData.title}/>
                            <h2>{regionData.title}</h2>
                            <p>{regionData.description}</p>
                            <div>Foundation at : {regionData.foundationYear} |  Population : {regionData.population}</div>
                        </div>
                    }
                </div>

            </div>
        </div>
    );
};

export default Modal;
