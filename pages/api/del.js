import { PrismaClient } from "@prisma/client"
const prisma = new PrismaClient();
// eslint-disable-next-line import/no-anonymous-default-export
export default async(req, res) => {
    const data = JSON.parse(req.body)
    try {
      //  Block of code to try
      const deletedProject = await prisma.project.delete({
        where: {
          title: data.title,
        },
      });
      res.status(200).json(deletedProject)
    }
    catch(error) {
      //  Block of code to handle errors
      console.error(error)
      res.status(418).json(error.meta)
    }
    
    
}