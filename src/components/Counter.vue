<template lang="jade">
    div.counter
        p {{count}}
</template>

<script>
    export default {
        vuex: {
            getters: {
                count: function(state) {
                    return state.message.length
                }
            }
        }
    }
</script>

<style lang="less">
    
</style>