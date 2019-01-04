from risesdk import APIError, Client

api = Client('http://localhost:5566/api/')
try:
    api.delegates.disable_forging('your account secret')
except APIError as err:
    print('API error:', err)
