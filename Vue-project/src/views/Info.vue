<template>
    <article class="article">
        <h1 class="article__header">INFO</h1>

        <p class="article__text">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry's standard dummy text ever since the
            1500s, when an unknown printer took a galley of type and scrambled it to
            make a type specimen book. It has survived not only five centuries, but
            also the leap into electronic typesetting, remaining essentially
            unchanged. It was popularised in the 1960s with the release of Letraset
            sheets containing Lorem Ipsum passages, and more recently with desktop
            publishing software like Aldus PageMaker including versions of Lorem
            Ipsum.

            <br />
            <br />

            It is a long established fact that a reader will be distracted by the
            readable content of a page when looking at its layout. The point of using
            Lorem Ipsum is that it has a more-or-less normal distribution of letters,
            as opposed to using 'Content here, content here', making it look like
            readable English.
        </p>
    </article>
</template>

<script>
    import { mapActions } from 'vuex'

    export default {
        methods: {
            ...mapActions({
                getCurrentPage: 'getCurrentPage'
            })
        },
        mounted() {
            this.getCurrentPage('Info');
        }
    }
</script>

<style lang="scss" scoped>
.article {
    padding-top: 85px;
    width: 615px;
    margin: 0 auto;

    @media(max-width: 550px) {
        padding-top: 25px;
        width: 90%;
    }

    &__header {
        font-size: 36px;
        color: green;
        margin-bottom: 15px;

        @media(max-width: 550px) {
            font-size: 25px;
        }
    }

    &__text {
        color: gray;
        font-size: 14px;
        line-height: 1.71;

        @media(max-width: 550px) {
            font-size: 12px;
            line-height: 24px;
        }
    }
}
</style>