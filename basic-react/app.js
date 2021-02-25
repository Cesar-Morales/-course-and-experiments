const Songs = () => { 
    return React.createElement( 'section', {className:'card'}, [
        React.createElement('h2', {}, 'Song: Barbazul'),
        React.createElement('p', {}, 'Album: Glup'),
        React.createElement('p', {}, 'Interpreter: Patricio Rey')
])
}

const App = () => {
    return React.createElement('div', {}, [
        React.createElement('h1', {}, 'Play-List'),
        React.createElement('hr'),
        React.createElement(Songs),
        React.createElement(Songs)
    ])
}

ReactDOM.render(React.createElement(App), document.getElementById('root'))