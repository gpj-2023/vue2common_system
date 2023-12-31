import Mock from 'mockjs'
export default {
  getMenu: config => {
    const { account, password } = JSON.parse(config.body)
    // 先判断用户是否存在     
    // 判断账号和密码是否对应     
    if (account === 'admin' && password === 'admin') { 
      return { 
        code: 20000, 
        data: { 
          menu: [{ path: '/home', name: 'home', label: '首页', icon: 's-home', url: 'Home.vue' }, 
          { path: '/mall', name: 'mall', label: '商品管理', icon: 'video-play', url: 'Mall.vue' }, 
          { path: '/user', name: 'user', label: '用户管理', icon: 'user', url: 'User.vue' }, 
          { label: '其他', icon: 'location', 
          children: [{ path: '/page1', name: 'page1', label: '页面1', icon: 'setting', url: 'PageOne.vue' }, 
          { path: '/page2', name: 'page2', label: '页面2', icon: 'setting', url: 'PageTwo.vue' }] }], 
          token: Mock.Random.guid(), message: '获取成功',
          auth:'超级管理员',
          authName: account,
        } } } else if (account === '123' && password === '123') {
            // console.log(1111) 
            return { code: 20000, 
              data: { menu: [{ path: '/home', name: 'home', label: '首页', icon: 's-home', url: 'Home.vue' }, 
              { path: '/mall', name: 'mall', label: '商品管理', icon: 'video-play', url: 'Mall.vue' }], 
              token: Mock.Random.guid(), message: '获取成功',
              auth:'普通用户',
              authName: account, 
            } } } else { return { code: -999, data: { message: '密码错误' } } }
  }
}