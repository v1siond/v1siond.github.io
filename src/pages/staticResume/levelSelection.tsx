import { Vue } from 'vue-property-decorator'
import Component from 'vue-class-component'
import LevelSelectionTemplate from '../../templates/pages/staticResume/levelSelection'
import {
  Mutation
} from 'vuex-class'
import SoundManager from 'soundmanager2'

@Component({
  name: 'LevelSelection'
})
export default class LevelSelection extends Vue {
  @Mutation('setTitle') public setTitle
  @Mutation('setBack') public setBack
  public soundManager = SoundManager.soundManager
  public sounds: object = {}
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

  public mounted () {
    this.setTitle('Level Selection')
    this.setBack(true)
    this.soundManager.setup({
      debugMode: false,
      flashVersion: 9
    })
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

  public async playAudio (url: string, sound: string, vol: number = 20, loop: boolean = false) {
    if (!this.sounds[sound]) {
      this.sounds[sound] = await this.soundManager.createSound({
        id: `${sound}Id`,
        url,
        autoLoad: true,
        loops: loop ? 5 : 0,
        volume: vol
      })
    }
    this.sounds[sound].play()
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
}
