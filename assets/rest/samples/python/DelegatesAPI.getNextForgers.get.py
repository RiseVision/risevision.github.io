from risesdk import APIError, Client

api = Client('https://wallet.rise.vision/api/')
try:
    res = api.delegates.get_next_forgers()
    print(res.delegates[0].hex()) # a65a8160b1e07...
except APIError as err:
    print('API error:', err)
