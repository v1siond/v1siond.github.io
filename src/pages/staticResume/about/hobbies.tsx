import { Mixins, Watch } from 'vue-property-decorator'
import Component from 'vue-class-component'
import HobbiesTemplate from '../../../templates/pages/staticResume/about/hobbies'
import {
  Mutation
} from 'vuex-class'
import SoundMixing from '../../mixins/soundMixin'

@Component({
  name: 'Hobbies'
})
export default class Hobbies extends Mixins(SoundMixing) {
  @Mutation('setTitle') public setTitle
  @Mutation('setBack') public setBack
  @Mutation('setLevelNumber') public setLevelNumber
  @Mutation('setLevelName') public setLevelName
  public listener = this.backgroundSound.bind(this)
  public hobbiesSound: string = 'hobbies'

  public backgroundSound () {
    if (this.getSound) {
      this.playAudio('/hobbiesSong.mp3', this.hobbiesSound, 40, true)
    } else if (this.sounds[this.hobbiesSound]) {
      this.cleanSounds()
    }
  }

  public cleanSounds () {
    this.sounds[this.hobbiesSound].stop()
    this.sounds[this.hobbiesSound].destruct()
  }

  public beforeDestroy () {
    this.cleanSounds()
    window.removeEventListener('resize', this.listener)
  }
  public mounted () {
    this.setTitle('LVL 1-4: Hobbies')
    this.setBack(true)
    this.setLevelNumber('1-4')
    this.setLevelName('Hobbies')
    this.soundManager.onready(() => {
      this.backgroundSound()
      window.addEventListener('resize', this.listener)
    })
  }

  public render (h) {
    return (
      <HobbiesTemplate router={this.$router}/>
    )
  }

  @Watch('getSound', { immediate: true, deep: true })
    onSoundChange (newVal: any) {
      this.backgroundSound()
    }
}
