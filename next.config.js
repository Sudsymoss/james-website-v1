module.exports = {
  output: 'standalone',
  async redirects() {
    return [
      {
        source: '/user',
        destination: '/user/myaccount',
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
