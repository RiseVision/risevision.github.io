from risesdk import APIError, Client

api = Client('https://wallet.rise.vision/api/')
try:
    res = api.blocks.get_blocks(limit=3)
    print(res.blocks[0].block_id) # 1894880255589205181
except APIError as err:
    print('API error:', err)
