export default function crudRepositories(model){
    return {
       
        create: async function (data){
            const newDoc =await model.create(data);
            return newDoc;
        },
        getAll: async function (){
            const docs = await model.find({});
            return docs;
        },
        getById: async function (id){
            const doc = await model.findById(id);
            return doc;
        },
        deleteUserById: async function (id){
            const doc = await model.findByIdAndDelete(id);
            return doc;
        },
        update: async function (id, data){
            const doc = await model.findByIdAndUpdate(id, data, {new: true});
            return doc;
        }

    };
}

 