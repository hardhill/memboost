<template>
  <div>
    <AppBar />

    <div class="fon">
      <v-form ref="form" v-model="valid" @submit.native.prevent="onSubmit">
        <v-card width="420px">
          <v-card-title style="background-color:#6dd;">Регистрация</v-card-title>
          <v-card-text>
            <v-text-field
              prepend-icon="mdi-face"
              label="Логин"
              counter
              type="text"
              v-model.trim="controls.username"
              :rules="[loginRules.req,loginRules.min]"
              required
            ></v-text-field>
            <v-text-field
              prepend-icon="mdi-lock"
              label="Пароль"
              type="text"
              v-model="controls.password1"
              :rules="[passRules.min]"
              required
            ></v-text-field>
            <v-text-field
              prepend-icon="mdi-lock"
              label="Пароль повторно"
              type="text"
              v-model="controls.password2"
              :rules="[passRules.req]"
              required
            ></v-text-field>
          </v-card-text>
          <v-card-actions>
            <v-spacer />
            <v-btn @click="reset">Отмена</v-btn>
            <v-btn type="submit" :disabled="!valid">Принять</v-btn>
          </v-card-actions>
        </v-card>
      </v-form>
    </div>
  </div>
</template>

<script>
import AppBar from "~/components/AppBar";
export default {
  components: {
    AppBar
  },
  data() {
    return {
      controls: {
        username: "",
        password1: "",
        password2: ""
      },

      valid: false,
      loginRules: {
        req: v => !!v || "Логин обязателен",
        min: v => (v && v.length) >= 5 || "Длина логина не менее 5"
      },
      passRules: {
        req: v => v == this.controls.password1 || "Пароль должен быть один",
        min: v => (v && v.length) >= 4 || "Длина пароля не менее 4"
      }
    };
  },
  computed: {},
  methods: {
    reset() {
      this.$refs.form.reset();
    },
    onSubmit() {
      if (this.$refs.form.validate()) {
        var dataForm = {
          username: this.controls.username,
          password: this.controls.password1
        };
        this.$store.dispatch("actregistration", dataForm);
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.fon {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 4rem auto;
}
</style>>

