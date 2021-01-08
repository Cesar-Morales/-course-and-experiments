import {Component} from 'react';
import Task from './Task'

class Tasks extends Component{

    render() {
        return  this.props.tasks.map(taskElement => <Task key={taskElement.id} task={taskElement}/>);
    }

}

export default Tasks;