<template>
  <div class="header">
    <ul class="header-button-left">
      <li @click="targetPage = 'POST'">Home</li>
    </ul>
    <ul class="header-button-right">
      <li @click="targetPage = 'MYPAGE'">MyPage</li>
    </ul>
    <img src="./assets/logo.png" class="logo" />
  </div>

  <Container
    :postData="$store.state.postData"
    :btns="btns"
    :targetPage="targetPage"
    :url="url"
    @writing="postContent = $event"
  />

  <div v-if="targetPage == 'POST'" class="btn-wrap">
    <button @click="$store.dispatch('more')">더보기</button>
  </div>

  <div v-if="targetPage == 'FILTER'" class="btn-wrap">
    <button @click="targetPage = 'WRITE'">다음</button>
  </div>

  <div v-if="targetPage == 'WRITE'" class="btn-wrap">
    <button @click="publish">발행</button>
  </div>

  <div class="footer">
    <ul class="footer-button-plus">
      <input
        type="file"
        id="file"
        class="inputfile"
        accept="image/*"
        @change="upload"
      />
      <label for="file" class="input-plus">+</label>
    </ul>
  </div>

  <!-- <p>{{ name }}</p> -->
  <!-- <button @click="now2">now2함수실행</button> -->

  <div style="margin-top: 500px"></div>
</template>

<script>
import { mapState } from "vuex";
import Container from "./components/Container.vue";

export default {
  name: "App",
  data() {
    return {
      moreCount: 0,
      // btns: ["POST", "FILTER", "WRITE"],
      targetPage: "POST",
      url: "",
      postContent: "",
      postFilter: "",
    };
  },
  computed: {
    ...mapState(["name"]),
  },
  methods: {
    now() {
      return new Date();
    },
    upload(e) {
      let 파일 = e.target.files;
      this.targetPage = "FILTER";
      this.url = URL.createObjectURL(파일[0]);
    },
    publish() {
      const myPost = {
        name: "Unknown",
        userImage: "https://picsum.photos/100?random=3",
        postImage: this.url,
        likes: 0,
        date: "today",
        liked: false,
        content: this.postContent,
        filter: this.postFilter,
      };
      this.$store.commit("publish", myPost);
      // this.postData.unshift(myPost);
      this.targetPage = "POST";
      this.url = "";
      this.postContent = "";
      this.postFilter = "";
    },
  },
  mounted() {
    this.emitter.on("selectFilter", (res) => {
      this.postFilter = res;
    });
  },
  components: {
    Container,
  },
};
</script>

<style>
body {
  margin: 0;
}
ul {
  padding: 5px;
  list-style-type: none;
}
.logo {
  width: 22px;
  margin: auto;
  display: block;
  position: absolute;
  left: 0;
  right: 0;
  top: 13px;
}
.header {
  width: 100%;
  height: 40px;
  background-color: white;
  padding-bottom: 8px;
  position: sticky;
  top: 0;
  clear: both;
  z-index: 1;
}
.btn-wrap {
  position: sticky;
  width: 100%;
  top: 40px;
  /* margin: 20px 0; */
  /* margin-top: 10px; */
  display: flex;
  justify-content: space-around;
}
.btn-wrap button {
  flex-grow: 1;
  height: 60px;
  border: none;
  background-color: #fff;
  padding: 0;
}
.header-button-left {
  color: skyblue;
  float: left;
  width: 50px;
  padding-left: 20px;
  cursor: pointer;
  margin-top: 10px;
}
.header-button-right {
  color: skyblue;
  float: right;
  width: 50px;
  cursor: pointer;
  margin-top: 10px;
}
.footer {
  width: 100%;
  position: sticky;
  bottom: 0;
  padding-bottom: 10px;
  background-color: white;
}
.footer-button-plus {
  width: 80px;
  margin: auto;
  text-align: center;
  cursor: pointer;
  font-size: 24px;
  padding-top: 12px;
}
.sample-box {
  width: 100%;
  height: 600px;
  background-color: bisque;
}
.inputfile {
  display: none;
}
.input-plus {
  cursor: pointer;
}
#app {
  box-sizing: border-box;
  font-family: "consolas";
  margin-top: 60px;
  width: 100%;
  max-width: 460px;
  margin: auto;
  position: relative;
  border-right: 1px solid #eee;
  border-left: 1px solid #eee;
}
</style>
