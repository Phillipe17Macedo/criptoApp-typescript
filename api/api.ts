import axios from "axios";

interface Cripto {
  id: number;
  name: string;
  symbol: string;
  price: string;
  change: string;
  slug: string;
}

const coinMarketCapUrl =
  "https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest";
const coinMarketCapApiKey = "YOUR-API-KEY";

// Função para buscar os dados das criptomoedas
const getCriptoDados = async (): Promise<Cripto[]> => {
  try {
    const responseMarketCap = await axios.get(coinMarketCapUrl, {
      headers: {
        "X-CMC_PRO_API_KEY": coinMarketCapApiKey,
        Accept: "application/json",
      },
    });

    const criptoData = responseMarketCap.data.data.map((cripto: any) => ({
      id: cripto.id,
      name: cripto.name,
      symbol: cripto.symbol,
      price: cripto.quote.USD.price.toFixed(2),
      change: cripto.quote.USD.percent_change_24h.toFixed(2),
      slug: cripto.slug,
    }));

    return criptoData;
  } catch (error) {
    console.error("Erro ao buscar dados das Criptos:", error);
    return [];
  }
};

// Função para buscar os dados históricos
const getHistoricoDados = async (criptoId: string) => {
  try {
    const responseHistorico = await axios.get(
      `https://api.coingecko.com/api/v3/coins/${criptoId}/market_chart`,
      {
        params: {
          vs_currency: "usd",
          days: "30",
        },
      }
    );

    const historicoDados = responseHistorico.data.prices.map(
      (preco: [number, number]) => ({
        timestamp: preco[0],
        price: preco[1],
      })
    );

    return historicoDados;
  } catch (error) {
    console.error("Erro ao buscar dados históricos:", error);
    return [];
  }
};

export { getCriptoDados, getHistoricoDados };
