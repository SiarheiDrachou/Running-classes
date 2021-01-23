<template>
    <form class="form">
        <label for="start" class="form__label">Date from</label>
        <input id="start" type="date" class="form__input" v-model="start"/>

        <label for="end" class="form__label ml">Date to</label>
        <input id="end" type="date" class="form__input" v-model="end"/>
    </form>
</template>

<script>
    import { mapActions } from 'vuex'

    export default {
        data() {
            return {
                start: null,
                end: null
            }
        },
        methods: {
            ...mapActions({
                getStartDate: 'getStartDate',
                getEndDate: 'getEndDate',
                sortRuns: 'sortRuns'
            }),
        },
        watch: {
            start: function(start) {
                let startDate = new Date(start).getTime();

                this.getStartDate(startDate);
                this.sortRuns();
            },
            end: function(end) {
                let endDate = new Date(end).getTime();

                this.getEndDate(endDate);
                this.sortRuns();
            }
        },
    }
</script>

<style lang="scss" scoped>
    .form {
        width: 100%;
        padding: 15px 0;
        background-color: #eaeaea;
        display: flex;
        justify-content: center;
        align-items: center;

        &__input {
            border-radius: 11px;
            border: solid 1px #979797;
            margin-left: 15px;
            width: 130px;
            height: 31px;

            @media(max-width: 550px) {
                width: 90px;
            }
        }

        &__label {
            font-size: 13px;
        }

        .ml {
            margin-left: 45px;

            @media(max-width: 550px) {
                margin-left: 15px;
            }
        }
    }
</style>