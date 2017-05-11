const state = {
  // 保存第一页数据
  token: 'asdg',
}

const mutations = {
  // 设置 token 登录名 头像
  setToken(state, data) {
    try {
      state.token = data.token;
    } catch (err) {
      console.log(err)
    }
  }
}

export default {
  state,
  mutations
}