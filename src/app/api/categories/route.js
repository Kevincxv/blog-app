import prisma from "@/utils/connect"
import { NextResponse } from "next/server"

export const GET = async () => {
  try {
      const categories = await prisma.categroy.findMany();
      return new NextResponse(JSON.stringify(categories, {status: 200}));
  } catch (err) {
      console.log(err);
      return NextResponse(JSON.stringify({message: "Something Went Wrong!"}, {status: 500}))
  }
}