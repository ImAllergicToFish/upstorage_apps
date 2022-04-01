import api from './api';
import cloneAppsFromGit from './updateAppService/cloneAppsFromGit';
import pullAppsFromGit from './updateAppService/pullAppsFromGit';

const PORT = 3001;

api.listen(PORT, '0.0.0.0',() => {
    // cloneAppsFromGit()
    // setInterval(pullAppsFromGit, 1000*60)
   console.log(`Listening on port ${PORT}`);
});
 