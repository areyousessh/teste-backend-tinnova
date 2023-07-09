-- CreateTable
CREATE TABLE "cars" (
    "id" SERIAL NOT NULL,
    "veiculo" TEXT NOT NULL,
    "marca" TEXT NOT NULL,
    "ano" TEXT NOT NULL,
    "descricao" TEXT NOT NULL,
    "vendido" BOOLEAN NOT NULL,
    "created" TIMESTAMP(3) NOT NULL,
    "updated" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "cars_pkey" PRIMARY KEY ("id")
);
