import api from './api';
import updateApps from './updateApps';

const PORT = 8080;

api.listen(PORT, 'localhost',() => {
    updateApps()
    setInterval(updateApps, 1000*3600*24)
   console.log(`Listening on port ${PORT}`);
});
 