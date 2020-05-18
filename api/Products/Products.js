const Section = require('../section.js')
class Products extends Section {
  constructor (parent) {
    super(parent)
    this._section = 'Products'
    this.Version = '2011-10-01'
    require('../attach-methods.js').bind(this)(['listMatchingProducts', 'getMatchingProduct', 'getMatchingProductForId', 'getCompetitivePricingForSKU', 'getCompetitivePricingForASIN', 'getLowestOfferListingsForSKU', 'getLowestOfferListingsForASIN', 'getLowestPricedOffersForSKU', 'getLowestPricedOffersForASIN', 'getMyFeesEstimate', 'getMyPriceForSKU', 'getMyPriceForASIN', 'getProductCategoriesForSKU', 'getProductCategoriesForASIN', 'getServiceStatus'])
  }
}

module.exports = parent => new Products(parent)
