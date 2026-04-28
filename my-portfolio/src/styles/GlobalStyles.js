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
  background-color: #f8f8f6;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cg stroke='rgba(0,0,0,0.08)' stroke-width='1' fill='none'%3E%3Cline x1='0' y1='40' x2='80' y2='40'/%3E%3Cline x1='120' y1='40' x2='200' y2='40'/%3E%3Cline x1='100' y1='0' x2='100' y2='30'/%3E%3Cline x1='100' y1='50' x2='100' y2='100'/%3E%3Cline x1='0' y1='140' x2='60' y2='140'/%3E%3Cline x1='60' y1='100' x2='60' y2='140'/%3E%3Cline x1='160' y1='140' x2='200' y2='140'/%3E%3Cline x1='160' y1='100' x2='160' y2='180'/%3E%3Cline x1='30' y1='0' x2='30' y2='80'/%3E%3Cline x1='30' y1='80' x2='60' y2='80'/%3E%3C/g%3E%3Cg fill='rgba(0,0,0,0.08)'%3E%3Ccircle cx='100' cy='40' r='2.5'/%3E%3Ccircle cx='60' cy='140' r='2.5'/%3E%3Ccircle cx='160' cy='140' r='2.5'/%3E%3Ccircle cx='30' cy='80' r='2'/%3E%3Ccircle cx='100' cy='100' r='2'/%3E%3C/g%3E%3C/svg%3E");
  background-attachment: fixed;
  background-size: 200px 200px;
  color: #1a1a1a;
}

h1, h2, h3 {
  color: #1a1a1a;
}

p {
  color: #555555;
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


