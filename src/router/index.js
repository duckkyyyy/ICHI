import { createRouter, createWebHistory } from 'vue-router';

const routes = [
    { 
        name: 'Home',
        path: '/', 
        component: () => import('@/components/VMain.vue'),
        meta: {
            title: 'Ichi'
        } 
    },
    { 
        name: 'Catalog',
        path: '/catalog', 
        component: () => import('@/pages/catalog.vue'),
        meta: {
            title: 'Каталог'
        }
    },
    { 
        name: 'catalogcard', 
        path: '/catalog/card', 
        component: () => import('@/pages/catalogcard.vue')
    }
];

export const router = createRouter({
    history: createWebHistory(),
    routes
});