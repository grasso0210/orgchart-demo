<template>
  <vo-basic
    :data="chartData"
    :pan="true"
    :zoom="true"
    :draggable="true"
    direction="l2r"
  >
  </vo-basic>
</template>

<script>
import { VoBasic } from 'vue-orgchart'

export default {
  components: { VoBasic },

  created() {
    this.chartData = {
      name: 'JavaScript',
      children: [
        { name: 'Angular' },
        {
          name: 'React',
          children: [{ name: 'Preact' }]
        },
        {
          name: 'Vue',
          children: [{ name: 'Moon' }]
        }
      ]
    }
  }
}
</script>
