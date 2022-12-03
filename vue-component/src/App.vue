<template>
  <div>
    <h3>Vue3 App</h3>
    <Settings :count="count" @btnClick="inc"/>
  </div>

</template>

<script>

import Settings2 from './components/Settings2';
import Settings from './components/Settings';

export default {
  components: {
    Settings,
  },
  data() {
    return {
      count: 0,
    }
  },
  methods: {
    inc() {
      this.count++;
    }
  }
};

document.body.appendChild(
  new Settings2({
    props: { msg: 'dfjdjnf'}
  })
)
</script>

<style scoped>
h1 {
  font-family: Arial, Helvetica, sans-serif;
}
</style>
