<template>
  <div class="q-pa-md">
    <h5 class="float-right text-right">
      Revisión <br />
      <small> Roberto Campos Velázquez </small>
    </h5>
    <h4 class="">Sección 1</h4>
    <h6 id="datosGenerales">Datos generales</h6>
    <q-form class="row">
      <div class="q-pa-md">
        <q-markup-table flat bordered>
          <thead class="bg-teal">
            <tr>
              <th colspan="5">
                <div class="row no-wrap items-center">
                  <div class="text-h4 q-ml-md text-white">
                    Roberto Campos Velázquez
                  </div>
                </div>
              </th>
            </tr>
          </thead>
          <tbody class="bg-grey-3">
            <tr>
              <td class="text-left"><strong>Número de trabajador</strong></td>
              <td class="text-left">858489</td>
            </tr>
            <tr>
              <th class="text-left">CURP</th>
              <td class="text-right">VIBJ920101HDFLDV05</td>
            </tr>
            <tr>
              <th class="text-left">Correo electrónico</th>
              <td class="text-right">rcampos@fam.unam.mx</td>
            </tr>
            <tr>
              <th class="text-left">Nombramiento</th>
              <td class="text-right">
                Profesor o Investigador ordinario de carrera, asociado B,
                interino
              </td>
            </tr>
            <tr>
              <th class="text-left">Horas semanales frente a grupo</th>
              <td class="text-right">10</td>
            </tr>

            <tr>
              <th class="text-left">
                Promedio de horas semanales dedicadas a otras <br />
                actividades docentes (asesorías, tutorías, cursos remediales,
                etc.)
              </th>
              <td class="text-right">15</td>
            </tr>
            <tr>
              <th>
                Promedio de horas semanales dedicadas actividades de superación
                <br />
                académica, participación en cuerpos colegiados, aplicación de
                exámenes <br />
                de cambio de nivel o titulación y actividades
                académico-administrativas
              </th>
              <td>20</td>
            </tr>
            <tr>
              <th class="text-left">
                Promedio de horas semanales dedicadas a la <br />
                investigación y/o creación y/o concertismo
              </th>
              <td class="text-right">25</td>
            </tr>
          </tbody>
        </q-markup-table>
      </div>
      <div class="q-pa-md col-12">
        <div class="row justify-end">
          <div class="col-4">
            <p class="text-h6">Si <span class="q-ml-lg">NO</span></p>
          </div>
        </div>
        <div class="row" style="border-bottom: 3px solid #878787">
          <div class="col-8 q-pt-md" style="border-right: 3px solid #878787">
            <p class="text-subtitle2">
              1. Goce de periodo sabático, anual o semestral
            </p>
          </div>
          <div class="col-4">
            <q-checkbox disable size="lg" val="lg" />
            <q-checkbox disable size="lg" val="lg" v-model="periodosabatico" />
          </div>
        </div>
        <div class="row" style="border-bottom: 3px solid #878787">
          <div class="col-8 q-pt-md" style="border-right: 3px solid #878787">
            <p class="text-subtitle2">
              2. Programa de Primas al Desempeño del Personal Académico de
              Tiempo Completo
            </p>
            <p><strong>Nivel:</strong> C</p>
          </div>
          <div class="col-4">
            <q-checkbox disable size="lg" val="lg" v-model="periodosabatico" />
            <q-checkbox
              disable
              size="lg"
              val="lg"
              v-bind:checked="!periodosabatico"
            />
          </div>
        </div>
        <div class="row" style="border-bottom: 3px solid #878787">
          <div class="col-8 q-pt-md" style="border-right: 3px solid #878787">
            <p class="text-subtitle2">3. Otros estímulos la UNAM vigentes</p>
            <div class="q-pa-md" style="max-width: 500px">
              <q-list bordered separator>
                <q-item tag="label" v-ripple>
                  <q-item-section>
                    <q-item-label>PEI</q-item-label>
                    <q-item-label caption
                      >Programa de Estímulos de Iniciación de la Carrera
                      Académica para Personal de Tiempo Completo
                    </q-item-label>
                  </q-item-section>
                </q-item>
                <q-item tag="label" v-ripple>
                  <q-item-section>
                    <q-item-label>PEDPACMeT</q-item-label>
                    <q-item-label caption
                      >Programa de Estímulos al Desempeño de Personal Académico
                      de Carrera de Medio Tiempo para el Fortalecimiento de la
                      Docencia</q-item-label
                    >
                  </q-item-section>
                </q-item>
              </q-list>
            </div>
          </div>
          <div class="col-4">
            <q-checkbox disable size="lg" val="lg" v-model="periodosabatico" />
            <q-checkbox
              disable
              size="lg"
              val="lg"
              v-bind:checked="!periodosabatico"
            />
          </div>
        </div>
        <div class="row" style="border-bottom: 3px solid #878787">
          <div class="col-8 q-pt-md" style="border-right: 3px solid #878787">
            <p class="text-subtitle2">4. Distinciones de la UNAM vigentes</p>
            <p>
              <strong>Distinción:</strong> FONCA / Creadores Escenicos Con
              Trayectoria
            </p>
            <div class="q-pa-md q-gutter-sm">
              <q-btn
                color="secondary"
                icon-right="description"
                label="Probatorio"
              />
            </div>
            <div class="q-pa-md" style="max-width: 500px"></div>
          </div>
          <div class="col-4">
            <q-checkbox disable size="lg" val="lg" v-model="periodosabatico" />
            <q-checkbox
              disable
              size="lg"
              val="lg"
              v-bind:checked="!periodosabatico"
            />
          </div>
        </div>
        <div class="row" style="border-bottom: 3px solid #878787">
          <div class="col-8 q-pt-md" style="border-right: 3px solid #878787">
            <p class="text-subtitle2">
              5. Distinciones externas a la UNAM vigentes
            </p>
          </div>
          <div class="col-4">
            <q-checkbox
              disable
              size="lg"
              val="lg"
              v-bind:checked="!periodosabatico"
            />
            <q-checkbox disable size="lg" val="lg" v-model="periodosabatico" />
          </div>
        </div>
        
        <div class="row" style="border-bottom: 3px solid #878787">
          <div class="col-8 q-pt-md" style="border-right: 3px solid #878787">
            <p class="text-subtitle2">6. Licencias y comisiones</p>
          </div>
          <div class="col-4">
            <q-checkbox disable size="lg" val="lg" />
            <q-checkbox disable size="lg" val="lg" v-model="periodosabatico" />
          </div>
        </div>
        <div class="row" style="border-bottom: 3px solid #878787">
          <div class="col-8 q-pt-md" style="border-right: 3px solid #878787">
            <p class="text-subtitle2">7. Cursos ordinarios</p>
            <div class="q-pa-md" >
              <q-list bordered separator>
                <q-item tag="label" v-ripple>
                  <q-item-section>
                    <q-item-label
                      >Técnica y repertorio Elemental de saxofón I y II
                    </q-item-label>
                    <q-item-label caption>PROPEDÉUTICO </q-item-label>
                  </q-item-section>
                  <q-item-section side top>
                    <q-btn
                color="secondary"
                icon-right="description"
                label="Probatorio"
                size="xs"
              />
                  </q-item-section>
                </q-item>
                <q-item tag="label" v-ripple>
                  <q-item-section>
                    <q-item-label>Saxofón I al VIII </q-item-label>
                    <q-item-label caption>LICENCIATURA </q-item-label>
                  </q-item-section>
                  <q-item-section side top>
                    <q-btn
                color="secondary"
                icon-right="description"
                label="Probatorio"
                size="xs"
              />
              </q-item-section>
                </q-item>
                <q-item tag="label" v-ripple>
                  <q-item-section>
                    <q-item-label>Música de Cámara III y V </q-item-label>
                    <q-item-label caption>LICENCIATURA </q-item-label>
                  </q-item-section>
                  <q-item-section side top>
                    <q-btn
                color="secondary"
                icon-right="description"
                label="Probatorio"
                size="xs"
              />
              </q-item-section>
                </q-item>
                <q-item tag="label" v-ripple>
                  <q-item-section>
                    <q-item-label
                      >Practicas Docentes supervisadas
                    </q-item-label>
                    <q-item-label caption>LICENCIATURA </q-item-label>
                  </q-item-section>
                  <q-item-section side top>
                    <q-btn
                color="secondary"
                icon-right="description"
                label="Probatorio"
                size="xs"
              />
              </q-item-section>
                </q-item>
                <q-item tag="label" v-ripple>
                  <q-item-section>
                    <q-item-label>Interpretación I y II </q-item-label>
                    <q-item-label caption>POSGRADO </q-item-label>
                  </q-item-section>
                  <q-item-section side top>
                    <q-btn
                color="secondary"
                icon-right="description"
                label="Probatorio"
                size="xs"
              />
              </q-item-section>
                </q-item>
               
              </q-list>
            </div>
          </div>
          <div class="col-4">
            <q-checkbox disable size="lg" val="lg" v-model="periodosabatico" />
            <q-checkbox
              disable
              size="lg"
              val="lg"
              v-bind:checked="!periodosabatico"
            />
          </div>
        </div>
        <div class="row" style="border-bottom: 3px solid #878787">
          <div class="col-8 q-pt-md" style="border-right: 3px solid #878787">
            <p class="text-subtitle2">8. Participación de alumnos en eventos relacionados con los cursos ordinarios</p>
            <div class="q-pa-md" >
              <q-list bordered separator>
                <q-item tag="label" v-ripple>
                  <q-item-section>
                     <q-item-label lines="1">Arzate Nava Renzo</q-item-label>
                     <q-item-label caption lines="2">
                        <span class="text-weight-bold">Conferencia</span>
              
                      </q-item-label>
                    <q-item-label caption
                      >Participación con una pieza cantada dentro del Taller para repertoristas impartido el 13 de abril por Alfredo Mendoza, a invitación del Mtro. Elías Morales.
                    </q-item-label>
                  </q-item-section>
                  <q-item-section side top>
                    <q-btn
                color="secondary"
                icon-right="description"
                label="Probatorio"
                size="xs"
              />
              </q-item-section>
                </q-item>
                <q-item tag="label" v-ripple>
                  <q-item-section>
                     <q-item-label lines="1">Valeria Sánchez Melgarejo, Ariadna Ortega, Emmanuel Morales, Alberto Izquierdo, Alan Almazán, Ireri Alaniz</q-item-label>
                     <q-item-label caption lines="2">
                        <span class="text-weight-bold">Recital</span>
              
                      </q-item-label>
                    <q-item-label caption
                      >Realicé 7 presentaciones virtuales de todos mis alumnos durante el período por mi página de FB, con una asistencia de más de 5,000 oyentes.
                    </q-item-label>
                  </q-item-section>
                  <q-item-section side top>
                    <q-btn
                color="secondary"
                icon-right="description"
                label="Probatorio"
                size="xs"
              />
              </q-item-section>
                </q-item>
                <q-item tag="label" v-ripple>
                  <q-item-section>
                     <q-item-label lines="1">Alan Arnulfo Villaseñor Wong</q-item-label>
                     <q-item-label caption lines="2">
                        <span class="text-weight-bold">Concurso</span>
              
                      </q-item-label>
                    <q-item-label caption
                      >Apoyo a agentes culturales 202 Resilencia Sonora. Seleccionado para video grabar un concierto de marimba solista para la UNAM.
                    </q-item-label>
                  </q-item-section>
                  <q-item-section side top>
                    <q-btn
                color="secondary"
                icon-right="description"
                label="Probatorio"
                size="xs"
              />
              </q-item-section>
                </q-item>
                
              </q-list>
            </div>
          </div>
          <div class="col-4">
            <q-checkbox disable size="lg" val="lg" v-model="periodosabatico" />
            <q-checkbox
              disable
              size="lg"
              val="lg"
              v-bind:checked="!periodosabatico"
            />
          </div>
        </div>
        <div class="row" style="border-bottom: 3px solid #878787">
          <div class="col-8 q-pt-md" style="border-right: 3px solid #878787">
            <p class="text-subtitle2">9. Exámenes extraordinarios</p>
            
          </div>
          <div class="col-4">
            <q-checkbox disable size="lg" val="lg"  />
            <q-checkbox
              disable
              size="lg"
              val="lg"
              v-model="periodosabatico"
            />
          </div>
        </div>
      </div>
      <div class="row" style="border-bottom: 3px solid #878787">
          <div class="col-8 q-pt-md" style="border-right: 3px solid #878787">
            <p class="text-subtitle2">10. Nombramiento de pianista acompañante</p>
            <p><strong>Asignaturas o profesores a los que está asignado: </strong> Prácticas de Repertorio Canto, Madrid Carla; Prácticas de Repertorio Contrabajo, Rojas Roldan Luis Antonio; Prácticas de Repertorio Saxofón, García Sanchez Samuel; Prácticas de Repertorio Saxofón, Benítez Roberto  </p> 
            <p><strong>Número de horas por asignatura</strong> Canto, 7 hrs; Contrabajo 3 hrs; Saxofón 5 horas. </p>
          </div>
          <div class="col-4">
            <q-checkbox disable size="lg" val="lg" v-model="periodosabatico"  />
            <q-checkbox
              disable
              size="lg"
              val="lg"
              
            />
          </div>
        </div>
   

      

     

    

     
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
const rows = [
  {
    name: "Frozen Yogurt",
    calories: 159,
    fat: 6.0,
    carbs: 24,
    protein: 4.0,
    sodium: 87,
    calcium: "14%",
    iron: "1%",
  },
  {
    name: "Ice cream sandwich",
    calories: 237,
    fat: 9.0,
    carbs: 37,
    protein: 4.3,
    sodium: 129,
    calcium: "8%",
    iron: "1%",
  },
  {
    name: "Eclair",
    calories: 262,
    fat: 16.0,
    carbs: 23,
    protein: 6.0,
    sodium: 337,
    calcium: "6%",
    iron: "7%",
  },
  {
    name: "Cupcake",
    calories: 305,
    fat: 3.7,
    carbs: 67,
    protein: 4.3,
    sodium: 413,
    calcium: "3%",
    iron: "8%",
  },
  {
    name: "Gingerbread",
    calories: 356,
    fat: 16.0,
    carbs: 49,
    protein: 3.9,
    sodium: 327,
    calcium: "7%",
    iron: "16%",
  },
  {
    name: "Jelly bean",
    calories: 375,
    fat: 0.0,
    carbs: 94,
    protein: 0.0,
    sodium: 50,
    calcium: "0%",
    iron: "0%",
  },
  {
    name: "Lollipop",
    calories: 392,
    fat: 0.2,
    carbs: 98,
    protein: 0,
    sodium: 38,
    calcium: "0%",
    iron: "2%",
  },
  {
    name: "Honeycomb",
    calories: 408,
    fat: 3.2,
    carbs: 87,
    protein: 6.5,
    sodium: 562,
    calcium: "0%",
    iron: "45%",
  },
  {
    name: "Donut",
    calories: 452,
    fat: 25.0,
    carbs: 51,
    protein: 4.9,
    sodium: 326,
    calcium: "2%",
    iron: "22%",
  },
  {
    name: "KitKat",
    calories: 518,
    fat: 26.0,
    carbs: 65,
    protein: 7,
    sodium: 54,
    calcium: "12%",
    iron: "6%",
  },
];

import { mapState } from "vuex";
export default {
  name: "AsignaturaSecUnoFormSimplificado",
  setup() {
    return {
      rows,
    };
  },

  data() {
    return {
      primerapellido: "Campos",
      segundoapellido: "Velázquez",
      ntrabajador: 858489,
      curp: "VIBJ920101HDLFLDV05",
      correoadicional: "rcampos@fam.unam.mx",
      nombres: "Roberto",
      boletacursos: null,
      nombredelcurso: null,
      impartiocursos: null,
      nuevacomision: true,
      name: "Roberto",
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
      periodosabatico: true,
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
