import { createApp } from 'vue'

describe('import vue', () => {
  test('create vue app', () => {
    const app = createApp({
      data () {
        return {
          msg: 'hello',
        }
      },
      template: '<div>hello</div>',
    })
    expect(app._instance.proxy.msg).toBe('hello')
  })
})