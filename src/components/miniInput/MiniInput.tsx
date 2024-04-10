import "./miniInput.css";
import { FaCaretDown } from "react-icons/fa";
import { useState, useEffect, useRef } from 'react';

interface IMiniInput {
    title: string
    label: string
    list: string[]

}

const MiniInput = ({ title, label, list, }: IMiniInput) => {

    function printCurrency(list: string[]) {
        return list.map((listItem, index) => (
            <>
                <li key={index}>{listItem}</li>
            </>
        ));
    }

    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        function handleClickOutside(event: { target: any; }) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        }

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };
    return (
        <>
        <div className="miniInputWrapper">
        <p className="miniLabel">{label}</p>
        <div className="input-border">
            
            <div className="miniInput" ref={dropdownRef}>
                <button onClick={toggleDropdown}>{title} <FaCaretDown /></button>
                <div className={`miniInput-menu ${isOpen ? 'open' : ''}`}>
                    <ul>
                        {printCurrency(list)}
                    </ul>
                </div>
            </div>
        </div>
        </div>
        </>
    )
}

export default MiniInput
