import fileMotif from "motifs-js/_motifs/file/file.motif.js";
import folderMotif from "motifs-js/_motifs/folder/folder.motif.js";
import { CASE, FEATURE, MODULE } from "motifs-js/_motifs/spec-section/_enums/type/spec-section.type.enum.js";
import describe from './describe.js'
import websitePageMotif from "motifs-js/_motifs/website-page/website-page.motif.js";
import { TEMPLATE_FILE_NOT_FOUND, TEMPLATE_IS_NEITHER_STRING_NOR_FUNCTION, TEMPLATE_IS_NOT_A_PUG_FILE } from "motifs-js/_motifs/website-page/describe/_errors/describe.errors.js";

export default {
  type: MODULE,
  group: [
    {
      type: FEATURE,
      label: 'Returns a new object.',
      group: [
        {
          type: FEATURE,
          label: 'Object has WEBSITE_PAGE id as `motif` property.',
          test: () => {
            const template = () => {}
            return describe(template, {}).motif
              === websitePageMotif.id
          }
        },
        {
          type: FEATURE,
          label: 'Object has the same `template` property parameter than param.',
          test: () => {
            const template = () => {}
            return describe(template, {}).template
              === template
          }
        },
        {
          type: FEATURE,
          label: 'Object has the same `data` property parameter than param.',
          test: () => {
            const template = () => {}
            const data = { value: 187 }
            return describe(template, data)
              .data.value
              === data.value
          }
        }
      ]
    },
    {
      type: FEATURE,
      label: 'When a `string` is given as the `template` param, '
        + 'seek for the `pug` file at the path the `string` describes.',
      group: [
        {
          type: CASE,
          label: 'The template file exists '
            + '(should fill description `template` with a '
            + 'compiled Pug template function).',
          test: async () => {
            const id = 'wp-describe-string-template-exists'
            const path = '_tests/' + id
            await folderMotif.create('_tests/' + id)
            await fileMotif.create(
              path,
              id + '.pug',
              () => 'div.row'
            )
            return describe(path + '/' + id + '.pug')
              .template()
              .localeCompare('<div class="row"></div>')
              === 0
          }
        },
        {
          type: CASE,
          label: 'Template param is not of an allowed type '
            + '(should throw TEMPLATE_IS_NEITHER_STRING_NOR_FUNCTION).',
          test: () => {
            try {
              describe(0)
              return false
            } catch (err) {
              return err.message === TEMPLATE_IS_NEITHER_STRING_NOR_FUNCTION
            }
          }
        },
        {
          type: CASE,
          label: 'Template path doesn\'t end with the `.pug` extenstion '
            + '(should throw TEMPLATE_IS_NOT_A_PUG_FILE).',
          test: () => {
            try {
              describe('home')
              return false
            } catch (err) {
              return err.message === TEMPLATE_IS_NOT_A_PUG_FILE 
            }
          }
        },
        {
          type: CASE,
          label: 'Template file does not exist '
            + '(should throw TEMPLATE_FILE_NOT_FOUND).',
          test: () => {
            try {
              describe('home.pug')
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