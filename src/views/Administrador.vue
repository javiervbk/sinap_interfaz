<template>
  <div class="q-pa-md">
    <h4>Administrador</h4>

    <div class="q-pa-md">
      <q-table
        title="Profesores"
        :rows="rows"
        :columns="columns"
        row-key="name"
        :visible-columns="visibleColumns"
      >
        
        <template v-slot:body="props">
        <q-tr :props="props">
          <q-td key="name" :props="props">
            {{ props.row.name }}
          </q-td>
          <q-td key="calories" :props="props">
             <q-circular-progress
                show-value
                font-size="12px"
                :value="props.row.calories"
                size="50px"
                :thickness="0.22"
                color="teal"
                track-color="grey-3"
                class="q-ma-md"
              >
                {{ props.row.calories }}%
              </q-circular-progress>
            

          </q-td>
          <q-td key="fat" :props="props">
            <q-circular-progress
                show-value
                font-size="12px"
                :value="props.row.fat"
                size="50px"
                :thickness="0.22"
                color="purple"
                track-color="grey-3"
                class="q-ma-md"
              >
                {{ props.row.fat }}%
              </q-circular-progress>
          </q-td>
          <q-td key="carbs" :props="props">
            <q-circular-progress
                show-value
                font-size="12px"
                :value="props.row.carbs"
                size="50px"
                :thickness="0.22"
                color="yellow"
                track-color="grey-3"
                class="q-ma-md"
              >
                {{ props.row.carbs }}%
              </q-circular-progress>
          </q-td>
          <q-td key="protein" :props="props">
            <q-circular-progress
                show-value
                font-size="12px"
                :value="props.row.protein"
                size="50px"
                :thickness="0.22"
                color="primary"
                track-color="grey-3"
                class="q-ma-md"
              >
                {{ props.row.protein }}%
              </q-circular-progress>
          </q-td>
          <q-td key="sodium" :props="props">
             <q-circular-progress
                show-value
                font-size="12px"
                :value="props.row.sodium"
                size="50px"
                :thickness="0.22"
                color="teal"
                track-color="grey-3"
                class="q-ma-md"
              >
                {{ props.row.sodium }}%
              </q-circular-progress>
          </q-td>
          <q-td key="calcium" :props="props">
            <q-badge color="accent">
              {{ props.row.calcium }}
            </q-badge>
          </q-td>
          <q-td key="iron" :props="props">
            <q-badge color="amber">
              {{ props.row.iron }}
            </q-badge>
          </q-td>
        </q-tr>
      </template>
      </q-table>
    </div>
    
<div>
  <h5>Evaluadores</h5>
<div class="q-pa-md" >
    <q-list bordered class="rounded-borders">
      <q-expansion-item
        expand-separator
        icon="perm_identity"
        label="Alfredo	Bringas	Sánchez"
        caption="Evaluador 1"
      >
        <q-list bordered>
      <q-item v-for="contact in contacts" :key="contact.id" class="q-my-sm" clickable v-ripple>
        <q-item-section avatar>
          <q-avatar color="primary" text-color="white">
            {{ contact.letter }}
          </q-avatar>
        </q-item-section>

        <q-item-section>
          <q-item-label>{{ contact.name }}</q-item-label>
          <q-item-label caption lines="1">{{ contact.email }}</q-item-label>
        </q-item-section>

        <q-item-section side>
          <q-icon name="visibility" color="green" />
        </q-item-section>
      </q-item>

     
    </q-list>
      </q-expansion-item>

      <q-expansion-item
        expand-separator
        icon="perm_identity"
        label="Ambrosio Salvador	Rodríguez	Lara"
        caption="Evaluador 2"
      >
        <q-card>
          <q-card-section>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, eius reprehenderit eos corrupti
            commodi magni quaerat ex numquam, dolorum officiis modi facere maiores architecto suscipit iste
            eveniet doloribus ullam aliquid.
          </q-card-section>
        </q-card>
      </q-expansion-item>

      <q-expansion-item
        expand-separator
        icon="perm_identity"
        label="Gabriela	Ortiz	Torres"
      
        caption="Evaluador 3"
      >
        <q-card>
          <q-card-section>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, eius reprehenderit eos corrupti
            commodi magni quaerat ex numquam, dolorum officiis modi facere maiores architecto suscipit iste
            eveniet doloribus ullam aliquid.
          </q-card-section>
        </q-card>
      </q-expansion-item>

    
    </q-list>
  </div>

</div>
</div>
 
</template>

<style></style>

<script>
// eslint-disable-next-line prettier/prettier
import { ref } from 'vue'
const contacts = [ {
  id: 1,
  name: 'Roberto 	Benítez 	Alonso',
  email: 'rbenitez@fam.unam.mx',
  letter: 'R'
}, {
  id: 2,
  name: 'Alfredo	Mendoza	Mendoza',
  email: 'alfredofam@comunidad.unam.mx',
  letter: 'A'
}, {
  id: 3,
  name: 'Marco Alejandro	Sanchez 	Escuer',
  email: 'marco.sescuer@fam.unam.mx',
  letter: 'M'
}, {
  id: 4,
  name: 'Artemisa Margarita	Reyes	Gallegos',
  email: 'areyes@fam.unam.mx',
  letter: 'A'
} ]

const offline = [ {
  id: 5,
  name: 'Brunhilde Panswick',
  email: 'bpanswick4@csmonitor.com',
  avatar: 'avatar2.jpg'
}, {
  id: 6,
  name: 'Winfield Stapforth',
  email: 'wstapforth5@pcworld.com',
  avatar: 'avatar6.jpg'
} ]
const columns = [
  {
    name: "name",
    required: true,
    label: "Nombre",
    align: "left",
    field: (row) => row.name,
    format: (val) => `${val}`,
    sortable: true,
  },
  {
    name: "calories",
    align: "center",
    label: "Sección 1",
    field: "calories",
    sortable: true,
  },
  { name: "fat", label: "Sección 2", field: "fat", sortable: true },
  { name: "carbs", label: "Sección 3", field: "carbs" },
  { name: "protein", label: "Sección 4", field: "protein" },
  { name: "sodium", label: "Sección 5", field: "sodium" },
  
];

const rows = [
  {
    name: "Rosa María	Zúñiga 	Flores",
    calories: 26,
    fat: 60,
    carbs: 24,
    protein: 40,
    sodium: 87,
  },
  {
    name: "Maria Soledad 	Perez	Muela",
    calories: 37,
    fat: 90,
    carbs: 37,
    protein: 43,
    sodium: 29,
  },
  {
    name: "Omar	Álvarez	Martínez",
    calories: 62,
    fat: 16,
    carbs: 23,
    protein: 60,
    sodium: 37,
  },
  {
    name: "Sonia 	Rangel	Espinosa",
    calories: 100,
    fat: 100,
    carbs: 100,
    protein: 100,
    sodium: 100,
   
  },
  {
    name: "Jimena	Miranda	Martínez",
    calories: 56,
    fat: 52,
    carbs: 100,
    protein: 100,
    sodium: 100,
    
  },
  {
    name: "Andrés	Acosta 	Sánchez",
    calories: 75,
    fat: 0,
    carbs: 0,
    protein: 0,
    sodium: 0,
  
  },
  {
    name: "Juan Carlos	Zamora	Cunningham",
    calories: 0,
    fat: 0,
    carbs: 0,
    protein: 0,
    sodium: 30,
 
  },
  {
    name: "José Luis	Sánchez	García",
    calories: 8,
    fat: 32,
    carbs: 87,
    protein: 65,
    sodium: 62,
    
  },
  {
    name: "Alejandro 	Martínez 	Millán ",
    calories: 100,
    fat: 25,
    carbs: 51,
    protein: 49,
    sodium: 32,
  
  },
  {
    name: "José Antonio	Rosales	Sánchez",
    calories: 25,
    fat: 26,
    carbs: 65,
    protein: 7,
    sodium: 54,
    
  },
];

import { mapState } from "vuex";
export default {
  name: "Administrador",
  setup() {
    return {
      visibleColumns: ref([
        "calories",
        "desc",
        "fat",
        "carbs",
        "protein",
        "sodium",
        "calcium",
        "iron",
      ]),
      columns,
      rows,
      contacts,
      offline
    };
  },

  data() {
    return {
      primerapellido: null,
      segundoapellido: null,
      ntrabajador: null,
      curp: null,
      correoadicional: null,
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
