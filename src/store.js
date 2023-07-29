import axios from 'axios'
import { createStore } from 'vuex'
import postData from './assets/post'

const store = createStore({
  state() {
    return {
      name: 'kim',
      age: 20,
      like: 30,
      isLike: false,
      more: {},
      postData,
      moreCount: 0
    }
  },
  mutations: {
    changeName(state) {
      state.name = 'park'
    },
    changeAge(state) {
      state.age++
    },
    like(state, payload) {
      console.log(payload)
      if (state.postData[payload].liked) {
        state.postData[payload].likes--
      }
      else {
        state.postData[payload].likes++
      }
      state.postData[payload].liked = !state.postData[payload].liked
    },
    morePostData(state, payload) {
      state.postData.push(payload)
      state.moreCount++
    },
    moreCount(state) {
      state.moreCount++
    },
    publish(state, payload) {
      state.postData.unshift(payload)
    }
  },
  actions: {
    async more(context) {
      if (context.state.moreCount > 1) return;
      const res = await axios.get(
        `https://codingapple1.github.io/vue/more${context.state.moreCount}.json`
      );
      context.commit('morePostData', res.data)
    }
  }
})

export default store