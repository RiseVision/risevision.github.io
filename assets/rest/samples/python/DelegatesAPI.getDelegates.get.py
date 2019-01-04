from risesdk import APIError, Client

api = Client('https://wallet.rise.vision/api/')
try:
    res = api.delegates.get_delegates(limit=3)
    print(res.delegates[0].username) # official_pool
except APIError as err:
    print('API error:', err)
