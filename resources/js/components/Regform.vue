<template>
<div class="card">
    <div class="card-header">
        Form Card
    </div>
    <div class="card-body">
        <form >
            <div class="form-group">
                <label for="name">Name</label>
                <input type="text" v-model="userBlank.name" placeholder="Type Your Name..." class="form-control">
            </div>
            <div class="form-group">
                <label for="name">Email</label>
                <input type="email" v-model="userBlank.email" placeholder="Type Your E-mail..." class="form-control">
            </div>
            <div class="form-group">
                <label for="name">Password</label>
                <input type="password" v-model="userBlank.password" placeholder="Type Password..." class="form-control">
            </div>
            <br>
            <button type="submit" class="btn btn-success" v-on:click="onSubmit">Add User</button>
        </form>


    </div>
</div>
<div class="card mt-3">
    <div class="card-body ">
        <table class="table mt-2 table-bordered">
            <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Password</th>
            </tr>
            <tr v-for="(users,key,index) in userList" :key="index">
                <td>{{ users.name }}</td>
                <td>{{ users.email }}</td>
                <td>{{ users.password }}</td>
            </tr>
        </table>
    </div>
</div>
</template>
<script>
    import {  mapActions } from "vuex";
export default {

    data() {
        const userBlank ={
            name: "",
            email: "",
            password:""
        }
        return {
            userBlank
        }
    },
    computed: {
        userList() {
            return this.$store.state.Users.userList
        }
    },
    methods: {
        onSubmit(e) {
            e.preventDefault();
            this.$store.dispatch("Users/addUser", this.userBlank)
        }
    }
};
</script>

<style>
.alert {
    background: red;
}
</style>
