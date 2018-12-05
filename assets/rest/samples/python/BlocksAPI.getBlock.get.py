from risesdk import APIError, Client

api = Client('https://wallet.rise.vision/api/')
try:
    block = api.blocks.get_block('1359353064084280533')
    print(block.height)
except APIError as err:
    print('API error:', err)
