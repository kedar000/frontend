export interface LoginRequest{
    username : string;
    password : string;
}

export interface LoginResponse{
    accessToken : string;
    refreshToken: string;

    id: string;
    username:string;
    email:string;
    firstname:string;
    lastname:string;
    image:string;
}