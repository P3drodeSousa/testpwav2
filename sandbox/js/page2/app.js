import {
  scrollFunction,
  support,
  displayProfil,
  closeProfil,
  displayImpressum,
  closeImpressum,
  deconexion,
} from "../app.js";

window.onload = () => {
  deconexion();
  support();
  displayProfil();
  closeProfil();
  displayImpressum();
  closeImpressum();
};

window.onscroll = scrollFunction;
