<template>
  <div class="about">
    <h1>記事コード : {{ aid }}</h1>
  </div>
</template>

<script>
const timeGuard = function(to) {
  const data = {
    13: new Date(2021, 10, 30),
    108: new Date(2022, 10, 30)
  }

  const limit = data[to.params.aid] ?
    data[to.params.aid] : new Date(2999, 11, 31)
  const current = new Date()
  if (limit && limit.getTime() < current.getTime()) {
    window.alert('記事の公開期限が過ぎています。')
    return false
  }
}

export default {
  name: 'Article',
  beforeRouteEnter: timeGuard,
  beforeRouteUpdate: timeGuard,
  props: ['aid']
}
</script>
