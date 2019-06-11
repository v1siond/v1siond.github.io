import { Vue } from 'vue-property-decorator'
import Component from 'vue-class-component'
import PresentationTemplate from '../../../templates/components/presentationLevel'
import {
  Getter, Mutation
} from 'vuex-class'

@Component({
  name: 'About'
})
export default class About extends Vue {
  @Mutation('setTitle') public setTitle
  @Mutation('setBack') public setBack
  @Mutation('setLevelNumber') public setLevelNumber
  @Mutation('setLevelName') public setLevelName
  @Getter('getLevelNumber') public getLevelNumber: any
  @Getter('getLevelName') public getLevelName: any

  public mounted () {
    this.setTitle('LVL-1: About')
    this.setBack(true)
    this.setLevelNumber('1')
    this.setLevelName('About')
    setTimeout(() => {
      this.$router.push('/static-resume/about/abilities')
    }, 3000)
  }
  public render (h) {
    return (
      <PresentationTemplate
        getLevelNumber={this.getLevelNumber}
        getLevelName={this.getLevelName}
      />
    )
  }
}
