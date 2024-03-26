<template>
    <div class="catalog">
        <div class="main">
            <div class="bread">
                <p class="bread__text">Каталог</p>
                <img src="../assets/img/small_arrow.svg" class="arrow__small">
                <p class="bread__text">Женское</p>
                <img src="../assets/img/small_arrow.svg" class="arrow__small">
                <p class="bread__text">Традиционные кимоно</p>
            </div>

            <div class="main__title">
                <h1>Традиционные кимоно</h1>
                <p class="main__description">
                    Окунитесь в культуру страны Восходящего Солнца вместе с кимоно, вышитыми по всем правилам японских техник. Уникальные орнаменты и оригинальные ткани — всё это про наши кимоно!
                </p>
            </div>
        </div>


        
        <div class="filter">
                <button class="filter_button">Фильтр</button>
                <div class="filters">
                    <select class="select" @change="onChangesortByOrn">
                        <option>Орнамент</option>
                        <option value="flowers">Цветочный</option>
                        <option value="myph">Мифический</option>
                        <option value="linear">Линейный</option>
                    </select>
                    <select class="select" @change="onChangesortByCol">
                        <option>Цвет</option>
                        <option value="black">Черный</option>
                        <option value="white">Белый</option>
                        <option value="other">Разноцветный</option>
                    </select>
                    <select class="select" @change="onChangeSelect">
                        <option>Сортировать по</option>
                        <option value="-price">Цене (убывание)</option>
                        <option value="price">Цене (возрастание)</option>
                        <option value="title">Названию</option>
                    </select>
                </div>
            </div>
        <div class="card_list">
            <v-card
            v-for="item in items"
            :key="item.id"
            :image="item.image"
            :title="item.title"
            :price="item.price"
            />
        </div>
    </div>

</template>


<style>
    .main{
        background-image: url(../assets/img/catalog_banner.png);
        width: 100%;
        height: 800px;
    }

    .catalog{
        margin-top: 0;
    }

    .bread{
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        width: 330px;
        padding-top: 124px;
        padding-left: 40px;
    }
    .bread__text{
        font-family: 'Feature Mono';
        font-weight: 400;
        font-style: normal;
        font-size: 14px;
    }
    .main__title{
        padding-top: 400px;
        padding-left: 40px;
        width: 460px;
    }
    .main__description{
        padding-top: 8px;
    }
    .card_list{
        display: flex;
        flex-wrap: wrap;
        margin-top: 80px;
        margin-left: 40px;
    }
    .filter_button{
        padding: 4px 20px 4px 20px;
        background-color: #FEFEFE;
        border: none;
        border-radius: 3px;
        font-family: 'Feature Mono';
        font-weight: 400;
        font-style: normal;
        font-display: swap;
        font-size: 20px;
        margin-top: 80px;
        margin-left: 40px;

    }

    .filter{
        display: flex;
        flex-direction: row;
        align-items: flex-end;
    }

    .filters{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        width: 500px;
        margin-left: 280px;
    }

    .hidden{
        display: none;
    }

    .select{
        padding: 4px 20px 4px 20px;
        background-color: #FEFEFE;
        border: none;
        border-radius: 3px;
        font-family: 'Akzidenz-Grotesk Pro';
        font-weight: 300;
        font-style: normal;
        font-display: swap;
        font-size: 14px;
    }
    /* .filter{
        position: sticky;
        top: 160px;
    } */
</style>


<script setup>
    import { reactive, watch, ref, onMounted } from 'vue';
    import axios from 'axios';
    import VCard from '@/components/VCard.vue';
    const items = ref([]);

    const filters = reactive({
        sortBy: '',
        sortByOrn: '',
        sortByCol: ''
    })

    const onChangeSelect = (event) => {
        filters.sortBy = event.target.value
    }

    const onChangesortByOrn = (event) => {
        filters.sortByOrn = event.target.value
    }

    const onChangesortByCol = (event) => {
        filters.sortByCol = event.target.value
    }

    const fetchItems = async () => {
        try {
            const params = {
                sortBy: filters.sortBy
            }

            if(filters.sortByOrn) {
                params.ornament = filters.sortByOrn
            }

            if(filters.sortByCol) {
                params.colour = filters.sortByCol
            }

            const { data } = await axios.get(`https://661af5195e4b7ec7.mokky.dev/items`, {
                params
            })
  items.value = data.map((obj) => ({
      ...obj,
    //   isFavorite: false,
    //   favoriteId: null,
    //   isAdded: false
    }))
  } catch (err) {
    console.log(err)
  }
}


    defineProps({
        items: Array
    })

    onMounted(async () => {
        try {
            const { data } = await axios.get('https://661af5195e4b7ec7.mokky.dev/items')
            items.value = data;
        }
        catch{}
    })

//     watch(cart, () => {
//   items.value = items.value.map((item) => ({
//     ...item,
//     isAdded: false
//   }))
// })

watch(filters, fetchItems)

</script>