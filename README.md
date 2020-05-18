# mws-node-client

**Client initialization:**

```const MWS = require('mws-client')({ AWSAccessKeyId: 'YOUR_AWS_ACCESS_KEY', SellerId: 'YOUR_SELLER_ID', MWSAuthToken: 'YOUR_MWS_AUTH_TOKEN' })```

- `options` `<Object>`
  - `AWSAccessKeyId` `<String>`: your AWS access key ID
  - `MWSAuthToken` `<String>`: your MWS authentication token
  - `SellerId` `<String>`: your seller ID
  - `SignatureVersion` `<String>` [optional]: your desired signature version. _Default:_ `'2'`
  - `SignatureMethod` `<String>` [optional]: your desired signature method. _Default:_ `'HmacSHA256'`
  - `userAgent` `<String>` [optional]: your desired user agent. _Default:_ `'kaskadi-mws-sdk/VERSION (Language=node.js)'`

**Client usage:**

Each API section is available as method of your `MWS` client. Each endpoint is then accessible as the method of the section. For example, `MWS.fulfillmentInventory.listInventorySupply(options)` will call the `listInventorySupply` `<Promise>` endpoint of the `fulfillmentInventory` section. The `options` used here are the regular ones for this endpoint.

_Examples:_

- ```const list = await MWS.fulfillmentInventory.listInventorySupply({ QueryStartDateTime: new Date(d).toISOString(), ResponseGroup: 'Basic', _marketplace: 'DE' })```
- ```const status = await MWS.fulfillmentInventory.getServiceStatus({ _marketplace: 'DE' })```

**Available sections:**

- `EasyShip`
- `Feeds`
- `Finances`
- `FulfillmentInboundShipment`
- `FulfillmentInventory`
- `FulfillmentOutboundShipment`
- `MerchantFulfillment`
- `Orders`
- `Products`
- `Recommendations`
- `Reports`
- `Sellers`
- `Subscriptions`