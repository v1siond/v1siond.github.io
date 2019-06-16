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
  public listener = this.backgroundSound.bind(this)
  public liveAndWorkSound: string = 'wind'

  public backgroundSound () {
    if (this.getSound) {
      this.playAudio('/wind_4.wav', this.liveAndWorkSound, 40, true)
    } else if (this.sounds[this.liveAndWorkSound]) {
      this.cleanSounds()
    }
  }

  public cleanSounds () {
    this.sounds[this.liveAndWorkSound].stop()
    this.sounds[this.liveAndWorkSound].destruct()
  }

  public beforeDestroy () {
    window.removeEventListener('resize', this.listener)
  }

  public mounted () {
    this.setTitle('LVL-1.3: Live and Work')
    this.setBack(true)
    this.setLevelNumber('1-3')
    this.setLevelName('Live and Work')
    this.soundManager.onready(() => {
      this.backgroundSound()
      window.addEventListener('resize', this.listener)
    })
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
