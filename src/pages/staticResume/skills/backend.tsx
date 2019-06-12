import { Vue } from 'vue-property-decorator'
import Component from 'vue-class-component'
import Backend from '../../../templates/pages/staticResume/skills/backend'
import {
  Mutation
} from 'vuex-class'

@Component({
  name: 'About'
})
export default class About extends Vue {
  @Mutation('setTitle') public setTitle
  @Mutation('setBack') public setBack
  @Mutation('setLevelNumber') public setLevelNumber
  @Mutation('setLevelName') public setLevelName

  public mounted () {
    this.setTitle('LVL-2.2: Backend')
    this.setBack(true)
    this.setLevelNumber('2-2')
    this.setLevelName('Backend')
  }
  public render (h) {
    return (
      <Backend />
    )
  }
}
