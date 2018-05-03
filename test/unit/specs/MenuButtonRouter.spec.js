import MenuButtonRouter from '@/components/MenuButtonRouter'
import { shallow, createLocalVue } from '@vue/test-utils'
import VueRouter from 'vue-router'

const localVue = createLocalVue()
localVue.use(VueRouter)
const router = new VueRouter()

describe('MenuButtonRouter.vue', () => {
  it('should render correct label', () => {
    const option = {
      label: 'Test label',
      route: '/',
      icon: ''
    }

    const wrapper = shallow(MenuButtonRouter, {
      localVue,
      router,
      propsData: {
        option
      }
    })
    console.log(wrapper.html())
  })
})
