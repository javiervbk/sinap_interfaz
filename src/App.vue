<template>
  <q-layout view="lHh Lpr lFf">
    <q-header
      elevated
      class="glossy"
      v-if="$route.name != 'login' && $route.name != 'seleccionInstrumento'"
    >
      <q-toolbar class="bg-blue-grey-6">
        <q-btn
          flat
          dense
          round
          @click="leftDrawerOpen = !leftDrawerOpen"
          aria-label="Menu"
          icon="menu"
        />

        <q-toolbar-title>
          Sistema de Informes Anuales de Profesores
        </q-toolbar-title>

        <div>
          Facultad de Música <br />
          <q-avatar size="24px" color="orange" icon="person"></q-avatar>
          Javier Villalobos Badillo
        </div>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-if="$route.name != 'login' && $route.name != 'seleccionInstrumento'"
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      class="bg-grey-2"
    >
      <q-scroll-area
        style="
          height: calc(100% - 80px);
          margin-top: 100px;
          border-right: 1px solid #ddd;
        "
      >
        <q-list class="q-mt-xl">
          <span v-if="$route.params.tipo == 1">
            <q-item-label header
              >INFORME ANUAL DE PROFESORES DE MEDIO TIEMPO Y TIEMPO
              COMPLETO</q-item-label
            >
          </span>
          <span v-if="$route.params.tipo == 2">
            <q-item-label header
              >INFORME ANUAL DE PROFESORES DE ASIGNATURA</q-item-label
            >
          </span>
          <span v-if="$route.params.tipo == 3">
            <q-item-label header
              >INFORME ANUAL DE TÉCNICOS ACADÉMICOS</q-item-label
            >
          </span>
          <q-expansion-item
            expand-separator
            icon="done"
            label="Sección 1"
            caption="Concluida"
          >
            <q-item
              clickable
              tag="a"
              :href="'/' + $route.params.tipo + '/seccion1'"
            >
              <q-item-section>
                <q-item-label>Datos generales</q-item-label>
                <q-item-label caption>Concluido</q-item-label>
              </q-item-section>
            </q-item>
            <q-item
              clickable
              tag="a"
              :href="'/' + $route.params.tipo + '/seccion1'"
            >
              <q-item-section>
                <q-item-label>Nombramiento académico</q-item-label>
                <q-item-label caption>Concluido</q-item-label>
              </q-item-section>
            </q-item>
            <q-item
              v-if="$route.params.tipo == 1"
              clickable
              tag="a"
              :href="'/' + $route.params.tipo + '/seccion1'"
            >
              <q-item-section>
                <q-item-label>Periodo sabático</q-item-label>
                <q-item-label caption>Concluido</q-item-label>
              </q-item-section>
            </q-item>
            <q-item
              v-if="$route.params.tipo == 1 || $route.params.tipo == 3"
              clickable
              tag="a"
              :href="'/' + $route.params.tipo + '/seccion1'"
            >
              <q-item-section>
                <q-item-label>PRIDE</q-item-label>
                <q-item-label caption>Concluido</q-item-label>
              </q-item-section>
            </q-item>
            <q-item
              v-if="$route.params.tipo == 2"
              clickable
              tag="a"
              :href="'/' + $route.params.tipo + '/seccion1'"
            >
              <q-item-section>
                <q-item-label>PEPASIG</q-item-label>
                <q-item-label caption>Concluido</q-item-label>
              </q-item-section>
            </q-item>
            <q-item
              clickable
              tag="a"
              :href="'/' + $route.params.tipo + '/seccion1'"
            >
              <q-item-section>
                <q-item-label>Otros estímulos de la UNAM vigentes</q-item-label>
                <q-item-label caption>Concluido</q-item-label>
              </q-item-section>
            </q-item>

            <q-item
              clickable
              tag="a"
              :href="'/' + $route.params.tipo + '/seccion1'"
            >
              <q-item-section>
                <q-item-label>Distinciones de la UNAM vigentes</q-item-label>
                <q-item-label caption>Concluido</q-item-label>
              </q-item-section>
            </q-item>
            <q-item
              clickable
              tag="a"
              :href="'/' + $route.params.tipo + '/seccion1'"
            >
              <q-item-section>
                <q-item-label
                  >Distinciones externas a la UNAM vigentes</q-item-label
                >
                <q-item-label caption>Concluido</q-item-label>
              </q-item-section>
            </q-item>
            <q-item
              clickable
              tag="a"
              :href="'/' + $route.params.tipo + '/seccion1'"
            >
              <q-item-section>
                <q-item-label>Licencias y comisiones</q-item-label>
                <q-item-label caption>Concluido</q-item-label>
              </q-item-section>
            </q-item>
            <q-item
              clickable
              tag="a"
              :href="'/' + $route.params.tipo + '/seccion1'"
              v-if="$route.params.tipo == 3"
            >
              <q-item-section>
                <q-item-label
                  >Funciones y actividades que desempeña</q-item-label
                >
                <q-item-label caption>Concluido</q-item-label>
              </q-item-section>
            </q-item>
            <q-item
              clickable
              tag="a"
              :href="'/' + $route.params.tipo + '/seccion1'"
            >
              <q-item-section>
                <q-item-label>Cursos ordinarios</q-item-label>
                <q-item-label caption>Concluido</q-item-label>
              </q-item-section>
            </q-item>
            <q-item
              clickable
              tag="a"
              :href="'/' + $route.params.tipo + '/seccion1'"
              v-if="$route.params.tipo == 1 || $route.params.tipo == 2"
            >
              <q-item-section>
                <q-item-label
                  >Participación de alumnos en eventos relacionados con los
                  cursos ordinarios</q-item-label
                >
                <q-item-label caption>Concluido</q-item-label>
              </q-item-section>
            </q-item>
            <q-item
              clickable
              tag="a"
              :href="'/' + $route.params.tipo + '/seccion1'"
              v-if="$route.params.tipo == 1 || $route.params.tipo == 2"
            >
              <q-item-section>
                <q-item-label>Exámenes extraordinarios</q-item-label>
                <q-item-label caption>Concluido</q-item-label>
              </q-item-section>
            </q-item>
            <q-item
              clickable
              tag="a"
              :href="'/' + $route.params.tipo + '/seccion1'"
              v-if="$route.params.tipo == 1 || $route.params.tipo == 2"
            >
              <q-item-section>
                <q-item-label
                  >Nombramiento de pianista acompañante
                </q-item-label>
                <q-item-label caption>Concluido</q-item-label>
              </q-item-section>
            </q-item>
            <q-item
              clickable
              tag="a"
              :href="'/' + $route.params.tipo + '/seccion1'"
            >
              <q-item-section>
                <q-item-label
                  >Estrategias para la educación a distancia</q-item-label
                >
                <q-item-label caption>Concluido</q-item-label>
              </q-item-section>
            </q-item>
          </q-expansion-item>
          <q-expansion-item
            expand-separator
            icon="done"
            label="Sección 2"
            caption="Pendiente"
          >
            <q-item
              clickable
              tag="a"
              :href="'/' + $route.params.tipo + '/seccion2'"
              v-if="$route.params.tipo == 1 || $route.params.tipo == 2"
            >
              <q-item-section>
                <q-item-label>Asesorías Académicas</q-item-label>
                <q-item-label caption>Concluido</q-item-label>
              </q-item-section>
            </q-item>
            <q-item
              clickable
              tag="a"
              :href="'/' + $route.params.tipo + '/seccion2'"
              v-if="$route.params.tipo == 1 || $route.params.tipo == 2"
            >
              <q-item-section>
                <q-item-label>Cursos remediales</q-item-label>
                <q-item-label caption>Concluido</q-item-label>
              </q-item-section>
            </q-item>

            <q-item
              clickable
              tag="a"
              :href="'/' + $route.params.tipo + '/seccion2'"
            >
              <q-item-section>
                <q-item-label>Otras tutorías/asesorías</q-item-label>
                <q-item-label caption>Pendiente</q-item-label>
              </q-item-section>
            </q-item>
          </q-expansion-item>
          <q-expansion-item
            expand-separator
            icon="done"
            label="Sección 3"
            caption="Pendiente"
          >
            <q-item
              clickable
              tag="a"
              :href="'/' + $route.params.tipo + '/seccion3'"
            >
              <q-item-section>
                <q-item-label>Investigación</q-item-label>
                <q-item-label caption>Pendiente</q-item-label>
              </q-item-section>
            </q-item>
            <q-item
              clickable
              tag="a"
              :href="'/' + $route.params.tipo + '/seccion3'"
              v-if="$route.params.tipo == 1 || $route.params.tipo == 2"
            >
              <q-item-section>
                <q-item-label>Creación musical</q-item-label>
                <q-item-label caption>Pendiente</q-item-label>
              </q-item-section>
            </q-item>
            <q-item
              clickable
              tag="a"
              :href="'/' + $route.params.tipo + '/seccion3'"
              v-if="$route.params.tipo == 1 || $route.params.tipo == 2"
            >
              <q-item-section>
                <q-item-label>Actividad concertística</q-item-label>
                <q-item-label caption>Pendiente</q-item-label>
              </q-item-section>
            </q-item>
            <q-item
              clickable
              tag="a"
              :href="'/' + $route.params.tipo + '/seccion3'"
              v-if="$route.params.tipo == 1 || $route.params.tipo == 2"
            >
              <q-item-section>
                <q-item-label
                  >Interpretaciones incluidas en discos o medios audiovisuales.
                </q-item-label>
                <q-item-label caption>Pendiente</q-item-label>
              </q-item-section>
            </q-item>
          </q-expansion-item>
          <q-expansion-item
            expand-separator
            icon="done"
            label="Sección 4"
            caption="Pendiente"
          >
            <q-item
              clickable
              tag="a"
              :href="'/' + $route.params.tipo + '/seccion4'"
            >
              <q-item-section>
                <q-item-label>Extensión y Difusión</q-item-label>
                <q-item-label caption>Pendiente</q-item-label>
              </q-item-section>
            </q-item>
            <q-item
              clickable
              tag="a"
              :href="'/' + $route.params.tipo + '/seccion4'"
            >
              <q-item-section>
                <q-item-label
                  >Superación y actualización académica</q-item-label
                >
                <q-item-label caption>Pendiente</q-item-label>
              </q-item-section>
            </q-item>
            <q-item
              clickable
              tag="a"
              :href="'/' + $route.params.tipo + '/seccion4'"
              v-if="$route.params.tipo == 1 || $route.params.tipo == 2"
            >
              <q-item-section>
                <q-item-label>Participaciones como jurado</q-item-label>
                <q-item-label caption>Pendiente</q-item-label>
              </q-item-section>
            </q-item>
          </q-expansion-item>
          <q-expansion-item
            expand-separator
            icon="done"
            label="Sección 5"
            caption="Pendiente"
          >
            <q-item
              clickable
              tag="a"
              :href="'/' + $route.params.tipo + '/seccion5'"
            >
              <q-item-section>
                <q-item-label
                  >Participación en comisiones y/o comités académicos (dentro o
                  fuera de la UNAM)</q-item-label
                >
                <q-item-label caption>Pendiente</q-item-label>
              </q-item-section>
            </q-item>
            <q-item
              clickable
              tag="a"
              :href="'/' + $route.params.tipo + '/seccion5'"
            >
              <q-item-section>
                <q-item-label
                  >Participación en academias y claustros</q-item-label
                >
                <q-item-label caption>Pendiente</q-item-label>
              </q-item-section>
            </q-item>
            <q-item
              clickable
              tag="a"
              :href="'/' + $route.params.tipo + '/seccion5'"
              v-if="$route.params.tipo == 1 || $route.params.tipo == 2"
            >
              <q-item-section>
                <q-item-label
                  >Participación en programas de intercambio
                  académico</q-item-label
                >
                <q-item-label caption>Pendiente</q-item-label>
              </q-item-section>
            </q-item>
            <q-item
              clickable
              tag="a"
              :href="'/' + $route.params.tipo + '/seccion5'"
            >
              <q-item-section>
                <q-item-label
                  >Nombramiento académico-administrativo</q-item-label
                >
                <q-item-label caption>Pendiente</q-item-label>
              </q-item-section>
            </q-item>
            <q-item
              clickable
              tag="a"
              :href="'/' + $route.params.tipo + '/seccion5'"
            >
              <q-item-section>
                <q-item-label
                  >Información adicional o complementaria</q-item-label
                >
                <q-item-label caption>Pendiente</q-item-label>
              </q-item-section>
            </q-item>
            <q-item
              clickable
              tag="a"
              :href="'/' + $route.params.tipo + '/seccion5'"
            >
              <q-item-section>
                <q-item-label
                  >Resumen de horas semanales dedicadas a las actividades
                  académicas</q-item-label
                >
                <q-item-label caption>Pendiente</q-item-label>
              </q-item-section>
            </q-item>
            <q-item
              clickable
              tag="a"
              :href="'/' + $route.params.tipo + '/seccion5'"
            >
              <q-item-section>
                <q-item-label
                  >Proyecto de actividades para el siguiente ciclo
                  escolar</q-item-label
                >
                <q-item-label caption>Pendiente</q-item-label>
              </q-item-section>
            </q-item>
          </q-expansion-item>
        </q-list>
      </q-scroll-area>
      <q-img
        class="absolute-top q-mt-sm"
        src="http://localhost:8080/img/fam_negro2 (1).png"
      >
      </q-img>
    </q-drawer>

    <q-page-container>
      <router-view></router-view>
    </q-page-container>
  </q-layout>
</template>

<script>
import { ref } from "vue";

export default {
  name: "LayoutDefault",

  components: {},

  setup() {
    return {
      leftDrawerOpen: ref(false),
    };
  },
};
</script>
