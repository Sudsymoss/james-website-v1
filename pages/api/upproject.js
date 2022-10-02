import { PrismaClient } from "@prisma/client"
const prisma = new PrismaClient();
// eslint-disable-next-line import/no-anonymous-default-export
export default async(req, res) => {
    const {name, title, description} = JSON.parse(req.body);
    try{
        const updateProject = await prisma.project.update({
            where: {
                name: name,
            },
            data: {
                title: title,
                description: description,
            }
        })
        res.status(200).json(updateProject);
        } catch (error) {
        console.log(error);
        res.status(404).json(error.meta);
    } 
}