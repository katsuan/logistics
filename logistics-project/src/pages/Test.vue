<script setup>
import axios from "axios";
import { reactive } from "vue";

const url = "http://localhost:8080/api/completions";

defineProps({ ← App.vueからのProps
    msg: String,
})
const data = reactive({ ← HelloWorld.vueで利用するreactiveオブジェクト
    responses: "",
    keyWord: "",
});

const getData = async () => {
    let result = await axios.get(url, { params: { prompt: data.keyWord } }); ← サーバサイド呼び出し
    data.responses = result.data;
};
</script>

<template>
    <h1>{{ msg }}</h1>
    <input type="text" v-model="data.keyWord" @input="inputPrompt" />
    <button @click="getData">Request</button>
    <hr>
    <div v-for="(item, index) in data.responses.choices">
        {{ item.text }} ← サーバサイドから返却された値を表示する
    </div>
</template>

<style scoped></style>