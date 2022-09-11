<template>
    <div class="page-404 section--full-bg" data-bg="img/bg.jpg">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <div class="page-404__wrap">
                        <div class="page-404__content">
                            <h1 class="page-404__title">404</h1>
                            <p class="page-404__text">Ups, Tidak ditemukan</p>
                            <router-link class="page-404__btn" :to="{ name: 'home' }">Kembali</router-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: '404View'
}
</script>