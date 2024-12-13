import client from "./bybit-config.js";

async function getPriceQuote(symbol, limit = 1) {
  try {
    const response = await client.getTickers({
      category: "spot",
      symbol,
      // limit,
    });

    // const formattedObject = {
    //   symbolName: response.result.s,
    //   askPrice: response.result.a[0][0],
    //   bidPrice: response.result.b[0][0],
    // };

    return response;
  } catch (error) {
    console.log(error);
  }
}

// async function checkBybit() {
//   console.time("latency");
//   // getPriceQuote("BTCUSDT").then((res) => console.log(res?.result.list));
//   console.log(await getPriceQuote("BTCUSDT"));
//   console.timeEnd("latency");
// }

// checkBybit();

async function initiateTrade(symbol, side, orderType, qty) {
  try {
    const response = await client.submitOrder({
      category: "spot",
      symbol,
      side,
      orderType,
      qty,
    });

    return response;
  } catch (error) {
    console.log("An error occurred", error);
  }
}

// initiateTrade("BTCUSDT", "Buy", "Market", "0.1").then((res) =>
//   console.log(res)
// );

export { getPriceQuote, initiateTrade };
