from risesdk import APIError, Client

api = Client('https://wallet.rise.vision/api/')
try:
    delegates = api.delegates.search_delegates('pool')
    print(delegates[0].username) # official_pool
except APIError as err:
    print('API error:', err)
