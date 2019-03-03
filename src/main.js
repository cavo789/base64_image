import Vue from 'vue'
import App from './App.vue'
import 'bulma/css/bulma.css'

new Vue({
    el: '#app',
    render: h => h(App, {
        props: {
            app_title: 'Decode base64 encoded image',
            app_subtitle: 'Show the image based on his base64 encoded string',
            github: 'https://github.com/cavo789/base64_image',
        }
    }),
});
