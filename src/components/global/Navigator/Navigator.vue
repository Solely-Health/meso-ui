
<template>
  <div class>
    <v-btn
      color="white"
      :to="{name: previousRoute}"
      style="width: 8rem;"
      class="text-center mr-10"
      large
    >
      <i class="fa fa-chevron-left"></i>
      Previous
    </v-btn>

    <v-btn :to="{name: nextRoute}" style="width: 8rem;" class="text-center" large color="primary">
      Next
      <i class="fa fa-chevron-right"></i>
    </v-btn>
  </div>
</template>

<script>
export default {
  props: {
    previousRoute: String,
    nextRoute: String,
  },
};
</script>

<style>
</style>