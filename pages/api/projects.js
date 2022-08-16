// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json([{"id": "projects/schoolsite", "name": "School site"},{"id": "projects/web4", "name": "Website 4.0"},{"id": "projects/jamessite", "name": "James Site"}],)
}
