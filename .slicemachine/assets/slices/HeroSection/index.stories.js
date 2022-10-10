import MyComponent from '../../../../slices/HeroSection';
import SliceZone from 'vue-slicezone'

export default {
  title: 'slices/HeroSection'
}


export const _DefaultSlice = () => ({
  components: {
    MyComponent,
    SliceZone
  },
  methods: {
    resolve() {
      return MyComponent
    }
  },
  data() {
    return {
      mock: {"variation":"default-slice","version":"sktwi1xtmkfgx8626","items":[{}],"primary":{"heading":[{"type":"paragraph","text":"Laboris labore veniam fugiat. Non quis ea non est dolor incididunt mollit minim ipsum commodo tempor.","spans":[]}],"subHeading":[{"type":"paragraph","text":"Culpa elit ex velit mollit laborum do id qui. Proident reprehenderit exercitation ullamco dolor veniam. Exercitation consequat reprehenderit cupidatat enim irure est esse pariatur non esse irure anim culpa aliqua labore.","spans":[]}],"buttonText":[{"type":"paragraph","text":"Est do occaecat officia fugiat nisi ipsum. Voluptate occaecat aliqua ex occaecat anim do consectetur velit.","spans":[]}],"buttonLink":{"link_type":"Web","url":"https://prismic.io"},"media":"image","backgroundImage":{"dimensions":{"width":900,"height":500},"alt":null,"copyright":null,"url":"https://images.unsplash.com/photo-1589321599763-d66926c29613"},"backgroundVideo":{"link_type":"Web","url":"https://prismic.io"}},"slice_type":"hero_section","id":"_DefaultSlice"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_DefaultSlice.storyName = ''
