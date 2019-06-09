import { Vue } from 'vue-property-decorator'
import Component from 'vue-class-component'
import HomeTemplate from '../templates/layouts/Home'
import {
  Mutation
} from 'vuex-class'
import SoundManager from 'soundmanager2'

@Component({
  name: 'categories'
})
export default class Home extends Vue {
  @Mutation('setTitle') public setTitle
  @Mutation('setBack') public setBack
  public stepsDuration: number = 15
  public sounds: object  = {}
  public soundManager = SoundManager.soundManager
  public animationClass: string = '-'
  $refs!: {
    wind: any,
    introMusic: any
  }
  public buttons: any = [
    {
      name: 'interactive',
      status: true
    },
    {
      name: 'static',
      status: false
    },
    {
      name: 'blog',
      status: false
    }
  ]

  public explosion () {
    setTimeout(() => {
      this.playAudio('./Explosion1.mp3', 'explosion', 75)
    }, 15850)
  }

  public mounted () {
    this.soundManager.setup({
      debugMode: false,
      flashVersion: 9,
      onready: () => {
        this.backroundSound()
        window.addEventListener('resize', () => {
          this.animationClass  = '-'
          this.backroundSound()
        })
      }
    })
  }

  public buttonSelected (type) {
    this.buttons.map((button) => {
      if (button.name === type) {
        button.status = true
      } else {
        button.status = false
      }
    })
    this.playAudio('./beep.wav', 'menu', 50)
  }

  public backroundSound () {
    this.animationClass  = '-intro'
    this.playAudio('./wind_4.wav', 'wind', 40, true)
    this.playAudio('./intro.mp3', 'intro', 65, true)
    this.steps()
    this.explosion()
  }

  public steps () {
    setTimeout(() => {
      const vm = this
      const stepsOne = setInterval(() => {
        vm.playAudio('./stepstone_1.wav', 'step')
      }, 500)
      const jump = setTimeout(() => {
        vm.playAudio('./jumpStart.mp3', 'jump', 75)
      }, 4000)
      setTimeout(() => {
        const stepsTwo = setInterval(() => {
          vm.playAudio('./stepstone_1.wav', 'step')
        }, 500)
        setTimeout(() => { clearInterval(stepsTwo) }, 5000)
      }, 4500)
      setTimeout(() => {
        clearInterval(stepsOne)
      }, 3990)
    }, 1000)
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
      this.sounds[sound].play()
    } else {
      this.sounds[sound].stop()
      this.sounds[sound].play()
    }
  }

  render (h: any) {
    this.setTitle('Alexander Pulido')
    this.setBack(false)
    return (
      <HomeTemplate
        interactive={this.buttons[0].status}
        static={this.buttons[1].status}
        blog={this.buttons[2].status}
        animationClass={this.animationClass}
        methods={{
          buttonSelected: this.buttonSelected,
          playAudio: this.playAudio
        }}
      >
        <iframe src='./beep.wav' allow='autoplay' id='audio' style='display:none'></iframe>
        <span ref='introMusic'/>
      </HomeTemplate>
    )
  }
}
