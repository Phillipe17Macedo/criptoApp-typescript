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
const coinMarketCapApiKey = "3f640653-8b8f-4bf3-acad-5d5b20c6e1dc";

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

export { getCriptoDados };
