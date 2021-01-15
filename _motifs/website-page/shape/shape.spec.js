import fileMotif from "../../file/file.motif.js";
import folderMotif from "../../folder/folder.motif.js";
import { CASE, FEATURE, MODULE } from "../../spec-section/_enums/type/spec-section.type.enum.js";
import websitePageMotif from "../website-page.motif.js";
import shape from "./shape.js";
import { TEMPLATE_FILE_NOT_FOUND, TEMPLATE_IS_NEITHER_STRING_NOR_FUNCTION, TEMPLATE_IS_NOT_A_PUG_FILE } from "./_errors/shape.errors.js";

export default {
  type: MODULE,
  group: [
    {
      type: FEATURE,
      label: 'Returns a new object created from '
        + 'given parameters.',
      group: [
        {
          type: FEATURE,
          label: 'Object has WEBSITE_FOLDER id as `motif` property.',
          test: () =>
            shape(() => '', {}).id
              === websitePageMotif.id
        },
        {
          type: FEATURE,
          label: 'Object has the same properties than the `data` parameter.',
          test: () => {
            const data = {
              1: 'temp',
              2: 'troiz'
            }
            const result = shape(() => '', data)
            return Object.entries(data)
              .every(([ key, value ]) =>
                result[key] === value)
          }
        }
      ]
    },
    {
      type: FEATURE,
      label: 'Take the `template` path (type `string`), '
        + 'compiles the file to a function and make it '
        + 'accessible as the `template` property of the new object.',
      test: async () => {
        const path = '_tests/website-p-pug-function'
        await folderMotif.create(path)
        const templateName = 'temp.pug'
        await fileMotif.create(
          path,
          templateName,
          () => 'div.row')
        const shaped = shape(
          path + '/' + templateName,
          {}
        )
        return shaped.template({})
          .localeCompare('<div class="row"></div>')
          === 0
      }
    },
    {
      type: FEATURE,
      label: 'Controls parameters rules, and throw exceptions '
        + 'if any is broken.',
      group: [
        {
          type: CASE,
          label: 'Parameter `template` is not of an '
            + 'allowed type (Function, string).',
          test: () => {
            try {
              shape({}, {})
              return false
            } catch (err) {
              return err.message === TEMPLATE_IS_NEITHER_STRING_NOR_FUNCTION
            }
          }
        },
        {
          type: CASE,
          label: 'Parameter `template` is a string but '
            + 'the string doesn\'t hold a `.pug` extension.',
          test: () => {
            try {
              shape('home', {})
              return false
            } catch (err) {
              return err.message === TEMPLATE_IS_NOT_A_PUG_FILE
            }
          }
        },
        {
          type: CASE,
          label: 'Parameter `template` is a string but '
            + 'the path it holds doesn\'t match any file.',
          test: () => {
            try {
              shape('home.pug', {})
              return false
            } catch (err) {
              return err.message === TEMPLATE_FILE_NOT_FOUND
            }
          }
        }
      ]
    }
  ]
}