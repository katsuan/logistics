<script setup>
import { reactive } from 'vue'
import { Core as YubinbangoCore } from 'yubinbango-core2';

const form = reactive({
    postcode: null
})

const fetchAddress = () => {
    new YubinbangoCore(String(form.postcode), (value) => {
        console.log(value)
    })
}
</script>

<template>
    <span>Loginページの予定です</span>
    <input type="number" name="postcode" @change="fetchAddress" v-model=form.postcode>
</template>

<style scoped></style>