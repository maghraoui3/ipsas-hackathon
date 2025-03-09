import { NextResponse } from 'next/server';
import { db } from '@/lib/firebase';
import { collection, query, where, getDocs } from 'firebase/firestore';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const userId = searchParams.get('userName');

  if (!userId) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const usersCollectionRef = collection(db, 'predifined_admins');
    const q = query(usersCollectionRef, where('id', '==', userId));

    const userDocsSnap = await getDocs(q);
    if (!userDocsSnap.empty) {
      const userDocSnap = userDocsSnap.docs[0];

      if (userDocSnap.exists()) {
        const response = true;
        
        if (response) {
          return NextResponse.json(response);
        } else {
          return NextResponse.json({ error: 'Admin not found in user document.' }, { status: 404 });
        }
      } else {
        return NextResponse.json({ error: 'User document not found.' }, { status: 404 });
      }
    } else {
      return NextResponse.json({ error: 'User document not found.' }, { status: 404 });
    }
  } catch (error) {
    console.error('Error fetching conversation:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}