import { NextResponse } from "next/server";
import TodoModel from "../../lib/config/models/TodoModel";
import { ConnectDB } from "../../lib/config/db";

const LoadDB = async () => {
  await ConnectDB();
}

LoadDB();

export async function GET(request) {
  try {
    const todos = await TodoModel.find({});
    return NextResponse.json({ todos });
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch todos" }, { status: 500 });
  }
}

export async function POST(request) {
  const { title, description } = await request.json();
  try {
    await TodoModel.create({ title, description });
    return NextResponse.json({ msg: "Todo Created" });
  } catch (error) {
    return NextResponse.json({ error: "Failed to create todo" }, { status: 500 });
  }
}

export async function DELETE(request) {
  const mongoId = await request.nextUrl.searchParams.get('mongoId');
  try {
    await TodoModel.findByIdAndDelete(mongoId);
    return NextResponse.json({ msg: "Todo DELETED" });
  } catch (error) {
    return NextResponse.json({ error: "Failed to delete todo" }, { status: 500 });
  }
}

export async function PUT(request) {
  const mongoId = await request.nextUrl.searchParams.get('mongoId');
  try {
    await TodoModel.findByIdAndUpdate(mongoId, { $set: { isCompleted: true } });
    return NextResponse.json({ msg: "Todo COMPLETED" });
  } catch (error) {
    return NextResponse.json({ error: "Failed to complete todo" }, { status: 500 });
  }
}
