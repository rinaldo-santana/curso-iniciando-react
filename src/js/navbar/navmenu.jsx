
import React from 'react'


class NavMenu extends React.Component {

    render() {

        let menuLista = this.props.menu.map((menuOption) => {
            return <li key={menuOption.titulo}><a href={menuOption.url}>{menuOption.titulo}</a></li>
        });

        return (
            <ul id="nav-mobile" className="right">
                {menuLista}
            </ul>
        );
    }
};


export default NavMenu;