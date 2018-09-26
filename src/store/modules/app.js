import Util from '@/libs/util';

const app = {
  state: {
    collectlist: [],
    total: 0,
    ReminderList: [],
    status: '',
    exports: ''
  },
  mutations: {
    // 列表渲染
    CollectTableList (state,searchPage) {
      console.log(123)
      Util.ajax.post('/repayment-plan/get-overdue-list', {
        "number": searchPage.name,
        "size": localStorage.age,
        "orderNo": searchPage.sex,
      }).then((response) => {
        if (response.status == 200) {
          console.log('失败')
          var str = [
            {
              name: '123'
            },
            {
              name: '123'
            },
            {
              name: '123'
            },
            {
              name: '123'
            }
          ]
          state.collectlist = str
        }
      }).catch(response => {
        state.collectlist = ''
      })
    }
  }
};

export default app;
