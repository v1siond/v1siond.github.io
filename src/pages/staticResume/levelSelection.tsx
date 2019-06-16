import { Mixins, Watch } from 'vue-property-decorator'
import Component from 'vue-class-component'
import LevelSelectionTemplate from '../../templates/pages/staticResume/levelSelection'
import {
  Mutation
} from 'vuex-class'
import SoundMixing from '../mixins/soundMixin'

@Component({
  name: 'LevelSelection'
})
export default class LevelSelection extends Mixins(SoundMixing) {
  @Mutation('setTitle') public setTitle
  @Mutation('setBack') public setBack
  public listener = this.backgroundSound.bind(this)
  public levelSelectionSound: string = 'levelSelectionForest'
  public levels: any = [
    {
      name: 'About',
      status: true
    },
    {
      name: 'Skills',
      status: false
    },
    {
      name: 'Experience',
      status: false
    },
    {
      name: 'Publications',
      status: false
    }
  ]

  public backgroundSound () {
    if (this.getSound) {
      this.playAudio('/levelSelection.mp3', this.levelSelectionSound, 40, true)
      this.playAudio('/wind_4.wav', 'wind', 40, true)
    } else if (this.sounds[this.levelSelectionSound]) {
      this.cleanSounds()
    }
  }

  public cleanSounds () {
    this.sounds[this.levelSelectionSound].stop()
    this.sounds[this.levelSelectionSound].destruct()
    this.sounds['wind'].stop()
    this.sounds['wind'].destruct()
  }

  public mounted () {
    this.setTitle('Level Selection')
    this.setBack(true)
    this.backgroundSound()
    window.addEventListener('resize', this.listener)
  }

  public beforeDestroy () {
    this.cleanSounds()
    window.removeEventListener('resize', this.listener)
  }

  public levelSelected (type) {
    this.levels.map((level) => {
      if (level.name === type) {
        level.status = true
      } else {
        level.status = false
      }
    })
    this.playAudio('./beep.wav', 'menu', 50)
  }

  public render (h: any) {
    return (
      <LevelSelectionTemplate
        methods={{
          levelSelected: this.levelSelected
        }}
        router={this.$router}
      />
    )
  }

  @Watch('getSound', { immediate: true, deep: true })
    onSoundChange (newVal: any) {
      this.backgroundSound()
    }
}
