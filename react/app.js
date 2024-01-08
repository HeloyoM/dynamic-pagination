import React from 'react'
import Main from '../main'

class App extends React.Component {

    state = {
        displayList: [],
        mainIc: new Main(),
        pageSize: 0,
        end: false
    }

    async componentDidMount() {
        await this.state.mainIc.init()

        this.setState({ displayList: this.state.mainIc.getDisplayList() })

        this.setState({ pageSize: this.state.displayList.length })
    }

    onClick = async () => {
        const nextSlice = await this.state.mainIc.paginate()

        if (nextSlice.length === this.state.displayList.length)
            this.setState({ end: true })

        else this.setState({ displayList: nextSlice })
    }

    render() {
        return (
            <div style={styles.container}>

                <List displayList={this.state.displayList} />

                <div style={styles.list}>
                    <button style={styles.btn} onClick={this.onClick}>Show more</button>

                    <p>display each time {this.state.pageSize} of items</p>

                    {this.state.end && <strong>end</strong>}
                </div>

            </div>
        )
    }
}

const List = ({ displayList }) => {

    return (
        <div style={{ display: 'flex', textDecoration: 'underline', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
            {displayList.length && displayList.map((item, index) => (
                <div key={index}>
                    {Object.entries(item).map(([key, value]) => {
                        if (typeof value !== 'object') {
                            return (<p key={key} >
                                <strong>{key}:</strong> {value}
                            </p>)
                        }
                    })}
                </div>
            ))}
        </div>
    )
}

const styles = {
    container: {
        border: '2.5px solid lightgrey'
    },
    btn: {
        outline: 'none',
        backgroundColor: 'lightblue',
        width: '150px',
        height: '47px',
        borderRadius: '8px',
        border: 'none',
        cursor: 'pointer'
    },
    list: {
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
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
    console.error("Root element with [id='root'] not found in the HTML file.")
}