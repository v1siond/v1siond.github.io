import Component from 'vue-class-component'
import { Watch, Vue } from 'vue-property-decorator'
import './assets/styles/app.styl'
import {
  Getter, Mutation
} from 'vuex-class'
import Toolbar from './components/Toolbar'

@Component({
  name: 'app'
})
export default class App extends Vue {
  @Getter('getLogin') public  getLogin: any
  @Mutation('setLogin') public  setLogin
  public  toolbarHeight: number = 55
  public toolbarVisible: boolean = false
  public toolbarBlog: boolean = false
  $refs!: {
    toolbar: HTMLFormElement
  }

  public checkLogin (): void {
    if (this.$router.currentRoute.name === 'home') {
      this.toolbarVisible = false
    } else {
      this.toolbarVisible = true
    }
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

  public mounted () {
    this.checkLogin()
    window.addEventListener('resize', this.checkToolbarHeight)
  }

  public beforeDestroy () {
    window.removeEventListener('resize', this.checkToolbarHeight)
  }

  public checkToolbarHeight () {
    this.toolbarHeight = this.$refs.toolbar && this.$refs.toolbar.$el.clientHeight
  }

  public render (h: any) {
    return (
      <div id='app'>
        { this.toolbarVisible && (<Toolbar blog={this.toolbarBlog || false} ref='toolbar' />) }
        <router-view style={this.toolbarBlog ? `height: calc( 100vh - ${this.toolbarHeight}px);` : 'height: 100vh;'} />
      </div>
    )
  }

  @Watch('$route', { immediate: true, deep: true })
    onUrlChange (newVal: any) {
      this.checkLogin()
    }

}
