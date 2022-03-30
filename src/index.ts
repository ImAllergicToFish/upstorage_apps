import api from './api';
import updateApps from './updateApps';

const PORT = 3001;

api.listen(PORT, '0.0.0.0',() => {
    updateApps()
    setInterval(updateApps, 1000*60)
   console.log(`Listening on port ${PORT}`);
});
 