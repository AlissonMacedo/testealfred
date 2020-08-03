import { createGlobalStyle } from 'styled-components';

import 'react-toastify/dist/ReactToastify.css';
import background from '../assets/images/background.svg';

export default createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');


 * {
   margin: 0;
   padding: 0;
   outline: 0;
   box-sizing: border-box;
 }

 body {
   background: rgb(240, 242, 245);
   -webkit-font-smoothing: antialiased;
 }

 body, input, button {
   font: 14px Roboto, sans-serif;
 }

 #root {
   margin: 0 auto;
 }

 button {
   cursor: pointer;
 }
`;
