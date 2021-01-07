import INSTANCE from "../../instance/instance.motif.js";
import ARTICLE from '../article.motif.js'
import formatEnum from "../../get/_enums/format/format.enum.js";
import fileMotif from "../../file/file.motif.js";

/** Order the results by decreasing
 *  post date. */
export default (options = {}) =>

  new Promise(resolve =>
    
    INSTANCE.get(
      ARTICLE,
      {
        format: formatEnum.ESM,
        ...options
      })
      .then(articles =>

        Promise.all(articles.map(article => {
          
          const splitContentPath = article.path.split('/')
          splitContentPath.pop()
          return fileMotif.get(
            splitContentPath.join('/')
              + '/content.md',
            { format: formatEnum.UTF_8 }
          )
        }))
          .then(contents => 
        
            resolve(articles
              .map((article, index) => ({
                ...article,
                content: contents[index]
                  ? contents[index].content
                  : article.content
              }))
              .sort((a, b) =>
              
                parseInt(a.id) - parseInt(b.id))))))