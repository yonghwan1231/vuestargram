<template>
  <div style="padding: 10px">
    <h4>팔로워</h4>
    <input placeholder="?" />
    <div class="post-header" v-for="(el, idx) in follower" :key="idx">
      <div class="profile" :style="`background-image:url(${el.image})`"></div>
      <span class="profile-name">{{ el.name }}</span>
    </div>
  </div>
</template>

<script>
import { onMounted, ref } from "vue";
import axios from "axios";
export default {
  name: "MyPage",
  setup() {
    let follower = ref([]);
    onMounted(() => {
      axios.get("/follower.json").then((res) => {
        follower.value = res.data;
      });
    });
    return { follower };
  },
};
</script>

<style>
</style>