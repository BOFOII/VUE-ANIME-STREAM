<template>
  <Header :static="true" />
  <Hero />
  <!-- catalog -->
  <div class="catalog catalog--list">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div class="row">
            <div class="col-12">
              <h2 class="section__title">Berlangsung</h2>
              <p class="section__text">
                Rekomendasi anime yang sedang berlangsung untuk anda.
              </p>
            </div>
          </div>
          <div class="row row--grid">
            <CardMovie :anime_list="on_going_anime" />
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-12">
          <router-link class="catalog__more" :to="{ name: 'ongoing-anime' }">Lebih banyak</router-link>
        </div>
      </div>
    </div>
  </div>
  <!-- end catalog -->

  <!-- catalog -->
  <div class="catalog catalog--list">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div class="row">
            <div class="col-12">
              <h2 class="section__title">Tamat</h2>
              <p class="section__text">Daftar daftar anime yang telah berakhir.</p>
            </div>
          </div>
          <div class="row row--grid">
            <CardMovie :anime_list="complete_anime" />
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-12">
          <router-link class="catalog__more" :to="{ name: 'complete-anime' }">Lebih banyak</router-link>
        </div>
      </div>
    </div>
  </div>
  <!-- end catalog -->
  <Footer />
</template>

<script>
// @ is an alias to /src
import Header from '@/components/header/Header'
import Hero from "@/components/Hero.vue";
import Footer from "@/components/Footer.vue";
import CardMovie from '@/components/CardMovie.vue';

export default {
  name: "HomeView",
  components: {
    Header,
    Hero,
    Footer,
    CardMovie,
    CardMovie
  },
  data() {
    return {
      on_going_anime: false,
      complete_anime: false,
    };
  },
  methods: {
    getHome() {
      this.$otaku.get("/home")
        .then((res) => {
          this.on_going_anime = res.data.home.on_going_anime;
          this.complete_anime = res.data.home.complete_anime;
        })
        .catch((err) => { });
    }
  },
  created() {
    this.getHome();
  },
  mounted() {

  },
};
</script>
