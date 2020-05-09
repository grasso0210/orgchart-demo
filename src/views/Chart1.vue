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
      name: '凸凹大学',
      children: [
        {
          name: '学部',
          children: [
            {
              name: '数学部',
              children: [
                {
                  name: '基礎理論学科',
                  children: [
                    { name: '代数学講座' },
                    { name: '幾何学講座' },
                    { name: '論理学講座' }
                  ]
                },
                {
                  name: '数理解析学科',
                  children: [
                    { name: '基礎数理研究講座' },
                    { name: '無限解析研究講座' },
                    { name: '応用数理研究講座' }
                  ]
                },
                {
                  name: '情報科学科',
                  children: [
                    { name: '情報理論講座' },
                    { name: '情報処理講座' },
                    { name: '人工知能講座' },
                    { name: '社会情報学講座' }
                  ]
                }
              ]
            },
            {
              name: '法・政治学部',
              children: [
                {
                  name: '国際地政学科',
                  children: [
                    { name: 'アジア地政学講座' },
                    { name: '欧州地政学講座' },
                    { name: '中東地政学講座' },
                    { name: 'アメリカ地政学講座' }
                  ]
                },
                {
                  name: '実定法学科',
                  children: [
                    { name: '憲法学講座' },
                    { name: '行政・租税法学講座' },
                    { name: '刑法学講座' },
                    { name: '民・商法学講座' }
                  ]
                },
                { name: '法令工学科' }
              ]
            },
            {
              name: '農業工学部',
              children: [{ name: '農業土木工学科' }, { name: '農業機械工学科' }]
            }
          ]
        },
        {
          name: '大学院',
          children: [{ name: '自然科学研究科' }, { name: '法学研究科' }]
        },
        {
          name: '事務機構',
          children: [
            {
              name: '総務部',
              children: [
                {
                  name: '学生課',
                  children: [
                    { name: '学生課課長', children: [{ name: '学生課係長' }] }
                  ]
                },
                {
                  name: '図書館',
                  children: [
                    { name: '図書館長', children: [{ name: '図書係長' }] }
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
