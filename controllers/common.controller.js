export const controller = (service)=>{
    return async (req,res,_next)=>{
        try {
           const res = service(req)
           res.status(200).json(res)
        } catch (error) {
            console.log(error);
            const status = error.status ?? 500
            res.status(status).json(error.message)
        }
    }
}