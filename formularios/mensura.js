import {
  agregarFilaPreferencial,
  verTotal,
  agregarFila,
  mostrarTotalMensura,
} from "../secciones/funcionesGlobales.js";
import {
  calcularMensura,
  volverMensura,
  borrarMensura,
} from "../secciones/botones.js";
import {
  valoresMensura,
  valoresValuaciones,
  modulos,
} from "../secciones/constantes.js";

const calcularBtnMensura = document.getElementById("calcular-btn");
calcularBtnMensura.addEventListener("click", () => {
  calcularMensura();
  mostrarTotalMensura(valoresMensura, modulos);
});

const volverBtnMensura = document.getElementById("volver-btn");
volverBtnMensura.addEventListener("click", () => {
  volverMensura();
});

const borrarBtnMensura = document.getElementById("borrar-btn");
borrarBtnMensura.addEventListener("click", () => {
  borrarMensura();
});
