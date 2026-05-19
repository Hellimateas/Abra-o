import AbraaoArcaNoeTheme from "./AbraaoArcaNoeTheme";
import exemploOutroTema from "./exemploOutroTema";

// Mapa de temas disponíveis no projeto.
export const themes = {
  AbraaoArcaNoeTheme: AbraaoArcaNoeTheme,
  exemploOutroTema,
};

// Tema atualmente utilizado pela aplicação.
// Para trocar de tema basta alterar a chave abaixo.
const activeTheme = themes.AbraaoArcaNoeTheme;

export default activeTheme;
