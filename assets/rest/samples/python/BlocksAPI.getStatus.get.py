from risesdk import APIError, Client

api = Client('https://wallet.rise.vision/api/')
try:
    status = api.blocks.get_status()
    print(status.height) # 1356378
except APIError as err:
    print('API error:', err)
