from risesdk import APIError, Client, PublicKey, Address, Amount, SendTx

api = Client('https://wallet.rise.vision/api/')

tx = SendTx(
    sender_public_key=PublicKey.fromhex('bf4809a1a08c9dffbba741f0c7b9f49145602341d5fa306fb3cd592d3e1058b3'),
    recipient=Address('3303015780877366956R'),
    amount=Amount.from_unit('1995.33766861'),
    fee=Amount.from_unit('0.1'),
)
# tx.signature = sk.sign(tx.to_bytes())

try:
    res = api.transactions.add_transactions(tx)
    print(len(res.accepted)) # 1
except APIError as err:
    print('API error:', err)
