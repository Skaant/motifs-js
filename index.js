import README from "./_shrine/readme/readme.kami.js";

/** 1. global.PATH */

import getPath from './_helpers/getPath/getPath.util.js'

global.PATH = getPath(import.meta.url)

/** 2. global.FILES */

import getFiles from './_helpers/getFiles/getFiles.util.js'

global.FILES = getFiles('')

README.build()