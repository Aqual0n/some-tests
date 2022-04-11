<template>
    <div id="app">
        <log-component></log-component>
        <main-component></main-component>
    </div>
</template>

<script>

import MainComponent from "@/components/MainComponent";
import LogComponent from "@/components/LogComponent";

export default {
    name: 'App',
    components: {
        MainComponent,
        LogComponent
    },
}
</script>

<style>
#app {
    font-family: -apple-system, system-ui, blinkmacsystemfont, 'Lucida Grande', 'Lucida Sans Unicode', 'sans-serif';
}

.component-wrapper {
    padding: 12px;
    border: 1px solid black;
    border-radius: 16px;
}

.slot-wrapper {
    padding: 8px;
    border: 1px solid blue;
    margin: 12px 0;
    border-radius: 16px;
}
</style>
