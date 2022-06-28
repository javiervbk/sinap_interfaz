<template>
  <div class="q-pa-md">
    <h4>Sección 1</h4>
    <h6 id="datosGenerales">Datos generales</h6>
    <q-form class="row">
      <q-input
        filled
        v-model="nombre"
        label="Nombre"
        @input="actualizarNombre"
        lazy-rules
        class="col-4 q-pa-md"
        :rules="[(val) => (val && val.length > 0) || 'Campo obligatorio']"
      />
      <q-input
        filled
        v-model="primerapellido"
        label="Primer apellido"
        class="col-4 q-pa-md"
        lazy-rules
        :rules="[(val) => (val && val.length > 0) || 'Please type something']"
      />
      <q-input
        filled
        v-model="segundoapellido"
        label="Segundo Apellido"
        class="col-4 q-pa-md"
        lazy-rules
        :rules="[(val) => (val && val.length > 0) || 'Please type something']"
      />
      <q-input
        filled
        v-model="ntrabajador"
        label="Número de trabajador"
        class="col-4 q-pa-md"
        lazy-rules
        :rules="[(val) => (val && val.length > 0) || 'Please type something']"
      />
      <q-input
        filled
        v-model="curp"
        label="CURP"
        class="col-4 q-pa-md"
        hint=""
        lazy-rules
        :rules="[(val) => (val && val.length > 0) || 'Please type something']"
      />
      <q-input
        filled
        v-model="correoadicional"
        label="Correo adicional"
        class="col-4 q-pa-md"
        hint="Diferente al @fam.unam.mx"
        lazy-rules
        :rules="[(val) => (val && val.length > 0) || 'Please type something']"
      />
      <h6 class="col-12" id="nombramiento">Nombramiento actual</h6>
      <q-select
        class="col-8 q-pa-md"
        filled
        v-model="nombramiento"
        :options="options"
        label="Nombramiento actual"
      />

      <div class="col-12" v-if="$route.params.tipo == 1">
        <h6 class="col-12" id="periodoSabatico">Periodo sabático</h6>
        <p class="col-12">Goce de periodo sabático, anual o semestral</p>
        <div class="row">
          <div class="col-12">
            <q-toggle
              v-model="periodosabatico"
              checked-icon="check"
              color="green"
              unchecked-icon="clear"
              label="¿Obtuvo algún periodo sabático?"
            />
            <div class="q-px-sm q-pt-sm">
              <strong
                ><span v-if="periodosabatico">Sí</span
                ><span v-else-if="periodosabatico == false">No</span></strong
              >
            </div>
          </div>
          <div class="col-12" v-if="periodosabatico == true">
            <q-file
              v-if="periodosabatico == true"
              color="teal"
              filled
              v-model="informesabatico"
              label="Informe"
              class="col-4 q-pa-md"
            >
              <template v-slot:prepend>
                <q-icon name="cloud_upload" />
              </template>
            </q-file>
          </div>
        </div>
      </div>
      <div class="col-12" v-if="$route.params.tipo == 1">
        <h6 class="col-12" id="pride">PRIDE</h6>
        <p class="col-12">
          Programa de Primas al Desempeño del Personal Académico de Tiempo
          Completo
        </p>
        <div class="row">
          <div class="col-12">
            <q-toggle
              v-model="pride"
              checked-icon="check"
              color="green"
              unchecked-icon="clear"
              label="¿Tiene PRIDE?"
            />
            <div class="q-px-sm q-pt-sm">
              <strong
                ><span v-if="pride">Sí</span
                ><span v-else-if="pride == false">No</span></strong
              >
            </div>
          </div>
          <div class="col-12" v-if="pride == true">
            <q-select
              class="col-8 q-pa-md"
              filled
              v-model="nivelprideseleccionado"
              :options="nivelpride"
              label="nivel"
            />
          </div>
        </div>
      </div>

      <div class="col-12" v-if="$route.params.tipo == 2">
        <h6 class="col-12" id="pride">PEPASIG</h6>
        <p class="col-12">
          Programa de Estímulos a la Productividad y al Rendimiento del Personal
          Académico de Asignatura
        </p>
        <div class="row">
          <div class="col-12">
            <q-toggle
              v-model="pride"
              checked-icon="check"
              color="green"
              unchecked-icon="clear"
              label="¿Tiene PEPASIG?"
            />
            <div class="q-px-sm q-pt-sm">
              <strong
                ><span v-if="pride">Sí</span
                ><span v-else-if="pride == false">No</span></strong
              >
            </div>
          </div>
          <div class="col-12" v-if="pride == true">
            <q-select
              class="col-8 q-pa-md"
              filled
              v-model="nivelprideseleccionado"
              :options="nivelpride"
              label="nivel"
            />
          </div>
        </div>
      </div>

      <h6 class="col-12" id="estimulosUNAM">
        <span v-if="$route.params.tipo == 3">E</span
        ><span v-else>Otros e</span>stímulos la UNAM vigentes
      </h6>
      <p>
        Estímulos que otorga la UNAM para incentivar el desempeño, como el
        PEPASIG, PEI, PEDPACMeT y PEDMETI. Si desea señalar un estímulo de la
        UNAM que no aparece, seleccione "otra" y escriba el nombre a
        continuación. Puede añadir hasta 2 estímulos.
      </p>

      <q-toggle
        v-model="third"
        checked-icon="check"
        color="green"
        unchecked-icon="clear"
        label="¿tiene algún estímulo vigente?"
      />
      <div class="q-px-sm">
        <strong
          ><span v-if="third">Sí</span
          ><span v-else-if="third == false">No</span></strong
        >
        <div class="q-pa-md">
          <q-list v-if="third == true">
            <!--
        Rendering a <label> tag (notice tag="label")
        so QRadios will respond to clicks on QItems to
        change Toggle state.
      -->

            <q-item tag="label" v-ripple>
              <q-item-section avatar>
                <q-radio v-model="estimulo" val="PEE" color="teal" />
              </q-item-section>
              <q-item-section>
                <q-item-label>PEE</q-item-label>
                <q-item-label caption
                  >Programa de Estímulo por Equivalencia
                </q-item-label>
              </q-item-section>
            </q-item>

            <q-item tag="label" v-ripple>
              <q-item-section avatar>
                <q-radio v-model="estimulo" val="PEI" color="teal" />
              </q-item-section>
              <q-item-section>
                <q-item-label>PEI</q-item-label>
                <q-item-label caption
                  >Programa de Estímulos de Iniciación de la Carrera Académica
                  para Personal de Tiempo Completo
                </q-item-label>
              </q-item-section>
            </q-item>
            <q-item tag="label" v-ripple>
              <q-item-section avatar>
                <q-radio v-model="estimulo" val="PEDPACMeT" color="teal" />
              </q-item-section>
              <q-item-section>
                <q-item-label>PEDPACMeT</q-item-label>
                <q-item-label caption
                  >Programa de Estímulos al Desempeño de Personal Académico de
                  Carrera de Medio Tiempo para el Fortalecimiento de la
                  Docencia</q-item-label
                >
              </q-item-section>
            </q-item>

            <q-item tag="label" v-ripple>
              <q-item-section avatar>
                <q-radio v-model="estimulo" val="PEDMETI" color="orange" />
              </q-item-section>
              <q-item-section>
                <q-item-label>PEDMETI</q-item-label>
                <q-item-label caption
                  >Programa de Estímulos al Desempeño de Profesores y Técnicos
                  Académicos de Medio Tiempo
                </q-item-label>
              </q-item-section>
            </q-item>
            <q-item tag="label" v-ripple>
              <q-item-section avatar>
                <q-radio v-model="estimulo" val="PEPASIG" color="orange" />
              </q-item-section>
              <q-item-section>
                <q-item-label>PEPASIG</q-item-label>
                <q-item-label caption
                  >Programa de Estímulos a la Productividad y al Rendimiento del
                  Personal Académico de Asignatura
                </q-item-label>
              </q-item-section>
            </q-item>
          </q-list>
          <div v-if="third == true">
            <q-toggle
              v-model="estimulodos"
              checked-icon="check"
              color="green"
              unchecked-icon="clear"
              label="¿Desea agregar otro estímulo vigente?"
            />

            <strong
              ><span v-if="estimulodos">Sí</span
              ><span v-else-if="estimulodos == false">No</span></strong
            >
          </div>
          <q-list v-if="estimulodos == true">
            <!--
        Rendering a <label> tag (notice tag="label")
        so QRadios will respond to clicks on QItems to
        change Toggle state.
      -->

            <q-item tag="label" v-ripple>
              <q-item-section avatar>
                <q-radio v-model="estimulodosvalores" val="PEE" color="teal" />
              </q-item-section>
              <q-item-section>
                <q-item-label>PEE</q-item-label>
                <q-item-label caption
                  >Programa de Estímulo por Equivalencia
                </q-item-label>
              </q-item-section>
            </q-item>

            <q-item tag="label" v-ripple>
              <q-item-section avatar>
                <q-radio v-model="estimulodosvalores" val="PEI" color="teal" />
              </q-item-section>
              <q-item-section>
                <q-item-label>PEI</q-item-label>
                <q-item-label caption
                  >Programa de Estímulos de Iniciación de la Carrera Académica
                  para Personal de Tiempo Completo
                </q-item-label>
              </q-item-section>
            </q-item>
            <q-item tag="label" v-ripple>
              <q-item-section avatar>
                <q-radio
                  v-model="estimulodosvalores"
                  val="PEDPACMeT"
                  color="teal"
                />
              </q-item-section>
              <q-item-section>
                <q-item-label>PEDPACMeT</q-item-label>
                <q-item-label caption
                  >Programa de Estímulos al Desempeño de Personal Académico de
                  Carrera de Medio Tiempo para el Fortalecimiento de la
                  Docencia</q-item-label
                >
              </q-item-section>
            </q-item>

            <q-item tag="label" v-ripple>
              <q-item-section avatar>
                <q-radio
                  v-model="estimulodosvalores"
                  val="PEDMETI"
                  color="orange"
                />
              </q-item-section>
              <q-item-section>
                <q-item-label>PEDMETI</q-item-label>
                <q-item-label caption
                  >Programa de Estímulos al Desempeño de Profesores y Técnicos
                  Académicos de Medio Tiempo
                </q-item-label>
              </q-item-section>
            </q-item>
            <q-item tag="label" v-ripple>
              <q-item-section avatar>
                <q-radio
                  v-model="estimulodosvalores"
                  val="PEPASIG"
                  color="orange"
                />
              </q-item-section>
              <q-item-section>
                <q-item-label>PEPASIG</q-item-label>
                <q-item-label caption
                  >Programa de Estímulos a la Productividad y al Rendimiento del
                  Personal Académico de Asignatura
                </q-item-label>
              </q-item-section>
            </q-item>
          </q-list>
        </div>
        <h6 class="col-12" id="distincionesUNAM">
          Distinciones de la UNAM vigentes.
        </h6>
        <p>
          Distinciones que la UNAM otorga, como el Premio Universidad Nacional
          (PUN), entre otros.
        </p>
        <div>
          <q-toggle
            v-model="distincionesunam"
            checked-icon="check"
            color="green"
            unchecked-icon="clear"
            label="¿Tiene alguna distinción de la UNAM?"
          />

          <strong
            ><span v-if="distincionesunam">Sí</span
            ><span v-else-if="distincionesunam == false">No</span></strong
          >
        </div>
        <q-input
          filled
          v-model="valoresdistincionesunam"
          label="Especifique la(s) distinción(es)."
          class="col-4 q-pa-md"
          hint=""
          lazy-rules
          v-if="distincionesunam == true"
        />
        <q-file
          v-if="distincionesunam == true"
          color="teal"
          filled
          v-model="archivodistincionunam"
          label="Documento probatorio"
          class="col-4 q-pa-md"
        >
          <template v-slot:prepend>
            <q-icon name="cloud_upload" />
          </template>
        </q-file>

        <h6 class="col-12" id="distinacionesOtras">
          Distinciones externas a la UNAM vigentes
        </h6>
        <p>
          Distinciones otorgadas por instancias externas a la UNAM, como SNI,
          SNC u otras. Enliste todas en el recuadro siguiente. Especifique la(s)
          institución(es) que la(s) otorga(n).
        </p>
        <div>
          <q-toggle
            v-model="distincionesexternas"
            checked-icon="check"
            color="green"
            unchecked-icon="clear"
            label="¿Tiene alguna distinción externa a la UNAM vigente?"
          />

          <strong
            ><span v-if="distincionesexternas">Sí</span
            ><span v-else-if="distincionesunam == false">No</span></strong
          >
        </div>
        <q-list v-if="distincionesexternas == true">
          <!--
          Rendering a <label> tag (notice tag="label")
          so QRadios will respond to clicks on QItems to
          change Toggle state.
        -->

          <q-item tag="label" v-ripple>
            <q-item-section avatar>
              <q-radio
                v-model="valoresdistincionesexternas"
                val="PEE"
                color="teal"
              />
            </q-item-section>
            <q-item-section>
              <q-item-label>SNI</q-item-label>
              <q-item-label caption
                >Sistema Nacional de Investigadores
              </q-item-label>
            </q-item-section>
          </q-item>

          <q-item tag="label" v-ripple>
            <q-item-section avatar>
              <q-radio
                v-model="valoresdistincionesexternas"
                val="PEI"
                color="teal"
              />
            </q-item-section>
            <q-item-section>
              <q-item-label>SNC</q-item-label>
              <q-item-label caption>Sistema ... ? </q-item-label>
            </q-item-section>
          </q-item>
          <q-item tag="label" v-ripple>
            <q-item-section avatar>
              <q-radio
                v-model="valoresdistincionesexternas"
                val="PEDPACMeT"
                color="teal"
              />
            </q-item-section>
            <q-item-section>
              <q-item-label>Otra</q-item-label>
              <q-item-label caption>Especifique</q-item-label>
            </q-item-section>
          </q-item>
        </q-list>
        <q-file
          v-if="distincionesexternas == true"
          color="teal"
          filled
          v-model="archivodistincionexternas"
          label="Documento probatorio"
          class="col-4 q-pa-md"
        >
          <template v-slot:prepend>
            <q-icon name="cloud_upload" />
          </template>
        </q-file>
        <h6 class="col-12" id="comisiones">Licencias y comisiones</h6>
        <p>
          Licencias otorgadas por la UNAM durante el periodo del informe.
          Especifique las fechas que cubre cada licencia.
        </p>
        <q-toggle
          v-model="licencias"
          checked-icon="check"
          color="green"
          unchecked-icon="clear"
          label="¿Tuvo licencias y/o comisiones en el periodo de este informe?"
        />
        <strong
          ><span v-if="distincionesexternas"> Sí</span
          ><span v-else-if="distincionesunam == false"> No</span></strong
        >
      </div>
      <p
        class="q-pt-md cursor-pointer"
        v-on:click="nuevacomision = true"
        v-if="licencias == true"
      >
        <strong> <u> Agregar nueva comisión</u> </strong>
      </p>
      <span v-if="nuevacomision == true">
        <div class="row">
          <q-input
            filled
            v-model="nombrecomision"
            label="Nombre de la comisión."
            class="col-4 q-pa-md"
            hint=""
            lazy-rules
            v-if="licencias == true"
          />
          <q-date
            v-model="periodolicencia"
            class="col-4 q-pa-md"
            label="Periodo que cubre"
            range
            v-if="licencias == true"
          />
          <q-file
            v-if="licencias == true"
            color="teal"
            filled
            v-model="archivocomision"
            label="Documento probatorio"
            class="col-4 q-pa-md"
          >
            <template v-slot:prepend>
              <q-icon name="cloud_upload" />
            </template>
          </q-file>
        </div>

        <q-btn
          v-if="
            periodolicencia != null &&
            nombrecomision != null &&
            archivocomision != null
          "
          push
          color="primary"
          label="Agregar comisión"
          v-on:click="agregar"
        />
      </span>
      <div class="q-pa-md">
        <div
          class="col-12"
          v-if="$route.params.tipo == 1 || $route.params.tipo == 2"
        >
          <h6 class="col-12" id="cursos">Cursos ordinarios</h6>
          <p>
            Si impartió cursos con seriación en semestres consecutivos, por
            ejemplo, Piano I y piano II, reportarlos juntos, en un solo campo.
            Si impartió cursos no seriados, utilizar un campo por cada curso.
          </p>
          <q-toggle
            v-model="impartiocursos"
            checked-icon="check"
            color="green"
            unchecked-icon="clear"
            label="¿Impartio cursos durante el periodo de este informe?"
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
          </div>
          <!-- INICIO DE SECCION  -->
          <div v-if="$route.params.tipo == 1 || $route.params.tipo == 2">
            <h6 class="col-12" id="distinacionesOtras">
              Participación de alumnos en eventos relacionados con los cursos
              ordinarios
            </h6>
            <p>
              Intervención de los alumnos en eventos académicos como: recitales,
              conciertos, concursos, conferencias, congresos, coloquios o de
              otra índole. Dicha intervención debe ser el resultado de lo
              aprendido o desarrollado en las asignaturas durante el periodo a
              informar.
            </p>
            <div class="col-12">
              <div class="col-12">
                <q-toggle
                  v-model="periodosabatico"
                  checked-icon="check"
                  color="green"
                  unchecked-icon="clear"
                  label="¿Llevó(llevaron) a cabo el(los) alumno(s) alguna(s) participación(es) en eventos académicos?."
                />
                <div class="q-px-sm q-pt-sm">
                  <strong
                    ><span v-if="periodosabatico">Sí</span
                    ><span v-else-if="periodosabatico == false"
                      >No</span
                    ></strong
                  >
                </div>
              </div>
              <div class="row" v-if="periodosabatico == true">
                <q-input
                  filled
                  v-model="name"
                  label="Nombre del alumno"
                  class="col-4 q-pa-md"
                  hint="Diferente al @fam.unam.mx"
                  lazy-rules
                  :rules="[
                    (val) => (val && val.length > 0) || 'Please type something',
                  ]"
                />
                <q-select
                  class="col-4 q-pa-md"
                  filled
                  v-model="nivelcursoseleccionado"
                  :options="nivelcursos"
                  label="Nivel"
                />

                <q-file
                  v-if="periodosabatico == true"
                  color="teal"
                  filled
                  v-model="informesabatico"
                  label="Informe"
                  class="col-4 q-pa-md"
                >
                  <template v-slot:prepend>
                    <q-icon name="cloud_upload" />
                  </template>
                </q-file>
                <q-input
                  v-model="text"
                  filled
                  class="col-12 q-pa-md"
                  type="textarea"
                  label="Describa el tipo de intervención que realizó el alumno y si obtuvo algún reconocimiento y/o constancia. "
                />
              </div>
            </div>
          </div>
          <!-- FIN DE SECCION  -->
          <div
            class="col-12"
            v-if="$route.params.tipo == 1 || $route.params.tipo == 2"
          >
            <h6 class="col-12" id="cursos">Exámenes extraordinarios</h6>
            <q-toggle
              v-model="impartiocursos"
              checked-icon="check"
              color="green"
              unchecked-icon="clear"
              label="¿Aplicó examenes extraordinarios durante el periodo de este informe?"
            />
            <strong
              ><span v-if="impartiocursos"> Sí</span
              ><span v-else-if="impartiocursos == false"> No</span></strong
            >

            <div class="row" v-if="impartiocursos == true">
              <q-input
                filled
                v-model="name"
                label="Exámenes extraordinarios que aplicó en el semestre 22-1. Separar cada examen con comas."
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
                label="Adjunte las actas correspondientes"
                class="col-6 q-pa-md"
              >
                <template v-slot:prepend>
                  <q-icon name="cloud_upload" />
                </template>
              </q-file>
              <q-input
                filled
                v-model="name"
                label="Exámenes extraordinarios que aplicó en el semestre 22-2. Separar cada examen con comas."
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
                label="Adjunte las actas correspondientes"
                class="col-6 q-pa-md"
              >
                <template v-slot:prepend>
                  <q-icon name="cloud_upload" />
                </template>
              </q-file>
            </div>
          </div>
          <!-- INICIO DE SECCION  -->
          <div v-if="$route.params.tipo == 1 || $route.params.tipo == 2">
            <h6 class="col-12" id="distinacionesOtras">
              Nombramiento de pianista acompañante
            </h6>
            <div class="col-12">
              <div class="col-12">
                <q-toggle
                  v-model="periodosabatico"
                  checked-icon="check"
                  color="green"
                  unchecked-icon="clear"
                  label="¿Tiene nombramiento como pianista acompañante?"
                />
                <div class="q-px-sm q-pt-sm">
                  <strong
                    ><span v-if="periodosabatico">Sí</span
                    ><span v-else-if="periodosabatico == false"
                      >No</span
                    ></strong
                  >
                </div>
              </div>
              <div class="row" v-if="periodosabatico == true">
                <q-input
                  filled
                  v-model="name"
                  label="Indique las asignaturas o profesores a los que está asignado."
                  class="col-6 q-pa-md"
                  type="textarea"
                  lazy-rules
                  :rules="[
                    (val) => (val && val.length > 0) || 'Please type something',
                  ]"
                />
                <q-input
                  v-model="text"
                  filled
                  class="col-6 q-pa-md"
                  type="textarea"
                  label="Repertorio que se abordó "
                />
                <q-input
                  filled
                  v-model="name"
                  label="Número de horas por asignatura"
                  class="col-4 q-pa-md"
                  lazy-rules
                  :rules="[
                    (val) => (val && val.length > 0) || 'Please type something',
                  ]"
                />
                <q-input
                  filled
                  v-model="name"
                  label="Nombre de los alumnos que se atendieron."
                  class="col-4 q-pa-md"
                  hint="Sólo aplica para clases individuales"
                  lazy-rules
                  :rules="[
                    (val) => (val && val.length > 0) || 'Please type something',
                  ]"
                />

                <q-file
                  v-if="periodosabatico == true"
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
          <!-- INICIO DE SECCION  -->
          <div v-if="$route.params.tipo == 1 || $route.params.tipo == 2">
            <h6 class="col-12" id="distinacionesOtras">
              Estrategias para la educación a distancia
            </h6>
            <p>
              Ante la situación que vivimos surgió la necesidad urgente de
              convertir las clases presenciales a clases en línea y a distancia.
              Explique cuáles estrategias implementó; qué materiales didácticos
              tuvo que crear o ajustar; y qué criterios de evaluación tuvo que
              emplear. Realice una valoración de los resultados obtenidos en el
              aprendizaje de los alumnos.
            </p>
            <div class="col-12">
              <div class="row">
                <q-input
                  filled
                  v-model="name"
                  label="¿Qué cambios tuvo que realizar en las estrategias didácticas, para impartir clases en línea y a distancia?"
                  class="col-12 q-pa-md"
                  type="textarea"
                  lazy-rules
                  :rules="[
                    (val) => (val && val.length > 0) || 'Please type something',
                  ]"
                />
                <q-input
                  v-model="text"
                  filled
                  class="col-12 q-pa-md"
                  type="textarea"
                  label="¿Realizó cambios o generó materiales didácticos que empleó? "
                />
                <q-input
                  v-model="text"
                  filled
                  class="col-12 q-pa-md"
                  type="textarea"
                  label="Detalle los criterios de evaluación que utilizó. Si hubo cambios en los mismos o si quedaron igual."
                />
              </div>
            </div>
          </div>
        </div>
        <!-- FIN DE SECCION  -->
        <!-- INICIO DE SECCION  -->
        <div v-if="$route.params.tipo == 3">
          <h6 class="col-12" id="distinacionesOtras">
            Funciones y actividades que desempeña
          </h6>
          <p>
            En esta sección, se enlistan las funciones generales que tiene
            asignadas, así como los proyectos más relevantes en los que
            participó durante el periodo a informar.
          </p>
          <div class="col-12">
            <div class="row">
              <q-input
                filled
                v-model="name"
                label="Haga un listado de las funciones que tiene asignadas"
                class="col-12 q-pa-md"
                type="textarea"
                lazy-rules
                :rules="[
                  (val) => (val && val.length > 0) || 'Please type something',
                ]"
              />
              <q-input
                v-model="text"
                filled
                class="col-12 q-pa-md"
                type="textarea"
                label="Detalle los productos realizados durante el periodo"
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
      </div>
    </q-form>
    <q-btn
      unelevated
      color="blue-grey-6"
      size="lg"
      class="full-width"
      label="continuar"
      href="seccion2"
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
  name: "AsignaturaSecUnoFormSimplificado",
  setup() {
    return {
      columns,
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
