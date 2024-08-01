import {resend} from "@/lib/resend";
import VerificationEmail from "../../emails/VerficationEmail";
import { ApiResponse } from "@/types/ApiResponse";

export async function sendVerificationEmail(email:string,username:string,verifyCode:string):Promise<ApiResponse> {
    try{
        await resend.emails.send({
            from:'onboarding@resend.dev',
            to:email,
            subject:'Anonymi Chat | Verfication code',
            react: VerificationEmail({username:username, otp:verifyCode})
        })
        return {
            success:true,
            message:"Verfiction email send successfully"
        }
    } catch(emailError){
        console.error("Error sending verfication email", emailError);
        return {
            success:false,
            message:"Failed to send verfication email"
        }
    }
}