var through = require('through2')
var test = require('tape')

test('gets all items and stops', function (t) {
  var items = []
  var total = null

  var searcher = // your module here

  var stream = searcher.stream({fulltext: 'hello'})
  stream.pipe(through.obj(function (data, enc, next) {
    total = data.items_found // your total
    for (var row in data.items) {
      items.push(row)
    }
    next()
  }))

  stream.on('end', function () {
    t.same(items.length, total)
    t.end()
  })
})
