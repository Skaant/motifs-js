export default interface SpecSectionResult {
  type: string,
  label?: string,
  clear?: string | string[],
  group?: SpecSectionResult[]
}