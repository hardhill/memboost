<template>
  <div>
    <AppBar />

    <div class="fon">
      <v-form ref="form">
        <v-card width="420px">
          <v-card-title style="background-color:#6dd;">Регистрация</v-card-title>
          <v-card-text>
            <v-text-field
              prepend-icon="mdi-face"
              label="Логин"
              counter
              type="text"
              v-model.trim="username"
              :rules="[loginRules.req,loginRules.min]"
            ></v-text-field>
          </v-card-text>
          <v-card-actions>
            <v-btn>Отмена</v-btn>
            <v-btn>Принять</v-btn>
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
      valid: false,
      loginRules: {
        req: v => !!v || "Логин обязателен",
        min: v => v.length >= 5 || "Длина логина не менее 5"
      }
    };
  },
  computed: {
    username: {
      get() {
        return this.$store.getters.GET_USERNAME;
      },
      set(value) {
        this.$store.dispatch("actsetusername", value);
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

