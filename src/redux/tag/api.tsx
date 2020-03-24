import axios, { AxiosResponse } from 'axios';

export default class {
  public static async fetchTag(): Promise<any> {
    try {
      const params = {
        pagesize: 10,
        order: 'desc',
        sort: 'popular',
        site: 'stackoverflow',
      }
      const result: AxiosResponse = await axios.post('https://api.stackexchange.com/2.2/tags', {
        params,
      });

      console.log(result);

      if (result.status !== 200 || !result.data) {
        throw new Error('Login failed');
      }

      // eslint-disable-next-line
      const { access_token, user } = result.data;

      return {
        accessToken: access_token,
      };
    } catch (error) {
      return {
        error,
      };
    }
  }
}
