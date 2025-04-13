import express from 'express';
import { PrismaClient } from "./generated/prisma";

const app = express();
const prismaClient = new PrismaClient();

app.get('/', (req, res) => {
  const data = prismaClient.user.findMany();
  res.json(data);
});

// API endpoint
app.post("/", async (req, res) => {
    try {
      const user = await prismaClient.user.create({
        data: {
          username: Math.random().toString(36).substring(7),
          password: Math.random().toString(36).substring(7)
        }
      });
      res.json({ message: "User created successfully", user });
    } catch (error) {
      console.error("Error creating user:", error);
      res.status(500).json({ error: "Failed to create user" });
    }
  });

app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
});