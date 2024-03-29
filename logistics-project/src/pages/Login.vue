<script setup>
import axios from "axios";
import { reactive } from 'vue';
import { Core as YubinbangoCore } from 'yubinbango-core2';

const form = reactive({
    postcode: null,
    address: null
})

const baseUrl = "https://zipcloud.ibsnet.co.jp/api/search?zipcode=";
const getData = async () => {
    if (String(form.postcode).length < 7) {
        form.address = ''
        return
    }
    let result = await axios.get(baseUrl + String(form.postcode));
    console.log(result.data);
    if (result.data.results === null) {
        form.address = '存在しない郵便番号です'
        return
    } else {
        const address = result.data.results[0]
        console.log(address.address1 + address.address2 + address.address3);
        form.address = address.address1 + address.address2 + address.address3
        return address.address1 + address.address2 + address.address3;
    }
};

</script>

<template>
    <h1>住所入力</h1>
    <div class="container">
        <span>郵便番号</span>
        <input type="number" name="postcode" @input="getData" v-model=form.postcode>
        <span>住所</span>
        <input type="string" class="address" name="address" v-model=form.address>
    </div>
</template>

<style scoped>
.container {
    display: flex;
    flex-direction: column;
    width: 50%;
}

.address {
    width: auto;
}
</style>