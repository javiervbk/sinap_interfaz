<template>
  <div class="q-pa-md">
    <h4>Sección 5</h4>

    <!-- INICIO DE SECCION  -->
    <div>
      <h6 class="col-12" id="distinacionesOtras">
        Participación en comisiones y/o comités académicos (dentro o fuera de la
        UNAM)
      </h6>
      <p>
        Información sobre comisiones de trabajo institucional o
        académico-administrativo. Incluye las comisiones designadas por el
        Consejo Técnico y las comisiones aprobadas por entidades externas a la
        FAM o la UNAM.
      </p>
      <div class="col-12">
        <div class="col-12">
          <q-toggle
            v-model="comisionesycomites"
            checked-icon="check"
            color="green"
            unchecked-icon="clear"
            label="¿Participó en trabajo de comisiones y/o comités académicos? "
          />
          <div class="q-px-sm q-pt-sm">
            <strong
              ><span v-if="comisionesycomites">Sí</span
              ><span v-else-if="comisionesycomites == false">No</span></strong
            >
          </div>
        </div>
        <div class="row" v-if="comisionesycomites == true">
          <q-input
            filled
            v-model="nombreComite"
            label="Nombre del comité o comisión"
            class="col-6 q-pa-md"
            lazy-rules
            :rules="[
              (val) => (val && val.length > 0) || 'Please type something',
            ]"
          />

          <q-input
            v-model="reuniones"
            filled
            class="col-6 q-pa-md"
            label="Fecha(s) de la(s) reunión(es)"
          />
          <q-input
            filled
            v-model="tematicasesiones"
            label="Describa las actividades generales que se realizaron."
            class="col-12 q-pa-md"
            type="textarea"
            lazy-rules
            :rules="[
              (val) => (val && val.length > 0) || 'Please type something',
            ]"
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
    <div>
      <h6 class="col-12" id="distinacionesOtras">
        Participación en academias y claustros
      </h6>

      <div class="col-12">
        <div class="col-12">
          <q-toggle
            v-model="claustros"
            checked-icon="check"
            color="green"
            unchecked-icon="clear"
            label="¿Participó en el trabajo de claustros y/o academias? "
          />
          <div class="q-px-sm q-pt-sm">
            <strong
              ><span v-if="claustros">Sí</span
              ><span v-else-if="claustros == false">No</span></strong
            >
          </div>
        </div>
        <div class="row" v-if="claustros == true">
          <q-input
            filled
            v-model="nombrePrograma"
            label="Nombre del programa"
            class="col-12 q-pa-md"
            lazy-rules
            :rules="[
              (val) => (val && val.length > 0) || 'Please type something',
            ]"
          />

          <q-input
            filled
            v-model="tematicasesionesPrograma"
            label="Describa las actividades realizadas."
            class="col-12 q-pa-md"
            type="textarea"
            lazy-rules
            :rules="[
              (val) => (val && val.length > 0) || 'Please type something',
            ]"
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

    <!-- INICIO DE CURSOS-->
    <div  v-if="$route.params.tipo == 1 || $route.params.tipo == 2">
      <h6 class="col-12" id="cursos">
        Participación en programas de intercambio académico
      </h6>
      <p>
        Programas de intercambio académico con instituciones educativas
        nacionales e internacionales, esto incluye el Programa de
        Perfeccionamiento (PPA) de la UNAM, de la DGAPA
      </p>
      <q-toggle
        v-model="intercambio"
        checked-icon="check"
        color="green"
        unchecked-icon="clear"
        label="¿Participó en programas de intecambio académico de la FAM?"
      />
      <strong
        ><span v-if="intercambio"> Sí</span
        ><span v-else-if="intercambio == false"> No</span></strong
      >
      <div class="row" v-if="intercambio == true">
        <q-input
          filled
          v-model="nombreComite"
          label="Nombre del claustro o academia"
          class="col-12 q-pa-md"
          lazy-rules
          :rules="[(val) => (val && val.length > 0) || 'Please type something']"
        />

        <q-input
          filled
          v-model="tematicasesiones"
          label="Describa las actividades realizadas."
          class="col-12 q-pa-md"
          type="textarea"
          lazy-rules
          :rules="[(val) => (val && val.length > 0) || 'Please type something']"
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

      <div class="row">
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
      <!-- FIN DE CURSOS-->
      <!-- INICIO DE SECCION  -->
      <div>
        <h6 class="col-12" id="distinacionesOtras">
          Nombramiento académico-administrativo
        </h6>
        <p>
          Información sobre comisiones de trabajo institucional o
          académico-administrativo. Incluye las comisiones designadas por el
          Consejo Técnico y las comisiones aprobadas por entidades externas a la
          FAM o la UNAM.
        </p>
        <div class="col-12">
          <div class="col-12">
            <q-toggle
              v-model="nombramiento"
              checked-icon="check"
              color="green"
              unchecked-icon="clear"
              label="¿Tiene nombramiento académico administrativo?"
            />
            <div class="q-px-sm q-pt-sm">
              <strong
                ><span v-if="nombramiento">Sí</span
                ><span v-else-if="nombramiento == false">No</span></strong
              >
            </div>
          </div>
          <div class="row" v-if="nombramiento == true">
            <q-input
              filled
              v-model="nombreNombramiento"
              label="Especifique el nombramiento"
              class="col-12 q-pa-md"
              lazy-rules
              :rules="[
                (val) => (val && val.length > 0) || 'Please type something',
              ]"
            />
          </div>
        </div>
      </div>
      <!-- FIN DE SECCION  -->
      <!-- INICIO DE SECCION  -->
      <div>
        <h6 class="col-12" id="distinacionesOtras">
          Información adicional o complementaria
        </h6>
        <p>
          Información que considere relevante reportar o complementar durante el
          periodo.
        </p>
        <div class="col-12">
          <div class="col-12">
            <q-toggle
              v-model="adicional"
              checked-icon="check"
              color="green"
              unchecked-icon="clear"
              label="¿Desea agregar información adicional o complementaria?"
            />
            <div class="q-px-sm q-pt-sm">
              <strong
                ><span v-if="adicional">Sí</span
                ><span v-else-if="adicional == false">No</span></strong
              >
            </div>
          </div>
          <div class="row" v-if="adicional == true">
            <q-input
              filled
              v-model="detalleinfoadicional"
              label="Información que considere relevante reportar o complementar durante el periodo"
              class="col-12 q-pa-md"
              type="textarea"
              lazy-rules
              :rules="[
                (val) => (val && val.length > 0) || 'Please type something',
              ]"
            />

            <q-file
              v-if="true"
              color="teal"
              filled
              v-model="probatorioadicional"
              label="Documento probatorio"
              class="col-4 q-pa-md"
            >
            </q-file>
          </div>
        </div>
      </div>
      <!-- FIN DE SECCION  -->
      <!-- INICIO DE SECCION  -->
      <div>
        <h6 class="col-12" id="distinacionesOtras">
          Resumen de horas semanales dedicadas a las actividades académicas
        </h6>

        <div class="col-12">
          <div class="row">
            <q-input
              filled
              v-model="horas"
              label="Horas semanales frente a grupo"
              class="col-12 q-pa-md"
            />
            <q-input
              filled
              v-model="horasdos"
              label="Promedio de horas semanales dedicadas a otras actividades docentes (asesorías, tutorías, cursos remediales, etc.)"
              class="col-12 q-pa-md"
            />
            <q-input
              filled
              v-model="horastres"
              label="Promedio de horas semanales dedicadas a la investigación y/o creación y/0 concertismo"
              class="col-12 q-pa-md"
            />
            <q-input
              filled
              v-model="horacuatro"
              label="Promedio de horas semanales dedicadas actividades de superación académica, participación en cuerpos colegiados, aplicación de exámenes de cambio de nivel o titulación y actividades académico-administrativas"
              class="col-12 q-pa-md"
            />
          </div>
        </div>
      </div>
      <!-- FIN DE SECCION  -->

      <!-- INICIO DE SECCION  -->
      <div>
        <h6 class="col-12" id="distinacionesOtras">
          Proyecto de actividades para el siguiente ciclo escolar
        </h6>

        <div class="col-12">
          <div class="row">
            <q-input
              filled
              v-model="docencia"
              label="Actividades de docencia"
              class="col-12 q-pa-md"
              type="textarea"
            />
            <q-input
              filled
              v-model="actinvestigacion"
              label="Actividades de investigación / creación / concertismo"
              class="col-12 q-pa-md"
              type="textarea"
            />
            <q-input
              filled
              v-model="actdifusion"
              label="Actividades de difusión / extensión"
              class="col-12 q-pa-md"
              type="textarea"
            />
            <q-input
              filled
              v-model="otras"
              label="Otras actividades"
              class="col-12 q-pa-md"
              type="textarea"
            />
          </div>
        </div>
      </div>
      <!-- FIN DE SECCION  -->
    </div>

    <q-btn
      unelevated
      color="blue-grey-6"
      size="lg"
      class="full-width"
      label="finalizar"
      href="seccion5"
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
      comisionesycomites: null,
      boletacursos: null,
      nombredelcurso: null,
      impartiocursos: null,
      nuevacomision: true,
      name: null,

      claustros: null,
      intercambio: null,
      adicional: null,
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
