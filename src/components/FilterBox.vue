<template>
  <div
    :class="'filter-item ' + filterName"
    :style="`background-image:url(${url})`"
    @click="fire"
  ></div>
</template>

<script>
export default {
  name: "FilterBox",
  methods: {
    fire() {
      this.emitter.emit("selectFilter", this.filterName);
    },
  },
  props: {
    url: String,
    filterName: String,
  },
};
</script>

<style>
.filter-item {
  width: 100px;
  height: 100px;
  margin: 10px 10px 10px auto;
  padding: 8px;
  display: inline-block;
  color: white;
  background-size: cover;
  background-position: center;
}
</style>