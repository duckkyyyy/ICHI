<template>
    <div class="card">
        <router-link to="/catalog/card">
            <img :src="image">
        </router-link>
        <p class="card_title">{{ title }}</p>
        <span class="card_price">{{ price }} р</span>
    </div>
</template>


<script setup>
    defineProps({
        image: String,
        title: String,
        price: Number
    })

</script>

<style>
.card{
    margin-bottom: 40px;
}
.card_title{
    font-size: 18px;
}
.card_price{
    font-size: 14px;
}
</style>