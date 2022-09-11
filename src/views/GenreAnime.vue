<template>
  <Header :static="true" />
  <Hero />
  <div class="catalog catalog--list">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div class="row">
            <div class="col-12">
              <h2 class="section__title">Genre</h2>
              <p class="section__text">Daftar daftar genre.</p>
            </div>
          </div>
          <div class="row row--grid">
            <div class="col categories">
              <router-link v-for="(genre, index) in genre_list" :key="index"
                :to="{ name: 'anime-by-genre', params: { genre: genre.id.replace('/', '') } }" class="categories__item">
                {{ genre.genre_name }}
              </router-link>
            </div>

          </div>
        </div>
      </div>

    </div>
  </div>
  <Footer />
</template>
<script>
import Header from '@/components/header/Header'
import Hero from "@/components/Hero.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "GenreListView",
  components: {
    Header,
    Hero,
    Footer,
  },
  data() {
    return {
      genre_list: false,
    }
  },
  methods: {
    getGenreList() {
      this.$otaku.get("/genre-list")
        .then(res => {
          this.genre_list = res.data.genreList;
        })
        .catch(err => { })
    }
  },
  created() {
    this.getGenreList();
  },
  mounted() {
  }
}
</script>
