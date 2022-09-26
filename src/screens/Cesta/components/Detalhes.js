import React from "react";
import { View, Image, TouchableOpacity } from "react-native";
import { Texto } from "../../../components/Texto";
import { styles } from "./styles";

export function Detalhes({
  nome,
  logo_fazenda,
  nome_fazenda,
  descricao,
  preco,
  botao,
}) {
  return (
    <>
      <Texto style={styles.nome}>{nome}</Texto>
      <View style={styles.viewFazenda}>
        <Image source={logo_fazenda} style={styles.imgfazenda} />
        <Texto style={styles.fazenda}>{nome_fazenda}</Texto>
      </View>
      <Texto style={styles.descricao}>{descricao}</Texto>
      <Texto style={styles.preco}>{preco}</Texto>

      <TouchableOpacity style={styles.botao}>
        <Texto style={styles.texto_botao}>{botao}</Texto>
      </TouchableOpacity>
    </>
  );
}
