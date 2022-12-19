  <script>
import { defineCustomElement } from 'vue';

const Settings = defineCustomElement({
  styles: [`
    fieldset {
    line-height: 1.9;
    font-family: Inter, sans-serif; 
  }
  button {
    margin-top: 10px;
    background-color: transparent;
    cursor: pointer;
    font-size: 0.9375rem;
    line-height: 1.75;
    min-width: 64px;
    padding: 7px 15px;
    border: 1px solid rgba(55, 125, 255, 0.5);
    color: rgb(55, 125, 255);
    font-weight: 400;
    border-radius: 5px;
    position: relative;
    overflow: hidden;
  }
  label {
    margin-left: 7px;
  }`],
    template:`
      <fieldset>
        <legend>Notification settings: {{selected == 0 ? 'Show notifications' : (
          selected == 1 ? 'Send notifications via email' : 'Turn off notifications')}}</legend>

        <div>
          <input type="radio" id="showN" value="0" v-model="selected"
                checked>
          <label for="showN">Show notifications</label>
        </div>

        <div>
          <input type="radio" id="emailN" value="1" v-model="selected">
          <label for="emailN">Send notifications via email</label>
        </div>

        <div>
          <input type="radio" id="noN" value="2" v-model="selected">
          <label for="noN">Turn off notifications</label>
        </div>
        <button @click="onClick(selected)">Submit</button>
     </fieldset>
    `,
    data() {
      return {
        selected: 0
      };
    },
    methods: {
      onClick(selected) {
        console.log(`Vue component: selected option - ${selected}.`);
      },
    },
  });

customElements.define("my-vue-web-comp", Settings);

export default Settings;
</script>