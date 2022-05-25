import { shallowMount } from '@vue/test-utils'
import Counter from '@/components/Counter'


describe('Counter Component', () => {
    //esto es para que el wrapper solo lo creemos una vez

    let wrapper

    beforeEach(()=>{
        wrapper = shallowMount( Counter )
    })

    // test('debe hacer match con el snapshot',()=>{

    //     const wrapper = shallowMount(Counter)

    //     expect(wrapper.html()).toMatchSnapshot()

    // })  //cuando esto corre se crea la carpeta de snapshot que luego no me actualiza con el `-u`

    test('h2 debe tener por defecto el valor "Counter" ', () => {

        // const wrapper = shallowMount(Counter)

        // expect(wrapper.find('h10').exists()).toBe(true)
        // expect(wrapper.find('h10').exists()).toBeTruthy()
        expect(wrapper.find('h2').exists()).toBeTruthy()

        // const h2Value = wrapper.find('h2')
        const h2Value = wrapper.find('h2').text()

        // console.log(h2.text())

        // expect( h2.text() ).toBe('Counter')
        expect(h2Value).toBe('Counter')
    })



    test('el valor por defecto debe ser 5 en el p', () => {
        // const wrapper = shallowMount(Counter) 

        // Esto es para localizar lo que voy a testear

        // const value = wrapper.find('p').text()
        // const value = wrapper.find('p').html()
        // const pTags = wrapper.findAll('p')
        const value = wrapper.find('[data-testid="counter"]').text()

        // console.log(value)
        // console.log(pTags)

        //Los expects!!!
        // expect(pTags[1].text()).toBe('5')
        expect(value).toBe('5')

    })

    test('debe incrementar y decrementar en 1', async()=>{

        // const wrapper = shallowMount(Counter) 

        // const increaseBtn = wrapper.find('button')
        const [increaseBtn, decreaseBtn] = wrapper.findAll('button')

        await increaseBtn.trigger('click')
        await increaseBtn.trigger('click')
        await increaseBtn.trigger('click')

        // const value = wrapper.find('[data-testid="counter"]').text()
        // let value = wrapper.find('[data-testid="counter"]').text()

        // expect( value ).toBe('6')

        //ahora hacer que decrezca el número

        // const decreaseBtn = wrapper.find('[data-testid="restar"]')
        // const decreaseBtn = wrapper.findAll('button')[1]

        await decreaseBtn.trigger('click')
        await decreaseBtn.trigger('click')

        // value = wrapper.find('[data-testid="counter"]').text()
        const value = wrapper.find('[data-testid="counter"]').text()

        expect( value ).toBe('6')

    })

    test('debe de establecer el valor por defecto', () => { 

        const start = wrapper.props('start')

        // console.log(typeof start)

        const value = wrapper.find('[data-testid="counter"]').text()

        expect( Number(value) ).toBe( start )
    })

    test('debe mostrar la prop title', ()=>{
        const title = 'Hola Mundo!!!'
        const wrapper = shallowMount(Counter,{
            props:{
                title
                //start: '5' si le paso un string al start que está definido como un number me salta un warning
            }
        })

        // console.log(wrapper.html())

        expect(wrapper.find('h2').text()).toBe(title)
    })

})