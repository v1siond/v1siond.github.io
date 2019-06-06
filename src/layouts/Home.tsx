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

  public buttonSelected (type) {
    this.buttons.map((button) => {
      if (button.name === type) {
        button.status = true
      } else {
        button.status = false
      }
    })
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
          buttonSelected: this.buttonSelected
        }}
      />
    )
  }
}
