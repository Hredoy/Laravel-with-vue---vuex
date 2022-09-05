<template>

<div class="card">
    <div class="card-header">
        Basic Card
    </div>
    <div class="card-body">
        <h1 v-text="message"></h1>
    </div>
</div>
<div class="card">
    <div class="card-header">
        Form Card
    </div>
    <div class="card-body">
        <form >
            <div class="form-group">
                <label for="name">Name</label>
                <input type="text" v-bind:model="name" placeholder="Type Your Name..." class="form-control">
            </div>
            <div class="form-group">
                <label for="name">Email</label>
                <input type="email" v-bind:model="email" placeholder="Type Your E-mail..." class="form-control">
            </div>
            <div class="form-group">
                <label for="name">Password</label>
                <input type="password" v-bind:model="password" placeholder="Type Password..." class="form-control">
            </div>
            <div class="form-group">
                <label for="name">Email</label>
                <input type="password" v-bind:model="confirm-password" placeholder="Type Password..." class="form-control">
            </div>

        </form>
    </div>
</div>
</template>

<script>
export default {
    data() {
        return {
            model: {
                name: ""
            },
            message: "Hello World",
        };
    },
    methods() {
    },
    components: { Todo }
};
</script>

<style>
.alert {
    background: red;
}
</style>
