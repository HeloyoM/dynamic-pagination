import React from 'react'
import Main from '../main'

class App extends React.Component {

    constructor() {
        super()
        this.mainIc = new Main()
    }

    onClick = () => {
        this.mainIc.init()
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
console.log(rootElement)
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