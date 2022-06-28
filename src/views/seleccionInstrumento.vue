<template>
  <q-page class="bg-blue-grey-6 window-height window-width row justify-center items-center ">
    <div class="column q-mr-md">
      <div class="row">
       
      </div>
      <div class="row">
        <q-card square bordered class="q-pa-lg shadow-1">
          <q-card-section>
            <q-form class="q-gutter-md">
              <h6 class="text-h6  q-my-md text-center col-12">INFORME ANUAL DE PROFESORES DE MEDIO TIEMPO Y TIEMPO COMPLETO 2023</h6>
            </q-form>
          </q-card-section>
          <q-card-actions class="q-px-md">
            <q-btn unelevated color="blue-grey-6" size="lg" class="full-width" label="continuar" href="1/seccion1" />
          </q-card-actions>
          
        </q-card>
      </div>
    </div>
    <div class="column q-mr-md">
      <div class="row">
        
      </div>
      <div class="row">
        <q-card square bordered class="q-pa-lg shadow-1">
          <q-card-section>
            <q-form class="q-gutter-md">
              <h6 class="text-h6  q-my-md text-center col-12">INFORME ANUAL DE PROFESORES DE ASIGNATURA 2023 <br> &nbsp;</h6>
            </q-form>
          </q-card-section>
          <q-card-actions class="q-px-md">
            <q-btn unelevated color="blue-grey-6" size="lg" class="full-width" label="Continuar" href="2/seccion1" />
          </q-card-actions>
          
        </q-card>
      </div>
    </div>
    <div class="column q-mr-md">
      <div class="row">
      
      </div>
      <div class="row">
        <q-card square bordered class="q-pa-lg shadow-1">
          <q-card-section>
            <q-form class="q-gutter-md">
              <h6 class="text-h6  q-my-md text-center col-12">INFORME ANUAL DE TÉCNICOS ACADÉMICOS 2023 <br> &nbsp;</h6>
            </q-form>
          </q-card-section>
          <q-card-actions class="q-px-md">
            <q-btn unelevated color="blue-grey-6" size="lg" class="full-width" label="Continuar" href="3/seccion1" />
          </q-card-actions>
          
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      email: '',
      password: ''
    }
  }
}
</script>

<style>
.q-card {
  width: 360px;
}
</style>