<template>
  <q-page
    class="bg-blue-grey-6 window-height window-width row justify-center items-center"
  >
    <div class="column">
      <div class="row">
        <h6 class="text-h6 text-white q-my-md text-center col-12">
          Sistema de Informes <br />
          Anuales de Profesores
        </h6>
      </div>
      <div class="row">
        <q-card square bordered class="q-pa-lg shadow-1">
          <q-card-section>
            <q-form class="q-gutter-md">
              <q-input
                square
                filled
                clearable
                v-model="email"
                type="curp"
                label="CURP"
                value="VIBJ920101HDFLDV05"
              />
              <q-input
                square
                filled
                clearable
                v-model="password"
                type="password"
                label="Contraseña"
                value="prueba"
              />
            </q-form>
          </q-card-section>
          <q-card-actions class="q-px-md">
            <q-btn
              unelevated
              color="blue-grey-6"
              size="lg"
              class="full-width"
              label="Ingresar"
              href="tipoDeReactivo"
            />
          </q-card-actions>
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      email: "VIBJ920101HDFLDV05",
      password: "123456",
    };
  },
};
</script>

<style>
.q-card {
  width: 360px;
}
</style>
