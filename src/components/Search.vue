<template>
    <form class="form">
        <label for="start" class="form__label">Date from</label>
        <input id="start" type="text" class="form__input" />

        <label for="end" class="form__label ml">Date to</label>
        <input id="end" type="text" class="form__input" />
    </form>
</template>

<script>
    export default {
        data() {
            return {
                start: null,
                end: null
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
            width: 100px;
            height: 31px;
        }

        &__label {
            font-size: 13px;
        }

        .ml {
            margin-left: 45px;
        }
    }
</style>