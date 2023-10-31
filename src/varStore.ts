import { reactive } from "vue";

export const navBarVars = reactive({

});

export const navVars = reactive({
    navBarBtn: false,

    methods: {
        navigateToBlank(url: string) {
            window.open(url, '_blank');
        },
        toggleRoomBtn() {
            navVars.navBarBtn = !navVars.navBarBtn
        }
    },
    
});