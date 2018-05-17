export type Validator = (value: string) => string | undefined

export const required = (value: string | undefined) => (value ? undefined : 'Required')
export const minLength = (min: number) => (value: string) => ((value && value.length < min) ? `Must be at least ${min}` : undefined)
