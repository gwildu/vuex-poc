<template lang="jade">
    div.adjust
        input(type='text' @input="updateMessage($event.target.value)" ':value'="message")
</template>

<script>

    import  {changeMessage} from '../vuex/actions';

    export default {
        vuex: {
            getters: {
                message: function(state){
                    return state.message;
                }
            },
            actions: {
                changeMessage
            }
        },
        methods: {
            updateMessage: function(message) {
                this.changeMessage(message)
            }
        }
    }
    
</script>

<style lang="less">
    
</style>