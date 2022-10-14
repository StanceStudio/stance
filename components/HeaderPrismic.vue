<template>
  <header
    class="site-header fixed top-0 left-0 z-20 w-full"
    :class="{
      'scroll-up': scrollingUp,
      'scroll-down': scrollingDown,
      'menu-active': openNav,
    }"
  >
    <div class="mx-auto flex items-center py-8 px-8 lg:w-11/12 lg:py-12">
      <nuxt-link
        @click.native="openNav = false"
        to="/"
        aria-label="Stance"
        class="logo relative z-10 w-24"
        ><StanceLogo
      /></nuxt-link>
      <nav class="bg-violet lg:bg-transparent" :class="{ 'is-open': openNav }">
        <ul>
          <li
            v-for="menuLink in $store.state.menu.menu_links"
            :key="menuLink.id"
          >
            <prismic-link
              :field="menuLink.link"
              class="py-3 px-8 font-medium transition-colors duration-300 hover:text-magenta lg:px-4"
              @click.native="openNav = false"
              >{{ $prismic.asText(menuLink.label) }}</prismic-link
            >
          </li>
        </ul>
      </nav>
      <button
        class="ml-auto focus:outline-none lg:hidden"
        aria-label="Navigation menu"
        :aria-expanded="openNav ? 'true' : 'false'"
        @click.prevent="toggleNav"
        :class="{ 'is-active': openNav }"
      >
        <span></span>
      </button>
    </div>
  </header>
</template>

<script>
import StanceLogo from "~/assets/img/StanceLogo.svg?inline";

export default {
  name: "header-prismic",

  components: {
    StanceLogo,
  },

  data() {
    return {
      openNav: false,
      scrollingUp: false,
      scrollingDown: false,
    };
  },

  watch: {
    $route() {
      this.scrollingUp = false;
      this.scrollingDown = false;
    },
  },

  mounted() {
    this.onScroll();
  },

  methods: {
    toggleNav() {
      this.openNav = !this.openNav;
    },

    onScroll() {
      let lastScroll = 0;

      window.addEventListener("scroll", () => {
        const currentScroll = window.pageYOffset;
        if (currentScroll <= 0) {
          this.scrollingUp = true;
          return;
        }

        if (currentScroll > lastScroll && !this.scrollingDown) {
          // down
          this.scrollingDown = true;
          this.scrollingUp = false;
        } else if (currentScroll < lastScroll && this.scrollingDown) {
          // up
          this.scrollingDown = false;
          this.scrollingUp = true;
        }
        lastScroll = currentScroll;
      });
    },
  },
};
</script>

<style scoped lang="postcss">
.site-header {
  @apply transition-all duration-500;
}

.scroll-down:not(.menu-active) {
  @apply -translate-y-full transform;
}

.scroll-up:not(.menu-active) {
  @apply transform-none;
}

.nuxt-link-active {
  @apply text-magenta;
}

nav {
  @apply pointer-events-none fixed inset-0 opacity-0 transition-all duration-500;
}

@screen lg {
  nav {
    @apply pointer-events-auto relative ml-auto flex opacity-100;
  }
}

nav.is-open {
  @apply pointer-events-auto opacity-100;
}

nav ul {
  @apply -mr-4 flex flex-col pt-24 font-serif text-5xl leading-tight;
}

@screen lg {
  nav ul {
    @apply flex-row pt-0 font-body text-xl;
  }
}

nav.is-open ul li {
  @apply opacity-0;

  transform: translateY(0.3em);
  animation: fade-in 400ms ease forwards;
}

nav.is-open ul li:first-child {
  animation-delay: 200ms;
}

nav.is-open ul li:nth-child(2) {
  animation-delay: 350ms;
}

nav.is-open ul li:nth-child(3) {
  animation-delay: 500ms;
}

nav.is-open ul li:nth-child(4) {
  animation-delay: 650ms;
}

nav.is-open ul li:nth-child(5) {
  animation-delay: 800ms;
}

nav.is-open ul li:nth-child(6) {
  animation-delay: 950ms;
}

nav.is-open ul li:nth-child(7) {
  animation-delay: 1100ms;
}

nav.is-open ul li:nth-child(8) {
  animation-delay: 1250ms;
}

@keyframes fade-in {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

button {
  @apply relative;

  width: 40px;
  height: 16px;
}

button span {
  @apply absolute top-1/2 block w-full bg-black opacity-100;

  height: 2px;

  backface-visibility: hidden;

  transform: translateY(-50%);
  transition: all transform 300ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
}

button span::before,
button span::after {
  @apply absolute h-full w-full;

  content: "";
  top: 0px;
  right: 0px;
  background-color: inherit;
  transform: translateZ(0px);
  backface-visibility: hidden;
  transition: transform 300ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
}

button span::before {
  transform: translateY(-8px);
}

button span::after {
  transform: translateY(8px);
}

.is-active span {
  visibility: hidden;
}

.is-active span::before {
  transform: rotate(45deg);
  visibility: visible;
}

.is-active span::after {
  transform: rotate(-45deg);
  visibility: visible;
}
</style>
