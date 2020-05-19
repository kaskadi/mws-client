# mws-node-client

**Client initialization:**

`const MWS = require('mws-client')({ AWSAccessKeyId: 'YOUR_AWS_ACCESS_KEY', SellerId: 'YOUR_SELLER_ID', MWSAuthToken: 'YOUR_MWS_AUTH_TOKEN' })`

- `options` `<Object>`
  - `AWSAccessKeyId` `<String>`: your AWS access key ID
  - `MWSAuthToken` `<String>`: your MWS authentication token
  - `SellerId` `<String>`: your seller ID
  - `SignatureVersion` `<String>` [optional]: your desired signature version. _Default:_ `'2'`
  - `SignatureMethod` `<String>` [optional]: your desired signature method. _Default:_ `'HmacSHA256'`
  - `userAgent` `<String>` [optional]: your desired user agent. _Default:_ `'kaskadi-mws-client/VERSION (Language=node.js)'`
- returns `<Class>`, instance of MWS client

**Client usage:**

Each API section is available as method of your `MWS` client. Each endpoint is then accessible as the method of the section. For example, `MWS.fulfillmentInventory.listInventorySupply(options)` will call the `listInventorySupply` `<Promise>` endpoint of the `fulfillmentInventory` section. The `options` used here are the regular ones for this endpoint.

_Examples:_

- `const list = await MWS.fulfillmentInventory.listInventorySupply({ QueryStartDateTime: new Date(d).toISOString(), ResponseGroup: 'Basic', _marketplace: 'DE' })`
- `const status = await MWS.fulfillmentInventory.getServiceStatus({ _marketplace: 'DE' })`

**Available sections & endpoints:**

- `EasyShip`
  - `listPickupSlots`
  - `createScheduledPackage`
  - `updateScheduledPackages`
  - `getScheduledPackage`
  - `getServiceStatus`
- `Feeds`
  - `submitFeed`
  - `getFeedSubmissionList`
  - `getFeedSubmissionCount`
  - `cancelFeedSubmissions`
  - `getFeedSubmissionResult`
- `Finances`
  - `listFinancialEventGroups`
  - `listFinancialEvents`
  - `getServiceStatus`
- `FulfillmentInboundShipment`
  - `getInboundGuidanceForSKU`
  - `getInboundGuidanceForASIN`
  - `createInboundShipmentPlan`
  - `createInboundShipment`
  - `updateInboundShipment`
  - `getPreorderInfo`
  - `confirmPreorder`
  - `getPrepInstructionsForSKU`
  - `getPrepInstructionsForASIN`
  - `putTransportContent`
  - `estimateTransportRequest`
  - `getTransportContent`
  - `confirmTransportRequest`
  - `voidTransportRequest`
  - `getPackageLabels`
  - `getUniquePackageLabels`
  - `getPalletLabels`
  - `getBillOfLading`
  - `listInboundShipments`
  - `listInboundShipmentItems`
  - `getServiceStatus`
- `FulfillmentInventory`
  - `listInventorySupply`
  - `getServiceStatus`
- `FulfillmentOutboundShipment`
  - `getFulfillmentPreview`
  - `createFulfillmentOrder`
  - `updateFulfillmentOrder`
  - `listAllFulfillmentOrders`
  - `getFulfillmentOrder`
  - `getPackageTrackingDetails`
  - `cancelFulfillmentOrder`
  - `listReturnReasonCodes`
  - `createFulfillmentReturn`
  - `getServiceStatus`
- `MerchantFulfillment`
  - `getEligibleShippingServices`
  - `createShipment`
  - `getShipment`
  - `cancelShipment`
  - `getServiceStatus`
- `Orders`
  - `listOrders`
  - `getOrder`
  - `listOrderItems`
  - `getServiceStatus`
- `Products`
  - `listMatchingProducts`
  - `getMatchingProduct`
  - `getMatchingProductForId`
  - `getCompetitivePricingForSKU`
  - `getCompetitivePricingForASIN`
  - `getLowestOfferListingsForSKU`
  - `getLowestOfferListingsForASIN`
  - `getLowestPricedOffersForSKU`
  - `getLowestPricedOffersForASIN`
  - `getMyFeesEstimate`
  - `getMyPriceForSKU`
  - `getMyPriceForASIN`
  - `getProductCategoriesForSKU`
  - `getProductCategoriesForASIN`
  - `getServiceStatus`
- `Recommendations`
  - `getLastUpdatedTimeForRecommendations`
  - `listRecommendations`
  - `getServiceStatus`
- `Reports`
  - `requestReport`
  - `getReportRequestList`
  - `getReportRequestCount`
  - `cancelReportRequests`
  - `getReportList`
  - `getReportCount`
  - `getReport`
  - `manageReportSchedule`
  - `getReportScheduleList`
  - `getReportScheduleCount`
  - `updateReportAcknowledgements`
- `Sellers`
  - `listMarketplaceParticipations`
  - `getServiceStatus`
- `Subscriptions`
  - `registerDestination`
  - `deregisterDestination`
  - `listRegisteredDestinations`
  - `sendTestNotificationToDestination`
  - `createSubscription`
  - `getSubscription`
  - `deleteSubscription`
  - `listSubscriptions`
  - `updateSubscription`
  - `getServiceStatus`
  