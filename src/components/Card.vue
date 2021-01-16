<template>
    <div class="container">
        <img src="../assets/img/run-man.svg" alt="" class="container__img"/>

        <p class="container__description">
            <span>
                {{run.date}}
            </span>
            <br>
            <span>
                <b>Speed</b>: {{run.speed}}
            </span>
            <br>
            <span>
                <b>Distance</b>: {{run.distance}}
            </span>
            <br>
            <span>
                <b>Time</b>: {{run.time}}
            </span>
        </p>
    </div>
</template>

<script>
export default {
    props: [
        'run'
    ]
}
</script>

<style lang="scss" scoped>
    .container {
        margin: 0 auto;
        width: 320px;
        display: flex;
        align-items: center;
        margin-bottom: 75px;

        &__description {
            margin-left: 45px;
        }
    }
</style>