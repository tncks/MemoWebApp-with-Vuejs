<template>
  <div class="memo">
    <div class="act">
      <button class="btn btn-primary" @click="add()">+ 추가</button>
    </div>
    <ul>
      <li v-for="d in state.data" :key="d.id" @click="edit(d.id)">
        {{ d.content }}
      </li>
    </ul>
  </div>
</template>

<script>
import { reactive } from "vue";
import axios from "axios";

export default {
  setup() {
    const state = reactive({
      data: [],
    });

    const add = () => {
      const content = prompt("내용입력:");
      if (!content) {
        alert("비어있는 텍스트입니다!!");

        return;
      }

      axios.post("/api/memos", { content }).then((res) => {
        state.data = res.data;
      });
    };

    const edit = (id) => {
      const content = prompt(
        "수정할 내용을 입력:  / memo number",
        state.data.find(d=>d.id === id).content
      );
      if (!content) {
        alert("비어있는 텍스트입니다!!");

        return;
      }
      axios.put("/api/memos/" + id, { content }).then((res) => {
        state.data = res.data;
      });
    };

    axios.get("/api/memos").then((res) => {
      state.data = res.data;
    });

    return { state, add, edit };
  },
};
</script>

<style lang="scss" scoped>
.memo {
  .act {
    text-align: right;
    padding: 10px 10px 5px 5px;
  }
  ul {
    list-style: none;
    padding: 15px;
    margin: 0;
  }

  li {
    padding: 15px;
    margin: 10px 0;
    border: 1px solid #eee;
  }
}
</style>