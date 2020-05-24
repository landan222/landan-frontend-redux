$( window.document ).ready(function() {

  // 运作原理
  // 1. 前端 html 触发 点击 click 事件 
  // 2. click 事件 触发 AJAX 请求 后端数据， （略）
  // 3. store 分发 (dispatch) 这个后端数据，触发 “数据 异动事件”， 并带上 type, 以便 reducer 使用
  // 4. js/reducer.js 根据 3 来的数据 与 type 来使用不同的 reducer 做 数据处理（插入排序 改字段 等）
  // 5. store.subscribe, 根据这些 “数据事件”， “统一统一统一统一统一统一统一渲染”

  // *. 测试 redux 是否 无 BUG 可以直接 store.dispatch .... 直接丢数据 看看  ， 不需透过 click , ajax event (就是直接 呼叫 136 行)
  // *. 之后 AJAX 加入之后  避免 callback hell , 必须使用 $.deferred promise
  // *. 前端的 重点是啥么？ 就是 自己 用 假的 json 数据（如果可以格式先跟 后端要）， 完成 1, *, 3, 4, 5 的代码
  // *. 2的后端格式一定要 跟 后端询问！！！！！！！！！！！！！！！！
  $(window.document).on('click', 'section.number-wrapper #add', function (oEvent) {
    
    var oStore = {
      type: 'ADD_NUMBER',
      payload: {}
    };
    
     store.dispatch(oStore);

  });


  $(window.document).on('click', 'section.number-wrapper #sub', function (oEvent) {
    
    var oStore = {
      type: 'SUB_NUMBER',
      payload: {}
    };
    
     store.dispatch(oStore);

  });

  $(window.document).on('click', 'section.number-wrapper #init', function (oEvent) {
    
    var oStore = {
      type: 'INIT_NUMBER',
      payload: {}
    };
    
     store.dispatch(oStore);

  });


  // 1. 前端 html 触发 点击 click 事件 
  $(window.document).on('click', 'section.users-wrapper #get', function (oEvent) {
    // 2. click 事件 触发 AJAX 请求 后端数据，  （AJAX 这一步骤 “省略” ！！)

    var aUsers = [
      {
        user_id: 1,
        name: 'Tom',
        sex: '男',
        age: 23,
        location: '台北',
        job: '学生',
        tell: '0911-222-333'
      },
      {
        user_id: 2,
        name: 'Jam',
        sex: '男',
        age: 33,
        location: '北京',
        job: '教师',
        tell: '0922-222-333'
      },
      {
        user_id: 3,
        name: 'Mary ken',
        sex: '女',
        age: 27,
        location: '菲律宾',
        job: '作业员',
        tell: '0966-222-333'
      },
      {
        user_id: 4,
        name: 'Laplace Cheng',
        sex: '男',
        age: 44,
        location: '未知',
        job: '自由业',
        tell: '0921-222-333'
      },
      {
        user_id: 5,
        name: 'Yam min',
        sex: '男',
        age: 44,
        location: '未知',
        job: '汽车销售员',
        tell: '0921-222-333'
      },
      {
        user_id: 6,
        name: 'Tim xiao',
        sex: '男',
        age: 35,
        location: '广东',
        job: '保险业务员',
        tell: '0951-222-333'
      },
      {
        user_id: 7,
        name: 'Joe Cheng',
        sex: '男',
        age: 22,
        location: '天津',
        job: '学生',
        tell: '0971-222-333'
      },
      {
        user_id: 8,
        name: 'Ivy Cheng',
        sex: '女',
        age: 25,
        location: '香港',
        job: '待业',
        tell: '0978-222-333'
      }
    ];

    // aUsers, 模拟 AJAX GET 后 服务器返回的 users 资料
    // 并更新到 store 里面， 再透过 store 统一渲染
    var oStore = {
      type: 'GET_USERS',
      payload: aUsers
    };
    
    // 3. store 分发 (dispatch) 这个后端数据，触发 “数据 异动事件”， 并带上 type, 以便 reducer 使用

    store.dispatch(oStore);

  });

  $(window.document).on('click', 'section.users-wrapper #post', function (oEvent) {
    // [oUsers], 模拟 AJAX POST 后 服务器返回的 一笔新增 的 users 资料, （AJAX 这一步骤 “省略” ！！)
    // 并新增到 store 里面， 再透过 store 统一渲染
    var oUser = {
      user_id: 18,
      name: '大魔王',
      sex: '无',
      age: 9999,
      location: '地狱',
      job: '无边无际',
      tell: '0944-444-444'
    };

    var aUsers = [oUser];
    var oStore = {
      type: 'POST_USERS',
      payload: aUsers
    };
    
     store.dispatch(oStore);

  });


  $(window.document).on('click', 'section.users-wrapper #put', function (oEvent) {
    // [oUsers], 模拟 AJAX PUT 后 id = 3 ，服务器返回的 一笔修改后 的 users 资料  （AJAX 这一步骤 “省略” ！！)
    // 并异动到 store 里面， 再透过 store 统一渲染
    // 目前示意, 就架设 发请求到后端 改了 user_id = 3 的
    var oUser = {
      user_id: 3,
      name: '改名了好多次',
      tell: '0977-777-777'
    };

    var aUsers = [oUser];
    var oStore = {
      type: 'PUT_USERS',
      payload: aUsers
    };
    
     store.dispatch(oStore);

  });

  $(window.document).on('click', 'section.users-wrapper #delete', function (oEvent) {
    // [oUsers], 模拟 AJAX DELETE 后 id = 1 ，服务器返回的 一笔修改后 的 users 资料
    // 并异动到 store 里面， 再透过 store 统一渲染
    // 目前示意, 就架设 发请求到后端 改了 user_id = 1 的
    var oUser = {
      user_id: 1,
    };

    var aUsers = [oUser];
    var oStore = {
      type: 'DELETE_USERS',
      payload: aUsers
    };
    
     store.dispatch(oStore);

  });

  // store.subscribe(function(){}), 重点 统一的渲染机制 ， 可控 避免跑版 乱掉 等 前端 BUG!!
  // store.subscribe(function(){}), 重点 统一的渲染机制 ， 可控 避免跑版 乱掉 等 前端 BUG!!
  // store.subscribe(function(){}), 重点 统一的渲染机制 ， 可控 避免跑版 乱掉 等 前端 BUG!!
  // store.subscribe(function(){}), 重点 统一的渲染机制 ， 可控 避免跑版 乱掉 等 前端 BUG!!
  // store.subscribe(function(){}), 重点 统一的渲染机制 ， 可控 避免跑版 乱掉 等 前端 BUG!!
  // store.subscribe(function(){}), 重点 统一的渲染机制 ， 可控 避免跑版 乱掉 等 前端 BUG!!
  // store.subscribe(function(){}), 重点 统一的渲染机制 ， 可控 避免跑版 乱掉 等 前端 BUG!!
  // store.subscribe(function(){}), 重点 统一的渲染机制 ， 可控 避免跑版 乱掉 等 前端 BUG!!
  // store.subscribe(function(){}), 重点 统一的渲染机制 ， 可控 避免跑版 乱掉 等 前端 BUG!!

  store.subscribe(function() {

    var oState = store.getState();
     /* -----------------------------------------------------  */

    var iNumber = oState.number;
    var cNumberComponet = function (){
      // 因为同时使用了 MVC， 与 REDUX 这里必须要写两次 HTML
      // 记得符合 HTML 标签语法 对齐缩排！！！！！！！！！！！！！！！！！！！！！！
      // 记得符合 HTML 标签语法 对齐缩排！！！！！！！！！！！！！！！！！！！！！！
      // 记得符合 HTML 标签语法 对齐缩排！！！！！！！！！！！！！！！！！！！！！！
      // 记得符合 HTML 标签语法 对齐缩排！！！！！！！！！！！！！！！！！！！！！！
      // 记得符合 HTML 标签语法 对齐缩排！！！！！！！！！！！！！！！！！！！！！！
      // 记得符合 HTML 标签语法 对齐缩排！！！！！！！！！！！！！！！！！！！！！！
      // 记得符合 HTML 标签语法 对齐缩排！！！！！！！！！！！！！！！！！！！！！！
      // 记得符合 HTML 标签语法 对齐缩排！！！！！！！！！！！！！！！！！！！！！！
      // 记得符合 HTML 标签语法 对齐缩排！！！！！！！！！！！！！！！！！！！！！！
      // 记得符合 HTML 标签语法 对齐缩排！！！！！！！！！！！！！！！！！！！！！！
      // 记得符合 HTML 标签语法 对齐缩排！！！！！！！！！！！！！！！！！！！！！！

      var sComponent = '' + 
       '<span>' + 
         iNumber +
       '</span>';
      return sComponent;
    };
     $('section.number-wrapper #number').html(cNumberComponet(iNumber));


     /* -----------------------------------------------------  */
    var aUsers = oState.users;
    var cUserComponent = function(oUser) {
      // 因为同时使用了 MVC， 与 REDUX 这里必须要写两次 HTML
      // 记得符合 HTML 标签语法 对齐缩排！！！！！！！！！！！！！！！！！！！！！！
      var sComponent = '' + 
        '<div class="user tr clearfix text-center">' +
          '<span class="td float-left border-right border-bottom border-light">' + (oUser.user_id || '-') + '</span>' +
          '<span class="td float-left border-right border-bottom border-light text-truncate">' + (oUser.name || '-') + '</span>' +
          '<span class="td float-left border-right border-bottom border-light">' + (oUser.sex || '-') + '</span>' +
          '<span class="td float-left border-right border-bottom border-light">' + (oUser.age || '-') + '</span>' +
          '<span class="td float-left border-right border-bottom border-light">' + (oUser.location || '-') + '</span>' +
          '<span class="td float-left border-right border-bottom border-light">' + (oUser.job || '-') + '</span>' +
          '<span class="td float-left border-right border-bottom border-light text-right pr-2">' + (oUser.tell || '-') + '</span>' +
        '</div>';

      return sComponent;
    };

    let sUsers = '';

    for(var iIndex = 0; iIndex < aUsers.length; iIndex++) {
      var oUsers = aUsers[iIndex];
      sUsers = sUsers + cUserComponent(oUsers);
    }

    $('section.users-wrapper .users .user').remove();
    $('section.users-wrapper .users').append(sUsers);



  });


});