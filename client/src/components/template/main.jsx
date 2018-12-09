import './main.css'
import React from 'react'
import Breadcrumb from './breadcrumb'

export default props => 
    <React.Fragment>
        <Breadcrumb {...props} />
        <main className="content">
            {props.children}
        </main>
    </React.Fragment>