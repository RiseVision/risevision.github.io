from risesdk import PublicKey, APIError, Client

api = Client('https://wallet.rise.vision/api/')
delegate_pk = PublicKey.fromhex('a65a8160b1e0733f66d1f1a8f322c9af29b26d5e491a84d6e3ae0ec43e000446')
try:
    voters = api.delegates.get_voters(delegate_pk)
    print(len(voters)) # 5
except APIError as err:
    print('API error:', err)
