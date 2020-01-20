new Vue({
    el: '#app',
    //first create method
    //bind method and pass parameter..

    // data: {
    //     title: 'Become ing a vue developer',
    //     name: 'Amrendra',
    //     url : 'https://www.youtube.com/',
    //     classes: ['one','two']
        
    // },
    // methods: {
    //     greet(time){
    //         return `Hello and good ${time}, ${this.name} `
    //     }
    // }

    //Simple Events examples

    // data:{
    //     title: 'Become ing a vue developer',
    //     wage : 10
    // },
    // methods:{
    //     changeWage(amount){
    //         this.wage += amount
    //     }
    // }
    
    //Event Object example    
    // data:{
    //     title: 'Become ing a vue developer',
    //     coords: {
    //         x:0,
    //         y:0
    //     }
    // },
    // methods:{
    //     logEvent(e){
    //         console.log(e);
    //     },
    //     logCoords(e){
    //         this.coords.x = e.offsetX
    //         this.coords.y = e.offsetY
    //     }
    // }
    //Keybords binds
    // data:{
    //     title: 'Keybords Events',
    //     name: 'Amrendra'
    // },
    // methods:{
    //     updateName(e){
    //         //console.log(e.target.value);
    //         this.name = e.target.value
    //     }
    // }

    //Two way binding
    // data:{
    //     title: 'Two Way bind',
    //     name: 'Amrendra'
    // },
    // methods:{
       
    // }
 // Modifires
    // data:{
    //     title: 'Modifiers'
    // },
    // methods:{
    //     logMessage(){
    //         console.log('Hello World')
    //     }
    // },

    //if -else conditions
    // data:{
    //     title: 'Conditional output',
    //     showName: false,
    //     showAge :true
    // },
    // methods:{
    //     toggleName(){
    //         this.showName = !this.showName
    //     },
    //     toggleAge(){
    //         this.showAge = !this.showAge
    //     }
    // }

    data:{
        title: 'looping output',
       items: ['Red', 'blue' , 'green' , 'yellow' ,'pink'],
       minjas : [
           {name : 'Crystal', age : 25, belt : 'Black'},
           {name : 'Ryl', age : 30, belt : 'Brown'},
           {name : 'Ken', age : 45, belt : 'Orange'},
       ]
    },
    methods:{
       
    }



})