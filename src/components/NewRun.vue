<template>
    <form class="form">
        <img src="../assets/img/cancel.svg" alt="" class="form__img" @click="viewNewRun">

        <label for="Distance" class="form__label">Distance</label>
        <input id="Distance" type="number" class="form__input ml-15" v-model="distance" />

        <br />

        <label for="Time" class="form__label ml">Time</label>
        <input id="Time" type="number" class="form__input ml-37" v-model="time" />

        <br />

        <label for="Date" class="form__label ml">Date</label>
        <input id="Date" type="date" class="form__input ml-40" v-model="date" />

        <button class="form__button" @click.prevent="getInfo">Save</button>
    </form>
</template>

<script>
    import { mapActions } from 'vuex'

    export default {
        data() {
            return {
                distance: null,
                time: null,
                date: null
            }
        },
        methods: {
            ...mapActions({
                viewNewRun: 'viewNewRun',
                addRuns: 'addRuns'
            }),
            getInfo() {
                let run = {};

                run = {
                    time: this.time + ' min',
                    date: this.date.split('-').reverse().join('.'),
                    distance: this.distance + ' km'
                }

                this.addRuns(run);
            }
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

        @media(max-width: 550px) {
            width: 307px;
            padding: 64px 35px 37px 35px;
        }

        &__input {
            width: 236px;
            height: 31px;
            border-radius: 7px;
            border: solid 1px #979797;
            margin-bottom: 25px;
            padding-left: 15px;
        }

        &__label {
            font-size: 16px;
        }

        &__button {
            width: 320px;
            padding: 14px 0;
            border-radius: 25.2px;
            border: solid 2px white;
            font-size: 12.6px;
            font-weight: bold;
            margin: 0 auto;
            margin-top: 20px;
            color: white;
            background-color: transparent;

            @media(max-width: 550px) {
                width: 237px;
            }
        }

        &__img {
            position: absolute;
            top: 27px;
            right: 27px;
        }

        .ml-15 {
            margin-left: 15px;

            @media(max-width: 550px) {
                margin: 6px 0 20px 0;
            }
        }

        .ml-37 {
            margin-left: 37px;

            @media(max-width: 550px) {
                margin: 6px 0 20px 0;
            }
        }

        .ml-40 {
            margin-left: 40px;

            @media(max-width: 550px) {
                margin: 6px 0 20px 0;
            }
        }
    }
</style>