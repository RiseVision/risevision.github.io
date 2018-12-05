from risesdk import APIError, Client

api = Client('https://wallet.rise.vision/api/')
try:
    res = api.transactions.get_unconfirmed_transactions()
    print(res.count) # 3
except APIError as err:
    print('API error:', err)
