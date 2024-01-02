import Gateway from './gateway'
import { increase, pageSize } from './constants'

class Pagination {
    list = []
    displayList = []
    filteredList = []
    currentPage = 0

    constructor(props) {
        this.displayList = props.displayList
        this.currentPage = props.currentPage
        this.filteredList = props.filteredList
    }

    async getList() {
        const fetching = new Gateway()
        await fetching.fetchList()

        this.list = fetching.getList()
        console.log(this.list)
        this.displayList = this.list.slice(this.currentPage, this.pageSize)
    }

    paginate = () => {
        const nextPage = (this.currentPage + increase) * pageSize
        this.currentPage = this.currentPage + increase
        const nextSlice = this.list.slice(nextPage, nextPage + pageSize)
        console.log(nextSlice)
        this.displayList = this.displayList.concat(nextSlice)
    }

}



export default Pagination
