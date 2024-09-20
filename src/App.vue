<script>
    export default {
        name: 'App',

        data() {
            return {
                userData: {
                    name: 'John',
                    surname: 'Smith'
                },

                imgData: {
                    path: '/src/assets/img/pepe.jpg',
                    alt: 'pepe'
                }
            }
        },

        methods: {
        },

        computed: {
            // здесь хранятся только свойства (даже полученные из функций)
        }
    }
</script>

<template>
    <div className="main-block">
        <img :src="imgData.path" :alt="imgData.alt">
        <input type="text" placeholder="Введите сообщение">
        <button>Нажми</button>
    </div>
</template>

<style scoped>
    .main-block {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 250px;
        height: 350px;
        margin: 75px;
        background: lightcyan;
        border-radius: 25px;

        box-shadow: 0 10px 0 lightsteelblue;
    }

    .main-block * {
        margin-bottom: 15px;
        color: darkslateblue;
    }

    .main-block input {
        outline: none;
        padding: 5px 10px;
        border: 1px solid steelblue;
        border-radius: 5px;
    }

    .main-block img {
        width: 125px;
        height: 125px;
        border-radius: 25px;
        border: 1.5px solid darkslateblue;
    }

    .main-block a {
        text-decoration: none;
    }

    .main-block button {
        background: lightsteelblue;
        border: 1px solid;
        border-radius: 5px;
        padding: 10px 20px;
        box-shadow: 0 5px 0 darkslateblue;
        transition: 0.15s ease;
    }

    .main-block button:active {
        box-shadow: 0 0 0;
        translate: 0 5px;
    }
</style>