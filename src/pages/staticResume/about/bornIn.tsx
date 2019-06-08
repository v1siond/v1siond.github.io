import { Vue } from 'vue-property-decorator'
import Component from 'vue-class-component'
import BornInTemplate from '../../../templates/pages/staticResume/about/bornIn'
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
    this.setTitle('LVL-1.1: Born In')
    this.setBack(true)
  }
  public render (h) {
    return (
      <BornInTemplate />
    )
  }
}
