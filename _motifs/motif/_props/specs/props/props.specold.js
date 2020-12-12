import langEnum from "../../../../lang/_enums/lang.enum.js";

const LANG_EMPTY_NAME_PLACEHOLDER = {
  [langEnum.ABS]: 'ZOMMM',
  [langEnum.EN]: 'Unknown',
  [langEnum.FR]: 'Inconnu'
}

export default kami =>

  new Promise(resolve =>

    resolve([

      /** 1. `id` */
      [
        !!kami.id,
        'Prop `id` is required' ],
      [
        typeof kami.id === 'string',
        'Prop `id` should be of type "string"' ],
      [
        kami.id.length > 0,
        'Prop `id` should be a non-empty string' ],

      /** 2. `names` */
      [
        typeof kami.names === 'object'
          && !Array.isArray(kami.names) > 0,
        'Prop `names` should be an object' ],

      ...Object.values(langEnum).map(lang => {

        const names = kami.names[lang]
        
        return [
          !!names
            && (typeof names === 'string'
              ? names !== LANG_EMPTY_NAME_PLACEHOLDER[lang]
              
              : true),
          `Prop \`names[${ lang }]\` is required (${
            Array.isArray(names) ? names.join(', ') : names })`
        ]
      }),

      /** 3. `description` */
      [
        kami.description !== 'New KAMI !'
          && kami.description !== '',
        'Prop `description` should be a non-empty string'
      ]
    ]))