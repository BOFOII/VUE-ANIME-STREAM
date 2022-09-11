<template>
  <Header :static="true" />
  <Hero />
  <div class="catalog catalog--list">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div class="row">
            <div class="col-12">
              <h2 class="section__title">Jadwal anime</h2>
              <p class="section__text">Jadwal anime yang masih berlangsung saat ini.</p>
            </div>
          </div>
          <div class="row row--grid">
            <!-- dashbox -->
            <div v-for="(jadwal, index) in schedule_list" :key="index" class="col-12 col-xl-6">
              <div class="dashbox">
                <div class="dashbox__title">
                  <h3><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                      <path
                        d="M10,13H3a1,1,0,0,0-1,1v7a1,1,0,0,0,1,1h7a1,1,0,0,0,1-1V14A1,1,0,0,0,10,13ZM9,20H4V15H9ZM21,2H14a1,1,0,0,0-1,1v7a1,1,0,0,0,1,1h7a1,1,0,0,0,1-1V3A1,1,0,0,0,21,2ZM20,9H15V4h5Zm1,4H14a1,1,0,0,0-1,1v7a1,1,0,0,0,1,1h7a1,1,0,0,0,1-1V14A1,1,0,0,0,21,13Zm-1,7H15V15h5ZM10,2H3A1,1,0,0,0,2,3v7a1,1,0,0,0,1,1h7a1,1,0,0,0,1-1V3A1,1,0,0,0,10,2ZM9,9H4V4H9Z" />
                    </svg>{{ jadwal.day }}</h3>
                </div>

                <div class="dashbox__table-wrap dashbox__table-wrap--2">
                  <table class="main__table main__table--dash ">
                    <tbody>
                      <tr v-for="(anime, indexAnime) in jadwal.animeList" :key="indexAnime">
                        <td>
                          <div class="main__table-text">{{ indexAnime + 1 }}</div>
                        </td>
                        <td>
                          <div class="main__table-text">
                            <router-link :to="{ name: 'wacth-anime', params: { slug: anime.id.replace('/', '') } }">{{
                                anime.anime_name
                            }}
                            </router-link>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <!-- end dashbox -->
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
      schedule_list: false,
    }
  },
  methods: {
    getScheduleAnime() {
      this.$otaku.get("/schedule")
        .then(res => {
          this.schedule_list = res.data.scheduleList;
        })
        .catch(err => {

        })
    }
  },
  created() {
    this.getScheduleAnime();
  },
  mounted() {
  }
}
</script>
