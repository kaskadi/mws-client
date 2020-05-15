const Section = require('./section.js')
class Products extends Section {
  constructor (parent) {
    super(parent)
    this._section = 'Products'
    this.Version = '2011-10-01'
  }

  listMatchingProducts (opt) {
    opt.Action = 'ListMatchingProducts'
    if (this.parent.mockUp) {
      // placeholder
      return undefined
    } else {
      return this.request(opt)
    }
  }

  getMatchingProduct (opt) {
    opt.Action = 'GetMatchingProduct'
    if (this.parent.mockUp) {
      // placeholder
      return undefined
    } else {
      return this.request(opt)
    }
  }

  getMatchingProductForId (opt) {
    opt.Action = 'GetMatchingProductForId'
    if (this.parent.mockUp) {
      // placeholder
      return undefined
    } else {
      return this.request(opt)
    }
  }

  getCompetitivePricingForSKU (opt) {
    opt.Action = 'GetCompetitivePricingForSKU'
    if (this.parent.mockUp) {
      // placeholder
      return undefined
    } else {
      return this.request(opt)
    }
  }

  getCompetitivePricingForASIN (opt) {
    opt.Action = 'GetCompetitivePricingForASIN'
    if (this.parent.mockUp) {
      // placeholder
      return undefined
    } else {
      return this.request(opt)
    }
  }

  getLowestOfferListingsForSKU (opt) {
    opt.Action = 'GetLowestOfferListingsForSKU'
    if (this.parent.mockUp) {
      // placeholder
      return undefined
    } else {
      return this.request(opt)
    }
  }

  getLowestOfferListingsForASIN (opt) {
    opt.Action = 'GetLowestOfferListingsForASIN'
    if (this.parent.mockUp) {
      // placeholder
      return undefined
    } else {
      return this.request(opt)
    }
  }

  getLowestPricedOffersForSKU (opt) {
    opt.Action = 'GetLowestPricedOffersForSKU'
    if (this.parent.mockUp) {
      // placeholder
      return undefined
    } else {
      return this.request(opt)
    }
  }

  getLowestPricedOffersForASIN (opt) {
    opt.Action = 'GetLowestPricedOffersForASIN'
    if (this.parent.mockUp) {
      // placeholder
      return undefined
    } else {
      return this.request(opt)
    }
  }

  getMyFeesEstimate (opt) {
    opt.Action = 'GetMyFeesEstimate'
    if (this.parent.mockUp) {
      // placeholder
      return undefined
    } else {
      return this.request(opt)
    }
  }

  getMyPriceForSKU (opt) {
    opt.Action = 'GetMyPriceForSKU'
    if (this.parent.mockUp) {
      // placeholder
      return undefined
    } else {
      return this.request(opt)
    }
  }

  getMyPriceForASIN (opt) {
    opt.Action = 'GetMyPriceForASIN'
    if (this.parent.mockUp) {
      // placeholder
      return undefined
    } else {
      return this.request(opt)
    }
  }

  getProductCategoriesForSKU (opt) {
    opt.Action = 'GetProductCategoriesForSKU'
    if (this.parent.mockUp) {
      // placeholder
      return undefined
    } else {
      return this.request(opt)
    }
  }

  getProductCategoriesForASIN (opt) {
    opt.Action = 'GetProductCategoriesForASIN'
    if (this.parent.mockUp) {
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
