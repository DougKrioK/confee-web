import { defaults } from "lodash";
import axios from "axios";
//criando função e exportando o responsavel que cria o http, recebe um objeto
export const createClient = (options = {}) => axios.create(defaults({}, options ));
export default createClient({})
