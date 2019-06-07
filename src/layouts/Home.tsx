import { Vue } from 'vue-property-decorator'
import Component from 'vue-class-component'
import HomeTemplate from '../templates/layouts/Home'
import {
  Mutation
} from 'vuex-class'
@Component({
  name: 'categories'
})
export default class Home extends Vue {
  @Mutation('setTitle') public setTitle
  @Mutation('setBack') public setBack
  public stepsDuration: number = 15
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
      this.playAudio('/Explosion1.mp3', 0.75)
    }, 15850)
  }

  public mounted () {
    this.steps()
    this.explosion()
    window.addEventListener('resize', () => {
      this.steps()
      this.explosion()
    })
    this.$refs.wind.volume = 0.35
    this.$refs.introMusic.volume = 0.5
    this.$refs.wind.play()
    this.$refs.introMusic.play()
  }

  public buttonSelected (type) {
    this.buttons.map((button) => {
      if (button.name === type) {
        button.status = true
      } else {
        button.status = false
      }
    })
    this.playAudio('/beep.wav', 0.5)
  }

  public steps () {
    setTimeout(() => {
      const vm = this
      const stepsOne = setInterval(() => {
        vm.playAudio('/stepstone_1.wav')
      }, 500)
      const jump = setTimeout(() => {
        vm.playAudio('/jumpStart.mp3', 0.75)
      }, 4000)
      setTimeout(() => {
        const stepsTwo = setInterval(() => {
          vm.playAudio('/stepstone_1.wav')
        }, 500)
        setTimeout(() => { clearInterval(stepsTwo) }, 5000)
      }, 4500)
      setTimeout(() => {
        clearInterval(stepsOne)
      }, 3990)
    }, 1000)
  }

  public playAudio (url, vol = 0.1) {
    const a = new Audio(url)
    a.volume = vol
    a.play()
  }

  render (h: any) {
    this.setTitle('Alexander Pulido')
    this.setBack(false)
    return (
      <HomeTemplate
        interactive={this.buttons[0].status}
        static={this.buttons[1].status}
        blog={this.buttons[2].status}
        methods={{
          buttonSelected: this.buttonSelected,
          playAudio: this.playAudio
        }}
      >
      <audio
        class='hidden'
        controls
        loop
        ref='introMusic'
        src='/intro.mp3'
      >
        Your browser does not support the
        <code>audio</code> element.
      </audio>
      <audio
        class='hidden'
        controls
        ref='wind'
        loop
        src='/wind_4.wav'
      >
        Your browser does not support the
        <code>audio</code> element.
      </audio>
      </HomeTemplate>
    )
  }
}
