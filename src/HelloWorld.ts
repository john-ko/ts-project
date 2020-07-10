export interface testParams {
  name: string
}

export function HelloWorld (params: testParams): string {
  return `Hello ${params.name}!`
}
