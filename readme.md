# abstract-search

A search interface for requesting http pages from websites.

## API

### `searcher = search([opts])`

A search portal, for example CKAN, will have various instances deployed across the web.

#### Options

`url`: the location. will be optional and default to the canonical deployment (e.g., figshare) or might be required depending on the type of search host.

`version`: can be helpful if in case the search api has changed between versions.

`timeout`: if supplied, the search is stopped after a particular amount of time.

### `stream = searcher.stream(query)`

Returns a stream that emits results of a query.

#### Options

A `query` is an object to be interpreted by the consumer.

Specify `fulltext` to do a simple fulltext search. For example,

```js
var query = {
  `fulltext`: 'this is my query'
}
```

### `stream.on('data')`

Return search results as objects. Each emit of data should be an array of results.

### `searcher.url`

String. A consumer should be able to access the url as a property.

### `searcher.version`

String.

### `searcher.name`

String.

### `searcher.auth(credentials)`

The user should be able to define credentials that the searcher is uses for running queries.
