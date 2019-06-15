import { Vue } from 'vue-property-decorator'
import Component from 'vue-class-component'
import AbilitiesTemplate from '../../../templates/pages/staticResume/about/abilities'
import {
  Mutation
} from 'vuex-class'

@Component({
  name: 'Abilities'
})
export default class Abilities extends Vue {
  @Mutation('setTitle') public setTitle
  @Mutation('setBack') public setBack
  @Mutation('setLevelNumber') public setLevelNumber
  @Mutation('setLevelName') public setLevelName
  public mounted () {
    this.setTitle('LVL-1.1: Abilities')
    this.setBack(true)
    this.setLevelNumber('1-1')
    this.setLevelName('Abilities')
  }
  public render (h) {
    return (
      <AbilitiesTemplate router={this.$router}/>
    )
  }
}
