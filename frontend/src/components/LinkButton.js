import React from 'react';

import '../styles/LinkButton.css'

export default function LinkButton({label, onClick}) {
    return <button className="link-button" onClick={onClick}>{label}</button>;
}


