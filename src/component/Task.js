import {Component} from 'react';

class Task extends Component{

    render(){

        const {task} = this.props;

        return  <p>
                    ID: {task.id} - 
                    TITLE: {task.title} - \
                    DESCRIPTION: {task.description} 
                    <input type='checkbox'/>
                    <button>X</button>
                </p>
    }

}

export default Task