import { Watch, Vue, Prop, Component } from 'vue-property-decorator'
import {
  Getter
} from 'vuex-class'
import ToolbarTemplate from '../templates/components/toolbar'
@Component({
  name: 'Toolbar'
})
export default class Toolbar extends Vue {
  @Getter('getLogin') public getLogin: any
  @Getter('getTitle') public getTitle: any
  @Getter('getBack') public getBack: any
  @Getter('getLevelNumber') public getLevelNumber: any
  @Getter('getLevelName') public getLevelName: any
  @Getter('getTime') public getTime: any
  @Prop(Boolean) public blog!: boolean | false
  @Prop(Boolean) public mobile!: boolean | false
  public showMenu: boolean = false
  public logout () {
    localStorage.removeItem('token')
    this.$router.push('/login')
    alert('See you soon :)')
  }

  public goBack () {
    this.$router.go(-1)
  }

  public openMenu () {
    this.showMenu = !this.showMenu
  }

  public formatTime () {
    const secNum = this.getTime
    let hours: any   = Math.floor(secNum / 3600)
    let minutes: any = Math.floor((secNum - (hours * 3600)) / 60)
    let seconds: any = secNum - (hours * 3600) - (minutes * 60)

    if (hours   < 10) {
      hours   = `0${hours}`
    }
    if (minutes < 10) {
      minutes = `0${minutes}`
    }
    if (seconds < 10) {
      seconds = `0${seconds}`
    }
    return `${minutes > 60 ? `${hours}:` : ''}${minutes}:${seconds}`
}
  public render (h: any) {
    return (
      <ToolbarTemplate
        getLevelNumber={this.getLevelNumber}
        getLevelName={this.getLevelName}
        showMenu={this.showMenu}
        mobile={this.mobile}
        data={{
          ...this.$props,
          getLogin: this.getLogin,
          getTitle: this.getTitle,
          getBack: this.getBack,
          getTime: this.getTime,
          blog: this.blog
        }}
        methods={{
          backHandler: this.goBack,
          logoutHandler: this.logout,
          formatTime: this.formatTime,
          openMenu: this.openMenu
        }}
      />
    )
  }
}
