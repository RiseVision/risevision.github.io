import { rise } from 'risejs'

rise.accounts
  .getAccount('8093718274007724701R')
  .then(function({ account }) {
    console.log(account.balance) // 2973803650603
  })
  .catch(function(err) {
    console.log('Error: ', err) // handle error
  })
