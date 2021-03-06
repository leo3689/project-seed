import Vue from 'vue'
import Router from 'vue-router'
import store from './store'
import messages from '../../messages'

import Page from './views/Page'
import Dashboard from './views/custom/Dashboard'
import RBAC from './views/custom/RBAC'
import FilterChain from './views/custom/FilterChain'
import Session from './views/custom/Session'
import SystemNotice from './views/custom/SystemNotice'
import Message from './views/custom/Message'
import CodeGen from './views/custom/CodeGen'
import Profile from './views/custom/Profile'
import Setting from './views/custom/Setting'
import BugReport from './views/custom/BugReport'

const customPage = {
  'dashboard': Dashboard,
  'rbac': RBAC,
  'filter-chain': FilterChain,
  'session': Session,
  'system-notice': SystemNotice,
  'message': Message,
  'code-gen': CodeGen,
  'profile': Profile,
  'setting': Setting,
  'bug-report': BugReport,
};

Vue.use(Router);

const route = {
  path: '/',
  component: Page,
  redirect: '/dashboard',
  children: []
};

messages.nav.userMenu.forEach(menu => {
  if (menu.link && !menu.isDirect) {
    const page = {
      path: menu.link,
      component: Page,
    };
    if (menu.pageType) {
      page.meta.pageType = menu.pageType;
    } else if (menu.custom) {
      page.component = customPage[menu.custom];
    }
    route.children.push(page);
  }
});

for (let key in messages.sidebars) {
  if (!messages.sidebars.hasOwnProperty(key)) {
    continue;
  }
  messages.sidebars[key].options.forEach(menu => {
    if (menu.children) {
      menu.children.forEach(item => {
        if (item.link) {
          const page = {
            path: item.link,
            component: Page,
            meta: {
              key: item.link,
              menuKey: item.menuKey,
              sidebarKey: item.sidebarKey
            }
          };
          if (item.pageType) {
            page.meta.pageType = item.pageType;
          } else if (item.custom) {
            page.component = customPage[item.custom];
          }
          route.children.push(page);
        }
      });
    } else if (menu.link) {
      const page = {
        path: menu.link,
        component: Page,
        meta: {
          menuKey: menu.key,
          sidebarKey: menu.sidebarKey
        }
      };
      if (menu.pageType) {
        page.meta.pageType = menu.pageType;
      } else if (menu.custom) {
        page.component = customPage[menu.custom];
      }
      route.children.push(page);
    }
  });
}

const router = new Router({
  routes: [route]
});

router.beforeEach((to, from, next) => {
  store.dispatch('setPageType', to.meta.pageType || '');
  store.dispatch('setKey', to.meta.key || to.path);
  store.dispatch('setMenuKey', to.meta.menuKey || '');
  store.dispatch('setSidebarKey', to.meta.sidebarKey || '');
  next();
});

export default router