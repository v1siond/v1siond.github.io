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
  public works: any = [
    {
      from: '',
      to: '',
      organization: '',
      description: '',
      work: [
        {
          descriptio: '',
          url: ''
        }
      ]
    }
  ]
  public render (h) {
    return (
      <WorkTemplate
        works={this.works}
      />
    )
  }
}
