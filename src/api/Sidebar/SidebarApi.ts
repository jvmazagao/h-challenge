import {axios} from '../../config/AxiosConfig';
import {SidebarItem} from './ItemModel';
export const getSidebarValues =  async () => {
    const {data} = await axios.get('/sidebar');
    const response : SidebarItem[] = data.content;
    return response;
}