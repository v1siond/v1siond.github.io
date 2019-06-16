import { Watch, Mixins } from 'vue-property-decorator'
import Component from 'vue-class-component'
import BornInTemplate from '../../../templates/pages/staticResume/about/bornIn'
import {
  Mutation
} from 'vuex-class'
import SoundMixing from '../../mixins/soundMixin'

@Component({
  name: 'BornIn'
})
export default class BornIn extends Mixins(SoundMixing) {
  @Mutation('setTitle') public setTitle
  @Mutation('setBack') public setBack
  @Mutation('setLevelNumber') public setLevelNumber
  @Mutation('setLevelName') public setLevelName
  public listener = this.backgroundSound.bind(this)
  public bornInSound: string = 'italy'
  public backgroundSound () {
    if (this.getSound) {
      this.playAudio('/tarantella.mp3', this.bornInSound, 40, true)
      this.playAudio('/wind_4.wav', 'wind', 65, true)
    } else if (this.sounds[this.bornInSound]) {
      this.cleanSounds()
    }
  }
  public mounted () {
    this.setTitle('LVL-1.2: Born In')
    this.setBack(true)
    this.setLevelNumber('1-2')
    this.setLevelName('Born In')
    this.backgroundSound()
    window.addEventListener('resize', this.listener)
  }

  public cleanSounds () {
    this.sounds[this.bornInSound].stop()
    this.sounds[this.bornInSound].destruct()
    this.sounds['wind'].stop()
    this.sounds['wind'].destruct()
  }

  public beforeDestroy () {
    this.cleanSounds()
    window.removeEventListener('resize', this.listener)
  }

  public render (h) {
    return (
      <BornInTemplate
        router={this.$router}
      />
    )
  }

  @Watch('getSound', { immediate: true, deep: true })
    onSoundChange (newVal: any) {
      this.backgroundSound()
    }
}
