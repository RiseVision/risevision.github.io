from risesdk import APIError, Client, RegisterDelegateTx

api = Client('https://wallet.rise.vision/api/')
try:
    res = api.transactions.get_transactions(
        and__type_cls=RegisterDelegateTx,
        limit=1,
        order_by='height:desc',
    )
    print('Newest delegate:', res.transactions[0].tx.username)
except APIError as err:
    print('API error:', err)
