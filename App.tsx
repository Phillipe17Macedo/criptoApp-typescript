// React Imports
import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Image,
  FlatList,
  ActivityIndicator,
  RefreshControl,
} from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";

// API
import { getCriptoDados } from "./api/api";

// styles
import { styles } from "./styles/styles";

interface Cripto {
  id: number;
  name: string;
  symbol: string;
  price: string;
  change: string;
  slug: string;
}

export default function App() {
  // Define os estados com tipos
  const [dadosCripto, setDadosCripto] = useState<Cripto[] | null>(null);
  const [carregando, setCarregando] = useState<boolean>(true);
  const [recarregando, setRecarregando] = useState<boolean>(false);

  useEffect(() => {
    buscarDados();
  }, []);

  const buscarDados = async () => {
    const data = await getCriptoDados();
    setDadosCripto(data);
    setCarregando(false);
  };

  const onRecarregar = async () => {
    setRecarregando(true);
    await buscarDados();
    setRecarregando(false);
  };

  const renderizarItem = ({ item }: { item: Cripto }) => {
    return (
      <View style={styles.criptoContainer}>
        <Image
          source={{
            uri: `https://s2.coinmarketcap.com/static/img/coins/64x64/${item.id}.png`,
          }}
          style={styles.criptoLogo}
        />
        <View style={styles.criptoInfo}>
          <Text style={styles.criptoNome}>{item.name}</Text>
          <Text style={styles.criptoPreco}>Preço: U${item.price}</Text>
          <Text style={styles.criptoVariacao}>
            Variação (24h): {item.change}
          </Text>
        </View>
      </View>
    );
  };

  if (carregando) {
    return (
      <View style={styles.conatinerCarregando}>
        <ActivityIndicator size="large" color="#84B026" />
      </View>
    );
  }

  return (
    <SafeAreaProvider>
      <View style={styles.container}>
        <Text style={styles.textoCabecalho}>Tabela de Criptomoedas</Text>
        <FlatList
          data={dadosCripto}
          renderItem={renderizarItem}
          keyExtractor={(item) => item.id.toString()}
          contentContainerStyle={styles.conteudoFlatlist}
          refreshControl={
            <RefreshControl
              refreshing={recarregando}
              onRefresh={onRecarregar}
            />
          }
        />
      </View>
    </SafeAreaProvider>
  );
}
