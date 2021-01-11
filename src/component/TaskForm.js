import {Component} from 'react'


//EXPORT DEFAULT NEW
export default class TaskForm extends Component {
    
    state = {
        title: '',
        description: ''
    }

    onSubmit = (event) => {
        //console.log('submiting..');
        //console.log(this.state)
        event.preventDefault(); //
    }

    onChange = (e) => {
        //console.log(e.target.value)
        //console.log(e.target.name, e.target.value)
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render(){
        return(
            <form style={formStyle} onSubmit={this.onSubmit}>
                <h1>Form</h1>
                <input  type='text' 
                        name='title'
                        placeholder='Write Task' 
                        onChange={this.onChange} 
                        value={this.state.title}
                />
                <br/>
                <br/>
                <textarea   type='text' 
                            name='description'
                            placeholder='Write a Description ' 
                            onChange={this.onChange} 
                            value={this.state.description}>
                </textarea>
                <hr/>
                <input type='submit'></input>
            </form>
        )
    }
}

const formStyle = {
    border: '1px solid black',
    background: 'yellow',
    padding: '50px'
}


