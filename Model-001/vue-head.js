window.onload = function(){
    Vue.component('vuehead',{
        template:`
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <link rel="stylesheet" href="contact.css">
        <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" rel="stylesheet">
        <title>Contact Form - test</title>
        `
        });
    new Vue({
        el:'#head'
    });
}