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
      mock: {"variation":"default-slice","version":"sktwi1xtmkfgx8626","items":[{}],"primary":{"heading":[{"type":"paragraph","text":"Sit exercitation mollit sint ipsum irure non anim cupidatat fugiat aliquip nulla id cillum magna eiusmod. Aliquip aute cillum in aute adipisicing enim consectetur eu et qui.","spans":[]}],"subHeading":[{"type":"paragraph","text":"Cupidatat aliqua anim anim elit amet laborum dolore consectetur amet voluptate consequat eiusmod eu pariatur elit. Nisi dolore quis cillum dolor dolore officia eu tempor adipisicing nulla sit enim.","spans":[]}],"textAlign":"center","buttonText":[{"type":"paragraph","text":"Sint sint aliqua duis id sit veniam ex duis quis incididunt ex est veniam. Mollit deserunt magna deserunt non sit id ut adipisicing velit deserunt esse.","spans":[]}],"buttonLink":{"link_type":"Web","url":"https://prismic.io"},"media":"image","backgroundImage":{"dimensions":{"width":900,"height":500},"alt":null,"copyright":null,"url":"https://images.unsplash.com/photo-1579931794097-0ad001e51edb"},"backgroundVideo":{"link_type":"Web","url":"https://slicemachine.dev"}},"slice_type":"hero_section","id":"_DefaultSlice"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_DefaultSlice.storyName = ''
