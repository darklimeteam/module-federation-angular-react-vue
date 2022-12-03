<template>
  <fieldset>
    <legend>How should we show your name: {{selected}}</legend>

    <div>
      <input type="radio" id="full" value="0" v-model="selected"
             checked>
      <label for="full">First and second name</label>
    </div>

    <div>
      <input type="radio" id="onlyFirstName" value="1" v-model="selected">
      <label for="onlyFirstName">Only first name</label>
    </div>

    <div>
      <input type="radio" id="shortSecondName" value="2" v-model="selected">
      <label for="shortSecondName">Short second name</label>
    </div>
    <button @click="click(selected)">Submit</button>
  </fieldset>
</template>

<script>

export default {
  data: function () { 
    return { 
      selected: 0, 
    }; 
  }, 
  methods: {
    click(selected) {
      console.log('from Vue', selected);
     // this.$emit(props.nameMode);
    }
  }
}
</script>

