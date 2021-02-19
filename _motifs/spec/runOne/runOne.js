import folderMotif from '../../folder/folder.motif.js'
import formatEnum from '../../get/_enums/format/format.enum.js'
import instanceMotif from '../../instance/instance.motif.js'
import specSectionMotif from '../../spec-section/spec-section.motif.js'
import specMotif from '../spec.motif.js'

export default async (path, options) => {
  
  await folderMotif.clear('_tests')

  const [ instances ] = await Promise.all([
    instanceMotif.get(
      specMotif,
      { format: formatEnum.ESM }),
    folderMotif.create('_tests')
  ])

  const target = instances.find(instance =>
    instance.path === ('/' + path))

  return await specSectionMotif.runOne(target, options)
}