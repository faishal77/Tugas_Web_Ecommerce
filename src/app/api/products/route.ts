import { retriveData } from "@/lib/firebase/service";
import { Console } from "console";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request:NextRequest){
    type DataType = {
        id:number;
        name:string;
        price:string;
        description:string;
        image:string;
    }
    const data:DataType[] = await retriveData("products")
    return NextResponse.json({status:200,messange:"succes get data",data})
}