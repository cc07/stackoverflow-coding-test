import axios, { AxiosResponse } from 'src/utils/axios';

export default class {
  public static async fetchQuestion(tag: string): Promise<any> {
    try {
      const params = {
        page: 1,
        pagesize: 20,
        order: 'desc',
        sort: 'activity',
        site: 'stackoverflow',
        tagged: tag,
      }
      const result: AxiosResponse = await axios.get('/questions', {
        params,
      });

      if (result.status !== 200 || !result.data) {
        throw new Error('Fetch questions failed');
      }

      return {
        data: result.data.items,
      };
    } catch (error) {
      return {
        error,
      };
    }
  }
}