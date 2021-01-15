import fileMotif from "motifs-js/_motifs/file/file.motif.js";
import folderMotif from "motifs-js/_motifs/folder/folder.motif.js";
import { CASE, FEATURE, MODULE } from "motifs-js/_motifs/spec-section/_enums/type/spec-section.type.enum.js";
import websitePageMotif from "../website-page.motif.js";
import { TEMPLATE_FILE_NOT_FOUND, TEMPLATE_IS_NEITHER_STRING_NOR_FUNCTION, TEMPLATE_IS_NOT_A_PUG_FILE } from "./_errors/describe.errors.js";
import shape from "./shape.js";

describe('WEBSITE-PAGE shape', () => {

  describe('Returns a new object', () => {

    test('Object has WEBSITE_PAGE id as `motif` property', () => {
      const template = () => {}
      expect(shape(template, {}).motif)
        .toEqual(websitePageMotif.id)
    })
  })
})