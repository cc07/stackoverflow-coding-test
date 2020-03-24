import axios, { AxiosResponse } from 'src/utils/axios';

export default class {
  public static async fetchTag(search?: string): Promise<any> {
    const params = {
      pagesize: 10,
      order: 'desc',
      sort: 'popular',
      site: 'stackoverflow',
      inname: search,
    }
    const result: AxiosResponse = await axios.get('/tags', {
      params,
    });

    if (result.status !== 200 || !result.data) {
      throw new Error('Fetch tags failed');
    }

    return {
      data: result.data.items,
    };
  }
}
