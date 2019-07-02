const base = process.env.NODE_ENV === 'production' ? '上线地址' : '/api/'
export const API = {
  user: base + 'user.json',
  banner: base + 'banner.json',
  list: base + 'list.json',
  goodList: base + 'goodList.json',
  cartPage: base + 'cartPage.json',
  shopgoodlist: base + 'shopgoodlist.json'
}
