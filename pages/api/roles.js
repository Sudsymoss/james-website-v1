import { PrismaClient } from "@prisma/client"
const prisma = new PrismaClient();
// eslint-disable-next-line import/no-anonymous-default-export
export default async(req, res) => {
    const {id, email, role} = JSON.parse(req.body);
    try{
        const updateRole = await prisma.user.update({
            where: {
                email: email,
            },
            data: {
                role,
            }
        })
        res.status(200).json(updateRole);
        console.log(updateRole);
        } catch (error) {
        console.log(error);
    } 
}