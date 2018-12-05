from risesdk import APIError, Client

api = Client('https://wallet.rise.vision/api/')
try:
    delegates = api.accounts.get_account_delegates('8093718274007724701R')
    print(delegates[0].public_key.hex())
except APIError as err:
    print('API error:', err)
