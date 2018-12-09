import "./breadcrumb.jsx"
import React from 'react'

export default props =>
    <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
            <li className="breadcrumb-item active" aria-current="page">{props.title}</li>
        </ol>
    </nav>