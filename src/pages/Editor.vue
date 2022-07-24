<!--
 * @Descripttion: your project
 * @version: 1.0
 * @Author: hxx
 * @Date: 2022-07-24 17:40:02
 * @LastEditors: Aidam_Bo
 * @LastEditTime: 2022-07-24 23:15:24
-->
<template>
  <div class="wrap">
    <Cell
      title="选择单个日期"
      :value="formatDate(date)"
      @click="show = true"
    ></Cell>
    <Calendar v-model:show="show" @confirm="onConfirm"></Calendar>

    <div class="data_list">
      <li v-for="(d, index) in dataList" :key="index" class="item">
        {{ d }}
      </li>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from "vue"
import { Calendar, Cell } from "vant"

const show = ref(false)
const date = ref(new Date())
const formatDate = (date: Date) => `${date.getMonth() + 1}/${date.getDate()}`

const onConfirm = (value: Date) => {
  show.value = !show.value
  date.value = value
}

const getDateList = (nums: number, time: Date) => {
  const list = []
  const d = time
  let n = nums,
    year = d.getFullYear(),
    mon = d.getMonth() + 1,
    day = d.getDate()
  // date = d.getDate();
  function getWeek(d: number) {
    const weeks = [
      "星期日",
      "星期一",
      "星期二",
      "星期三",
      "星期四",
      "星期五",
      "星期六",
    ]
    return weeks[d]
  }
  while (n > 0) {
    if (day <= n) {
      if (mon > 1) {
        mon = mon - 1
      } else {
        year = year - 1
        mon = 12
      }
    }
    d.setDate(d.getDate() - 1)
    year = d.getFullYear()
    mon = d.getMonth() + 1
    day = d.getDate()
    let s =
      year +
      "-" +
      (mon < 10 ? "0" + mon : mon) +
      "-" +
      (day < 10 ? "0" + day : day)
    console.log(s)
    list.push({
      week: getWeek(new Date(s).getDay()),
      date: s,
    })
    n--
  }
  return list
}
const dataList = computed(() => getDateList(7, date.value))
</script>


<style scoped>
.wrap {
  color: #888;
}
.t {
  width: 100px;
  height: 100px;
  background: red;
}
</style>
