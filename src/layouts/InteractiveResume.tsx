import { Vue } from 'vue-property-decorator'
import Component from 'vue-class-component'

@Component({
  name: 'InteractiveResume',
  render (h) {
    return (
      <router-view/>
    )
  }
})
export default class InteractiveResume extends Vue {
}
