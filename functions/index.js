const functions = require("firebase-functions");

exports.getMarketUpdates = functions.https.onRequest((request, response) => {
  functions.logger.info("getMarketUpdates function triggered!", {structuredData: true});
  response.set('Access-Control-Allow-Origin', '*'); 
  response.json({
    message: "This is a placeholder for market updates.",
    updates: [
      "NFIB Optimism Index: Placeholder Headline 1",
      "SBA News: Placeholder Funding Opportunity",
      "Economic Trend: Global markets stabilizing"
    ]
  });
});
