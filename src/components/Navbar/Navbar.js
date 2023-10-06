import { Component } from "react";
import "./NavbarStyle.css";
import { Link } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget";




class Navbar extends Component {
    state = {clicked: false}
    handleClick =() =>{
        this.setState({clicked:
        !this.state.clicked})
    }
    render(){
    return (
        <>
        <nav>

            <a href="/">
            <div><img src="https://cdn.discordapp.com/attachments/452721227094818849/1143733036324749414/icon.png" alt="Logo" className="logo"/></div>
            </a>
            <div>
                <ul id= "navbar" className={this.state.clicked ? "navbar active" : "#navbar"}>
                <li><a className="active" href="/">Inicio</a></li>
                <li><a href="/">Productos</a></li>
                <li><a href="/contacto">Contacto</a></li>

                <li><Link className="menu-link" to="/category/perifericos">Perifericos</Link></li>
                <li><Link className="menu-link" to="/category/componentes">Componentes</Link></li>
                <li><Link className="menu-link" to="category/accesorios">Accesorios</Link></li>
                <li><CartWidget /></li>

                

                </ul>
            </div>

            <div id= "mobile" onClick={this.handleClick}>
                <i id="bar" className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}></i>
            </div>
        </nav>
        </>
    )
}
}

export default Navbar;