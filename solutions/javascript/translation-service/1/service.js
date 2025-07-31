/// <reference path="./global.d.ts" />
// @ts-check
//
// The lines above enable type checking for this file. Various IDEs interpret
// the @ts-check and reference directives. Together, they give you helpful
// autocompletion when implementing this exercise. You don't need to understand
// them in order to use it.
//
// In your own projects, files, and code, you can play with @ts-check as well.

export class TranslationService {
  /**
   * Creates a new service
   * @param {ExternalApi} api the original api
   */
  constructor(api) {
    this.api = api;
  }

  /**
   * Attempts to retrieve the translation for the given text.
   *
   * - Returns whichever translation can be retrieved, regardless the quality
   * - Forwards any error from the translation api
   *
   * @param {string} text
   * @returns {Promise<string>}
   */
  free(text) {
    return this.api.fetch(text)
      .then(res => res.translation)
      .catch((error)=>{
        throw error
      })
  }

  /**
   * Batch translates the given texts using the free service.
   *
   * - Resolves all the translations (in the same order), if they all succeed
   * - Rejects with the first error that is encountered
   * - Rejects with a BatchIsEmpty error if no texts are given
   *
   * @param {string[]} texts
   * @returns {Promise<string[]>}
   */
  /*
function processItem(item) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`Processing item ${item}`);
      resolve(item);
    }, Math.random() * 1000);
  });
}

async function processItems() {
  let result = 0
  for (const item of items) {
    result = await processItem(result + item);
  }
  console.log('All items processed');
}
*/
  async batch(texts) {
    let responses = []
    
    for(let i=0 ; i<texts.length; i++){
      const res = await this.free(texts[i])
      responses.push(res)
    }

    if(responses.length>0) {
      return Promise.resolve()
            .then(()=> responses)
    } else {
      return Promise.reject(new BatchIsEmpty());
    }   
  }

  /**
   * Requests the service for some text to be translated.
   *
   * Note: the request service is flaky, and it may take up to three times for
   *       it to accept the request.
   *
   * @param {string} text
   * @returns {Promise<void>}
   */
  request(text, attempt = 1) {

     return new Promise((resolve, reject) => {
      this.api.request(text, (err) => {
        if (err) {
          if (attempt < 3) {
            return this.request(text, attempt + 1).then(resolve, reject);
          }
          return reject(err);
        }
        return resolve();
      })
    })
  }
  
  /**
   * Retrieves the translation for the given text
   *
   * - Rejects with an error if the quality can not be met
   * - Requests a translation if the translation is not available, then retries
   *
   * @param {string} text
   * @param {number} minimumQuality
   * @returns {Promise<string>}
   */
  premium(text, minimumQuality) {
      return this.api.fetch(text).then(
        ({translation, quality})=>
        {
          if(quality<minimumQuality){
            throw new QualityThresholdNotMet()
          }
          return translation
        }, 
        ()=>this.request(text).then(()=> this.premium(text, minimumQuality))
      )
  }
}

/**
 * This error is used to indicate a translation was found, but its quality does
 * not meet a certain threshold. Do not change the name of this error.
 */
export class QualityThresholdNotMet extends Error {
  /**
   * @param {string} text
   */
  constructor(text) {
    super(
      `
The translation of ${text} does not meet the requested quality threshold.
    `.trim(),
    );

    this.text = text;
  }
}

/**
 * This error is used to indicate the batch service was called without any
 * texts to translate (it was empty). Do not change the name of this error.
 */
export class BatchIsEmpty extends Error {
  constructor() {
    super(
      `
Requested a batch translation, but there are no texts in the batch.
    `.trim(),
    );
  }
}

