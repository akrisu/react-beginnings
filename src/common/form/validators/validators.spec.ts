import { minLength, required } from './validators'

describe('minLength validator', () => {
  const minimumLength = 5

  it('should return an error of string type if provided value is shorter than provided minimum length', () => {
    const result = minLength(minimumLength)('Foo')

    expect(typeof result).toBe('string')
  })

  it('should return an error that contains the minimum length if provided value is shorter than it', () => {
    const result = minLength(minimumLength)('Foo')

    expect(result).toContain(minimumLength)
  })

  it('should pass validation if provided value is longer than provided minimum length', () => {
    const result = minLength(minimumLength)('FooFoo')

    expect(result).toBeUndefined()
  })

  it('should pass validation if provided value is exactly the same as provided minimum length', () => {
    const result = minLength(minimumLength)('FooFo')

    expect(result).toBeUndefined()
  })

})

describe('required validator', () => {
  it('should return an error of string type if provided value is undefined', () => {
    const result = required(undefined)

    expect(typeof result).toBe('string')
  })

  it('should pass validation if provided value is defined', () => {
    const result = required('Foo')

    expect(result).toBeUndefined()
  })
})
