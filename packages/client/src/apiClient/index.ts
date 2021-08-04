import axios from 'axios';
import Endpoints from './endpoints';

interface ApiClientService {
  signUp: (signUpInfo: any) => Promise<any>;
  logIn: (loginInfo: any) => Promise<any>;
}

const apiClientService: ApiClientService = {
  signUp(signUpInfo) {
    return axios
      .post(Endpoints.ENV + Endpoints.SIGN_UP, signUpInfo)
      .catch((error) => {
        throw Error(error);
      });
  },
  logIn(loginInfo) {
    return axios
      .post(Endpoints.ENV + Endpoints.LOG_IN, loginInfo)
      .catch((error) => {
        throw Error(error);
      });
  },
};

export default apiClientService;
