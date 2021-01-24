<template>
    <div class="empty">
        <img src="../assets/img/sadRoundedSquareEmoticon.png" alt="" class="empty__img" />

        <p class="empty__text">Nothing is there</p>

        <button class="empty__button" @click="viewNewRun" >Create your jog first</button>
    </div>
</template>

<script>
    import { mapActions } from 'vuex'

    export default {
        methods: {
            ...mapActions({
                viewNewRun: 'viewNewRun'
            })
        },
    }
</script>

<style lang="scss" scoped>
    .empty {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        &__img {
            width: 85px;
            margin-top: 80px;
            margin-bottom: 47px;

            @media(max-width: 550px) {
                margin-top: 140px;
                margin-bottom: 30px;
            }
        }

        &__text {
            font-size: 24px;
            line-height: 29px;
            color: gray;
        }

        &__button {
            padding: 20px 35px;
            color:  rgb(233, 144, 249);
            font-style: 18px;
            border-radius: 30px;
            border: solid 2px  rgb(233, 144, 249);
            background-color: transparent;
            margin-top: 145px;
        }
    }
</style>