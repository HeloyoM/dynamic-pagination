import React from 'react'
import Main from '../main'

class App extends React.Component {

    constructor() {
        super()
        this.mainIc = new Main()
    }

    onClick = () => {
        console.log('Hello Meir Julo')
    }

    render() {
        return (
            <div>
                <button onClick={this.onClick}>Triggered</button>
            </div>
        )
    }

}

const rootElement = document.getElementById('root')

if (rootElement) {
    ReactDOM.render(
        <React.StrictMode>
            <App />
        </React.StrictMode>,
        rootElement
    )
} else {
    console.error("Root element with id 'root' not found in the HTML file.")
}