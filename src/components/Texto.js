import React from "react";
import { Text } from "react-native";

import { styles } from "./styles";

export function Texto({ children, style }) {
  let estilo = styles.texto;

  if (style?.fontWeight === "bold") {
    estilo = styles.texto_negrito;
  }
  return <Text style={[style, estilo]}>{children}</Text>;
}
