import { Watch, Vue, Prop, Component } from 'vue-property-decorator'
import {
  Getter
} from 'vuex-class'
import MenuTemplate from '../templates/components/menu'
@Component({
  name: 'Menu'
})
export default class Menu extends Vue {
  @Getter('getTitle') public getTitle: any
  @Getter('getBack') public getBack: any
  @Getter('getLevelNumber') public getLevelNumber: any
  @Getter('getLevelName') public getLevelName: any
  @Getter('getTime') public getTime: any
  @Prop({}) public openMenu!: any | undefined
  public opened: boolean = false

  public goBack () {
    this.$router.go(-1)
  }

  public showLevels () {
    this.opened = !this.opened
  }

  public render (h: any) {
    return (
      <MenuTemplate
        data={{
          ...this.$props,
          getTitle: this.getTitle,
          getBack: this.getBack,
          getTime: this.getTime,
          getLevelNumber: this.getLevelNumber,
          getLevelName: this.getLevelName,
          opened: this.opened
        }}
        methods={{
          backHandler: this.goBack,
          openMenu: this.openMenu,
          showLevels: this.showLevels
        }}
      />
    )
  }
}
