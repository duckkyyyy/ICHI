<template>
    <nav class="v-menu">
        <router-link to="/catalog" class="v-menu__item">
            Каталог
        </router-link>
        <router-link to="/" class="v-menu__item">
            О нас
        </router-link>
        <router-link to="/" class="v-menu__item">
            Индивидуальный заказ
        </router-link>
        <router-link to="/" class="v-menu__item">
            Статьи
        </router-link>
    </nav>

</template>


<script setup>

</script>


<style>
.v-menu {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    background-color: transparent;
    padding: 16px 20px 16px 20px;
    width: 466px;
}

.v-menu__item{
    font-size: 16px;
    padding: 4px 10px 4px 10px;
    background-color: #FEFEFE;
    border-radius: 3px;
    text-decoration: none;
    color: black;
    font-family: 'Akzidenz-Grotesk Pro';
    src: url('AkzidenzGroteskPro-Regular.woff2') format('woff2');
    font-weight: normal;
    font-style: normal;
    font-display: swap;
    font-size: 16px;
}

</style>