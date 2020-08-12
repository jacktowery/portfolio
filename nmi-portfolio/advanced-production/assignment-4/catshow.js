new Vue({
    el: '#app',
    data: {
        catArray: [],
        breeds: []
    },
    created() {
        this.loadNextImage();
    },
    methods: {
        async loadNextImage() {
            try {
                axios.defaults.headers.common['x-api-key'] = "5707ff43-c0b5-456f-864a-78a03c24ea46"
                let response = await axios.get('https://api.thecatapi.com/v1/breeds');
                this.catArray = response.data;
                for (i = 0; i < this.catArray.length; i++) {
                    let breedId = this.catArray[i].id;
                    let imgResponse = await axios.get('https://api.thecatapi.com/v1/images/search?breed_ids=' + breedId);
                    this.breeds.push(imgResponse.data[0]);
                }
            } catch (err) {
                console.log(err)
            }
        },
    }
})

var CatSlideshow = Vue.component('cat-slideshow', {
    props: ['catid'],
    data: function () {
        return {
            image: "",
            allImages: [],
            i: -1
        }
    },
    computed: {
        whichcat: function () {
            return this.catid.trim().toLowerCase()
        }
    },
    created() {
        this.loadImages(this.whichcat)
    },
    methods: {
        async loadImages(breedID) {
            try {
                axios.defaults.headers.common['x-api-key'] = "5707ff43-c0b5-456f-864a-78a03c24ea46"
                let response = await axios.get('https://api.thecatapi.com/v1/images/search?breed_ids=' + breedID, {
                    params: {
                        limit: 10,
                        size: "full"
                    }
                })
                this.allImages = response.data;
            } catch (err) {
                console.log(err)
            }
            this.slideshow()
        },
        async slideshow() {
            if (this.i == -1) {
                this.image = "";
                this.i++;
            } else {
                if (this.i >= this.allImages.length) {
                    this.i = 0;
                }
                this.image = this.allImages[this.i].url;
                this.i++;
            }
        }
    },
    template: '<div class="has-text-centered"> <figure class="image"> <a :href="image" target = "_blank" > <img :src="image" style = "max-width: 500px;"> </a> </figure> <button class="button is-link is-light is-small" v-on:click="slideshow()">Slideshow</button> </div>'
})

new Vue({
    el: '#cat-slider',
    components: {
        'cat-slideshow': CatSlideshow
    }
})