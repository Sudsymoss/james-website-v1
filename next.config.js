module.exports = {
  output: 'standalone',
  async redirects() {
    return [
      {
        source: '/user',
        destination: '/u/myaccount',
        permanent: true,
      },
      {
        source: '/user/:slug',
        destination: '/u/:slug',
        permanent: true,
      },
      {
        source: '/u',
        destination: '/u/myaccount',
        permanent: true,
      },
      {
        source: '/git',
        destination: 'https://github.com/Sudsymoss/james-website',
        permanent: true,
      },
      {
        source: '/replit',
        destination: 'https://replit.com/@Suddsy',
        permanent: true,
      },
      {
        source: '/:slug',
        destination: '/',
        permanent: false,
      },
    ]
  },
}
