/*
new Vue({
    el: '#app',

    data() {

        return {
            info: null,
            moreData: []
        }
    },
    mounted: function mounted() {
        this.showme()

    },

    methods: {
        async showme(index) {
            await axios
                .get('https://dog.ceo/api/breed/spaniel/' + index + '/images')
                .then(response => (this.info = response.data));
            console.log(this.info.message);
            this.moreData = this.info.message;
        }
    }
})
*/

new Vue({
    el: '#app',

    data() {

        return {
            info: null,
            moreData: [],
            imgMaker: [],
            whichDawg: "",
            selector: 0
        }
    },
    mounted: function mounted() {
        this.showme('blenheim');
    },
    methods: {
        async showme(index) {
            await axios
                .get('https://dog.ceo/api/breed/spaniel/' + index + '/images')
                .then(response => (this.info = response.data));
            console.log(this.info.message);
            this.moreData = this.info.message;
            this.whichDawg = this.moreData[0];
            this.selector = 0;
        },
        slider(inc) {
            this.selector = this.selector + inc;
            if (this.selector >= this.moreData.length) {
                this.selector = 0;
            } else if (this.selector < 0) {
                this.selector = this.moreData.length - 1;
            }
            this.whichDawg = this.moreData[this.selector];
            console.log(this.selector);
        }
    }
})