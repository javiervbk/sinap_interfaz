import { createStore } from "vuex";

export default createStore({
  state: {
    contador:10,
    nombre:null,
    primerapellido:null,
    segundoapellido:null,
    numerodetrabajador:null,
    curp:null,
    correoinstitucional:null,
    correoadicional:null,
    nombramientoactual:null,
  },
  mutations: {
    actualizarNombre (state, nombre) {
      state.nombre = nombre
    },
    actualizarPrimerApellido (state, primerapellido) {
      state.primerapellido = primerapellido
    },
    actualizarSegundoApellido (state, segundoapellido) {
      state.segundoapellido = segundoapellido
    },
    actualizarNumeroDeTrabajador (state, numerodetrabajador) {
      state.numerodetrabajador = numerodetrabajador
    },actualizarCURP (state, curp) {
      state.curp = curp
    },
    actualizarEmailInstitucional (state, correoinstitucional) {
      state.correoinstitucional = correoinstitucional
    },
    actualizarEmailPersonal
     (state, correoadicional) {
      state.correoadicional = correoadicional
    }
  },
  actions: {},
  modules: {},
});
