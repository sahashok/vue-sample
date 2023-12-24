<template>
    <div class="Sing">
        <img class="logo" src="../assets/Image/Logo1234.jpg" />
        <h1>Sing Up #4</h1>
        <div class="Upp">
            <input type="text" placeholder="Enter Name" />
            <input type="text" placeholder="Enter Last Name" />
            <input type="text" placeholder="Enter Email" />
            <input type="Password" placeholder="Enter Password" />
            <button v-on:click="SingUp - SingUp">Sing Up</button>

        </div>
    </div>
</template>
<script>
export default {
    name: "SignUp",
}
</script>

<style scoped>
.Sing {
    /* background-color: aquamarine; */
}

.logo {
    width: 100px;
}

.Upp input {
    width: 300px;
    height: 40px;
    padding-left: 20px;
    display: block;
    margin-bottom: 30px;
    margin-left: auto;
    margin-right: auto;
    border: 1px solid skyblue;
}

.Upp button {
    width: 320px;
    height: 40px;
    border: 1px solid skyblue;
    color: #fff;
    background-color: rgb(106, 190, 223);
    cursor: pointer;
}</style>