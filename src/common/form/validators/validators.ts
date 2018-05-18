export type Validator = (value: string | undefined) => string | undefined

export const required: Validator = value => (value ? undefined : 'Required')
export const minLength: (min: number) => Validator = min => value =>
  (value && value.length < min) ? `Must be at least ${min}` : undefined
