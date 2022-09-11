<template>
  <Header />
  <Hero />
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
            <CardMovie :anime_list="anime_list" />
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-12">
          <div class="catalog__paginator-wrap">
            <span class="catalog__pages">{{ page }} dari {{ paginates ? paginates[paginates.length - 1] : '999'
            }}</span>

            <ul class="catalog__paginator">
              <li v-if="page != 1">
                <a href="#" @click.prevent="changePage(page - 1)">
                  <svg width="14" height="11" viewBox="0 0 14 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.75 5.36475L13.1992 5.36475" stroke-width="1.2" stroke-linecap="round"
                      stroke-linejoin="round" />
                    <path d="M5.771 10.1271L0.749878 5.36496L5.771 0.602051" stroke-width="1.2" stroke-linecap="round"
                      stroke-linejoin="round" />
                  </svg>
                </a>
              </li>

              <li v-for="(pagination, index) in paginates" :key="index" :class="pagination == page ? 'active' : ''">
                <a href="#" @click.prevent="changePage(pagination)">{{ pagination }}
                </a>
              </li>


              <li v-if="page != paginates[paginates.length - 1]">
                <a href="#" @click.prevent="changePage(page + 1)">
                  <svg width="14" height="11" viewBox="0 0 14 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13.1992 5.3645L0.75 5.3645" stroke-width="1.2" stroke-linecap="round"
                      stroke-linejoin="round" />
                    <path d="M8.17822 0.602051L13.1993 5.36417L8.17822 10.1271" stroke-width="1.2"
                      stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                </a>
              </li>

            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
  <br>
  <br>
  <br>
  <Footer />
</template>
<script>
import Header from '@/components/header/Header'
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import CardMovie from '@/components/CardMovie';

export default {
  name: 'CompleteAnimeView',
  components: {
    Header,
    Hero,
    Footer,
    CardMovie
  },
  data() {
    return {
      anime_list: false,
      nextPage: 1,
      page: false,
      paginates: false,
    }
  },
  methods: {
    changePage(pageNumber) {
      this.$router.push({
        name: 'complete-anime',
        query: {
          page: pageNumber
        }
      })
      this.clearAll();
      this.nextPage = pageNumber;
      this.getCompleteAnime();
    },
    getCompleteAnime() {
      this.$otaku.get(`/complete-anime/page/${this.nextPage}`)
        .then(res => {
          this.anime_list = res.data.animeList;
          this.page = res.data.page;
          this.paginates = res.data.paginates;
          this.paginates.sort(function (a, b) { return a - b });
        })
        .catch(err => {

        })
    },
    clearAll() {
      this.anime_list = this.page = this.paginates = false;
    }
  },
  created() {
    this.nextPage = this.$route.query.page ? this.$route.query.page : 1;
    this.getCompleteAnime();
  },
  mounted() {
    Object.freeze(this.paginates);
  },
}
</script>
