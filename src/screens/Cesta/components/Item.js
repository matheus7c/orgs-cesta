import React from "react";
import { Image, View } from "react-native";
import { Texto } from "../../../components/Texto";

import { styles } from "./styles";

export function Item({ item: { nome, imagem } }) {
  return (
    <View style={styles.item}>
      <Image style={styles.itens_imagem} source={imagem} />
      <Texto style={styles.itens_texto}>{nome}</Texto>
    </View>
  );
}
