import { Mixins, Watch } from 'vue-property-decorator'
import Component from 'vue-class-component'
import HobbiesTemplate from '../../../templates/pages/staticResume/about/hobbies'
import {
  Mutation
} from 'vuex-class'
import SoundMixing from '../../mixins/soundMixin'

@Component({
  name: 'Hobbies'
})
export default class Hobbies extends Mixins(SoundMixing) {
  @Mutation('setTitle') public setTitle
  @Mutation('setBack') public setBack
  @Mutation('setLevelNumber') public setLevelNumber
  @Mutation('setLevelName') public setLevelName

  public backgroundSound () {
    this.playAudio('hobbiessong')
  }

  public mounted () {
    this.setTitle('LVL 1-4: Hobbies')
    this.setBack(true)
    this.setLevelNumber('1-4')
    this.setLevelName('Hobbies')
    this.backgroundSound()
  }

  public render (h) {
    return (
      <HobbiesTemplate router={this.$router}/>
    )
  }

  @Watch('getSound', { immediate: true, deep: true })
    onSoundChange (newVal: any) {
      this.backgroundSound()
    }
}
