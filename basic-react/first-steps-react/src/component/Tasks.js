import {Component} from 'react';
import Task from './Task'

class Tasks extends Component{

    render() {
        return  this.props.tasks.map(taskElement => 
            <Task key={taskElement.id} 
                  deleteTask={this.props.deleteTask} 
                  task={taskElement}
                  checkDone={this.props.checkDone}/>);
    }
}

export default Tasks;