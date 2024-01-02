import Pagination from './pagination'

const initialization = { displayList: [], currentPage: 0, filteredList: [] }

class Main {
    constructor() {
        this.paginateInc = new Pagination(initialization)
    }

    init() {
        this.paginateInc.getList()
    }

    paginate() {
        this.paginateInc.paginate()
    }
}

export default Main