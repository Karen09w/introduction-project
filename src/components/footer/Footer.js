import React from 'react'
import { Link } from 'react-router-dom'

export default function footer() {
    return (
        <footer className="footer bg-dark">
        <div className="container">
            <h4>footer</h4>
            <Link to="#/" className="link link-secondary d-block">external link default</Link>
            <Link to="#/" className="link link-primary d-block" underline="hover">external link hover</Link>
            <Link to="#/" className="link link-success d-block" underline="always">external link always</Link>
            <Link to="#/" className="link link-danger d-block" underline="none">external link none</Link>
        </div>
    </footer>
    )
}
