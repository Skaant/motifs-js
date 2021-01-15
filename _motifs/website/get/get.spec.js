import { FEATURE, MODULE } from "motifs-js/_motifs/spec-section/_enums/type/spec-section.type.enum.js";
import get from "./get.js";
import specsCreateWebsiteUtil from "motifs-js/_motifs/website/_utils/specsCreateWebsite/specsCreateWebsite.util.js";
import getFiles from 'motifs-js/_motifs/motif/init/_utils/getFiles/getFiles.js'
import exclusionRules from "motifs-js/_motifs/motif/init/exclusionRules.js";
import { INCLUDE } from "motifs-js/_motifs/motif/init/_utils/getFiles/_enums/rules/rules.enum.js";

export default {
  type: MODULE,
  group: [
    {
      type: FEATURE,
      label: 'Returns all websites found if no id is given.',
      test: async () => {
        const path = 'website-get-no-id'
        await specsCreateWebsiteUtil('_tests', path)
        global['_' + FILES] = global[FILES]
        global[FILES] = getFiles(
          '',
          {
            ...exclusionRules,
            '_tests': INCLUDE
          })
        const websites = await get()
        return Array.isArray(websites)
          && !!(websites.find(website => website.id === path))
      }
    },
    {
      type: FEATURE,
      label: 'Returns only identified website.',
      test: () => false
    },
    {
      type: FEATURE,
      label: 'Returns only websites in given scope.',
      test: () => false
    }
  ]
}