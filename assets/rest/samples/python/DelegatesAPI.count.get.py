from risesdk import APIError, Client

api = Client('https://wallet.rise.vision/api/')
try:
    count = api.delegates.get_delegate_count()
    print(count) # 5278
except APIError as err:
    print('API error:', err)
