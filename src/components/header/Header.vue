<template>
  <header :class="hidden ? 'header header--hidden' : 'header header--static'">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div class="header__content">
            <button class="header__menu" type="button">
              <span></span>
              <span></span>
              <span></span>
            </button>
            <HeaderAtom @getSearchKeyword="getSearch" />
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import HeaderAtom from "./HeaderAtom.vue";
export default {
  name: "HeaderStatic",
  emits: ['toSearchPage'],
  components: {
    HeaderAtom,
  },
  props: ['static', 'hidden'],
  methods: {
    getSearch(val) {
      this.$emit('toSearchPage', val);
    }
  },
};
</script>
