class Gateway {
    list = []

    constructor() { }

    async fetchList() {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = await response.json()

        this.setList(data)
    }

    setList(data) {
        this.list = data
    }

    getList() {
        return this.list
    }
}

export default Gateway