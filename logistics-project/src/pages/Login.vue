<script setup>
import axios from "axios";
import { reactive } from 'vue';
import { Core as YubinbangoCore } from 'yubinbango-core2';

const form = reactive({
    postcode: null,
    address: null
})

const url = "https://zipcloud.ibsnet.co.jp/api/search?zipcode=";
const getData = async () => {
    let result = await axios.get(url + String(form.postcode));
    const address = result.data.results[0]
    console.log(address.address1 + address.address2 + address.address3);
    form.address = address.address1 + address.address2 + address.address3
    return address.address1 + address.address2 + address.address3;
};

</script>

<template>
    <span>Loginページの予定です</span>
    <input type="number" name="postcode" @change="getData" v-model=form.postcode>
    <input type="string" name="address" v-model=form.address>
</template>

<style scoped></style>