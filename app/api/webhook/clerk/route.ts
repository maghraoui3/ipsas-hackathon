import { NextResponse } from 'next/server';
import { Webhook } from 'svix';
import { db } from '@/lib/firebase';
import { addDoc, collection } from 'firebase/firestore';
import { headers } from 'next/headers';

export async function POST(req: Request) {
  const payload = await req.json();

  // Await the headers() function
  const headerList = await headers();
  const svixId = headerList.get('svix-id');
  const svixTimestamp = headerList.get('svix-timestamp');
  const svixSignature = headerList.get('svix-signature');

  if (!svixId || !svixTimestamp || !svixSignature) {
    return NextResponse.json({ error: 'Missing headers' }, { status: 400 });
  }

  const wh = new Webhook(process.env.CLERK_WEBHOOK_SECRET!);
  let evt: { type: any; data: any; };

  try {
    evt = wh.verify(JSON.stringify(payload), {
      'svix-id': svixId,
      'svix-timestamp': svixTimestamp,
      'svix-signature': svixSignature,
    }) as { type: string; data: any };
  } catch (err) {
    return NextResponse.json({ error: 'Invalid signature' }, { status: 400 });
  }

  const { type, data } = evt;

  if (type === 'user.created') {
    const { id, username, created_at } = data;

    // Store user data in Firestore
    await addDoc(collection(db, 'utilisateurs'), {
      id,
      userName: username,
      createdAt: created_at,
      role: 'user',
    });

    console.log('User created and stored in Firestore:', id);
  }

  return NextResponse.json({ success: true });
}