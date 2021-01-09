import {Component} from 'react';
import './Task.css'

class Task extends Component{
    
    state = {
        done: this.props.task.done
      }
       

    toggleState = () => {
        //console.log(this.state.done)
        this.setState({done: !this.state.done}) ///FALTA CONECTAR STATE CON STYLE
    }
    
    StyleCompleted(){
        //with func cant add conditional
        return{
            background: this.state.done ? 'black' : 'gray', /* cond inline (JS) */
            color: 'white',
            textDecoration: this.state.done ? 'none' : 'line-through' /* cond inline (JS) */
        }
    }


    render(){

        const {task} = this.props;
        //const redColor = {background: 'red'} # use style={redColor}
        
        return  <p style={this.StyleCompleted()}/*functionJS*/ /*style= {dark} (jsObject)*/ /*className= 'red' (cssFile) ---or--- style={{background: 'red'}} (inlineStyle) */>
                    ID: {task.id} - 
                    TITLE: {task.title} - \
                    DESCRIPTION: {task.description} 
                    <input type='checkbox'/>
                    <button style={btnDelete} /* jsObject*/ onClick={this.toggleState}>
                        X
                    </button>
                </p>
    }

}

// Javascript Object
const btnDelete = {
    fontSize: '18px',
    background: 'red',
    color: 'white',
    border: '1px solid black',
    padding: '10px 15px',
    borderRadius: '50%',
    cursor: 'pointer',
    //float: 'right'
}

/* Javascript Object
 const dark = {
    background: 'black',
    color: 'white'
}
 */
export default Task