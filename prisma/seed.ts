import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const user = await prisma.user.upsert({
    where: { email: "admin@unlock.com" },
    update: {},
    create: {
      email: "admin@unlock.com",
      name: "Unlock Admin",
      password: "$2y$10$n/B/GaAWcRTPDr.jSOxuue8pxH71ObImGoMM8MaTUopzNzON5mzjq", // admin_
      phone: "+8801309142161",
      photo:
        "https://mir-s3-cdn-cf.behance.net/user/276/bdcce8131957143.5a7945fa3b02f.png",
    }
  });
  console.log({ user });
}

main()
  .then(() => prisma.$disconnect())
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
