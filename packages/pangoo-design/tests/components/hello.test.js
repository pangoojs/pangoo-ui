import { createTest, destroyVM } from '../util'
import Hello from '../../components/hello'

describe('Hello', () => {
  let vm
  afterEach(() => {
    destroyVM(vm)
  })

  test('create', () => {
    vm = createTest(
      Hello,
      {
        title: 'hello Pangoo Design',
      },
      true,
    )
    expect(vm.$el.classList.contains('pangoo-design-hello__title')).toBe(true)
    setTimeout(() => {
      expect(vm.$el.querySelector('.pangoo-design-hello__title').textContent).toBe(
        'hello Pangoo Design',
      )
    }, 300)
  })
})
