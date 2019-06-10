import { Vue } from 'vue-property-decorator'
import Component from 'vue-class-component'
import HobbiesTemplate from '../../../templates/pages/staticResume/about/hobbies'
import {
  Mutation
} from 'vuex-class'

@Component({
  name: 'About'
})
export default class About extends Vue {
  @Mutation('setTitle') public setTitle
  @Mutation('setBack') public setBack
  @Mutation('setLevelNumber') public setLevelNumber
  @Mutation('setLevelName') public setLevelName

  public mounted () {
    this.setTitle('LVL 1-3: Hobbies')
    this.setBack(true)
    this.setLevelNumber('1-3')
    this.setLevelName('Hobbies')
  }
  public render (h) {
    return (
      <HobbiesTemplate />
    )
  }
}
