'use strict'

var newrelic = require('newrelic')

// Segments can only be created inside of transactions. They could be automatically
// generated HTTP transactions or custom transactions.
newrelic.startBackgroundTransaction('bg-tx', async function transHandler() {
  // `startSegment()` takes a segment name, a boolean if a metric should be
  // created for this segment, the handler function, and an optional callback.
  // The handler is the function that will be wrapped with the new segment.
  // Since `async` functions just return a promise, they are covered just the
  // same as the promise example.

  var output = await newrelic.startSegment('myCustomSegment', false, someTask)
  console.log(output)
})

async function someTask() {
  var result = await myAsyncTask()
  var output = await myNextTask(result)
  return output
}
