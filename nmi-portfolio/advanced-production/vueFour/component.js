Vue.component('toast', {
    template: `<div><button v-on:click="checkToast"> check the toast </button>
    <h3 :style="{backgroundColor: bgcolor}">The toast is {{toastState}}</h3>
    <h3>{{toastopinion}}</h3></div>`,
    props: {
        toastopinion: String,
        bgcolor: String
    },
    data() {
        return {
            toastState: "burnt"
        }
    },
    methods: {
        checkToast() {

        }
    }
})

var co = new Vue({
    el: '#co',
    data: {
        toastState: "burnt"
    },
    methods: {
        checkToast() {
            this.toastState = "perfect"
        }
    }
})