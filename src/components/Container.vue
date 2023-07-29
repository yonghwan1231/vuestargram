<template>
  <div v-if="targetPage == 'POST'">
    <Post v-for="(el, idx) in postData" :key="idx" :data="el" :idx="idx" />
  </div>
  <div v-if="targetPage == 'FILTER'">
    <!-- 필터선택페이지 -->
    <div
      class="upload-image"
      :class="applyFilter"
      :style="{ backgroundImage: `url(${url})` }"
    ></div>
    <div class="filters">
      <FilterBox
        :url="url"
        v-for="(el, idx) in filterList"
        :key="idx"
        :filterName="el"
        @click="applyFilter = el"
      >
      </FilterBox>
    </div>
  </div>
  <div v-if="targetPage == 'WRITE'">
    <!-- 글작성페이지 -->
    <div
      :class="'upload-image ' + applyFilter"
      :style="{ backgroundImage: `url(${url})` }"
    ></div>
    <div class="write">
      <textarea
        class="write-box"
        placeholder="내용을 입력하세요."
        @input="$emit('writing', $event.target.value)"
      ></textarea>
    </div>
  </div>
  <div v-if="targetPage == 'MYPAGE'">
    <MyPage />
  </div>
</template>

<script>
import Post from "./Post.vue";
import FilterBox from "./FilterBox";
import MyPage from "./MyPage";
// import postData from "../assets/post";
export default {
  name: "ContaineR",
  data() {
    return {
      applyFilter: "",
      filterList: [
        "aden",
        "_1977",
        "brannan",
        "brooklyn",
        "clarendon",
        "earlybird",
        "gingham",
        "hudson",
        "inkwell",
        "kelvin",
        "lark",
        "lofi",
        "maven",
        "mayfair",
        "moon",
        "nashville",
        "perpetua",
        "reyes",
        "rise",
        "slumber",
        "stinson",
        "toaster",
        "valencia",
        "walden",
        "willow",
        "xpro2",
      ],
    };
  },
  props: {
    postData: Array,
    btns: Array,
    targetPage: String,
    url: String,
  },
  components: {
    Post,
    FilterBox,
    MyPage,
  },
};
</script>

<style>
.upload-image {
  width: 100%;
  height: 450px;
  background: cornflowerblue;
  background-size: cover;
}
.filters {
  overflow-x: scroll;
  white-space: nowrap;
}
.filter-1 {
  width: 100px;
  height: 100px;
  background-color: cornflowerblue;
  margin: 10px 10px 10px auto;
  padding: 8px;
  display: inline-block;
  color: white;
  background-size: cover;
}
.filters::-webkit-scrollbar {
  height: 5px;
}
.filters::-webkit-scrollbar-track {
  background: #f1f1f1;
}
.filters::-webkit-scrollbar-thumb {
  background: #888;
  border-radius: 5px;
}
.filters::-webkit-scrollbar-thumb:hover {
  background: #555;
}
.write-box {
  border: none;
  width: 90%;
  height: 100px;
  padding: 15px;
  margin: auto;
  display: block;
  outline: none;
}
</style>