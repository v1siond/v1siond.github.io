import { Vue } from 'vue-property-decorator'
import Component from 'vue-class-component'
import LiveAndWorkTemplate from '../../../templates/pages/staticResume/about/liveAndWork'
import {
  Mutation
} from 'vuex-class'

@Component({
  name: 'LiveAndWork'
})
export default class LiveAndWork extends Vue {
  @Mutation('setTitle') public setTitle
  @Mutation('setBack') public setBack
  @Mutation('setLevelNumber') public setLevelNumber
  @Mutation('setLevelName') public setLevelName

  public mounted () {
    this.setTitle('LVL-1.3: Live and Work')
    this.setBack(true)
    this.setLevelNumber('1-3')
    this.setLevelName('Live and Work')
  }
  public render (h) {
    return (
      <LiveAndWorkTemplate />
    )
  }
}
