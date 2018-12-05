from risesdk import APIError, Client

api = Client('http://localhost:5566/api/')
try:
    res = api.delegates.get_forging_status()
    print(res.enabled) # true
except APIError as err:
    print('API error:', err)
