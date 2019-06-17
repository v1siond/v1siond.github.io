import { Mixins, Watch } from 'vue-property-decorator'
import Component from 'vue-class-component'
import LiveAndWorkTemplate from '../../../templates/pages/staticResume/about/liveAndWork'
import {
  Mutation
} from 'vuex-class'
import SoundMixing from '../../mixins/soundMixin'

@Component({
  name: 'LiveAndWork'
})
export default class LiveAndWork extends Mixins(SoundMixing) {
  @Mutation('setTitle') public setTitle
  @Mutation('setBack') public setBack
  @Mutation('setLevelNumber') public setLevelNumber
  @Mutation('setLevelName') public setLevelName

  public backgroundSound () {
    this.playAudio('wind4')
  }

  public mounted () {
    this.setTitle('LVL-1.3: Live and Work')
    this.setBack(true)
    this.setLevelNumber('1-3')
    this.setLevelName('Live and Work')
    this.backgroundSound()
  }

  public render (h) {
    return (
      <LiveAndWorkTemplate router={this.$router}/>
    )
  }

  @Watch('getSound', { immediate: true, deep: true })
    onSoundChange (newVal: any) {
      this.backgroundSound()
    }
}
