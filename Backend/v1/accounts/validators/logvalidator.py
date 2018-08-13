def check_credentials(user):
    if user is not None:
        if user.is_active:
            # If user is in database
            return 'exists'
        else:
            # If user is not active
            return 'disabled'
    # wrong credentials
    return 'invalid'
