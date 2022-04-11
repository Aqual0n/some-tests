<template>
    <div class="component-wrapper">
        <h1>Я - ComponentA</h1>
        <component-b>
            <div class="slot-wrapper">
                <slot></slot>
            </div>
        </component-b>
    </div>
</template>

<script>
import ComponentB from "@/components/ComponentB";

export default {
    name: "ComponentA",
    components: {
        ComponentB
    }

}
</script>

<style scoped>

</style>