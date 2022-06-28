<template>
  <div class="q-pa-md">
    <h4>Sección 3</h4>
    <h5>Actividad de investigación y/o creación y/o concertística</h5>

    <!-- INICIO DE SECCION  -->
    <div>
      <h6 class="col-12" id="distinacionesOtras">Investigación</h6>
      <p>
        Actividades de investigación realizadas durante el periodo. Se Incluyen
        las investigaciones de los programas PAPIIT y PAPIME, con apoyos
        externos a la UNAM o investigaciones independientes.
      </p>
      <div class="col-12">
        <div class="col-12">
          <q-toggle
            v-model="investigacion"
            checked-icon="check"
            color="green"
            unchecked-icon="clear"
            label="¿Llevó a cabo actividades de investigación? "
          />
          <div class="q-px-sm q-pt-sm">
            <strong
              ><span v-if="investigacion">Sí</span
              ><span v-else-if="investigacion == false">No</span></strong
            >
          </div>
        </div>
        <div class="row" v-if="investigacion == true">
          <q-input
            filled
            v-model="nombreDelProyecto"
            label="Nombre del proyecto"
            class="col-4 q-pa-md"
            lazy-rules
            :rules="[
              (val) => (val && val.length > 0) || 'Please type something',
            ]"
          />
          <q-select
            class="col-4 q-pa-md"
            filled
            v-model="tipoDeApoyoSeleccionado"
            :options="tipoDeApoyo"
            label="Tipo de apoyo que recibe el proyecto"
          />
          <q-input
            v-model="text"
            filled
            class="col-4 q-pa-md"
            label="Fecha de inicio y de termino"
          />
          <q-input
            v-model="descripcionDelProyecto"
            filled
            type="textarea"
            class="col-12 q-pa-md"
            label="Breve descripción del proyecto y las actividades que se llevaron a cabo."
          />

          <q-file
            color="teal"
            filled
            v-model="informesabatico"
            label="Documento probatorio"
            class="col-4 q-pa-md"
          >
            <template v-slot:prepend>
              <q-icon name="cloud_upload" />
            </template>
          </q-file>
        </div>
      </div>
      <q-table
        class="col-6 q-pa-md"
        v-if="cursos.length > 0"
        title="Cursos registrados"
        :rows="cursos"
        :columns="columnascurso"
        row-key="name"
      >
      </q-table>
    </div>
    <!-- FIN DE SECCION  -->

    <!-- INICIO DE SECCION  -->
    <div v-if="$route.params.tipo == 1 || $route.params.tipo == 2">
      <h6 class="col-12" id="distinacionesOtras">Creación musical</h6>
      <p>
        Trabajo de composición y arreglo que NO sea un producto derivado de los
        programas PAPIIT o PAPIME. Se incluyen: obras de concierto, estrenos o
        interpretaciones y obras incluidas en producciones discográficas o en
        medios audiovisuales.
      </p>
      <q-toggle
        v-model="creacionmusical"
        checked-icon="check"
        color="green"
        unchecked-icon="clear"
        label="¿Realizó trabajos de creación musical ? (composiciones originales, arreglos, bandas sonoras y/o adaptaciones)"
      />
      <strong
        ><span v-if="creacionmusical"> Sí</span
        ><span v-else-if="creacionmusical == false"> No</span></strong
      >

      <div v-if="creacionmusical == true">
        <div class="col-12">
          <q-list>
            <div class="q-px-sm">Tipo de trabajo</div>
            <!--
        Rendering a <label> tag (notice tag="label")
        so QRadios will respond to clicks on QItems to
        change Toggle state.
      -->
            <q-item tag="label" v-ripple>
              <q-item-section avatar>
                <q-radio v-model="tipoDeCreacion" val="creacion" color="teal" />
              </q-item-section>
              <q-item-section>
                <q-item-label>Creación de obra</q-item-label>
                <q-item-label caption
                  >Programa de Estímulo por Equivalencia
                </q-item-label>
              </q-item-section>
            </q-item>

            <q-item tag="label" v-ripple>
              <q-item-section avatar>
                <q-radio
                  v-model="tipoDeCreacion"
                  val="interpretacion"
                  color="teal"
                />
              </q-item-section>
              <q-item-section>
                <q-item-label>Interpretación y estreno de obras</q-item-label>
                <q-item-label caption
                  >Programa de Estímulos de Iniciación de la Carrera Académica
                  para Personal de Tiempo Completo
                </q-item-label>
              </q-item-section>
            </q-item>
            <q-item tag="label" v-ripple>
              <q-item-section avatar>
                <q-radio
                  v-model="tipoDeCreacion"
                  val="produccion"
                  color="teal"
                />
              </q-item-section>
              <q-item-section>
                <q-item-label
                  >Obras en producciones discográficas y/o audiovisuales y/o en
                  línea</q-item-label
                >
                <q-item-label caption
                  >Programa de Estímulos al Desempeño de Personal Académico de
                  Carrera de Medio Tiempo para el Fortalecimiento de la
                  Docencia</q-item-label
                >
              </q-item-section>
            </q-item>
          </q-list>
        </div>

        <div class="row q-mt-md" v-if="tipoDeCreacion">
          <q-input
            filled
            v-model="nombreobra"
            label="Nombre de la obra"
            class="col-6 q-pa-md"
            v-if="tipoDeCreacion != 'produccion'"
            lazy-rules
            :rules="[
              (val) => (val && val.length > 0) || 'Please type something',
            ]"
          />
          <q-input
            filled
            v-if="tipoDeCreacion == 'produccion'"
            v-model="nombreobra"
            label="Nombre del (los) disco(s) y/o del (los) producto(s) audiovisual(es)."
            class="col-6 q-pa-md"
            lazy-rules
            :rules="[
              (val) => (val && val.length > 0) || 'Please type something',
            ]"
          />
          <q-file
            color="teal"
            filled
            v-model="informesabatico"
            label="Adjunte documentación probatoria.  "
            hint="Para incluir links a repositorios o páginas de internet, cópielos en un documento de word o programa similar y suba el documento."
            class="col-6 q-pa-md"
          >
            <template v-slot:prepend>
              <q-icon name="cloud_upload" />
            </template>
          </q-file>
          <q-input
            filled
            v-model="descripcionDeObra"
            label="Descripción de la obra"
            class="col-12 q-pa-md"
            type="textarea"
            lazy-rules
            :rules="[
              (val) => (val && val.length > 0) || 'Please type something',
            ]"
          />

          <div class="col-12">
            <q-toggle
              v-if="tipoDeCreacion == 'creacion'"
              v-model="obracomisionada"
              checked-icon="check"
              color="green"
              unchecked-icon="clear"
              label="¿La obra fue comisionada?"
            />
            <strong
              ><span v-if="obracomisionada"> Sí</span
              ><span v-else-if="obracomisionada == false"> No</span></strong
            >
          </div>
          <div v-if="obracomisionada == true" class="col-12">
            <q-input
              filled
              v-model="institucioncomisionada"
              label="Institución, agrupación o ensamble que la comisionó."
              class="col-6 q-pa-md"
              lazy-rules
              :rules="[
                (val) => (val && val.length > 0) || 'Please type something',
              ]"
            />
            <q-file
              color="teal"
              filled
              v-model="probatoriocomision"
              label="Documentación probatoria"
              class="col-6 q-pa-md"
            >
              <template v-slot:prepend>
                <q-icon name="cloud_upload" />
              </template>
            </q-file>
          </div>
        </div>
      </div>
    </div>

    <!-- FIN DE SECCION  -->
    <!-- INICIO DE SECCION  -->
    <div v-if="$route.params.tipo == 1 || $route.params.tipo == 2">
      <h6 class="col-12" id="distinacionesOtras">Actividad concertística</h6>
      <p>
        Actividad concertística, en línea o presencial, ya sea como miembro de
        una orquesta, ensamble de cámara o solista. Si varios conciertos se
        realizaron dentro de un festival o temporada, señalar las fechas en el
        mismo espacio, de lo contrario, utilizar un espacio para cada concierto.
      </p>
      <div class="col-12">
        <div class="col-12">
          <q-toggle
            v-model="actividadConcertistica"
            checked-icon="check"
            color="green"
            unchecked-icon="clear"
            label="¿Llevó a cabo actividad concertística? "
          />
          <div class="q-px-sm q-pt-sm">
            <strong
              ><span v-if="actividadConcertistica">Sí</span
              ><span v-else-if="actividadConcertistica == false"
                >No</span
              ></strong
            >
          </div>
        </div>
        <div class="row" v-if="actividadConcertistica == true">
          <q-input
            filled
            v-model="nombreConcierto"
            label="Indique si el(los) concierto(s) se llevó(llevaron) a cabo en el marco de un evento, festival o temporada específica. "
            hint="Si se llevaron a cabo varios conciertos dentro de un mismo evento, festival o temporada, enlistar todas las fechas."
            class="col-12 q-pa-md"
            lazy-rules
            :rules="[
              (val) => (val && val.length > 0) || 'Please type something',
            ]"
          />
          <q-input
            v-model="text"
            filled
            class="col-6 q-pa-md"
            hint="Si se llevaron a cabo varios conciertos dentro de un mismo evento, festival o temporada, enlistar todas las fechas."
            label="Fecha y  lugar"
          />
          <q-file
            v-if="true"
            color="teal"
            filled
            v-model="informesabatico"
            label="Documento probatorio"
            class="col-4 q-pa-md"
          >
            <template v-slot:prepend>
              <q-icon name="cloud_upload" />
            </template>
          </q-file>
        </div>
      </div>
      <q-table
        class="col-6 q-pa-md"
        v-if="cursos.length > 0"
        title="Cursos registrados"
        :rows="cursos"
        :columns="columnascurso"
        row-key="name"
      >
      </q-table>
    </div>
    <!-- FIN DE SECCION  -->
    <!-- INICIO DE SECCION  -->
    <div v-if="$route.params.tipo == 1 || $route.params.tipo == 2">
      <h6 class="col-12" id="distinacionesOtras">
        Interpretaciones incluidas en discos o medios audiovisuales. (cine,
        radio, televisión, streaming u otro medio)
      </h6>
      <div class="col-12">
        <div class="col-12">
          <q-toggle
            v-model="interpretaciones"
            checked-icon="check"
            color="green"
            unchecked-icon="clear"
            label="¿Llevó a cabo este tipo de actividades?"
          />
          <div class="q-px-sm q-pt-sm">
            <strong
              ><span v-if="interpretaciones">Sí</span
              ><span v-else-if="interpretaciones == false">No</span></strong
            >
          </div>
        </div>
        <div class="row" v-if="interpretaciones == true">
          <q-input
            filled
            v-model="nombreDelProducto"
            label="Nombre del disco y del producto audiovisual"
            class="col-6 q-pa-md"
            lazy-rules
            :rules="[
              (val) => (val && val.length > 0) || 'Please type something',
            ]"
          />

          <q-file
            v-if="true"
            color="teal"
            filled
            v-model="informeproducto"
            label="Documento probatorio"
            class="col-4 q-pa-md"
          >
            <template v-slot:prepend>
              <q-icon name="cloud_upload" />
            </template>
          </q-file>
        </div>
      </div>
      <q-table
        class="col-6 q-pa-md"
        v-if="cursos.length > 0"
        title="Cursos registrados"
        :rows="cursos"
        :columns="columnascurso"
        row-key="name"
      >
      </q-table>
    </div>
    <!-- FIN DE SECCION  -->
     <q-btn
      unelevated
      color="blue-grey-6"
      size="lg"
      class="full-width"
      label="continuar"
      href="seccion4"
    />
  </div>
</template>

<style></style>

<script>
const columns = [
  {
    name: "name",
    required: true,
    label: "Nombre de la comisión",
    align: "left",
    field: (row) => row.name,
    format: (val) => `${val}`,
    sortable: true,
  },
  {
    name: "periodo",
    align: "center",
    label: "Periodo de la comisión",
    field: "periodo",
    sortable: true,
  },
  {
    name: "documentacion",
    label: "Documentación probatoria",
    field: "documentación",
    sortable: false,
  },
];

import { mapState } from "vuex";
export default {
  name: "AsignaturaSecUnoFormUno",
  setup() {
    return {
      columns,
    };
  },

  data() {
    return {
      investigacion: null,
      nombreDelProyecto: null,
      tipoDeApoyo: ["PAPIIT", "PAPIME", "Ninguno"],
      tipoDeApoyoSeleccionado: null,
      descripcionDelProyecto: null,
      medalla: null,
      asesorias: [],
      tematicasesiones: null,
      cantidadAlumnosAtendidos: null,
      creacionmusical: null,
      tipoDeCreacion: null,
      nombreDelProducto: null,

      actividadConcertistica: null,
      obracomisionada: null,
      boletacursos: null,
      nombredelcurso: null,
      impartiocursos: null,
      nuevacomision: true,
      name: null,
      nombramiento: null,
      third: null,
      distincionesunam: null,
      valoresdistincionesunam: null,
      distincionesexternas: null,
      valoresdistincionesexternas: null,
      licencias: null,
      valoreslicencias: null,
      periodolicencia: null,
      interpretaciones: null,
      estimulodos: null,
      estimulodosvalores: null,
      estimulo: null,
      periodosabatico: null,
      nombrecomision: null,
      archivocomision: null,
      informesabatico: null,
      shape: null,
      options: [
        "Profesor ordinario de Asignatura A, Interino",
        "Profesor ordinario de Asignatura B, Interino",
        "Profesor ordinario de Asignatura A, Definitivo",
        "Profesor ordinario de Asignatura B, Definitivo",
      ],
      nivelcursos: ["CIM", "Propedéutico", "Licenciatura", "Posgrado"],
      nivelcursoseleccionado: null,
      nivelpride: ["A", "B", "C", "D"],
      pride: null,
      nivelprideseleccionado: null,
      archivodistincionunam: null,
      archivodistincionexternas: null,
      comisiones: [],
      cursos: [],
      columnascurso: [
        {
          name: "nivel",
          required: true,
          label: "Nivel",
          align: "left",
          field: (row) => row.nivel,
          format: (val) => `${val}`,
          sortable: true,
        },
        {
          name: "nombre",
          align: "center",
          label: "Nombre del curso",
          field: "nombre",
          sortable: true,
        },
        { name: "boleta", label: "Boleta", field: "boleta", sortable: false },
      ],
    };
  },
  methods: {
    agregar: function () {
      // `this` dentro de los métodos apunta a la instancia de Vue
      this.comisiones.push({
        name: this.nombrecomision,
        periodo: this.periodolicencia.from + " - " + this.periodolicencia.to,
        documentacion: "",
      }); // what to push unto the rows array?
      this.nombrecomision = null;
      this.periodolicencia = null;
      this.archivocomision = null;
      this.nuevacomision = false;
      this.$q.notify({
        message: "Se ha agregado la comisión",
        color: "secondary",
      });
    },
    agregarCurso: function () {
      // `this` dentro de los métodos apunta a la instancia de Vue
      this.cursos.push({
        nombre: this.nombredelcurso,
        nivel: this.nivelcursoseleccionado,
        boleta: "",
      }); // what to push unto the rows array?
      this.nombredelcurso = null;
      this.nivelcursoseleccionado = null;
      this.boletacursos = null;

      this.$q.notify({
        message: "Se ha agregado el curso",
        color: "secondary",
      });
    },
    actualizarNombre(e) {
      this.$store.commit("actualizarNombre", e.target.value);
    },
  },
  computed: {
    ...mapState({ nombre: (state) => state.nombre }),
    nombre: {
      get() {
        return this.$store.state.nombre;
      },
      set(value) {
        this.$store.commit("actualizarNombre", value);
      },
    },
  },
};
</script>
