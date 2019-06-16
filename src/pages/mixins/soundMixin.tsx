import { Vue } from 'vue-property-decorator'
import Component from 'vue-class-component'
import SoundManager from 'soundmanager2'
import {
  Getter
} from 'vuex-class'

@Component
export default class LevelSelection extends Vue {
  @Getter('getSound') public getSound
  public soundManager = SoundManager.soundManager
  public soundNames: any = []
  public sounds: object = {}

  public mounted () {
    this.soundManager.setup({
      debugMode: false,
      flashVersion: 9
    })
  }

  public async playAudio (url: string, sound: string, vol: number = 20, loop: boolean = false) {
    if (this.getSound) {
      if (!this.sounds[sound]) {
        this.soundNames.push(sound)
        this.sounds[sound] = await this.soundManager.createSound({
          id: `${sound}Id`,
          url,
          autoLoad: true,
          loops: loop ? 5 : 0,
          volume: vol
        })
        this.sounds[sound].start()
      } else {
        this.sounds[sound].stop()
        this.sounds[sound].start()
      }
    }
  }

  public beforeDestroy () {
    this.soundManager.reboot()
  }
}
