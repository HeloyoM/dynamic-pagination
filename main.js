import Pagination from './pagination'

const initialization = { displayList: [], currentPage: 0 }

class Main {
    constructor() {
        this.paginateInc = new Pagination(initialization)
    }

    async init() {
        await this.paginateInc.getList()
    }

    async paginate() {
        return await this.paginateInc.paginate()
    }

    getDisplayList() {
        return this.paginateInc.getDisplayList()
    }
}

export default Main