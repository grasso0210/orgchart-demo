<template>
  <div id="app">
    <b-container fluid>
      <b-row no-gutters>
        <b-col class="h-100">
          <h3> 組織図描画デモ </h3>
          <h5 class="usage usage-title"> 【使い方】 </h5>
          <dl class="usage">
            <dt> ●表示位置の変更 </dt>
            <dd> 組織図内（但しノード以外）をドラッグ </dd>

            <dt> ●図の拡大縮小 </dt>
            <dd> マウスホイールを操作 </dd>

            <dt> ●組織構造の変更 </dt>
            <dd> 変更元ノードをドラッグし、親にしたいノード上でドロップ </dd>
          </dl>
          <div>
            powered by
            <a
              target="_blank"
              href="https://github.com/spiritree/vue-orgchart"
            > vue-orgchart </a>
          </div>
          <div>
            source: <a href="https://github.com/grasso0210/orgchart-demo"> https://github.com/grasso0210/orgchart-demo </a>
          </div>
        </b-col>
        <b-col
          cols="9"
          class="h-100"
        >
          <chart1></chart1>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import Chart1 from './views/Chart1.vue'

export default {
  components: { Chart1 }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  overflow: hidden;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

.usage {
  text-align: left;

  .usage-title {
    font-weight: 900;
  }
}

dl {
  dt {
    font-weight: 300;
    font-size: 0.9rem;
  }

  dd {
    font-size: 0.8rem;
    padding-left: 1rem;
  }
}
</style>
