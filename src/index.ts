import api from './api';
import updateApps from './updateApps';

const PORT = 80;

api.listen(PORT, '3.20.91.96',() => {
    updateApps()
    setInterval(updateApps, 1000*3600*24)
   console.log(`Listening on port ${PORT}`);
});
 