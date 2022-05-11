<template>
  <img v-if="img" :src="img" alt="bg" />
  <div class="bg-dark"></div>

  <div class="indecision-container">
    <input 
    type="text" 
    placeholder="Hazme una pregunta" 
    v-model="question"
    />
    <!-- v-on:keyup.enter="question" esto no se si vale para algo -->
    <p>Recuerda terminar con un signo de interrogación (?)</p>

    <div>
        <!-- <h2>Seré millonario??</h2>  -->
        <h2>{{question || 'Seré millonario??'}}</h2> 
        <h1>{{answer || 'Si, No, ... pensando'}}</h1>
    </div>
  </div>
</template>

<script>

export default {
    data(){
        return{
            question: null,
            answer: null,
            img: null,
            isValidQuestion: false
        }
    },
    watch:{
        question( value,oldValue ){
            this.isValidQuestion = false

            if(!value.includes('?')) return

            this.isValidQuestion = true

            this.getAnswer()
        }
    },
    methods:{
        async getAnswer() {
            this.answer = 'Pensando...'

            const { answer,image} = await fetch('https://yesno.wtf/api').then(r=>r.json())
            // .then(d=>console.log(d))
            if (answer==='yes'){
                this.answer = 'SI'
            }else{
                if(answer==='no'){
                this.answer = 'NO!!!'
                }else{this.answer = 'TAL VEZ' }
            }
            // this.answer = answer
            this.img = image

            // console.log(data)
        }
    }
};  
</script>

<style scoped>
img,
.bg-dark {
  height: 100vh;
  left: 0px;
  max-height: 100%;
  max-width: 100%;
  position: fixed;
  top: 0px;
  width: 100vw;
}

.bg-dark {
  background-color: rgba(0, 0, 0, 0.4);
}

.indecision-container {
  position: relative;
  z-index: 99;
}

input {
  width: 250px;
  padding: 10px 15px;
  border-radius: 5px;
  border: none;
}
input:focus {
  outline: none;
}

p {
  color: white;
  font-size: 20px;
  margin-top: 0px;
}

h1,
h2 {
  color: white;
}

h2 {
  margin-top: 150px;
}
</style>