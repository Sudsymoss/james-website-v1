import { PrismaClient } from "@prisma/client"
const prisma = new PrismaClient();
// eslint-disable-next-line import/no-anonymous-default-export
export default async(req, res) => {
    const data = JSON.parse(req.body)
    try {
      //  Block of code to try
      const deletedUser = await prisma.user.delete({
        where: {
          email: data.email,
        },
      });
      res.status(200).json(deletedUser)
    }
    catch(error) {
      //  Block of code to handle errors
      console.error(error)
      res.status(418).json(error.meta)
    }   
}