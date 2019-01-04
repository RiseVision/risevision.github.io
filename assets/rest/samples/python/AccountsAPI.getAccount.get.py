from risesdk import APIError, Client

api = Client('https://wallet.rise.vision/api/')
try:
    acc = api.accounts.get_account('8093718274007724701R')
    print('Balance: {} RISE'.format(acc.balance.to_unit()))
except APIError as err:
    print('API error:', err)
