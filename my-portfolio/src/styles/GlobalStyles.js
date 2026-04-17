import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: system-ui, sans-serif;
  overflow-x: hidden;
  overflow-y: auto;
  background: linear-gradient(
    135deg,
    #020617,
    #0f172a
  );
  color: white;
}

/* Horizontal scroll container */

#root {

  display: block;

  min-height: 100vh;

  overflow-x: hidden;

}
/* Smooth scroll */

html {
  scroll-behavior: smooth;
}

/* Scrollbar */

#root::-webkit-scrollbar {
  height: 8px;
}

#root::-webkit-scrollbar-thumb {

  background: rgba(255, 255, 255, 0.25);

  border-radius: 10px;

  box-shadow:
    inset 0 0 6px rgba(0,0,0,0.3);

}
#root::-webkit-scrollbar-thumb:hover {
  background: rgba(255, 255, 255, 0.4);
}

`;