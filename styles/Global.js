import { createGlobalStyle } from "styled-components";

const Global = createGlobalStyle`
:root{
    
}
[data-theme="light"]{
    --Text: hsl(200, 15%, 8%);
    --Elements: hsl(0, 0%, 86%);
    --Background: hsl(0, 0%, 98%);
}
[data-theme="dark"]{
    --Text: hsl(0, 0%, 100%);
    --Elements: hsl(209, 23%, 22%);
    --Background: hsl(207, 26%, 17%);
}
html{
    font-size: 62.5%; box-sizing: border-box;
}
    body{
        padding: 0;
        margin: 0;
        background-color: var(--Background);
        font-size: 16px;
        color: var(--Text);
    }
    *, *::after, *::before {
    box-sizing: border-box;
  }
  img{
      object-fit: contain;
  }
`;
export default Global;
