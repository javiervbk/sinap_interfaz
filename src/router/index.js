import { createRouter, createWebHistory } from "vue-router";
import AsignaturaSecUnoFormSimplificado from "../views/AsignaturaSecUnoSimplificado.vue";
import CarreraSeccion1 from "../views/CarreraSeccion1.vue";
import CarreraSeccion2 from "../views/CarreraSeccion2.vue";
import CarreraSeccion3 from "../views/CarreraSeccion3.vue";
import CarreraSeccion4 from "../views/CarreraSeccion4.vue";
import CarreraSeccion5 from "../views/CarreraSeccion5.vue";
import Administrador from "../views/Administrador.vue";
import RevisionSeccion1 from "../views/RevisionSeccion1.vue";
import login from "../views/login.vue";
import seleccionInstrumento from "../views/seleccionInstrumento.vue";

const routes = [
  {
    path: "/",
    name: "login",
    component: login,
  },
  {
    path: "/:tipo/seccion1",
    name: "CarreraSeccion1",
    component: CarreraSeccion1,
  },
  {
    path: "/:tipo/revision/seccion1",
    name: "RevisionSeccion1",
    component: RevisionSeccion1,
  },
  {
    path: "/:tipo/seccion2",
    name: "CarreraSeccion2",
    component: CarreraSeccion2,
  },
  {
    path: "/:tipo/seccion3",
    name: "CarreraSeccion3",
    component: CarreraSeccion3,
  },
  {
    path: "/:tipo/seccion4",
    name: "CarreraSeccion4",
    component: CarreraSeccion4,
  },
  {
    path: "/:tipo/seccion5",
    name: "CarreraSeccion5",
    component: CarreraSeccion5,
  },
  {
    path: "/simplificados",
    name: "AsignaturaSecUnoSimplificado",
    component: AsignaturaSecUnoFormSimplificado,
  },
  {
    path: "/administrador",
    name: "Administrador",
    component: Administrador,
  },
  {
    path: "/tipoDeReactivo",
    name: "seleccionInstrumento",
    component: seleccionInstrumento,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
