
<template>
  <div class>
    <v-btn
      @click="backClicked()"
      color="white"
      :to="{name: previousRoute}"
      style="width: 8rem;"
      class="text-center mr-10"
      large
    >
      <i class="fa fa-chevron-left"></i>
      Previous
    </v-btn>

    <button>
      <v-btn @click="nextClicked()" style="width: 8rem;" class="text-center" large color="primary">
        Next
        <i class="fa fa-chevron-right"></i>
      </v-btn>
    </button>
  </div>
</template>

<script>
export default {
  props: {
    previousRoute: String,
    nextRoute: String,
  },
  methods: {
    nextClicked() {
      this.$emit('next-clicked');
      this.$router.push(this.nextRoute);
    },
    backClicked() {
      this.$emit('back-clicked');
      this.$router.push(this.previousRoute);
    },
  },
};
</script>

<style>
</style>