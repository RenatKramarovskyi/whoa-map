import {regions} from "./regions/config.js";
import './App.css'
import {Region} from "./components/region/region.jsx";
import Modal from "./components/Modal/Modal.jsx";
import {createContext, useState} from "react";

export const ModalContext = createContext();

function App() {

    const [isOpen, setIsOpen] = useState(false)
    const [modalContent, setModalContent] = useState(0)

    return (
        <ModalContext.Provider value={{isOpen, setIsOpen, modalContent, setModalContent}}>
                <svg width="910" height="609" viewBox="0 0 910 609" fill="none" xmlns="http://www.w3.org/2000/svg">
                    {Object.values(regions).map((region, index) =>
                        <Region regionData={region} data-index={index} />
                    )}
                </svg>
                {isOpen && <Modal/>}
        </ModalContext.Provider>
    )
}

export default App
