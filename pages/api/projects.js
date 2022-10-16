import { PrismaClient } from "@prisma/client"
const prisma = new PrismaClient();
// eslint-disable-next-line import/no-anonymous-default-export
export default async(req, res) => {
    const data = JSON.parse(req.body)
    const createdProject = await prisma.project.create({
        data
    })
    res.json(createdProject)
}