import { Request, Response } from "express";
import { prismaClient } from "../database/prismaClient";
  
export class createCarsController {
    validateCarBrand(validBrands: string[], brand: string): boolean {
        const lowercaseBrand = brand.toLowerCase();
        return validBrands.includes(lowercaseBrand);
      }
    async handle (req: Request, res: Response) {
        try {
            const {veiculo, marca, ano, descricao, vendido} = req.body;
            const newCar = await prismaClient.cars.create({
                data: {
                    veiculo,
                    marca,
                    ano,
                    descricao,
                    vendido,
                    created: new Date()
                }
            });
            res.status(200).json(newCar);
        } catch (e: any) {
            console.log(e)
            res.status(500).json({
                e: 'Erro ao cadastrar o veiculo'
            })
        }
    }
}

export class updateCarsController {
    validateCarBrand(validBrands: string[], brand: string): boolean {
        const lowercaseBrand = brand.toLowerCase();
        return validBrands.includes(lowercaseBrand);
      }
    async handle (req: Request, res: Response) {
        try {
            const {id} = req.params
            const {veiculo, marca, ano, descricao, vendido} = req.body;
            const updatedCar = await prismaClient.cars.update({
                where: {id: parseInt(id)},
                data: {
                    veiculo,
                    marca,
                    ano,
                    descricao,
                    vendido,
                    updated: new Date()
                }
            });
            res.json(updatedCar);
        } catch (e: any) {
            console.log(e);
            res.status(500).json({
                e: 'Erro ao atualizar os dados do veiculo'
            })
        }
    }
}

export class deleteCarsController {
    async handle (req: Request, res: Response) {
        try {
            const {id} = req.params
            const deleteCars = await prismaClient.cars.delete({
                where: {id: parseInt(id)},
            });
            res.status(200).json(deleteCars)
        } catch (e: any) {
            console.log('Erro ao excluir o veiculo', e)
            res.status(500).json({e: 'Erro interno do servidor'})
        }
    }
}

export class getCarsController {
    async handle (req: Request, res: Response) {
        try {
            const cars = await prismaClient.cars.findMany();
            res.json(cars);
        } catch (e: any) {
            console.log(e);
            res.status(500).json({
                e: 'Erro ao buscar os veiculos'
            })
        }
    }
}