import { createCarsController, updateCarsController } from "../controllers/carsController";

const validBrands = ['volkswagen', 'honda', 'nissan', 'toyota', 'ford', 'chevrolet', 'ferrari', 'bmw'];

describe('Car Controller', () => {
    describe('createCarsController', () => {
      it('should validate car brand on creation', () => {
        const controller = new createCarsController();
  
        const reqBody = {
          veiculo: 'Carro 1',
          marca: 'Ford',
          ano: 2022,
          descricao: 'Descrição do carro 1',
          vendido: false,
        };
  
        const isValidBrand = controller.validateCarBrand(validBrands, reqBody.marca);
  
        expect(isValidBrand).toBe(true);
      });
    });
  
    describe('updateCarsController', () => {
      it('should validate car brand on update', () => {
        const controller = new updateCarsController();
  
        const reqBody = {
          veiculo: 'Carro 1',
          marca: 'CHEVROLET',
          ano: 2022,
          descricao: 'Descrição do carro 1',
          vendido: false,
        };
  
        const isValidBrand = controller.validateCarBrand(validBrands, reqBody.marca);
  
        expect(isValidBrand).toBe(true);
      });
  
    });
  });