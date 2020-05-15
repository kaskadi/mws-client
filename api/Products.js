const Section = require('./section.js')
class Products extends Section {
  constructor (parent) {
    super(parent)
    this._section = 'Products'
    this.Version = '2011-10-01'
  }
  listMatchingProducts (opt) {
    opt.Action = 'ListMatchingProducts'
    if (parent.mockUp) {
      // placeholder
      return undefined
    } else {
      return this.request(opt)
    }
  }
  getMatchingProduct (opt) {
    opt.Action = 'GetMatchingProduct'
    if (parent.mockUp) {
      // placeholder
      return undefined
    } else {
      return this.request(opt)
    }
  }
  getMatchingProductForId (opt) {
    opt.Action = 'GetMatchingProductForId'
    if (parent.mockUp) {
      // placeholder
      return undefined
    } else {
      return this.request(opt)
    }
  }
  getCompetitivePricingForSKU (opt) {
    opt.Action = 'GetCompetitivePricingForSKU'
    if (parent.mockUp) {
      // placeholder
      return undefined
    } else {
      return this.request(opt)
    }
  }
  getCompetitivePricingForASIN (opt) {
    opt.Action = 'GetCompetitivePricingForASIN'
    if (parent.mockUp) {
      // placeholder
      return undefined
    } else {
      return this.request(opt)
    }
  }
  getLowestOfferListingsForSKU (opt) {
    opt.Action = 'GetLowestOfferListingsForSKU'
    if (parent.mockUp) {
      // placeholder
      return undefined
    } else {
      return this.request(opt)
    }
  }
  getLowestOfferListingsForASIN (opt) {
    opt.Action = 'GetLowestOfferListingsForASIN'
    if (parent.mockUp) {
      // placeholder
      return undefined
    } else {
      return this.request(opt)
    }
  }
  getLowestPricedOffersForSKU (opt) {
    opt.Action = 'GetLowestPricedOffersForSKU'
    if (parent.mockUp) {
      // placeholder
      return undefined
    } else {
      return this.request(opt)
    }
  }
  getLowestPricedOffersForASIN (opt) {
    opt.Action = 'GetLowestPricedOffersForASIN'
    if (parent.mockUp) {
      // placeholder
      return undefined
    } else {
      return this.request(opt)
    }
  }
  getMyFeesEstimate (opt) {
    opt.Action = 'GetMyFeesEstimate'
    if (parent.mockUp) {
      // placeholder
      return undefined
    } else {
      return this.request(opt)
    }
  }
  getMyPriceForSKU (opt) {
    opt.Action = 'GetMyPriceForSKU'
    if (parent.mockUp) {
      // placeholder
      return undefined
    } else {
      return this.request(opt)
    }
  }
  getMyPriceForASIN (opt) {
    opt.Action = 'GetMyPriceForASIN'
    if (parent.mockUp) {
      // placeholder
      return undefined
    } else {
      return this.request(opt)
    }
  }
  getProductCategoriesForSKU (opt) {
    opt.Action = 'GetProductCategoriesForSKU'
    if (parent.mockUp) {
      // placeholder
      return undefined
    } else {
      return this.request(opt)
    }
  }
  getProductCategoriesForASIN (opt) {
    opt.Action = 'GetProductCategoriesForASIN'
    if (parent.mockUp) {
      // placeholder
      return undefined
    } else {
      return this.request(opt)
    }
  }
  getServiceStatus (opt) {
    opt.Action = 'GetServiceStatus'
    return this.request(opt)
  }
}
module.exports = parent => new Products(parent)
