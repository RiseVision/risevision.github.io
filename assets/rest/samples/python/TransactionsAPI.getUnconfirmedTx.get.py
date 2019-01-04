from risesdk import APIError, Client

api = Client('https://wallet.rise.vision/api/')
try:
    utx = api.transactions.get_unconfirmed_transaction('6920969059388666996')
    if utx is not None:
        print(utx.tx.fee) # 10000000
except APIError as err:
    print('API error:', err)
