import React from "react";
import { Image } from "react-native";
import imgTopo from "../../../../assets/topo.png";
import { Texto } from "../../../components/Texto";
import { styles } from "./styles";

export function Topo({ titulo }) {
  return (
    <>
      <Image source={imgTopo} style={styles.topo} />
      <Texto style={styles.titulo}>{titulo}</Texto>
    </>
  );
}
