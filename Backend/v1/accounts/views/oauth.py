@csrf_exempt
def github(req):
    code = req.GET['code']
    client_id = '87f79de4f9f2a46069b7'
    client_secret = '143386855d09a461bea81ec4b1563e961e3a613f'
    url = 'https://github.com/login/oauth/access_token/'
    post_data = {
                    'client_id':client_id,
                    'client_secret':client_secret,
                    'code':code
                }
    r = requests.post(url,data=json.dumps(post_data))
    print(r.json())
    return JsonResponse({})
