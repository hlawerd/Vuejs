window.onload = function() {

    Vue.component('posts', {
        template: `
        <h1 @click="display ">{{message}}</h1>
        `,
        data() {
            return {  message: 'Click here!'     }
        },
        methods:{
            display(){
                 alert('Hello worked well!')
             }
         }
    })
    let vm = new Vue({
                el: '#app2'
            })
    

}