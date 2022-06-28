<template>
  <div class="q-pa-md">
    <h4>Datos generales</h4>
    <q-form @submit="onSubmit" @reset="onReset" class="row">
      <q-input
        filled
        v-model="name"
        label="Nombre"
        lazy-rules
        class="col-4 q-pa-md"
        :rules="[(val) => (val && val.length > 0) || 'Please type something']"
      />
      <q-input
        filled
        v-model="name"
        label="Primer apellido"
        class="col-4 q-pa-md"
        lazy-rules
        :rules="[(val) => (val && val.length > 0) || 'Please type something']"
      />
      <q-input
        filled
        v-model="name"
        label="Segundo Apellido"
        class="col-4 q-pa-md"
        lazy-rules
        :rules="[(val) => (val && val.length > 0) || 'Please type something']"
      />
      <q-input
        filled
        v-model="name"
        label="Número de trabajador"
        class="col-4 q-pa-md"
        lazy-rules
        :rules="[(val) => (val && val.length > 0) || 'Please type something']"
      />
      <q-input
        filled
        v-model="name"
        label="CURP"
        class="col-4 q-pa-md"
        hint=""
        lazy-rules
        :rules="[(val) => (val && val.length > 0) || 'Please type something']"
      />
      <q-input
        filled
        v-model="name"
        label="Correo adicional"
        class="col-4 q-pa-md"
        hint="Diferente al @fam.unam.mx"
        lazy-rules
        :rules="[(val) => (val && val.length > 0) || 'Please type something']"
      />
    </q-form>
  </div>
</template>

<style></style>

<script>
export default {
  name: "AsignaturaSecUnoFormUno",
  data() {
    return {
      name: null,
    };
  },
};
</script>
