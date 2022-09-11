import HomeView from '../views/Home.vue'
import DetailAnime from '@/views/DetailAnime';
import OnGoingAnime from '@/views/OnGoingAnime';
import CompleteAnime from '@/views/CompleteAnime';
import GenreAnime from '@/views/GenreAnime';
import AnimeByGenre from '@/views/AnimeByGenre';
import ScheduleAnime from '@/views/ScheduleAnime';
import Login from '@/views/authentication/Login';
import Register from '@/views/authentication/Register';
import ForgotPassword from '@/views/pass-trouble/ForgotPassword'
import ResetPassword from '@/views/pass-trouble/ResetPassword';
import Contact from '@/views/Contact';
import AboutUs from '@/views/AboutUs';
import PrivacyPolicy from '@/views/PrivacyPolicy';
import NotFound from '@/views/erros/404';
import SearchAnime from '@/views/SearchAnime';

export const routes = [
    {
        path: '/:pathMatch(.*)*',
        name: '404',
        component: NotFound
    },
    {
        path: '/',
        name: 'home',
        component: HomeView
    },
    {
        path: '/cari/:query',
        name: 'search',
        component: SearchAnime,
    },
    {
        path: '/anime/:slug/:slug_eps?',
        name: 'wacth-anime',
        component: DetailAnime,
    },
    {
        path: '/berlangung',
        name: 'ongoing-anime',
        component: OnGoingAnime,
    },
    {
        path: '/tamat',
        name: 'complete-anime',
        component: CompleteAnime,
    },
    {
        path: '/daftar-genre',
        name: 'genre-list',
        component: GenreAnime,
    },
    {
        path: '/genre/:genre',
        name: 'anime-by-genre',
        component: AnimeByGenre,
    },
    {
        path: '/jadwal-anime',
        name: 'schedule-anime',
        component: ScheduleAnime,
    },
    {
        path: '/masuk',
        name: 'login',
        component: Login,
    },
    {
        path: '/daftar',
        name: 'register',
        component: Register,
        meta: {
            middleware: []
        }
    },
    {
        path: '/minta-ulang-sandi',
        name: 'forgot-password',
        component: ForgotPassword,
    },
    {
        path: '/atur-ulang-sandi',
        name: 'reset-password',
        component: ResetPassword,
    },
    {
        path: '/kontak',
        name: 'contact',
        component: Contact
    },
    {
        path: '/tentang-kami',
        name: 'about-us',
        component: AboutUs
    },
    {
        path: '/kebijakan-privasi',
        name: 'privacy-policy',
        component: PrivacyPolicy
    }
]