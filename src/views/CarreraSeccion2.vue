<template>
  <div class="q-pa-md">
    <h4>Sección 2</h4>

    <!-- INICIO DE SECCION  -->
    <div v-if="$route.params.tipo == 1 || $route.params.tipo == 2">
      <h6 class="col-12" id="distinacionesOtras">Asesorias academicas</h6>
      <p>
        Asesorías para llevar a cabo alguno de los siguientes exámenes: cambio
        de nivel, ingreso a licenciatura, titulación licenciatura o posgrado.
      </p>
      <div class="col-12">
        <div class="col-12">
          <q-toggle
            v-model="asesoriasexamen"
            checked-icon="check"
            color="green"
            unchecked-icon="clear"
            label="¿Llevó a cabo una asesoría? "
          />
          <div class="q-px-sm q-pt-sm">
            <strong
              ><span v-if="asesoriasexamen">Sí</span
              ><span v-else-if="asesoriasexamen == false">No</span></strong
            >
          </div>
        </div>
        <div class="row" v-if="asesoriasexamen == true">
          <q-input
            filled
            v-model="nombreAlumnoAsesoria"
            label="Nombre del alumno"
            class="col-4 q-pa-md"
            lazy-rules
            :rules="[
              (val) => (val && val.length > 0) || 'Please type something',
            ]"
          />
          <q-select
            class="col-4 q-pa-md"
            filled
            v-model="examenAsesoriaSeleccionado"
            :options="examenAsesoria"
            label="La asesoría fue para"
          />
          <q-input
            v-model="text"
            filled
            class="col-4 q-pa-md"
            hint="(si aplica)"
            label="Nombre del trabajo o proyecto de titulación."
          />
          <div class="q-pa-md col-12">
            <div class="q-px-sm">
              ¿La asesoría concluyó? <strong>{{ concluyoAsesoria }}</strong>
            </div>
            <div class="q-gutter-sm">
              <q-radio
                v-model="concluyoAsesoria"
                val="No, el alumno continúa trabajando en el proyecto."
                label="No"
              />
              <q-radio
                v-model="concluyoAsesoria"
                val="Sí, se llevó a cabo el examen."
                label="Sí"
              />
            </div>
          </div>

          <div class="col-12">
            <q-list v-if="concluyoAsesoria == 'Sí, se llevó a cabo el examen.'">
              <div class="q-px-sm">¿Obtuvo alguna medalla?</div>
              <!--
        Rendering a <label> tag (notice tag="label")
        so QRadios will respond to clicks on QItems to
        change Toggle state.
      -->

              <q-item tag="label" v-ripple>
                <q-item-section avatar>
                  <q-radio v-model="medalla" val="PEE" color="teal" />
                </q-item-section>
                <q-item-section>
                  <q-item-label>Ninguna</q-item-label>
                </q-item-section>
              </q-item>

              <q-item tag="label" v-ripple>
                <q-item-section avatar>
                  <q-radio v-model="estimulo" val="PEI" color="teal" />
                </q-item-section>
                <q-item-section>
                  <q-item-label
                    >Premio al Servicio Social Gustavo Baz Prada</q-item-label
                  >
                </q-item-section>
              </q-item>
              <q-item tag="label" v-ripple>
                <q-item-section avatar>
                  <q-radio v-model="estimulo" val="PEDPACMeT" color="teal" />
                </q-item-section>
                <q-item-section>
                  <q-item-label>Medalla Gabino Barreda</q-item-label>
                </q-item-section>
              </q-item>

              <q-item tag="label" v-ripple>
                <q-item-section avatar>
                  <q-radio v-model="estimulo" val="PEDMETI" color="orange" />
                </q-item-section>
                <q-item-section>
                  <q-item-label>Mención Honorífica</q-item-label>
                </q-item-section>
              </q-item>
              <q-item tag="label" v-ripple>
                <q-item-section avatar>
                  <q-radio v-model="estimulo" val="PEPASIG" color="orange" />
                </q-item-section>
                <q-item-section>
                  <q-item-label>Medalla Alfonso Caso</q-item-label>
                </q-item-section>
              </q-item>
            </q-list>
          </div>

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

    <!-- INICIO DE CURSOS-->
    <div v-if="$route.params.tipo == 1 || $route.params.tipo == 2">
      <h6 class="col-12" id="cursos">Cursos remediales</h6>
      <p>
        Impartición de cursos remediales para alumnos de la Facultad de Música.
      </p>
      <q-toggle
        v-model="impartiocursos"
        checked-icon="check"
        color="green"
        unchecked-icon="clear"
        label="¿Impartió cursos remediales para alumnos de la FAM?"
      />
      <strong
        ><span v-if="impartiocursos"> Sí</span
        ><span v-else-if="impartiocursos == false"> No</span></strong
      >

      <div class="row">
        <div class="col-4" v-if="impartiocursos == true">
          <q-select
            class="col-12 q-pa-md"
            filled
            v-model="nivelcursoseleccionado"
            :options="nivelcursos"
            label="Nivel"
          />
        </div>
        <div class="col-4" v-if="impartiocursos == true">
          <q-input
            class="col-12 q-pa-md"
            filled
            v-model="nombredelcurso"
            label="Nombre del curso"
          />
        </div>
        <div class="col-3">
          <q-file
            v-if="impartiocursos == true"
            color="teal"
            filled
            v-model="boletacursos"
            label="Documento probatorio"
            class="col-12 q-pa-md"
          >
            <template v-slot:prepend>
              <q-icon name="cloud_upload" />
            </template>
          </q-file>
        </div>
        <div
          class="col-1 q-pt-md"
          v-if="
            impartiocursos == true &&
            nivelcursoseleccionado != null &&
            nombredelcurso != null &&
            boletacursos != null
          "
          v-on:click="agregarCurso"
        >
          <q-btn color="teal">
            <div>Agregar</div>
          </q-btn>
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
    </div>
    <!-- FIN DE CURSOS-->
    <!-- INICIO DE SECCION  -->
    <div>
      <h6 class="col-12" id="distinacionesOtras">Otras Tutorías/asesorías</h6>
      <p>
        Tutorías y/o asesorías de otra índole para alumnos y/o profesores; como
        el Programa de Acción Tutoral de la FAM.
      </p>
      <div class="col-12">
        <q-list>
          <div class="q-px-sm">Tipo de tutoría</div>
          <!--
        Rendering a <label> tag (notice tag="label")
        so QRadios will respond to clicks on QItems to
        change Toggle state.
      -->

          <q-item tag="label" v-ripple>
            <q-item-section avatar>
              <q-radio v-model="medalla" val="PEE" color="teal" />
            </q-item-section>
            <q-item-section>
              <q-item-label>Programa de Acción Tutoral de la FAM</q-item-label>
            </q-item-section>
          </q-item>
        </q-list>
      </div>
      <div class="col-6">
        <div class="row">
          <q-input
            filled
            v-model="tematicasesiones"
            label="Describa la temática que se trató durante las sesiones."
            class="col-12 q-pa-md"
            type="textarea"
            lazy-rules
            :rules="[
              (val) => (val && val.length > 0) || 'Please type something',
            ]"
          />
          <q-input
            v-model="cantidadAlumnosAtendidos"
            filled
            class="col-4 q-pa-md"
            type="number"
            label="Número de alumnos atendidos"
          />

          <q-file
            color="teal"
            filled
            v-model="informesabatico"
            label="Documentación probatoria"
            class="col-4 q-pa-md"
          >
            <template v-slot:prepend>
              <q-icon name="cloud_upload" />
            </template>
          </q-file>
        </div>
      </div>
    </div>
    <!-- FIN DE SECCION  -->
  <q-btn
      unelevated
      color="blue-grey-6"
      size="lg"
      class="full-width"
      label="continuar"
      href="seccion3"
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
      asesoriasexamen: null,
      nombreAlumnoAsesoria: null,
      examenAsesoria: [
        "Examen de cambio de nivel",
        "Examen de ingreso a licenciatura",
        "Examen de titulación de licenciatura: examen teórico",
        "Examen de titulación de licenciatura: examen práctico",
        "Examen de titulación de licenciatura: examen teórico y práctico",
        "Examen de grado (maestría y doctorado)",
      ],
      examenAsesoriaSeleccionado: null,
      concluyoAsesoria: null,
      medalla: null,
      asesorias: [],
      tematicasesiones: null,
      cantidadAlumnosAtendidos: null,

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
