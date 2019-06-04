import { Vue } from 'vue-property-decorator'
import Component from 'vue-class-component'
import HomeTemplate from '../templates/layouts/Home'

@Component({
  name: 'categories'
})
export default class Home extends Vue {
  render (h: any) {
    return (
      <HomeTemplate/>
    )
  }
}
