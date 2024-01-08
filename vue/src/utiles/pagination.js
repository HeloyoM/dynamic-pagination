import Gateway from './gateway'
import { increase, pageSize } from './constants'

class Pagination {
    list = []
    displayList = []
    currentPage = 0

    constructor(props) {
        this.displayList = props.displayList
        this.currentPage = props.currentPage
    }

    async getList() {
        const fetching = new Gateway()
        await fetching.fetchList()

        this.list = fetching.getList()

        this.displayList = this.list.slice(this.currentPage, pageSize)
    }

    paginate = async () => {
        const nextPage = (this.currentPage + increase) * pageSize
        this.currentPage = this.currentPage + increase
        const nextSlice = this.list.slice(nextPage, nextPage + pageSize)

        this.displayList = this.displayList.concat(nextSlice)

        return this.getDisplayList()
    }

    getDisplayList() {
        return this.displayList
    }

}



export default Pagination
