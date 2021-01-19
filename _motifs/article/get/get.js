import INSTANCE from "../../instance/instance.motif.js";
import ARTICLE from '../article.motif.js'
import formatEnum from "../../get/_enums/format/format.enum.js";
import fileMotif from "../../file/file.motif.js";
import bookImageMotif from "motifs-js/_motifs/book-image/book-image.motif.js";
import instanceMotif from "../../instance/instance.motif.js";

/** Order the results by decreasing
 *  post date. */
export default async (options = {}) => {

  const _articles = await INSTANCE.get(
    ARTICLE,
    {
      format: formatEnum.ESM,
      ...options
    })

  const articles = await _articles.reduce(
    async (acc, article) => {
      const resolvedAcc = await acc
      const splitFolderPath = article.path.split('/')
      splitFolderPath.pop()
      const path = splitFolderPath.join('/')
      const { content } = await fileMotif.get(
        path + '/content.md',
        { format: formatEnum.UTF_8 }
      )
      /** @note images deserve a better MOTIF than BOOK_IMAGE */
      const images = await instanceMotif.get(
        bookImageMotif,
        {
          format: formatEnum.FILE_PATH,
          scope: path
        },
      )
      return [
        ...resolvedAcc,
        {
          ...article,
          content: content || article.content,
          images
        }
      ]
    },
    []
  )

  return articles
}