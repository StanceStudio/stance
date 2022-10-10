import MyComponent from '../../../../slices/LogosSection';
import SliceZone from 'vue-slicezone'

export default {
  title: 'slices/LogosSection'
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
      mock: {"variation":"default-slice","version":"sktwi1xtmkfgx8626","items":[{"logo":{"dimensions":{"width":900,"height":500},"alt":null,"copyright":null,"url":"https://images.unsplash.com/photo-1537498425277-c283d32ef9db"}}],"primary":{"heading":[{"type":"heading2","text":"Personal","spans":[]}],"subheading":[{"type":"paragraph","text":"Aliquip minim reprehenderit culpa esse consequat enim sunt eu enim laborum sit irure excepteur eu magna.","spans":[]}]},"slice_type":"logos_section","id":"_DefaultSlice"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_DefaultSlice.storyName = ''
