import React, {Component} from 'react'
import { Link } from 'react-router-dom'

class Navbar extends Component{
    constructor(props) {
        super(props)
        this.handleMenu = this.handleMenu.bind(this, ...arguments);
        this.state = {
            stado : false
        }
    }
    handleMenu = () =>{
        this.setState(prevState=>({
            stado: !prevState.stado
        }))
    }
    render() {
        return(
            <nav className={`navbar navbar-expand-lg navbar-light ${this.state.stado ? "bg-white":"bg-transparent"}`}>
                 <button className="navbar-toggler" type="button" data-toggle="collapse"
                    onClick={this.handleMenu} aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <span className="navbar-brand">React Fotos</span>
                <div className={`collapse navbar-collapse ${this.state.stado ? "show":""}`}>
                    <div className="nav-item">
                        <Link to="/" className="nav-link text-center">
                        INICIO
                        </Link>
                    </div>
                    <div className="nav-item">
                        <Link to="/fotos" className="nav-link text-center">
                            FOTOS
                        </Link>
                    </div>
                </div>
            </nav>
        )
    }
}

export default Navbar