export type Validator = (value: string | undefined) => string | undefined

export const required: Validator = (value: string | undefined) => (value ? undefined : 'Required')
export const minLength: (min: number) => Validator =
  (min: number) => (value: string) => ((value && value.length < min) ? `Must be at least ${min}` : undefined)
