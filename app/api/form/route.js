// import React from 'react';
import dbConnection from '../../libs/mongodb';
import Form from '../../models/schema';
import { NextResponse } from 'next/server'



dbConnection();

export async function POST(request) {
  const data = await request.json();
  try {
    await Form.create(data);
    return NextResponse.json(data)
  
  } catch (error) {
  
   return NextResponse.json(error.message)
  }
}

export async function GET(request) {
  try {
    const getData = await Form.find();
    return NextResponse.json(getData)
  
  } catch (error) {
   return NextResponse.json(error.message)
  }
}

export async function DELETE(request) {
    try {
      const id = request.nextUrl.searchParams.get("id")
      const getData = await Form.findByIdAndDelete(id);
      return NextResponse.json(getData)
    
    } catch (error) {
     return NextResponse.json(error.message)
    }
  }
  