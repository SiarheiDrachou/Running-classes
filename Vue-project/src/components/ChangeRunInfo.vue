<template>
    <form class="form">
        <label for="Speed" class="form__label ml">Speed</label>
        <input id="Speed" type="number" class="form__input ml-30" v-model="speed" />

        <br />

        <label for="Distance" class="form__label">Distance</label>
        <input id="Distance" type="number" class="form__input ml-15" v-model="distance" />

        <br />

        <label for="Time" class="form__label ml">Time</label>
        <input id="Time" type="number" class="form__input ml-37" v-model="time" />

        <br />

        <button class="form__button" @click.prevent="changeInfo">Save</button>

        <br />

        <button class="form__button" @click.prevent="cancel">Cancel</button>
    </form>
</template>

<script>
    import { mapState } from 'vuex'
    import { mapActions } from 'vuex'

    export default {
        data() {
            return {
                speed: null,
                distance: null,
                time: null
            }
        },
        computed: {
            ...mapState({
                runKey: state => state.runKey,
                runs: state => state.runs
            })
        },
        methods: {
            ...mapActions({
                changeRunComponent: 'changeRunComponent',
                closeEdit: 'closeEdit'
            }),
            changeInfo() {
                let run = this.runs[this.runKey];

                run.time = this.time + ' min';
                run.speed = this.speed;
                run.distance = this.distance + ' km';

                this.changeRunComponent(run);
            },
            cancel() {
                this.closeEdit();
            }
        },
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
        padding: 47px 88px;

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
            border: solid 2px white;
            font-size: 12.6px;
            font-weight: bold;
            margin: 0 auto;
            margin-top: 20px;
            color: white;
            background-color: transparent;
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

        .ml-30 {
            margin-left: 30px;
        }
    }
</style>