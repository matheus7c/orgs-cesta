import React from "react";
import { FlatList, View } from "react-native";
import { styles } from "./styles";
import { Topo } from "./components/Topo";
import { Detalhes } from "./components/Detalhes";
import { Item } from "./components/Item";
import { Texto } from "../../components/Texto";

export default function Cesta({ topo, detalhes, itens }) {
  return (
    <>
      <FlatList
        data={itens.lista}
        renderItem={Item}
        keyExtractor={({ nome }) => nome}
        ListHeaderComponent={() => {
          return (
            <>
              <Topo {...topo} />
              <View style={styles.cesta}>
                <Detalhes {...detalhes} />
                <Texto style={styles.itens_titulo}>{itens.titulo}</Texto>
              </View>
            </>
          );
        }}
      ></FlatList>
    </>
  );
}
