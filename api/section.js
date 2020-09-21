/** A section of MWS API. **Note: all sections and associated endpoints are generated automatically when instanciating a new client** */
class Section {
  constructor (parent) {
    this.parent = parent
  }

  /**
   * Response received from MWS API
   * @typedef {Object} MWSResponse
   * @property {Object} headers - Headers of the response received from the _MWS API_. Those are typical `Headers` as you would find in the {@link https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API|`Fetch`} API.
   * @property {number} status - Response status code
   * @property {Object} body - Parsed body from _MWS API_ response
   */

  /**
   * Send a request to the given endpoint
   * @alias Section.endpoint
   * @param {Object} opts - Parameters for the API call. See {@link #sections|here} for details regarding parameters for every endpoints. **Note: list parameters are not supporting arrays yet. You will have to build it in the same way as they appear in the query string of the signed request to MWS API (i.e. `param.1=foo&param.2=bar`)**
   * @return {MWSResponse} Response received from MWS API
   *
   * @example
   *
   * // retrieves inventory from given date for the German marketplace
   * const list = await MWS.fulfillmentInventory.listInventorySupply({
   *   QueryStartDateTime: new Date(d).toISOString(),
   *   ResponseGroup: 'Basic',
   *   _marketplace: 'DE'
   * })
   *
   * // retrieve status of the fullfillmentInventory API for the German marketplace
   * const status = await MWS.fulfillmentInventory.getServiceStatus({ _marketplace: 'DE' })
   */

  request (opt) {
    opt._section = this._section
    opt.Version = this.Version
    return this.parent.request(opt)
  }
}
module.exports = Section
