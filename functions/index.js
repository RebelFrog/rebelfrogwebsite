const functions = require("firebase-functions");
const admin = require("firebase-admin");
admin.initializeApp();

exports.getMarketUpdates = functions.https.onRequest(async (request, response) => {
  const db = admin.firestore();
  
  const updates = [
    { 
      category: "Inflation", 
      value: "3.4%", 
      trend: "up", 
      insight: "Costs of goods are rising. Review your vendor contracts." 
    },
    { 
      category: "Interest Rate", 
      value: "3.75%", 
      trend: "stable", 
      insight: "Capital is still expensive. Focus on cash-flow over debt." 
    },
    { 
      category: "Labor", 
      value: "4.1%", 
      trend: "down", 
      insight: "Hiring is tightening in FL. Focus on employee retention." 
    }
  ];

  try {
    await db.collection("market_intelligence").doc("latest").set({
      updates,
      lastUpdated: admin.firestore.FieldValue.serverTimestamp()
    });
    
    functions.logger.info("Market intelligence document updated successfully.");
    response.set('Access-Control-Allow-Origin', '*');
    response.status(200).send("Market intelligence document updated successfully.");
  } catch (error) {
    functions.logger.error("Error updating market intelligence document:", error);
    response.status(500).send("Error updating market intelligence document.");
  }
});
