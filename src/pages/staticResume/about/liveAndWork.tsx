import { Vue } from 'vue-property-decorator'
import Component from 'vue-class-component'
import LevelSelectionTemplate from '../../../templates/pages/staticResume/levelSelection'
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
    this.setTitle('LVL-1.2: Live and Work')
    this.setBack(true)
    this.setLevelNumber('1-2')
    this.setLevelName('Live and Work')
  }
  public render (h) {
    return (
      <LevelSelectionTemplate />
    )
  }
}
