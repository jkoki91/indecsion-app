<template>
  <!-- <h2>Counter</h2> -->
  <h2>{{customTitle}}</h2>
  <!-- <p>{{counter}} <sup>2</sup>={{counter*counter}}</p>
  <p>{{counter}} <sup>2</sup>={{getSquareValue()}}</p>
  <p>{{counter}} <sup>2</sup>={{getSquareValue()}}</p>
  <p>{{counter}} <sup>2</sup>={{squareCounter}}</p>
  <p>{{counter}} <sup>2</sup>={{squareCounter}}</p> -->
  <p>{{counter}} <sup>2</sup>={{squareCounter}}</p>
    <div>
        <button v-on:click="sumar">+1</button>
        <button @click="restar">-1</button>
        <!-- v-on y @ son lo mismo -->
    </div>


</template> 

<script>
export default {
    // props:['title','start'],
    props:{
        title: String, 
        start: {
            type: Number,
            default:5,
            // required: true
            validator (value){
                return value > 1 
            }
        }
    },
    // name:'counter',
    data (){
        return{
            counter: this.start || 5
        }
    },
    methods:{
        getSquareValue(){
            console.log('Funciona')
            return this.counter*this.counter
        },
        sumar(){
            this.counter++
        },
        restar(){
            this.counter--
        }
    },
    computed:{
        squareCounter(){
            console.log('Compueted counter')
            return this.counter*this.counter
        },
        customTitle(){
            return this.title||'Counter' 
        }
    }
}
</script>




<style>

button{
    background-color: #64bb87;
    border-radius: 5px;
    border: 1px solid white;
    color: white;
    cursor: pointer;
    margin: 0 5px;
    padding: 5px 15px;
    transition: 0.3s ease-in-out;

}
button:hover{
    background-color: #5aa67b;
    transition: 0.3s ease-in-out;
}

</style>


