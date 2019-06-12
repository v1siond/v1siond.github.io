import { Vue } from 'vue-property-decorator'
import Component from 'vue-class-component'
import Frontend from '../../../templates/pages/staticResume/skills/frontend'
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
  public current: number = 0
  public direction: number = 1
  public transitionName: string = 'fade'
  public show: boolean = false
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
  public $refs!: {
    moveSand: any
  }

  slide (dir) {
    this.direction = dir
    dir === 1
      ? (this.transitionName = 'slide-next')
      : (this.transitionName = 'slide-prev')
    const len = this.skills.length
    this.current = (this.current + dir % len + len) % len
    setTimeout(() => {
      this.$refs.moveSand.style.transition = 'unset'
    }, 2500)
    setTimeout(() => {
      this.transitionName = ''
      this.$refs.moveSand.style.left = `${this.current > 0 ? this.current * -100 : -100}%`
    }, 3000)
    this.$refs.moveSand.style.transition = 'all 3s'
  }

  public mounted () {
    this.setTitle('LVL-2.1: Frontend')
    this.setBack(true)
    this.setLevelNumber('2-1')
    this.setLevelName('Frontend')
    this.show = true
  }
  public render (h) {
    return (
      <Frontend
        current={this.current}
        skills={this.skills}
        slide={this.slide}
        show={this.show}
        transitionName={this.transitionName}
      />
    )
  }
}
