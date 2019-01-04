from risesdk import APIError, Client

api = Client('https://wallet.rise.vision/api/')
try:
    tx = api.transactions.get_transaction('6920969059388666996')
    print(tx.confirmations) # 838512
except APIError as err:
    print('API error:', err)
