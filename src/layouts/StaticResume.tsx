import { Vue } from 'vue-property-decorator'
import Component from 'vue-class-component'

@Component({
  name: 'StaticResume',
  render (h) {
    return (
      <router-view/>
    )
  }
})
export default class StaticResume extends Vue {
}
