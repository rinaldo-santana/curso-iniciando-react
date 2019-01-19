import React from 'react'
import NavMenu from './navmenu';


class Navbar extends React.Component {
    
    render() {
        
        const menu = [
            {titulo: "Home", url: "#home"},
            {titulo: "Cliente", url: "#cliente"},
            {titulo: "Fornecedor", url: "#fornecedor"}
        ]

        let classNavbar = "nav-wrapper " + this.props.cor
        return (
            <nav>
                <div className={classNavbar}>
                    <div className="container">
                        <a href="#" className="brand-logo">{this.props.titulo}</a>
                        <NavMenu menu={menu} />
                    </div>
                </div>
            </nav>
        );
    }
}

export default Navbar;