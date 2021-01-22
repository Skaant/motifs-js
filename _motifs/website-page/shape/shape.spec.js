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
            shape(() => '', {}).motif
              === websitePageMotif.id
        },
        {
          type: FEATURE,
          label: 'Object has a `function` as `template` property '
            + '(see below for `string` `template` parameter cases).',
          test: () =>
            typeof shape(() => '', {}).template
              === 'function'
        },
        {
          type: FEATURE,
          label: 'Object has the same `data` I/O.',
          test: () => {
            const data = { valid: true }
            return shape(() => '', data).data
              === data
          }
        }
      ]
    },
    {
      type: FEATURE,
      label: 'If `string` `template` (path), returns the '
        + 'compiled and provisionned (with factory `data`) '
        + '`.pug` file template function.',
      group: [
        {
          type: FEATURE,
          label: 'When executed, the `template()` property '
            + 'returns an `pug` rendered HTML fragment.',
          test: async () => {
            const path = '_tests/website-page-shape-path-pug'
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
            return shaped.template()
              .localeCompare('<div class="row"></div>')
              === 0
          }
        },
        {
          type: FEATURE,
          label: 'Provisions by default the template data '
            + 'with factory `data` parameter.',
          test: async () => {
            const path = '_tests/website-page-shape-default-data'
            await folderMotif.create(path)
            const templateName = 'temp.pug'
            await fileMotif.create(
              path,
              templateName,
              () => 'p= content')
            const shaped = shape(
              path + '/' + templateName,
              { content: 'ok !' }
            )
            return shaped.template()
              .localeCompare('<p>ok !</p>')
              === 0
          }
        },
        {
          type: FEATURE,
          label: 'Product function can override default '
            + 'data with its own `data` parameter.',
          test: async () => {
            const path = '_tests/website-page-shape-override-data'
            await folderMotif.create(path)
            const templateName = 'temp.pug'
            await fileMotif.create(
              path,
              templateName,
              () => 'p= content')
            const shaped = shape(
              path + '/' + templateName,
              { content: 'one' }
            )
            return shaped.template({ content: 'two' })
              .localeCompare('<p>two</p>')
              === 0
          }
        }
      ]
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