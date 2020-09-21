/** A section of MWS API. */
class Section {
  constructor (parent) {
    this.parent = parent
  }

  /**
   * Response received from MWS API
   * @typedef {Object} MWSResponse
   * @property {Object} headers - headers of the response received from the _MWS API_. Those are typical `Headers` as you would find in the `fetch` API.
   * @property {number} status - response status code
   * @property {Object} body - parsed body from _MWS API_ response
   */

  /**
   * Send a request to the given endpoint.
   * @alias Section.endpoint
   * @param {Object} - parameters for the API call. See {@link #sections|here} for details regarding parameters for every endpoints.
   * @return {MWSResponse} Response received from MWS API
   *
   * @example
   *
   * const list = await MWS.fulfillmentInventory.listInventorySupply({
   *   QueryStartDateTime: new Date(d).toISOString(),
   *   ResponseGroup: 'Basic', _marketplace: 'DE'
   * })
   *
   * const status = await MWS.fulfillmentInventory.getServiceStatus({ _marketplace: 'DE' })
   */

  request (opt) {
    opt._section = this._section
    opt.Version = this.Version
    return this.parent.request(opt)
  }
}
module.exports = Section
