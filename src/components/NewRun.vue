<template>
    <form class="form">
        <img src="../assets/img/cancel.svg" alt="" class="form__img" @click="viewNewRun">

        <label for="Distance" class="form__label">Distance</label>
        <input id="Distance" type="number" class="form__input ml-15" />

        <br />

        <label for="Time" class="form__label ml">Time</label>
        <input id="Time" type="text" class="form__input ml-37" />

        <br />

        <label for="Date" class="form__label ml">Date</label>
        <input id="Date" type="date" class="form__input ml-40" />

        <button class="form__button">Save</button>
    </form>
</template>

<script>
    import { mapActions } from 'vuex'

    export default {
        methods: {
            ...mapActions({
                viewNewRun: 'viewNewRun'
            })
        }
    }
</script>

<style lang="scss" scoped>
    .form {
        position: relative;
        width: 503px;
        height: 379px;
        border-radius: 44px;
        background-color: #7ed321;
        margin: 0 auto;
        margin-top: 118px;
        padding: 100px 88px 47px 88px;

        &__input {
            width: 236px;
            height: 31px;
            border-radius: 7px;
            border: solid 1px #979797;
            margin-bottom: 25px;
        }

        &__label {
            font-size: 16px;
        }

        &__button {
            width: 320px;
            padding: 14px 0;
            border-radius: 25.2px;
            border: solid 2px #979797;
            font-size: 12.6px;
            font-weight: bold;
            margin: 0 auto;
            margin-top: 20px;
        }

        &__img {
            position: absolute;
            top: 27px;
            right: 27px;
        }

        .ml-15 {
            margin-left: 15px;
        }

        .ml-37 {
            margin-left: 37px;
        }

        .ml-40 {
            margin-left: 40px;
        }
    }
</style>