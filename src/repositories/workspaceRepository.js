import Workspace from "../schema/workspace.js";
import User from "../schema/user.js";
import { StatusCodes } from "http-status-codes";
import crudRepository from "./crudRepository.js";
import ClientError from "../utils/errors/clientError.js";
const workspaceRepository = {
    ...crudRepository(Workspace),
    getWorkspaceByName : async function(workspaceName){
      const workspace = await Workspace.findOne({name: workspaceName});
      if(!workspace){
        throw new ClientError({
          message: "Workspace Not Found",
          explanation: "Invalid data sent from the client",
          statusCode: StatusCodes.NOT_FOUND,
        });  // Throw a ClientError if workspace not found. 404 Not Found status code is appropriate for this case.
      }
      return workspace;
    },
    getWorkspaceByJoinCode : async function(joinCode){
      const workspace = await Workspace.findOne({name: joinCode});
      if(!workspace){
        throw new ClientError({
          message: "Workspace Not Found",
          explanation: "Invalid data sent from the client",
          statusCode: StatusCodes.NOT_FOUND,
        });  // Throw a ClientError if workspace not found. 404 Not Found status code is appropriate for this case.
      }
      return workspace;
    },
    addmemberToWorkspace : async function(workspaceId,memberId,role){
      const workspace = await Workspace.findById(workspaceId);
      if(!workspace){
        throw new ClientError({
          message: "Workspace Not Found",
          explanation: "Invalid data sent from the client",
          statusCode: StatusCodes.NOT_FOUND,
        });  // Throw a ClientError if workspace not found. 404 Not Found status code is appropriate for this case.
      }
      const isValidUser=await User.findById(memberId);
      if(!isValidUser){
        throw new ClientError({
          message: "User Not Found",
          explanation: "Invalid data sent from the client",
          statusCode: StatusCodes.NOT_FOUND,
        });  // Throw a ClientError if user not found. 404 Not Found status code is appropriate for this case.
      }
      const isMemberAlreadyPartOfWorkspace=workspace.members.find(m=>m.memberId===memberId);
      if(isMemberAlreadyPartOfWorkspace){
        throw new ClientError({
          message: "Member is already a part of the workspace",
          explanation: "Invalid data sent from the client",
          statusCode: StatusCodes.FORBIDDEN,
        });  // Throw a ClientError if member is already a part of workspace. 409 Conflict status code is appropriate for this case.
      }
      workspace.members.push({
        memberId,role
      });
      await workspace.save();
      return workspace;
    },
    addchannelToWorkspace : async function(){},
    fetchAllWorkspaceByMemberId : async function(){},
    
   
  };

  export default workspaceRepository;