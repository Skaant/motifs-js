export default interface SpecSection {
  type: string,
  label?: string,
  clear?: string | string[],
  group?: SpecSection[]
  test?: Function
}