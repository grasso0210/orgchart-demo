<template>
  <vo-basic
    :data="chartData"
    :pan="true"
    :zoom="true"
    :draggable="true"
    direction="l2r"
    class="border h-100 overflow-hidden"
  >
  </vo-basic>
</template>

<style lang="scss">
div.orgchart {
  overflow: hidden !important;
}
</style>

<script>
import { VoBasic } from 'vue-orgchart'

export default {
  components: { VoBasic },

  created() {
    this.chartData = {
      name: '○×会社',
      children: [
        {
          name: '研究本部',
          children: [
            {
              name: '数学部',
              children: [
                {
                  name: '基礎理論研究課',
                  children: [
                    { name: '代数学研究係' },
                    { name: '幾何学研究係' },
                    { name: '論理学研究係' }
                  ]
                },
                {
                  name: '数理解析研究課',
                  children: [
                    { name: '基礎数理研究係' },
                    { name: '無限解析研究係' },
                    { name: '応用数理研究係' }
                  ]
                },
                {
                  name: '情報科学課',
                  children: [
                    { name: '情報理論研究係' },
                    { name: '情報処理研究係' },
                    { name: '人工知能研究係' },
                    { name: '社会情報学研究係' }
                  ]
                }
              ]
            },
            {
              name: '法・政治学部',
              children: [
                {
                  name: '国際地政学研究課',
                  children: [
                    { name: 'アジア地政学研究係' },
                    { name: '欧州地政学研究係' },
                    { name: '中東地政学研究係' },
                    { name: 'アメリカ地政学研究係' }
                  ]
                },
                {
                  name: '実定法学課',
                  children: [
                    { name: '憲法学研究係' },
                    { name: '行政・租税法学研究係' },
                    { name: '刑法学研究係' },
                    { name: '民・商法学研究係' }
                  ]
                },
                { name: '法令工学研究課' }
              ]
            },
            {
              name: '農業工学部',
              children: [{ name: '農業土木工学研究課' }, { name: '農業機械工学研究課' }]
            }
          ]
        },
        {
          name: '事務機構',
          children: [
            {
              name: '総務部',
              children: [
                {
                  name: '人事課',
                  children: [
                    { name: '人事課長', children: [{ name: '人事係長' }] }
                  ]
                },
                {
                  name: '図書課',
                  children: [
                    { name: '図書課長', children: [{ name: '図書係長' }] }
                  ]
                }
              ]
            },
            {
              name: '経営部',
              children: [
                {
                  name: '経理課',
                  children: [
                    { name: '経理課長', children: [{ name: '経理係長' }] }
                  ]
                },
                {
                  name: '経営戦略室',
                  children: [
                    {
                      name: '経営戦略室長',
                      children: [{ name: '経営戦略室長補佐' }]
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    }
  }
}
</script>
