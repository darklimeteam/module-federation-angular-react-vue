  <script>
  import { defineCustomElement } from 'vue';

  const Settings2 = defineCustomElement({
    props: ['msg'],
    template:`
    <div style="border: 3px dashed green; padding: 5px">
      I am my-vue-web-comp.<br>
      Value received via "msg" prop: {{ msg }}<br>
      <input v-model="text"><button @click="addText">Type something and click me</button>
      <div v-for="t in texts">
        Text: {{ t }}
      </div>
    </div>
    `,
    data() {
      return {
        text: '',
        texts: []
      };
    },
    methods: {
      addText() {
        this.texts.push(this.text);
        this.text = '';
      }
    }
  });

customElements.define("my-vue-web-comp", Settings2);

export default Settings2;
</script>