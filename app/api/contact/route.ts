import { NextResponse } from 'next/server';

type ContactPayload = {
    message?: string;
    name?: string;
    phone?: string;
    customerEmail?: string;
    recaptchaToken?: string;
};

type RecaptchaVerifyResponse = {
    success: boolean;
    score?: number;
    action?: string;
    challenge_ts?: string;
    hostname?: string;
    'error-codes'?: string[];
};

const DEFAULT_EMAIL_SERVICE_URL =
    'https://thehippoapi.netlify.app/.netlify/functions/api/spektrum-email';

export async function POST(request: Request) {
    try {
        const body = (await request.json()) as ContactPayload;
        const { message, name, phone, customerEmail, recaptchaToken } = body;

        if (!message || !name || !customerEmail || !recaptchaToken) {
            return NextResponse.json(
                { error: 'Missing required fields.' },
                { status: 400 },
            );
        }

        const recaptchaSecret = process.env.RECAPTCHA_SECRET_KEY;
        if (!recaptchaSecret) {
            return NextResponse.json(
                { error: 'Server reCAPTCHA is not configured.' },
                { status: 500 },
            );
        }

        const recaptchaVerification = await fetch(
            'https://www.google.com/recaptcha/api/siteverify',
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: new URLSearchParams({
                    secret: recaptchaSecret,
                    response: recaptchaToken,
                }).toString(),
                cache: 'no-store',
            },
        );

        if (!recaptchaVerification.ok) {
            return NextResponse.json(
                { error: 'Failed to validate reCAPTCHA.' },
                { status: 502 },
            );
        }

        const recaptchaResult =
            (await recaptchaVerification.json()) as RecaptchaVerifyResponse;

        if (!recaptchaResult.success) {
            return NextResponse.json(
                {
                    error: 'reCAPTCHA validation failed.',
                    details: recaptchaResult['error-codes'] ?? [],
                },
                { status: 400 },
            );
        }

        const emailServiceURL =
            process.env.EMAIL_SERVICE_URL ?? DEFAULT_EMAIL_SERVICE_URL;

        const mailResponse = await fetch(emailServiceURL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                accept: 'application/json, text/plain, */*',
            },
            body: JSON.stringify({
                message,
                name,
                phone: phone ?? '',
                customerEmail,
            }),
            cache: 'no-store',
        });

        if (!mailResponse.ok) {
            const mailResponseText = await mailResponse.text();
            return NextResponse.json(
                {
                    error: 'Email service failed.',
                    details: mailResponseText,
                },
                { status: mailResponse.status },
            );
        }

        return NextResponse.json({ ok: true }, { status: 200 });
    } catch (error) {
        return NextResponse.json(
            { error: 'Unexpected server error.' },
            { status: 500 },
        );
    }
}
