<template>
  <div class="q-pa-md">
    <h4>Sección 4</h4>

    <!-- INICIO DE SECCION  -->
    <div  v-if="$route.params.tipo == 1 || $route.params.tipo == 2">
      <h6 class="col-12" id="distinacionesOtras">Extensión y Difusión</h6>
      <p>
        Presentaciones de: productos de investigación o artísticos; elaboración
        de notas al programa y participación en medios de comunicación.
      </p>
      <div class="col-12">
        <div class="col-12">
          <q-toggle
            v-model="investigacion"
            checked-icon="check"
            color="green"
            unchecked-icon="clear"
            label="¿Realizó presentaciones de productos de investigación y/o artísticos? "
          />
          <div class="q-px-sm q-pt-sm">
            <strong
              ><span v-if="investigacion">Sí</span
              ><span v-else-if="investigacion == false">No</span></strong
            >
          </div>
        </div>
        <div class="row" v-if="investigacion == true">
          <p class="text-subtitle2">
            Actividades de difusión como: presentaciones de libros, partituras,
            discos, software; así como elaboración de programas de mano o de
            producciones discográficas.
          </p>

          <q-input
            filled
            v-model="nombreDelProyecto"
            label="Describir las actividades, el lugar y la fecha de la(s) presentación(es)."
            class="col-12 q-pa-md"
            type="textarea"
            lazy-rules
            :rules="[
              (val) => (val && val.length > 0) || 'Please type something',
            ]"
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
        <div class="col-12 q-pt-md" v-if="investigacion == true">
          <p class="text-subtitle2">
            Participación en medios de difusión y comunicación.
          </p>
          <q-input
            filled
            v-model="mediosDeDifusion"
            label="Describir las actividades, el lugar y la fecha de la(s) presentación(es)."
            class="col-12 q-pa-md"
            type="textarea"
            lazy-rules
            :rules="[
              (val) => (val && val.length > 0) || 'Please type something',
            ]"
          />

          <q-file
            color="teal"
            filled
            v-model="probatoriomediosDeDifusion"
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
    <div class="col-12">
      <h6 class="col-12" id="distinacionesOtras">
        Superación y Actualización Académica
      </h6>
      <p>
        Enliste las actividades de superación y actualización, en línea o
        presenciales, relacionadas con las funciones que desempeña en la FAM.
      </p>
      <q-toggle
        v-model="creacionmusical"
        checked-icon="check"
        color="green"
        unchecked-icon="clear"
        label="¿Llevó a cabo alguna actividad de superación y/o actualización?"
      />
      <strong
        ><span v-if="creacionmusical"> Sí</span
        ><span v-else-if="creacionmusical == false"> No</span></strong
      >

      <div v-if="creacionmusical == true" class="row">
        <q-select
          class="col-12 q-pa-md"
          filled
          v-model="superacionAcademicaSeleccionado"
          :options="superacionAcademica"
          label="Seleccione el (los) evento(s) académico(s) que tomó durante el periodo:a"
        />
        <q-input
          filled
          v-model="nombreEvento"
          label="Nombre del evento"
          class="col-4 q-pa-md"
        />
        <q-input
          filled
          v-model="duracionEvento"
          label="Duracion del evento"
          class="col-4 q-pa-md"
        />
        <q-input
          filled
          v-model="fechaEvento"
          label="Fecha y lugar"
          class="col-4 q-pa-md"
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
      </div>
    </div>

    <!-- FIN DE SECCION  -->
    <!-- INICIO DE SECCION  -->
    <div  v-if="$route.params.tipo == 1 || $route.params.tipo == 2">
      <h6 class="col-12" id="distinacionesOtras">
        Participaciones como jurado
      </h6>
      <p>Participaciones como jurado en diversas actividades académicas.</p>
      <div class="col-12">
        <div class="col-12">
          <q-toggle
            v-model="actividadConcertistica"
            checked-icon="check"
            color="green"
            unchecked-icon="clear"
            label="¿Tuvo participaciones como jurado? "
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
          <q-select
            class="col-12 q-pa-md"
            filled
            v-model="juradoSeleccionado"
            :options="jurado"
            label="Seleccione el tipo de jurado: "
          />

          <q-input
            filled
            v-model="detalleParticipacion"
            label="Detalle la participación."
            class="col-12 q-pa-md"
            type="textarea"
          />
          <q-input
            filled
            v-model="fechasParticipacion"
            label="Fecha(s)"
            class="col-4 q-pa-md"
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
     <q-btn
      unelevated
      color="blue-grey-6"
      size="lg"
      class="full-width"
      label="continuar"
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
      investigacion: null,
      nombreDelProyecto: null,
      superacionAcademica: [
        "Curso",
        "Taller",
        "Diplomado",
        "Curso del Programa de Actualización y Superación Docente (PASD); DGAPA",
        "Seminario de Superación Académica entre pares",
        "Estudios de posgrado",
        "Otra",
      ],
      superacionAcademicaSeleccionado: null,
      jurado: [
        "Jurado en examen de admisión",
        "Jurado en examen de oposición",
        "Jurado en concurso de la Facultad o de la UNAM",
        "Otra",
      ],
      juradoSeleccionado: null,
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
