import { Vue } from 'vue-property-decorator'
import Component from 'vue-class-component'
import FrontendTemplate from '../../../components/Skills'
import {
  Mutation
} from 'vuex-class'

@Component({
  name: 'Frontend'
})
export default class Frontend extends Vue {
  @Mutation('setTitle') public setTitle
  @Mutation('setBack') public setBack
  @Mutation('setLevelNumber') public setLevelNumber
  @Mutation('setLevelName') public setLevelName
  public current: number = 0
  public transitionName: string = 'fade'
  public show: boolean = false
  public nextUrl: any = {
    url: '/static-resume/skills/backend',
    text: 'Level 2.2'
  }
  public prevUrl: any = {
    url: '/static-resume/',
    text: 'Level Selection'
  }
  public skills: any = [
    {
      title: 'JS/Frameworks',
      techs: ['React', 'JavaScript', 'Phoenix', 'Rails', 'Vue'],
      class: ''
    },
    {
      title: 'Style',
      techs: ['Sass', 'CSS Animations', 'JS Animations', 'Stylus', 'CSS' ],
      class: ''
    },
    {
      title: 'Miscellaneous',
      techs: ['TypeScript', 'GraphQL / Apollo', 'Build Tools', 'Cypress', 'TDD'],
      class: ''
    },
    {
      title: '',
      techs: ['REST', 'Email Template', 'JQuery', 'Quasar', 'Jest' ],
      class: ''
    }
  ]


  public mounted () {
    this.setTitle('LVL-2.1: Frontend')
    this.setBack(true)
    this.setLevelNumber('2-1')
    this.setLevelName('Frontend')
  }
  public render (h) {
    return (
      <FrontendTemplate
        current={this.current}
        skills={this.skills}
        show={this.show}
        transitionName={this.transitionName}
        nextUrl={this.nextUrl}
        prevUrl={this.prevUrl}
      />
    )
  }
}
