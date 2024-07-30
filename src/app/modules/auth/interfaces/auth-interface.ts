
export interface LoginResponse{

     message:string,
     success:boolean,
     data:{
        accessToken: string,
        refreshToken:string,
        user:User
     }

}

interface User {
    email:string,
    firstName:string,
    lastName:string,
    role:any,
}