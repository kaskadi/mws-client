# mws-node-client usage

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

**Return value:**

Each endpoint of the MWS client returns an `<Object>` which contains:
- `headers` `Headers <Object>`: the headers of the response received from the _MWS API_. Those are typical `Headers` as you would find in the `fetch` API.
- `status` `<Number>`: response status code
- `body` `<Object>`: parsed body from _MWS API_ XML response

**Note on throttling:**

This client **does not** include throttling handling. The reason being that our internal implementation uses `Lambda` functions which are not persistent and therefore instantiate a new client at each function call. This makes a throttling handled via client irrelevant since multiple clients may be instantiated in a short period of time (or even in parallel) to call the same endpoint which leads to a client throttling state not reflecting the actual throttling state of the _MWS API_.

We encourage you to implement your own throttling handling in your infrastructure so that it fits your implementation. You can refer to [_MWS API_ documentation](https://docs.developer.amazonservices.com/en_UK/dev_guide/DG_Throttling.html) for more information on this.

_Reminder:_ response headers are exposed via the `mws-client` return value so you may use those to handle an hourly capped endpoint.

**Note on client implementation:**

This client uses **_signed requests_** to communicate with the _MWS API_. See docs [here](https://docs.developer.amazonservices.com/en_UK/dev_guide/DG_QueryString.html) and [there](https://docs.developer.amazonservices.com/en_UK/dev_guide/DG_SigningQueryRequest.html) for more details.

# Available sections & endpoints

**All items listed here point to the MWS API docs**

- [`EasyShip`](https://docs.developer.amazonservices.com/en_UK/easy_ship/EasyShip_Overview.html)
  - [`listPickupSlots`](https://docs.developer.amazonservices.com/en_UK/easy_ship/EasyShip_ListPickupSlots.html)
  - [`createScheduledPackage`](https://docs.developer.amazonservices.com/en_UK/easy_ship/EasyShip_CreateScheduledPackage.html)
  - [`updateScheduledPackages`](https://docs.developer.amazonservices.com/en_UK/easy_ship/EasyShip_UpdateScheduledPackages.html)
  - [`getScheduledPackage`](https://docs.developer.amazonservices.com/en_UK/easy_ship/EasyShip_GetScheduledPackage.html)
  - [`getServiceStatus`](https://docs.developer.amazonservices.com/en_UK/easy_ship/EasyShip_GetServiceStatus.html)
- [`Feeds`](https://docs.developer.amazonservices.com/en_UK/feeds/Feeds_Overview.html)
  - [`submitFeed`](https://docs.developer.amazonservices.com/en_UK/feeds/Feeds_SubmitFeed.html)
  - [`getFeedSubmissionList`](https://docs.developer.amazonservices.com/en_UK/feeds/Feeds_GetFeedSubmissionList.html)
  - [`getFeedSubmissionListByNextToken`](https://docs.developer.amazonservices.com/en_UK/feeds/Feeds_GetFeedSubmissionListByNextToken.html)
  - [`getFeedSubmissionCount`](https://docs.developer.amazonservices.com/en_UK/feeds/Feeds_GetFeedSubmissionCount.html)
  - [`cancelFeedSubmissions`](https://docs.developer.amazonservices.com/en_UK/feeds/Feeds_CancelFeedSubmissions.html)
  - [`getFeedSubmissionResult`](https://docs.developer.amazonservices.com/en_UK/feeds/Feeds_GetFeedSubmissionResult.html)
- [`Finances`](https://docs.developer.amazonservices.com/en_UK/finances/Finances_Overview.html)
  - [`listFinancialEventGroups`](https://docs.developer.amazonservices.com/en_UK/finances/Finances_ListFinancialEventGroups.html)
  - [`listFinancialEventGroupsByNextToken`](https://docs.developer.amazonservices.com/en_UK/finances/Finances_ListFinancialEventGroupsByNextToken.html)
  - [`listFinancialEvents`](https://docs.developer.amazonservices.com/en_UK/finances/Finances_ListFinancialEvents.html)
  - [`listFinancialEventsByNextToken`](https://docs.developer.amazonservices.com/en_UK/finances/Finances_ListFinancialEventsByNextToken.html)
  - [`getServiceStatus`](https://docs.developer.amazonservices.com/en_UK/finances/Finances_GetServiceStatus.html)
- [`FulfillmentInboundShipment`](https://docs.developer.amazonservices.com/en_UK/fba_inbound/FBAInbound_Overview.html)
  - [`getInboundGuidanceForSKU`](https://docs.developer.amazonservices.com/en_UK/fba_inbound/FBAInbound_GetInboundGuidanceForSKU.html)
  - [`getInboundGuidanceForASIN`](https://docs.developer.amazonservices.com/en_UK/fba_inbound/FBAInbound_GetInboundGuidanceForASIN.html)
  - [`createInboundShipmentPlan`](https://docs.developer.amazonservices.com/en_UK/fba_inbound/FBAInbound_CreateInboundShipmentPlan.html)
  - [`createInboundShipment`](https://docs.developer.amazonservices.com/en_UK/fba_inbound/FBAInbound_CreateInboundShipment.html)
  - [`updateInboundShipment`](https://docs.developer.amazonservices.com/en_UK/fba_inbound/FBAInbound_UpdateInboundShipment.html)
  - [`getPreorderInfo`](https://docs.developer.amazonservices.com/en_UK/fba_inbound/FBAInbound_GetPreorderInfo.html)
  - [`confirmPreorder`](https://docs.developer.amazonservices.com/en_UK/fba_inbound/FBAInbound_ConfirmPreorder.html)
  - [`getPrepInstructionsForSKU`](https://docs.developer.amazonservices.com/en_UK/fba_inbound/FBAInbound_GetPrepInstructionsForSKU.html)
  - [`getPrepInstructionsForASIN`](https://docs.developer.amazonservices.com/en_UK/fba_inbound/FBAInbound_GetPrepInstructionsForASIN.html)
  - [`putTransportContent`](https://docs.developer.amazonservices.com/en_UK/fba_inbound/FBAInbound_PutTransportContent.html)
  - [`estimateTransportRequest`](https://docs.developer.amazonservices.com/en_UK/fba_inbound/FBAInbound_EstimateTransportRequest.html)
  - [`getTransportContent`](https://docs.developer.amazonservices.com/en_UK/fba_inbound/FBAInbound_GetTransportContent.html)
  - [`confirmTransportRequest`](https://docs.developer.amazonservices.com/en_UK/fba_inbound/FBAInbound_ConfirmTransportRequest.html)
  - [`voidTransportRequest`](https://docs.developer.amazonservices.com/en_UK/fba_inbound/FBAInbound_VoidTransportRequest.html)
  - [`getPackageLabels`](https://docs.developer.amazonservices.com/en_UK/fba_inbound/FBAInbound_GetPackageLabels.html)
  - [`getUniquePackageLabels`](https://docs.developer.amazonservices.com/en_UK/fba_inbound/FBAInbound_GetUniquePackageLabels.html)
  - [`getPalletLabels`](https://docs.developer.amazonservices.com/en_UK/fba_inbound/FBAInbound_GetPalletLabels.html)
  - [`getBillOfLading`](https://docs.developer.amazonservices.com/en_UK/fba_inbound/FBAInbound_GetBillOfLading.html)
  - [`listInboundShipments`](https://docs.developer.amazonservices.com/en_UK/fba_inbound/FBAInbound_ListInboundShipments.html)
  - [`listInboundShipmentsByNextToken`](https://docs.developer.amazonservices.com/en_UK/fba_inbound/FBAInbound_ListInboundShipmentsByNextToken.html)
  - [`listInboundShipmentItems`](https://docs.developer.amazonservices.com/en_UK/fba_inbound/FBAInbound_ListInboundShipmentItems.html)
  - [`listInboundShipmentItemsByNextToken`](https://docs.developer.amazonservices.com/en_UK/fba_inbound/FBAInbound_ListInboundShipmentItemsByNextToken.html)
  - [`getServiceStatus`](https://docs.developer.amazonservices.com/en_UK/fba_inbound/MWS_GetServiceStatus.html)
- [`FulfillmentInventory`](https://docs.developer.amazonservices.com/en_UK/fba_inventory/FBAInventory_Overview.html)
  - [`listInventorySupply`](https://docs.developer.amazonservices.com/en_UK/fba_inventory/FBAInventory_ListInventorySupply.html)
  - [`listInventorySupplyByNextToken`](https://docs.developer.amazonservices.com/en_UK/fba_inventory/FBAInventory_ListInventorySupplyByNextToken.html)
  - [`getServiceStatus`](https://docs.developer.amazonservices.com/en_UK/fba_inventory/MWS_GetServiceStatus.html)
- [`FulfillmentOutboundShipment`](https://docs.developer.amazonservices.com/en_UK/fba_outbound/FBAOutbound_Overview.html)
  - [`getFulfillmentPreview`](https://docs.developer.amazonservices.com/en_UK/fba_outbound/FBAOutbound_GetFulfillmentPreview.html)
  - [`createFulfillmentOrder`](https://docs.developer.amazonservices.com/en_UK/fba_outbound/FBAOutbound_CreateFulfillmentOrder.html)
  - [`updateFulfillmentOrder`](https://docs.developer.amazonservices.com/en_UK/fba_outbound/FBAOutbound_UpdateFulfillmentOrder.html)
  - [`listAllFulfillmentOrders`](https://docs.developer.amazonservices.com/en_UK/fba_outbound/FBAOutbound_ListAllFulfillmentOrders.html)
  - [`getFulfillmentOrder`](https://docs.developer.amazonservices.com/en_UK/fba_outbound/FBAOutbound_GetFulfillmentOrder.html)
  - [`listAllFulfillmentOrdersByNextToken`](https://docs.developer.amazonservices.com/en_UK/fba_outbound/FBAOutbound_ListAllFulfillmentOrdersByNextToken.html)
  - [`getPackageTrackingDetails`](https://docs.developer.amazonservices.com/en_UK/fba_outbound/FBAOutbound_GetPackageTrackingDetails.html)
  - [`cancelFulfillmentOrder`](https://docs.developer.amazonservices.com/en_UK/fba_outbound/FBAOutbound_CancelFulfillmentOrder.html)
  - [`listReturnReasonCodes`](https://docs.developer.amazonservices.com/en_UK/fba_outbound/FBAOutbound_ListReturnReasonCodes.html)
  - [`createFulfillmentReturn`](https://docs.developer.amazonservices.com/en_UK/fba_outbound/FBAOutbound_CreateFulfillmentReturn.html)
  - [`getServiceStatus`](https://docs.developer.amazonservices.com/en_UK/fba_outbound/MWS_GetServiceStatus.html)
- [`MerchantFulfillment`](https://docs.developer.amazonservices.com/en_UK/merch_fulfill/MerchFulfill_Overview.html)
  - [`getEligibleShippingServices`](https://docs.developer.amazonservices.com/en_UK/merch_fulfill/MerchFulfill_GetEligibleShippingServices.html)
  - [`getAdditionalSellerInputs`](https://docs.developer.amazonservices.com/en_UK/merch_fulfill/MerchFulfill_GetAdditionalSellerInputs.html)
  - [`createShipment`](https://docs.developer.amazonservices.com/en_UK/merch_fulfill/MerchFulfill_CreateShipment.html)
  - [`getShipment`](https://docs.developer.amazonservices.com/en_UK/merch_fulfill/MerchFulfill_GetShipment.html)
  - [`cancelShipment`](https://docs.developer.amazonservices.com/en_UK/merch_fulfill/MerchFulfill_CancelShipment.html)
  - [`getServiceStatus`](https://docs.developer.amazonservices.com/en_UK/merch_fulfill/MWS_GetServiceStatus.html)
- [`Orders`](https://docs.developer.amazonservices.com/en_UK/orders-2013-09-01/Orders_Overview.html)
  - [`listOrders`](https://docs.developer.amazonservices.com/en_UK/orders-2013-09-01/Orders_ListOrders.html)
  - [`listOrdersByNextToken`](https://docs.developer.amazonservices.com/en_UK/orders-2013-09-01/Orders_ListOrdersByNextToken.html)
  - [`getOrder`](https://docs.developer.amazonservices.com/en_UK/orders-2013-09-01/Orders_GetOrder.html)
  - [`listOrderItems`](https://docs.developer.amazonservices.com/en_UK/orders-2013-09-01/Orders_ListOrderItems.html)
  - [`listOrderItemsByNextToken`](https://docs.developer.amazonservices.com/en_UK/orders-2013-09-01/Orders_ListOrderItemsByNextToken.html)
  - [`getServiceStatus`](https://docs.developer.amazonservices.com/en_UK/orders-2013-09-01/MWS_GetServiceStatus.html)
- [`Products`](https://docs.developer.amazonservices.com/en_UK/products/Products_Overview.html)
  - [`listMatchingProducts`](https://docs.developer.amazonservices.com/en_UK/products/Products_ListMatchingProducts.html)
  - [`getMatchingProduct`](https://docs.developer.amazonservices.com/en_UK/products/Products_GetMatchingProduct.html)
  - [`getMatchingProductForId`](https://docs.developer.amazonservices.com/en_UK/products/Products_GetMatchingProductForId.html)
  - [`getCompetitivePricingForSKU`](https://docs.developer.amazonservices.com/en_UK/products/Products_GetCompetitivePricingForSKU.html)
  - [`getCompetitivePricingForASIN`](https://docs.developer.amazonservices.com/en_UK/products/Products_GetCompetitivePricingForASIN.html)
  - [`getLowestOfferListingsForSKU`](https://docs.developer.amazonservices.com/en_UK/products/Products_GetLowestOfferListingsForSKU.html)
  - [`getLowestOfferListingsForASIN`](https://docs.developer.amazonservices.com/en_UK/products/Products_GetLowestOfferListingsForASIN.html)
  - [`getLowestPricedOffersForSKU`](https://docs.developer.amazonservices.com/en_UK/products/Products_GetLowestPricedOffersForSKU.html)
  - [`getLowestPricedOffersForASIN`](https://docs.developer.amazonservices.com/en_UK/products/Products_GetLowestPricedOffersForASIN.html)
  - [`getMyFeesEstimate`](https://docs.developer.amazonservices.com/en_UK/products/Products_GetMyFeesEstimate.html)
  - [`getMyPriceForSKU`](https://docs.developer.amazonservices.com/en_UK/products/Products_GetMyPriceForSKU.html)
  - [`getMyPriceForASIN`](https://docs.developer.amazonservices.com/en_UK/products/Products_GetMyPriceForASIN.html)
  - [`getProductCategoriesForSKU`](https://docs.developer.amazonservices.com/en_UK/products/Products_GetProductCategoriesForSKU.html)
  - [`getProductCategoriesForASIN`](https://docs.developer.amazonservices.com/en_UK/products/Products_GetProductCategoriesForASIN.html)
  - [`getServiceStatus`](https://docs.developer.amazonservices.com/en_UK/products/Products_GetServiceStatus.html)
- [`Recommendations`](https://docs.developer.amazonservices.com/en_UK/recommendations/Recommendations_Overview.html)
  - [`getLastUpdatedTimeForRecommendations`](https://docs.developer.amazonservices.com/en_UK/recommendations/Recommendations_GetLastUpdatedTimeForRecommendations.html)
  - [`listRecommendations`](https://docs.developer.amazonservices.com/en_UK/recommendations/Recommendations_ListRecommendations.html)
  - [`listRecommendationsByNextToken`](https://docs.developer.amazonservices.com/en_UK/recommendations/Recommendations_ListRecommendationsByNextToken.html)
  - [`getServiceStatus`](https://docs.developer.amazonservices.com/en_UK/recommendations/Recommendations_GetServiceStatus.html)
- [`Reports`](https://docs.developer.amazonservices.com/en_UK/reports/Reports_Overview.html)
  - [`requestReport`](https://docs.developer.amazonservices.com/en_UK/reports/Reports_RequestReport.html)
  - [`getReportRequestList`](https://docs.developer.amazonservices.com/en_UK/reports/Reports_GetReportRequestList.html)
  - [`getReportRequestListByNextToken`](https://docs.developer.amazonservices.com/en_UK/reports/Reports_GetReportRequestListByNextToken.html)
  - [`getReportRequestCount`](https://docs.developer.amazonservices.com/en_UK/reports/Reports_GetReportRequestCount.html)
  - [`cancelReportRequests`](https://docs.developer.amazonservices.com/en_UK/reports/Reports_CancelReportRequests.html)
  - [`getReportList`](https://docs.developer.amazonservices.com/en_UK/reports/Reports_GetReportList.html)
  - [`getReportListByNextToken`](https://docs.developer.amazonservices.com/en_UK/reports/Reports_GetReportListByNextToken.html)
  - [`getReportCount`](https://docs.developer.amazonservices.com/en_UK/reports/Reports_GetReportCount.html)
  - [`getReport`](https://docs.developer.amazonservices.com/en_UK/reports/Reports_GetReport.html)
  - [`manageReportSchedule`](https://docs.developer.amazonservices.com/en_UK/reports/Reports_ManageReportSchedule.html)
  - [`getReportScheduleList`](https://docs.developer.amazonservices.com/en_UK/reports/Reports_GetReportScheduleList.html)
  - [`getReportScheduleCount`](https://docs.developer.amazonservices.com/en_UK/reports/Reports_GetReportScheduleCount.html)
  - [`updateReportAcknowledgements`](https://docs.developer.amazonservices.com/en_UK/reports/Reports_UpdateReportAcknowledgements.html)
- [`Sellers`](https://docs.developer.amazonservices.com/en_UK/sellers/Sellers_Overview.html)
  - [`listMarketplaceParticipations`](https://docs.developer.amazonservices.com/en_UK/sellers/Sellers_ListMarketplaceParticipations.html)
  - [`listMarketplaceParticipationsByNextToken`](https://docs.developer.amazonservices.com/en_UK/sellers/Sellers_ListMarketplaceParticipationsByNextToken.html)
  - [`getServiceStatus`](https://docs.developer.amazonservices.com/en_UK/sellers/Sellers_GetServiceStatus.html)
- [`ShipmentInvoicing`](https://docs.developer.amazonservices.com/en_UK/shipment_invoicing/ShipmentInvoicing_Overview.html)
  - [`getFBAOutboundShipmentDetail`](https://docs.developer.amazonservices.com/en_UK/shipment_invoicing/ShipmentInvoicing_GetFBAOutboundShipmentDetail.html)
  - [`submitFBAOutboundShipmentInvoice`](https://docs.developer.amazonservices.com/en_UK/shipment_invoicing/ShipmentInvoicing_SubmitFBAOutboundShipmentInvoice.html)
  - [`getFBAOutboundShipmentInvoiceStatus`](https://docs.developer.amazonservices.com/en_UK/shipment_invoicing/ShipmentInvoicing_GetFBAOutboundShipmentInvoiceStatus.html)
  - [`getServiceStatus`](https://docs.developer.amazonservices.com/en_UK/shipment_invoicing/ShipmentInvoicing_GetServiceStatus.html)
- [`Subscriptions`](https://docs.developer.amazonservices.com/en_UK/subscriptions/Subscriptions_Overview.html)
  - [`registerDestination`](https://docs.developer.amazonservices.com/en_UK/subscriptions/Subscriptions_RegisterDestination.html)
  - [`deregisterDestination`](https://docs.developer.amazonservices.com/en_UK/subscriptions/Subscriptions_DeregisterDestination.html)
  - [`listRegisteredDestinations`](https://docs.developer.amazonservices.com/en_UK/subscriptions/Subscriptions_ListRegisteredDestinations.html)
  - [`sendTestNotificationToDestination`](https://docs.developer.amazonservices.com/en_UK/subscriptions/Subscriptions_SendTestNotificationToDestination.html)
  - [`createSubscription`](https://docs.developer.amazonservices.com/en_UK/subscriptions/Subscriptions_CreateSubscription.html)
  - [`getSubscription`](https://docs.developer.amazonservices.com/en_UK/subscriptions/Subscriptions_GetSubscription.html)
  - [`deleteSubscription`](https://docs.developer.amazonservices.com/en_UK/subscriptions/Subscriptions_DeleteSubscription.html)
  - [`listSubscriptions`](https://docs.developer.amazonservices.com/en_UK/subscriptions/Subscriptions_ListSubscriptions.html)
  - [`updateSubscription`](https://docs.developer.amazonservices.com/en_UK/subscriptions/Subscriptions_UpdateSubscription.html)
  - [`getServiceStatus`](https://docs.developer.amazonservices.com/en_UK/subscriptions/Subscriptions_GetServiceStatus.html)
  