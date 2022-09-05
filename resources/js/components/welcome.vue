<template>

<div class="card">
    <div class="card-header">
        Basic Card
    </div>
    <div class="card-body">
        <h1 v-text="message"></h1>
    </div>
</div>
<Regform />

</template>

<script>
import Regform from './Regform.vue'
export default {
    components: {
    Regform
    },
    data() {
        return {
            model: {
                name: ""
            },
            message: "Hello World",
        };
    },
    methods() {
    }
};
</script>

<style>
.alert {
    background: red;
}
</style>
