import { Vue } from 'vue-property-decorator'
import Component from 'vue-class-component'

@Component({
  name: 'Experience'
})
export default class Experience extends Vue {
  public render (h: any) {
    return (
      <router-view />
    )
  }
}
