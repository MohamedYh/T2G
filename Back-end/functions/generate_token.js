export function generateToken() {
    const token = Math.random().toString(36).substring(6);
    return token;
}

