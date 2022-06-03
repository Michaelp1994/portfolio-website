import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
.personalPhoto {
    border-radius: 50%;
    object-fit: cover;
    margin-top: 30px;
    flex: 1;
    max-width: 350px;
    aspect-ratio: 1;
}
`;
