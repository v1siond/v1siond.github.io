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
  @Prop(Boolean) public blog!: boolean | false
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
  public render (h: any) {
    return (
      <ToolbarTemplate
        getLevelNumber={this.getLevelNumber}
        getLevelName={this.getLevelName}
        showMenu={this.showMenu}
        data={{
          ...this.$props,
          getLogin: this.getLogin,
          getTitle: this.getTitle,
          getBack: this.getBack,
          blog: this.blog
        }}
        methods={{
          backHandler: this.goBack,
          logoutHandler: this.logout,
          openMenu: this.openMenu
        }}
      />
    )
  }
}
