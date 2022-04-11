<template>
    <div class="component-wrapper">
        <h1>Я - MainComponent</h1>
        <component-a> {{someTestText}} </component-a>
    </div>
</template>

<script>
import ComponentA from "@/components/ComponentA";

export default {
    components: {
        ComponentA,
    },
    data: () => ({
        someTestText: 'Этот текст из MainComponent'
    }),
}
</script>

<style scoped>

</style>