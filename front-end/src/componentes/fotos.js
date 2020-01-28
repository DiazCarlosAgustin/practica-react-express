import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import '../styles/fotos.css'
import Add from './add'

class Fotos extends Component{
    constructor(props){
        super(props)
        this.handlerAdd = this.handlerAdd.bind(this)
        this.state ={
            visible:false
        }
    }
    handlerAdd = () =>{
        let estado = !this.state.visible
        this.setState({visible : estado})
    }
    render(){
        return  (
            <div className="container">
                <div className="row my-3">
                    <div className="col-12">
                        <Link to="/" className="volver">Volver</Link>
                    </div>
                </div>
                <div className="add" onClick={this.handlerAdd}>
                    <svg aria-hidden="true" focusable="false" data-prefix="fas" 
                        data-icon="plus" className="svg-inline--fa fa-plus fa-w-14" role="img" 
                        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                        <path fill="currentColor" d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"></path>
                    </svg>
                </div>
                <div className={`${this.state.visible ? 'd-block':'d-none'}`}>
                    <Add />
                </div>
            </div>
        )
    }
}
export default Fotos