import { Mixins, Watch } from 'vue-property-decorator'
import Component from 'vue-class-component'
import AbilitiesTemplate from '../../../templates/pages/staticResume/about/abilities'
import {
  Mutation
} from 'vuex-class'
import SoundMixing from '../../mixins/soundMixin'

@Component({
  name: 'Abilities'
})
export default class Abilities extends Mixins(SoundMixing) {
  @Mutation('setTitle') public setTitle
  @Mutation('setBack') public setBack
  @Mutation('setLevelNumber') public setLevelNumber
  @Mutation('setLevelName') public setLevelName
  public listener = this.backgroundSound.bind(this)
  public abilitiesSound: string = 'lsdForest'

  public backgroundSound () {
    if (this.getSound) {
      this.playAudio('/Deeper.mp3', this.abilitiesSound, 40, true)
      this.playAudio('/wind_4.wav', 'wind', 40, true)
    } else if (this.sounds[this.abilitiesSound]) {
      this.cleanSounds()
    }
  }

  public cleanSounds () {
    this.sounds[this.abilitiesSound].stop()
    this.sounds[this.abilitiesSound].destruct()
    this.sounds['wind'].stop()
    this.sounds['wind'].destruct()
  }

  public beforeDestroy () {
    window.removeEventListener('resize', this.listener)
  }

  public mounted () {
    this.setTitle('LVL-1.1: Abilities')
    this.setBack(true)
    this.setLevelNumber('1-1')
    this.setLevelName('Abilities')
    this.backgroundSound()
    window.addEventListener('resize', this.listener)
  }
  public render (h) {
    return (
      <AbilitiesTemplate router={this.$router}/>
    )
  }

  @Watch('getSound', { immediate: true, deep: true })
    onSoundChange (newVal: any) {
      this.backgroundSound()
    }
}
