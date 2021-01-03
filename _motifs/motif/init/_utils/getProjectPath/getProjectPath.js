import { fileURLToPath } from 'url';
import { dirname } from 'path';

export default url => {

  const __filename = fileURLToPath(url);
  return dirname(__filename);
}