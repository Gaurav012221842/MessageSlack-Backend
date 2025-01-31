import Workspace from "../schema/workspace.js";

const workspaceRepository = {
    ...crudRepository(Workspace),
    getWorkspaceByName : async function(){},
    getWorkspaceByJoinCode : async function(){},
    addmemberToWorkspace : async function(){},
    addchannelToWorkspace : async function(){},
    fetchAllWorkspaceByMemberId : async function(){},
    
  
  };

  export default workspaceRepository;