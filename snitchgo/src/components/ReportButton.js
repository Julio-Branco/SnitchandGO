import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function ReportButton() {
    const [isFormVisible, setIsFormVisible] = useState(false);
    const navigate = useNavigate();
    const handleButtonClick = () => {
        navigate("/classe");
    };

    return (
        <div>
            {}
            <img
                src={"/img/ReportButton.png"}
                alt="Report Button"
                onClick={handleButtonClick}
                style={{ cursor: 'pointer', width: '100px', height: '100px' }}
            />
        </div>
    );
}
