import Mock from 'mockjs'
Mock.mock('http://www.test.com/home', {
  'activityList|4': [{
    'url': '@image("304x200","@color","@color","jpg","@word")',
    'title': '@ctitle',
    'time': '@date'
  }],
  'hotList|4': [{
    'imgUrl': '@image("205x206","@color","@color","jpg","@word")',
    'title': '@ctitle(5,20)',
    'time': '@date',
    'price': '@integer(1,99999).00',
    'id|+1': 1,
    'color|5': ['@color'],
    'url': '@url("http","www.test.com")'
  }],
  'floorsList': [{
    'name': '净化器及配件',
    'list|7': [{
      'imgUrl': '@image("205x206","@color","@color","jpg","@word")',
      'title': '@ctitle(5,20)',
      'time': '@date',
      'price': '@integer(1,99999).00',
      'id|+1': 1,
      'color|5': ['@color'],
      'url': '@url("http","www.test.com")'
    }]
  }, {
    'name': '官方精选',
    'list|7': [{
      'imgUrl': '@image("205x206","@color","@color","jpg","@word")',
      'title': '@ctitle(5,20)',
      'time': '@date',
      'price': '@integer(1,99999).00',
      'id|+1': 1,
      'color|5': ['@color'],
      'url': '@url("http","www.test.com")'
    }]
  }, {
    'name': '品牌周边',
    'list|7': [{
      'imgUrl': '@image("205x206","@color","@color","jpg","@word")',
      'title': '@ctitle(5,20)',
      'time': '@date',
      'price': '@integer(1,99999).00',
      'id|+1': 1,
      'color|5': ['@color'],
      'url': '@url("http","www.test.com")'
    }]
  }, {
    'name': '品牌精选',
    'list|7': [{
      'imgUrl': '@image("205x206","@color","@color","jpg","@word")',
      'title': '@ctitle(5,20)',
      'time': '@date',
      'price': '@integer(1,99999).00',
      'id|+1': 1,
      'color|5': ['@color'],
      'url': '@url("http","www.test.com")'
    }]
  }]
})
