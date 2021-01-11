import {Component} from 'react';
import './Task.css';
import PropsTypes from 'prop-types';

class Task extends Component {
    
    /*state = {
        done: this.props.task.done
      }

    btnDeactivate = () => {
        //console.log(this.state.done)
        this.setState({done: false}) ///FALTA CONECTAR STATE CON STYLE
        //console.log(this.props)
    }

    btnActivate = () => {
        //console.log(this.state.done)
        this.setState({done: true}) ///FALTA CONECTAR STATE CON STYLE
    }*/

    StyleCompleted(){
        //func can add conditional
        return{
            padding: '50px',
            margin: '5px',
            background: this.props.task.done ? 'black' : 'gray', /* cond inline (JS) */
            color: 'white',
            textDecoration: this.props.task.done ? 'none' : 'line-through' /* cond inline (JS) */
        }
    }

    render(){
        const {task} = this.props;
        //const redColor = {background: 'red'} # use style={redColor}
        //console.log(this.props.deleteTask)
        return  <div style={{border: '1px solid black', margin: '20px', padding: '20px'}}>
                    <p style={this.StyleCompleted()}/*functionJS*/ /*style= {dark} (jsObject)*/ /*className= 'red' (cssFile) ---or--- style={{background: 'red'}} (inlineStyle) */>
                    ID: {task.id} - 
                    TITLE: {task.title} - 
                    DESCRIPTION: {task.description} 
                    
                    {/* <button style={btnIncomplete} /* jsObject/* onClick= {this.btnActivate}>
                        incomplete
                    </button>
                    <button style={btnComplete} onClick={this.btnDeactivate}>
                        complete
                    </button> */}
                </p>
                <input 
                type='checkbox' 
                checked={task.done ? true : false} 
                onChange={this.props.checkDone.bind(this, task.id)}/>
                <label id='labelHacer'>
                    {task.done ? 'Mark as done' : 'Mark as not done'}
                </label>
                <br/>
                <br/>
                <button 
                        style={btnDelete} 
                        onClick={this.props.deleteTask.bind(this, task.id)}> 
                        Delete
                    </button>
                </div>
    }
}

Task.propTypes = {
    task : PropsTypes.object.isRequired //Especifica tipo de dato a recibir con lib proptypes (tamb podemos usar Flow o Typescript)
    //PropsTypes.array, PropsTypes.numbre, etc
}

    /* // Javascript Object
    const btnIncomplete = {
        fontSize: '18px',
        background: 'purple',
        color: 'white',
        border: '1px solid black',
        padding: '10px 15px',
        borderRadius: '50%',
        cursor: 'pointer',
        //float: 'right'
    } */

    const btnDelete = {
        fontSize: '18px',
        background: 'orange',
        color: 'white',
        border: '1px solid black',
        padding: '10px 15px',
        borderRadius: '10%',
        cursor: 'pointer',
        //float: 'right'
    }

    /* const btnComplete = {
        fontSize: '18px',
        background: 'green',
        color: 'white',
        border: '1px solid black',
        padding: '10px 15px',
        borderRadius: '50%',
        cursor: 'pointer',
        //float: 'right'
    }
 */
    /* Javascript Object
     const dark = {
        background: 'black',
        color: 'white'
    }
     */

export default Task