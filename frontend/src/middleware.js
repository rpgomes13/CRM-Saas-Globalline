import { withAuth } from 'next-auth/middleware'

export default withAuth({
    pages: {
        signIn: '/'
    },
});
export const config = {
    matcher: [
       '/dashboard',
       '/calendar',
       '/profile',
       '/forms/form-elements',
       '/forms/form-layout',
       '/tables',
       '/settings',
       '/chart',
       '/ui/alerts',
       '/ui/buttons'
    ],
}