new Vue({
    el: '#app2',
    data: {
        image: "",
    },
    created() {
        this.loadRandomImage();
    },
    methods: {
        async loadRandomImage() {
            try {
                axios.defaults.headers.common['x-api-key'] = "5707ff43-c0b5-456f-864a-78a03c24ea46";
                let imgResponse = await axios.get('https://api.thecatapi.com/v1/images/search?size=full');
                this.image = imgResponse.data[0]["url"];

            } catch (err) {
                console.log(err)
            }
        },
    }
})