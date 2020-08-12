var computed = new Vue({
    el: '#compute',
    data: {
        firstName: "Jack",
        lastName: "Towery"
    },
    computed: {
        fullName() {
            return this.firstName + ' ' + this.lastName
        }
    }
})