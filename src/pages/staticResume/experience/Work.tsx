import { Vue } from 'vue-property-decorator'
import Component from 'vue-class-component'
import WorkTemplate from '../../../templates/pages/staticResume/experience/work'
import {
  Mutation
} from 'vuex-class'

@Component({
  name: 'Work'
})
export default class Work extends Vue {
  public $refs!: {
    character,
    movingBg1,
    movingBg
  }
  public works: any = [
    {
      from: '',
      to: '',
      organization: '',
      description: '',
      work: [
        {
          description: '',
          url: ''
        }
      ]
    }
  ]
  public moveBackground (n, anim) {
    console.log(this.$refs)
    this.$refs.character.className = `character -experience ${anim}`
    this.$refs.movingBg.style.left = `${n}%`
    this.$refs.movingBg1.style.left = `${n}%`
  }
  public render (h) {
    return (
      <WorkTemplate
        works={this.works}
        moveBackground={this.moveBackground}
      />
    )
  }
}
