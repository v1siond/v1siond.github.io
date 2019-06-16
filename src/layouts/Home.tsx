import { Mixins, Watch, Prop } from 'vue-property-decorator'
import Component from 'vue-class-component'
import HomeTemplate from '../templates/layouts/Home'
import {
  Getter, Mutation
} from 'vuex-class'
import SoundMixing from '../pages/mixins/soundMixin'

@Component({
  name: 'categories'
})
export default class Home extends Mixins(SoundMixing) {
  @Mutation('setTitle') public setTitle
  @Mutation('setBack') public setBack
  public stepsDuration: number = 15
  public animationClass: string = '-intro animated'
  public stepsOne: any = undefined
  public jump: any = undefined
  public walk2: any = undefined
  public explosionTimeout: any = undefined
  public listener = this.backgroundSound.bind(this)
  $refs!: {
    wind: any,
    introMusic: any,
    character1: any,
    character2: any
  }
  public soundNames = [
    'menu',
    'wind',
    'intro',
    'step',
    'jump'
  ]
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
    this.explosionTimeout = setTimeout(() => {
      if (this.getSound) {
        this.playAudio('./Explosion1.mp3', 'explosion', 75)
      }
    }, 16500)
  }

  public mounted () {
    this.soundManager.onready(() => {
      this.backgroundSound()
      window.addEventListener('resize', this.listener)
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
    if (this.getSound) {
      this.playAudio('./beep.wav', this.soundNames[0], 50)
    }
  }

  public cleanIntervals () {
    if (this.stepsOne) {
      clearInterval(this.stepsOne)
    }
    if (this.explosionTimeout) {
      clearInterval(this.explosionTimeout)
    }
    if (this.walk2) {
      clearInterval(this.walk2)
    }
    if (this.jump) {
      clearInterval(this.jump)
    }
    this.soundNames.map((sound) => {
      if (this.sounds[sound]) {
        this.sounds[sound].stop()
        this.sounds[sound].destruct()
      }
    })
  }

  public backgroundSound () {
    this.animationClass  = '-intro'
    if (this.getSound) {
      this.cleanIntervals()
      this.playAudio('./wind_4.wav', this.soundNames[1], 40, true)
      this.playAudio('./intro.mp3', this.soundNames[2], 65, true)
      this.steps()
      this.explosion()
    } else {
      this.animationClass  = '-intro animated'
      this.cleanIntervals()
    }
  }

  public beforeDestroy () {
    this.cleanIntervals()
    window.removeEventListener('resize', this.listener)
  }

  public steps () {
    setTimeout(() => {
      this.animationClass  = '-intro animated'
      this.$refs.character1.className = 'character'
      this.$refs.character2.className = 'character -jumpDownIntro'
      this.stepsOne = setInterval(() => {
        this.playAudio('./stepstone_1.wav', this.soundNames[3])
      }, 500)
      this.jump = setTimeout(() => {
        this.playAudio('./jumpStart.mp3', this.soundNames[4], 75)
      }, 5000)
      this.walk2 = setTimeout(() => {
        const steepTwo = setInterval(() => {
          this.playAudio('./stepstone_1.wav', this.soundNames[3])
        }, 500)
        setTimeout(() => { clearInterval(steepTwo) }, 6000)
      }, 5500)
      setTimeout(() => {
        clearInterval(this.stepsOne)
      }, 4990)
    }, 1000)
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
        router={this.$router}
        methods={{
          buttonSelected: this.buttonSelected
        }}
      />
    )
  }

  @Watch('getSound', { immediate: true, deep: true })
    onSoundChange (newVal: any) {
      this.animationClass  = '-intro'
      this.cleanIntervals()
      if (newVal === true) {
        if (this.$refs.character1) {
          this.$refs.character1.className = '-'
        }
        if (this.$refs.character2) {
          this.$refs.character2.className = '-'
        }
      }
      this.backgroundSound()
    }
}
