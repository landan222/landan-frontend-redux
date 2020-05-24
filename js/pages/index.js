$( window.document ).ready(function() {
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
    },    {
      user_id: 8,
      name: 'Ivy Cheng',
      sex: '女',
      age: 25,
      location: '香港',
      job: '待业',
      tell: '0978-222-333'
    }
  ];

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


  store.subscribe(function() {

    var oState = store.getState();
        var iNumber = oState.number;
        var sNumberComponent = iNumber;
     $('section.number-wrapper #number').html(sNumberComponent);
  });


});