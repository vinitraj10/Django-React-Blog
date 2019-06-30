import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
//import {loginUsingFb} from '../actions/Authentication/social-auth';

class SocialAuth extends Component{
  loadFbLoginApi() {

        window.fbAsyncInit = function() {
            FB.init({
                appId      : '121614955163755',
                cookie     : true,  // enable cookies to allow the server to access
                // the session
                xfbml      : true,  // parse social plugins on this page
                version    : 'v2.10' // use version 2.1
            });
        };

        console.log("Loading fb api");
          // Load the SDK asynchronously
        (function(d, s, id) {
            var js, fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) return;
            js = d.createElement(s); js.id = id;
            js.src = "//connect.facebook.net/en_US/sdk.js";
            fjs.parentNode.insertBefore(js, fjs);
        }(document, 'script', 'facebook-jssdk'));
  }

  componentDidMount() {
        this.loadFbLoginApi();
    }

    testAPI() {
      console.log('Welcome!  Fetching your information.... ');
      FB.api('/me', function(response) {
      console.log('Successful login for: ' + response.name);
      });
    }
    callFbLogin(accessToken,response){
    	const body ={
    		"access_token":accessToken
    	};
    	console.log(response)
    	this.props.loginUsingFb(body,()=>{
    		this.props.history.push("/");
    	});
    }
    statusChangeCallback(response) {
      //console.log('statusChangeCallback');
      //console.log(response);
      const {accessToken} = response.authResponse;
      if (response.status === 'connected') {
         this.callFbLogin(accessToken);
      } else if (response.status === 'not_authorized') {
          console.log("Please log into this app.");
      } else {
          console.log("Please log into this facebook.");
      }
     
      this.callFbLogin(accessToken,response);
    }

    checkLoginState() {
      FB.getLoginStatus(function(response) {
        this.statusChangeCallback(response);
      }.bind(this));
    }

    handleFBLogin() {
        FB.login(this.checkLoginState());
        }

	render(){
		return (
				<a onClick={this.handleFBLogin.bind(this)} className="btn btn-block btn-fb">Facecbook</a>
			)
	}
}


SocialAuth = withRouter(SocialAuth);

export default connect(null,{loginUsingFb})(SocialAuth);


/*<a href="#" onClick={this.handleFBLogin.bind(this)} className="btn btn-block btn-fb">connect with facecbook</a>*/
