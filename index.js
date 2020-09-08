import README from "./_shrine/readme/readme.kami.js";

/** 1. global.PATH */
import getPath from './_utils/getPath/getPath.util.js'
global.PATH = getPath(import.meta.url)

/** 2. global.FILES */
import getFiles from './_utils/getFiles/getFiles.util.js'
global.FILES = getFiles('')

/** 3. Actions */
import KAMI from "./_shrine/kami/kami.kami.js";

// KAMI.create('', 'way')
README.build()