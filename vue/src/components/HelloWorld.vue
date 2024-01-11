<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div :style="{ display: 'flex', alignItems: 'center', flexDirection: 'column' }">
      <div v-for="item in displayList" :key="item.id" class="item">
        <p>{{ item }}</p>
      </div>
    </div>

    <button @click="fetchNewItems"  class="btn">Fetch New Items</button>

    <p v-if="end">End</p>
  </div>
</template>

<script>
import Main from '../../../main'


export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data() {
    return {
      mainInc: new Main(),
      displayList: [],
      end: false,
    }
  },
  mounted() {
    this.initMain()
  },
  methods: {
    async initMain() {
      await this.mainInc.init()

      this.displayList = this.mainInc.getDisplayList()
    },
    async fetchNewItems() {
      const nextSlice = await this.mainInc.paginate()

      if (nextSlice.length === this.displayList.length)
        this.end = true

      else this.displayList = nextSlice
    }
  },
}
</script>

<style scoped>
.item {
  border: outset 13px saddlebrown;
  min-width: 350px;
  padding: 15px;
  display: flex;
  flex-direction: column;
  text-align: center;
  color: black;
  font-family: Sora, sens-serif;
  font-size: 17px;
  background-color: lemonchiffon;
  box-shadow: 0px 4px 6px 4px lightgrey;
  width: 50%;
  margin: 1%;
}

.btn {
  outline: none;
  background-color: lightblue;
  width: 150px;
  height: 47px;
  border-radius: 8px;
  border: outset 5px seagreen;
  cursor: pointer
}

h3 {
  margin: 40px 0 0;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>