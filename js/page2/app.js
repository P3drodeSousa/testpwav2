import {
  scrollFunction,
  support,
  displayProfil,
  closeProfil,
  displayImpressum,
  closeImpressum,
} from "../app.js";

window.onload = () => {
  support();
  displayProfil();
  closeProfil();
  displayImpressum();
  closeImpressum();
};

window.onscroll = scrollFunction;
