import Vue from 'vue'
import VueRouter from 'vue-router'
import MaintenancePortal from '@/views/MaintenancePortal.vue'
import RoadArchive from '@/views/RoadArchive.vue'
import Road from '@/views/Road.vue'
import AddRoad from '@/views/AddRoad.vue'
import Complaint from '@/views/Complaint.vue'
import Upload from '@/views/Upload.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    redirect: {name: 'roads'}
  },
  {
    path: '/maintenance',
    name: 'maintenance',
    component: MaintenancePortal
  },
  {
    path: '/roads',
    name: 'roads',
    component: RoadArchive
  },
  {
    path: '/upload',
    name: 'upload',
    component: Upload
  },
  {
    path: '/road/add',
    name: 'add-road',
    component: AddRoad
  },
  {
    path: '/road/:id',
    name: 'road',
    component: Road
  },
  {
    path: '/complaint/:id',
    name: 'complaint',
    component: Complaint
  },
]

const router = new VueRouter({
  routes
})

export default router
