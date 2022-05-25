// import { shallowMount } from '@vue/test-utils'
// import HelloWorld from '@/components/HelloWorld.vue'

// describe('HelloWorld.vue', () => {
//   it('renders props.msg when passed', () => {
//     const msg = 'new message'
//     const wrapper = shallowMount(HelloWorld, {
//       props: { msg }
//     })
//     expect(wrapper.text()).toMatch(msg)
//   })
// })



describe('Example Component', ()=>{
  test('Debe de ser mayor a 10', ()=>{
    //Arreglar
    let value = 8;

    //Estímulo 

    value = value + 3 

    // Observar el resultado

    // if(value > 10){ //esto es sin los metodos de JEST
    //   //TODO: todo bien
    // }else{
    //   throw `${value} no es mayo a 10`
    // }

    expect( value ).toBeGreaterThan(10)

  })
})