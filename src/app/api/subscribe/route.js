// app/api/subscribe/route.js

export async function POST(request) {
  try {
    const { email } = await request.json();

    // Basic email validation
    if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
      return new Response(JSON.stringify({ error: 'Invalid email address' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // TODO: Integrate with your email service or database here
    console.log(`New subscriber: ${email}`);

    return new Response(JSON.stringify({ message: 'Subscription successful' }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Subscription error:', error);
    return new Response(JSON.stringify({ error: 'Internal Server Error' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
