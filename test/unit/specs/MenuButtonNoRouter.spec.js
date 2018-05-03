import MenuButtonNoRouter from '@/components/MenuButtonNoRouter'
import { shallow, createLocalVue } from '@vue/test-utils'
import VueRouter from 'vue-router'

const localVue = createLocalVue()
localVue.use(VueRouter)
const router = new VueRouter()

describe('MenuButtonNoRouter.vue', () => {
  it('should render correct label', () => {
    const option = {
      label: 'Test label',
      route: '/',
      icon: ''
    }

    const wrapper = shallow(MenuButtonNoRouter, {
      localVue,
      router,
      propsData: {
        option
      }
    })
    console.log(wrapper.html())
  })
})
