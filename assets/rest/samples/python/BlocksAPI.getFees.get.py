from risesdk import APIError, Client

api = Client('https://wallet.rise.vision/api/')
try:
    res = api.blocks.get_fees()
    print(res.fees.send) # 10000000
except APIError as err:
    print('API error:', err)
