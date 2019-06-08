import { Vue } from 'vue-property-decorator'
import Component from 'vue-class-component'
import PresentationTemplate from '../../../templates/pages/staticResume/about/presentation'
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
    this.setTitle('LVL-1: About')
    this.setBack(true)
  }
  public render (h) {
    return (
      <PresentationTemplate />
    )
  }
}
