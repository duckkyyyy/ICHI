<template>    

<div class="card-bread">
    <p class="card-bread__text">Каталог</p>
    <img src="../assets/img/small_arrow.svg" class="arrow__small">
    <p class="card-bread__text">Женское</p>
    <img src="../assets/img/small_arrow.svg" class="arrow__small">
    <p class="card-bread__text">Традиционные кимоно</p>
    <img src="../assets/img/small_arrow.svg" class="arrow__small">
    <p class="card-bread__text">Кимоно «Золотые лепестки»</p>
</div>

<div class="catalog_card">

    <div class="accordion">
        <details>
            <summary>
                <p class="accordion_title">Описание</p>
            </summary>
            <p class="accordion_text">Изысканное и удобное кимоно – идеальная одежда для релаксации и наслаждения домашним уютом. Наше кимоно изготовлено из легкого и мягкого материала, обеспечивающего комфорт при ношении. </p>
        </details>
        <details>
            <summary>
                <p class="accordion_title">Материалы</p>
            </summary>
            <p class="accordion_text">Шелк, хлопок</p>
        </details>
        <details>
            <summary>
                <p class="accordion_title">Размеры</p>
            </summary>
            <p class="accordion_text">Чтобы узнать свой размер кимоно, прочитайте нашу памятку</p>
        </details>
        <details>
            <summary>
                <p class="accordion_title">Доставка</p>
            </summary>
            <p class="accordion_text">Бесплатно по всей России</p>
        </details>
    </div>

    <div class="photos">
        <img src="../assets/img/kimono_card1.png">
        <img src="../assets/img/kimono_card2.png">
        <img src="../assets/img/kimono_card3.png">
    </div>

    <div class="card-right_pannel">
        <h2>Кимоно «Золотые лепестки»</h2>
        <p class="card_price">50 000 p</p>
        <p class="size_title">Размер</p>
        <div class="size">
            <button class="size_tag">XL</button>
            <button class="size_tag">M</button>
            <button class="size_tag">S</button>
        </div>
        <p class="size_text">Как правильно снять мерки?</p>
        <button class="add">Добавить в корзину</button>
    </div>
</div>


</template>

<script>

</script>

<style>
    .catalog_card{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }
    .card-bread{
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        width: 560px;
        padding-top: 124px;
        padding-left: 40px;
    }
    .card-bread__text{
        font-family: 'Feature Mono';
        font-weight: 300;
        font-style: normal;
        font-size: 14px;
    }

    *,
*::before,
*::after {
	padding: 0;
	margin: 0;
}

summary::marker {
    content: "";
}

/* summary {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
    height: 80px;
    padding: 0 30px 0 30px;
} */

details{
    margin-bottom: 16px;
}

.accordion{
    width: 300px;
    margin-top: 120px;
    margin-left: 40px;
    position: fixed;


    left: 0;
}

.accordion_title{
    font-family: 'Feature Mono';
    font-weight: 300;
    font-style: normal;
    font-size: 20px;
}

.accordion_text{
    font-family: 'Akzidenz-Grotesk Pro';
    font-weight: 300;
    font-style: normal;
    font-size: 16px;
}

.photos{
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-left: 300px;
}

.card-right_pannel{
    width: 424px;
    margin-left: 40px;
    margin-top: 120px;
    position: fixed;

    right: 0;

}

.size{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 160px;
}

.size_tag{
    padding: 6px 16px 6px 16px;
    background-color: #FEFEFE;
    border: none;
    border-radius: 3px;
    font-family: 'Akzidenz-Grotesk Pro';
    src: url('AkzidenzGroteskPro-Regular.woff2') format('woff2');
    font-weight: 300;
    font-style: normal;
    font-display: swap;
    font-size: 12px;
}

.add{
    padding: 6px 60px 6px 60px;
    background-color: #FEFEFE;
    border: none;
    border-radius: 3px;
    font-family: 'Akzidenz-Grotesk Pro';
    src: url('AkzidenzGroteskPro-Regular.woff2') format('woff2');
    font-weight: 300;
    font-style: normal;
    font-display: swap;
    font-size: 16px;
    margin-top: 30px;
}

.card_price{
    font-size: 20px;
    font-family: 'Feature Mono';
    font-weight: 400;
    margin-top: 16px;
    margin-bottom: 30px;
}

.size_title{
    font-size: 12px;
    margin-bottom: 10px;
}

.size_text{
    font-size: 10px;
    text-decoration: underline;
    margin-left: 197px;
    margin-top: -14px;
}
</style>