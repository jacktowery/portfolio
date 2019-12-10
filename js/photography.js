const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

var projVue = new Vue({
    el: '#photography-columns',
    data: {
        allPhotos: [],
        allPhotoUrls: [],
        allSharePhotoUrls: [],
        allPhotoDates: []
    },
    created() {
        this.loadAllPhotos();
    },
    methods: {
        async loadAllPhotos() {
            try {
                let response = await axios.get(
                    'https://api.flickr.com/services/rest/?method=flickr.people.getPhotos&api_key=4973694f042693f6b4d59c2e1340604e&user_id=185908815@N02&format=json&nojsoncallback=1'
                );
                this.allPhotos = response.data.photos.photo;
                for (i = 0; i < this.allPhotos.length; i++) {
                    // Get photo URL
                    let photoURL = "https://farm" + this.allPhotos[i].farm + ".staticflickr.com/" + this.allPhotos[i].server + "/" + this.allPhotos[i].id + "_" + this
                        .allPhotos[i].secret +
                        "_b.jpg";
                    this.allPhotoUrls.push(photoURL);

                    // Get share photo URL
                    let shareURL = 'https://www.flickr.com/photos/185908815@N02/' + this.allPhotos[i].id + '/in/dateposted-public/';
                    this.allSharePhotoUrls.push(shareURL);

                    // Get photo taken date
                    let response2 = await axios.get(
                        'https://api.flickr.com/services/rest/?method=flickr.photos.getInfo&api_key=4973694f042693f6b4d59c2e1340604e&photo_id=' + this.allPhotos[i]
                        .id + '&secret=' + this
                        .allPhotos[i].secret + '&format=json&nojsoncallback=1'
                    );
                    var date = response2.data.photo.dates.taken;
                    let dateO = new Date(date);
                    let formattedDate = months[dateO.getMonth()] + ' ' + dateO.getDate() + ', ' + dateO.getFullYear();
                    this.allPhotoDates.push(formattedDate);
                }
            } catch (err) {
                console.log(err);
            }
        }
    }
})