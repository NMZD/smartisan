import Mock from 'mockjs'
Mock.mock('http://www.test.com/activity', {
  'activityList|4': [{
    'url': '@image("304x200","@color","@color","jpg","@date")',
    'title': '@ctitle',
    'time': '@date'
  }]
})
