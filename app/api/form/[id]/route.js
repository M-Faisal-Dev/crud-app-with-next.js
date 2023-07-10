import { NextResponse } from 'next/server'
import dbConnection from '../../../libs/mongodb';
import Form from '../../../models/schema';
dbConnection();

export async function GET(request, {params}) {
    const { id } = params;
  try {
    const getData = await Form.findById(id);
  return NextResponse.json(getData)
  } catch (error) {
 return NextResponse.json(error)
  }
}



export async function PUT(request, {params}) {
  const { id } = params;
  console.log(id)
    try {
      const getFrom = await request.json()
      const getData = await Form.findByIdAndUpdate(
        id,{
name: getFrom.name,
email: getFrom.email,
message: getFrom.message
        },
        { new: true }
      );
      return NextResponse.json(getData)
    
    } catch (error) {
     return NextResponse.json(error.message)
    }
  }
  