import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}

:root {
	--heading-size: 3.25rem;
	--primary-color: hsl(14.9, 100%, 68%);
	--primary-color-darken: hsl(14.9, 100%, 68%);
	--secondary-color: #A2D2FF;
	--accent-color: #A2D2FF;
	--background-color: #f9f9f9;
}
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}
*, *::before, *::after {
  box-sizing: border-box;
}
* {
  margin: 0;
}
html, body, #root, #__next, #___gatsby, #gatsby-focus-wrapper {
  height: 100%;
}
html {
  font-family: "Inter", sans-serif;
  background-color: var(--background-color);
}
body {
  line-height: 1.5;
  -webkit-font-smoothing: antialiased;
}
img, picture, video, canvas, svg {
  display: block;
  max-width: 100%;
}
input, button, textarea, select {
  font: inherit;
}
p, h1, h2, h3, h4, h5, h6 {
  overflow-wrap: break-word;
}
#root, #__next, #___gatsby {
  isolation: isolate;
}
`;
