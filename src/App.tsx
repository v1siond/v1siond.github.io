import Component from 'vue-class-component'
import { Watch, Vue } from 'vue-property-decorator'
import './assets/styles/app.styl'
import {
  Getter, Mutation
} from 'vuex-class'
import Toolbar from './components/Toolbar'
import SoundManager from 'soundmanager2'

@Component({
  name: 'app'
})
export default class App extends Vue {
  @Getter('getLogin') public  getLogin: any
  @Mutation('setLogin') public  setLogin
  public  toolbarHeight: number = 55
  public toolbarBlog: boolean = false
  public soundManager = SoundManager.soundManager
  public mobile: boolean = false
  $refs!: {
    toolbar: HTMLFormElement
  }

  public checkLogin (): void {
    if (this.$router.currentRoute.fullPath.includes('blog')) {
      this.toolbarBlog = true
    } else {
      this.toolbarBlog = false
    }

    if (localStorage.getItem('token')) {
      this.setLogin(true)
      if (this.getLogin === true && (this.$router.currentRoute.name === 'login' || this.$router.currentRoute.name === 'signup')) {
        alert('You already have a session please close it.')
        this.$router.push('/')
      }
    } else if (this.$router.currentRoute.name && (this.$router.currentRoute.name === 'newThread' || this.$router.currentRoute.name === 'newPost')) {
      this.setLogin(false)
      alert('You need to be logged in for this action.')
      this.$router.push('/')
    } else {
      this.setLogin(false)
    }
  }

  public async playAudio (sounds, url: string, sound: string, vol: number = 20, loop: boolean = false) {
    if (!sounds[sound]) {
      this.$set(sounds, sound, await this.soundManager.createSound({
        id: `${sound}Id`,
        url,
        autoLoad: true,
        loops: loop ? 5 : 0,
        volume: vol
      }))
      sounds[sound].stop()
      sounds[sound].play()
    } else {
      sounds[sound].stop()
      sounds[sound].play()
    }
  }

  public mounted () {
    this.soundManager.setup({
      debugMode: false,
      flashVersion: 9
    })
    this.checkLogin()
    this.checkToolbarHeight()
    window.addEventListener('resize', this.checkToolbarHeight)
  }

  public beforeDestroy () {
    window.removeEventListener('resize', this.checkToolbarHeight)
  }

  public checkToolbarHeight () {
    this.toolbarHeight = this.$refs.toolbar && this.$refs.toolbar.$el.clientHeight
    this.mobile = window.innerWidth > 700 || false
  }

  public render (h: any) {
    return (
      <div id='app'>
        <Toolbar playAudio={this.playAudio} mobile={this.mobile} blog={this.toolbarBlog || false} ref='toolbar' />
        <router-view playAudio={this.playAudio} style={this.toolbarBlog ? `height: calc( 100vh - ${this.toolbarHeight}px);` : 'height: 100vh;'} />
        <footer class='footer'>
          <article class='about'>
            <h2 class='game-title -credits'>About</h2>
            <figure />
            <p>Alexander Pulido is a Full Stack developer who was born in Roma, studied in Venezuela and now lives and Work in Arequipa, Perú.
            He loves to build web apps and his specialty is frontend development in javascript enviroments.</p>
          </article>
          <article class='legal'>
            &#64; Alexander Pulido. All Rights Reserved.
          </article>
        </footer>
      </div>
    )
  }

  @Watch('$route', { immediate: true, deep: true })
    onUrlChange (newVal: any) {
      this.checkLogin()
    }

}
