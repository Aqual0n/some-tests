<template>
    <div class="component-wrapper">
        <h1>Я - ComponentB</h1>

        <component-c>
            <slot></slot>
        </component-c>
    </div>
</template>

<script>
import ComponentC from "@/components/ComponentC";
export default {
    name: "ComponentB",
    components: {ComponentC}
}
</script>

<style scoped>

</style>