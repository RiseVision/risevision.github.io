import { rise } from 'risejs'

rise.loader
  .syncStatus()
  .then(function({ syncing }) {
    console.log(syncing) // false
  })
  .catch(function(err) {
    console.log('Error: ', err) // handle error
  })
