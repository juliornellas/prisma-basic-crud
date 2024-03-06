import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  //Create user
  //   const user = await prisma.user.create({
  //     data: {
  //       name: "Edson Pele",
  //       email: "edson@pele.com",
  //     },
  //   });
  //   console.log("User created", user);
  //Get all users
  //   const users = await prisma.user.findMany();
  //   console.info("All users", users);
  //Create article
  //   const article = await prisma.article.create({
  //     data: {
  //       title: "Article One",
  //       body: "Body article one",
  //       author: {
  //         connect: {
  //           id: 1,
  //         },
  //       },
  //     },
  //   });
  //   console.log("Article created", article);
  //Get articles
  //   const articles = await prisma.article.findMany();
  //   console.log("All articles", articles);
  //Create user and article and associate them
  //   const user = await prisma.user.create({
  //     data: {
  //       name: "Tiradentes",
  //       email: "tira@dentes.com",
  //       articles: {
  //         create: {
  //           title: "Title created together",
  //           body: "Another body",
  //         },
  //       },
  //     },
  //   });
  //   console.log("Another article created", user);
  //Get user with RELATIONSHIP
  //   const users = await prisma.user.findMany({
  //     include: {
  //       articles: true,
  //     },
  //   });
  //   console.log("Users with RELATION", users);
  //Create new article
  //   const article = await prisma.article.create({
  //     data: {
  //       title: "New article",
  //       body: "Bodyyyy",
  //       author: {
  //         connect: {
  //           id: 2,
  //         },
  //       },
  //     },
  //   });
  //   console.log("New article", article);
  //UPDATE data
  //   const user = await prisma.user.update({
  //     where: {
  //       id: 1,
  //     },
  //     data: {
  //       name: "Edson Arantes",
  //     },
  //   });
  //   console.log("User updated", user);
  //DELETE article
  const article = await prisma.article.delete({
    where: {
      id: 2,
    },
  });
  console.log("Give back the article deleted", article);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error("[PRISMA] Connection error!");
    await prisma.$disconnect();
    process.exit(1);
  });
