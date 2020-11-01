import PAGE from '../../../../_shrine/website/_shrine/page/page.kami.js'
import FOLDER from '../../../../_shrine/folder/folder.kami.js'
import homeTemplate from "../../../_templates/home/home.template.js"
import motifTemplate from '../../../_templates/motif/motif.template.js'

export default (
  scope,
  data,
  options
) => ([
  /** / */
  PAGE.create(
    homeTemplate,
    data,
    scope,
    options
  ),
  /** /:motif_id */
  ...data.motifs.map(motif =>

    FOLDER.create(
      scope,
      (motif.parents
        ? (motif.parents.join('-')
          + '-')
          
        : '')
        + motif.id,
      folderScope => ([
        /** /articles/ */
        PAGE.create(
          motifTemplate,
          {
            ...data,
            motif
          },
          folderScope,
          options
        )
      ])
    ))
])