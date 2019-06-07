import { Vue } from 'vue-property-decorator'
import Component from 'vue-class-component'
import AboutTemplate from '../../templates/staticResume/About'
import {
  Mutation
} from 'vuex-class'

@Component({
  name: 'About'
})
export default class About extends Vue {
  @Mutation('setTitle') public setTitle
  @Mutation('setBack') public setBack
  public mounted () {
    this.setTitle('About')
    this.setBack(true)
  }
  public render (h) {
    return (
      <AboutTemplate />
    )
  }
}
