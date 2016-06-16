<template>
    <div id="app">
        <hello></hello>
        <adjust></adjust>
        <counter></counter>
    </div>
</template>

<script>
    import Hello from './components/Hello.vue'
    import Adjust from './components/Adjust.vue'
    import Counter from './components/Counter.vue'
    //import {changeMessage} from './actions';

    export default {
        components: {
            Hello,
            Adjust,
            Counter
        }
    }
</script>

<style>
    body {
        font-family: Helvetica, sans-serif;
    }
</style>
