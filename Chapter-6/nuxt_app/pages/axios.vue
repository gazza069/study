<template>
    <section class="container">
        <h1>{{title}}</h1>
        <p>{{message}}</p>
    </section>
</template>

<script>
import firebase from "firebase";

export default {
    data: function(){
        return {
            title:'Auth',
            message:'this is message.',
        };
    },
    created: function() {
        var config = {
            apiKey: "AIzaSyA_R-No3qNhI0-9k_7N5wf3pUERggOZ7xk",
            authDomain: "vue-nuxt-8fb73.firebaseapp.com",
            databaseURL: "https://vue-nuxt-8fb73.firebaseio.com",
            projectId: "vue-nuxt-8fb73",
            storageBucket: "",
            messagingSenderId: "70807345769",
            appId: "1:70807345769:web:73151a956ed70e52"
        };
        firebase.initializeApp(config);

        var provider = new firebase.auth.GoogleAuthProvider();
        var self = this;
        firebase.auth().signInWithPopup(provider).then(function(result) {
            self.message = result.user.displayName + ', ' + result.user.email;
        });
    },
};
</script>

<style>
ul {
    margin:0 10px;
    background-color: aliceblue;
}
li {
    padding: 10px;
    font-size:16pt;
}
</style>
