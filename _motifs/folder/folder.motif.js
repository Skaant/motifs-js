
import { EN, FR } from "../lang/_enums/lang.enum.js";
import create from "./create/create.js";
import copy from "./copy/copy.js";
import clear from "./clear/clear.js";

export default {
  id: 'folder',
  symbol: '◰',
  names: {
    [EN]: 'Folder',
    [FR]: 'Dossier'
  },
  create,
  copy,
  clear
}