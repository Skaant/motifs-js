import { CASE, FEATURE, MODULE } from "motifs-js/_motifs/spec-section/_enums/type/spec-section.type.enum.js";

export default {
  type: MODULE,
  group: [
    {
      type: FEATURE,
      label: 'Given a WEBSITE_FOLDER description, '
        + 'build its content.',
      group: [
        {
          type: CASE,
          label: '',
          test: () => false
        }
      ]
    },
    {
      type: FEATURE,
      label: 'Returns an object with the `sitemap` property.',
      test: () => false
    },
    {
      type: FEATURE,
      label: 'Given a scope, build the folder at location.',
      test: () => false
    }
  ]
}