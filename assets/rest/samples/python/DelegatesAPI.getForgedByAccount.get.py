from risesdk import PublicKey, APIError, Client

api = Client('https://wallet.rise.vision/api/')
delegate_pk = PublicKey.fromhex('7067a911f3a4e13facbae9006b52a0c3ac9824bdd9f37168303152ae49dcb1c0')
try:
    res = api.delegates.get_forged_by_account(delegate_pk)
    print(res.forged) # 19066025346961
except APIError as err:
    print('API error:', err)
