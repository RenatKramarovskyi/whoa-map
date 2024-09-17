import React, {useContext, useEffect, useRef, useState} from "react";
import styles from "./region.module.scss";
import useHover from "../../hooks/useHover.js";
import {ModalContext} from "../../App.jsx";

export const Region = ({regionData, ...props}) => {
    const ref = useRef();
    const isHovered = useHover(ref);
    const {setIsOpen, modalContent, setModalContent} = useContext(ModalContext)


    useEffect(() => {
        if(isHovered){
            console.log(regionData.name)
        }
    }, [isHovered]);

    async function  handleRegionClick(e) {
        setIsOpen(true)
        const index = e.target.parentElement.getAttribute('data-index');
        console.log(index)
        setModalContent(index)
    }

    return <g
        ref={ref}
        className={styles.region}
        {...props}
        onClick={(e) => handleRegionClick(e)}
    >
        {regionData.svg.body}
        {regionData.svg.edge}
    </g>;
}