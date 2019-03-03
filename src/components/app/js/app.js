import github_corner from "../../github_corner/github_corner.vue";
import apptitle from "../../apptitle/apptitle.vue";
import base64_decode from "../../base64_decode/base64_decode.vue";
import howtouse from "../../howtouse/howtouse.vue";

export default {
    name: 'App',
    components: {
        apptitle, base64_decode, github_corner, howtouse
    },

    props: {
        app_title: {
            type: String
        },
        app_subtitle: {
            type: String
        },
        github: {
            type: String,
            required: false
        }
    }
};
