import { createMock } from 'ts-auto-mock'
import { HelloWorld, testParams } from './HelloWorld'
describe('HelloWorld.ts', () => {
  it('returns name', () => {
    const paramMock = createMock<testParams>({
      name: 'World'
    })

    const result = HelloWorld(paramMock)

    expect(result).toBe('Hello World!')
  })
})