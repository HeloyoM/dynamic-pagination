import React from 'react'
import Main from '../main'

class App extends React.Component {

    state = {
        displayList: [],
        mainIc: new Main()
    }

    async componentDidMount() {
        await this.state.mainIc.init()
        console.log(this.state.mainIc.getDisplayList())
        this.setState({ displayList: this.state.mainIc.getDisplayList() })
    }

    onClick = async () => {
        const nextSlice = await this.state.mainIc.paginate()

        this.setState({ displayList: nextSlice })
    }

    render() {
        return (
            <React.Fragment>
                <div>
                    <button onClick={this.onClick}>Triggered</button>
                </div>


                {!!this.state.displayList.length && this.state.displayList.map(e => (
                    <div key={e.id}>
                        <p>Full name: {e.name}</p>
                    </div>
                ))}
            </React.Fragment>

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