from risesdk import APIError, Client

api = Client('https://wallet.rise.vision/api/')
try:
    counts = api.transactions.get_transaction_count()
    print(counts.confirmed) # 563381
except APIError as err:
    print('API error:', err)
