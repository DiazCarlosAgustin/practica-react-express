import React, {Component} from 'react'

class Add extends Component{
    render() {
        return(
            <div className="container">
                <div className="modal-dialog" role="document">
                    <div className="modal-header">
                        <h3>Agregar imagen</h3>
                    </div>
                    <form>
                        <div className="modal-body">
                            <label for="archivo">Imagen</label>
                            <input type="file" />
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default Add