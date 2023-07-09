import { useState, useEffect, useCallback } from "react"
import axios from "axios"

interface Vehicle {
  id: number;
  veiculo: string;
  marca: string;
  ano: number;
  descricao: string;
  vendido: boolean;
  created: Date;
}

function App() {

  const [vehicles, setVehicles] = useState<Vehicle[]>([])
  const [editMode, setEditMode] = useState(false);
  const [showSold, setShowSold] = useState(false);
  const [selectedDecade, setSelectedDecade] = useState('');
  const [manufacturer, setManufacturer] = useState('');
  const [showRecent, setShowRecent] = useState(false);
  const [filteredVehicles, setFilteredVehicles] = useState<Vehicle[]>([]);
  const [editedVehicleId, setEditedVehicleId] = useState(null)
  const [newVehicle, setNewVehicle] = useState({
    veiculo: '',
    marca: '',
    ano: 0,
    descricao: '',
    vendido: false
  });

  function EditVehicle (vehicle: any) {
    setEditMode(true)
    setEditedVehicleId(vehicle.id)
    setNewVehicle({
      veiculo: vehicle.veiculo,
      marca: vehicle.marca,
      ano: vehicle.ano,
      descricao: vehicle.descricao,
      vendido: vehicle.vendido
    })
  }

  async function fetchVehicles() {
    try {
      const response = await axios.get('http://localhost:3001/veiculos');
      setVehicles(response.data)
    } catch (e: any) {
      console.log('Erro ao buscar veiculos', e);
    }
  }

  async function deleteVehicle(id: number) {
    try {
      const response = await axios.delete(`http://localhost:3001/veiculos/${id}`);
      setVehicles(vehicles.filter(vehicle => vehicle.id !== id))
      console.log('Veiculo excluido com sucesso:', response.data)
    } catch (e: any) {
      console.log('Erro ao excluir veículo', e)
    }
  }

  function handleInputChange(event: any) {
    const {name, value, type, checked} = event.target;
    const newValue = type === 'checkbox' ? checked : name === 'ano' ? Number(value) : value
    setNewVehicle({
      ...newVehicle, [name]: newValue
    })
  }

  async function createVehicle(event: any) {
    event.preventDefault();
    try {
      if (editMode) {
        const response = await axios.put(`http://localhost:3001/veiculos/${editedVehicleId}`, newVehicle)
        const updatedVehicles = vehicles.map(vehicle => {
          if (vehicle.id === editedVehicleId) {
            return response.data
          }
          return vehicle
        });
        setVehicles(updatedVehicles)
        setEditMode(false)
        console.log('Veiculo atualizado com sucesso')
      } else {
        const response = await axios.post('http://localhost:3001/veiculos', newVehicle)
        setVehicles([...vehicles, response.data]);
        console.log('Veiculo cadastrado com sucesso')
      }
      setNewVehicle({
        veiculo: '',
        marca: '',
        ano: 0,
        descricao: '',
        vendido: false
      })
    } catch (e: any) {
      console.log('Erro ao cadastrar/atualizar veiculo', e)
    }
  }

  function handleShowSoldChange(event: any) {
    setShowSold(event.target.checked)
  }

  function handleDecadeChange(event: any) {
    setSelectedDecade(event.target.value)
  }

  function handleManufacturerChange(event: any) {
    setManufacturer(event.target.value)
  }

  function handleShowRecentChange(event: any) {
    setShowRecent(event.target.checked)
  }

  const filterVehicles = useCallback(() => {
    let filtered = vehicles;
  
    if (showSold) {
      filtered = filtered.filter((vehicle) => vehicle.vendido);
    }
  
    if (selectedDecade) {
      const startYear = parseInt(selectedDecade);
      const endYear = startYear + 9;
      filtered = filtered.filter((vehicle) => vehicle.ano >= startYear && vehicle.ano <= endYear);
    }
  
    if (manufacturer) {
      filtered = filtered.filter((vehicle) =>
        vehicle.marca.toLowerCase().includes(manufacturer.toLowerCase())
      );
    }
  
    if (showRecent) {
      const sevenDaysAgo = new Date();
      sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);
      filtered = filtered.filter((vehicle) => new Date(vehicle.created) >= sevenDaysAgo);
    }
  
    setFilteredVehicles(filtered);
  }, [vehicles, showSold, selectedDecade, manufacturer, showRecent]);

  useEffect(() => {
    filterVehicles()
  }, [filterVehicles])
  
  useEffect(() => {
    fetchVehicles()
  }, [])

  return (
      <div className="flex flex-1 flex-col">
        <h1 className="text-center font-bold mt-10 text-2xl">Cadastro de veículos</h1>

        <form onSubmit={createVehicle}>
        <div className="flex flex-1 flex-row justify-center">
          <label className="mt-10 mr-4" htmlFor="veiculo">Veiculo:</label>
          <input 
          name="veiculo"
          onChange={handleInputChange}
          className="h-7 w-26 mt-10 mb-8 mr-4 text-center border-2 border-gray-500" 
          type="text" placeholder="ex: Civic" 
          id="veiculo" 
          value={newVehicle.veiculo}
          required/>

          <label className="mt-10 mr-4" htmlFor="fabricante">Fabricante:</label>
          <input 
          name="marca"
          onChange={handleInputChange}
          className="h-7 w-26 mt-10 mb-8 mr-4 text-center border-2 border-gray-500" 
          type="text" 
          placeholder="ex: Honda" 
          id="fabricante" 
          value={newVehicle.marca}
          required/>

          <label className="mt-10 mr-4" htmlFor="ano">Ano:</label>
          <input 
          name="ano"
          onChange={handleInputChange}
          className="h-7 w-26 mt-10 mb-8 mr-4 text-center border-2 border-gray-500" 
          type="number" 
          placeholder="ex: 1996" 
          id="ano" 
          value={Number(newVehicle.ano)}
          required/>

          <label className="mt-10 mr-4" htmlFor="vendido">Vendido:</label>
          <input 
          name="vendido"
          onChange={handleInputChange}
          className="h-7 w-26 mt-10 mb-8 text-center border-2 border-gray-500" 
          type="checkbox" 
          checked={newVehicle.vendido}
          id="vendido"/>
        </div>

        <div className="flex flex-1 items-center justify-center">
          <label className="mr-4" htmlFor="descricao">Descrição:</label>
          <input 
          name="descricao"
          onChange={handleInputChange}
          className="h-60 w-9/12 mt-4 mb-8 text-center border-2 border-gray-500" 
          type="text" 
          placeholder="ex: Manual, vidros e travas elétricos" 
          id="descricao"
          value={newVehicle.descricao}
          required/>
        </div>
        <div className="items-center justify-center flex mb-10">
          <button className="w-40 border-2 border-gray-500 rounded-lg h-8">{editMode ? 'Atualizar Veiculo' : 'Cadastrar Veiculo'}</button>
        </div>
        </form>

        <div className="flex flex-1 items-center justify-center mb-10">
        <label className="mr-6 ml-4">
        <input className="mr-2" type="checkbox" checked={showSold} onChange={(e) => setShowSold(e.target.checked)} />
          Somente veículos vendidos
        </label>

        <select className="border-2 border-gray-500 mr-6" value={selectedDecade} onChange={(e) => setSelectedDecade(e.target.value)}>
          <option value="">Todas as décadas</option>
          <option value="1960">Década de 1960</option>
          <option value="1970">Década de 1970</option>
          <option value="1980">Década de 1980</option>
          <option value="1990">Década de 1990</option>
          <option value="2000">Década de 2000</option>
          <option value="2010">Década de 2010</option>
          <option value="2020">Década de 2020</option>
        </select>

        <input
          className="border-2 border-gray-500 text-center mr-4"
          type="text"
          value={manufacturer}
          onChange={(e) => setManufacturer(e.target.value)}
          placeholder="Fabricante"
        />
        <label className="mr-6 ml-4">
        <input
            className="mr-2"
            type="checkbox"
            checked={showRecent}
            onChange={(e) => setShowRecent(e.target.checked)}
          />
          Veículos cadastrados nos últimos 7 dias
        </label>
        </div>

        <ul className="flex flex-1 justify-center items-center flex-col">
          {filteredVehicles.map(vehicle => (
            <li className="mb-4 border-2 border-gray-500 w-8/12" key={vehicle.id}>
              <h3 className="ml-4"><strong>Veiculo</strong>: {vehicle.veiculo}</h3>
              <p className="ml-4"><strong>Fabricante</strong>: {vehicle.marca}</p>
              <p className="ml-4"><strong>Ano</strong>: {vehicle.ano}</p>
              <p className="ml-4"><strong>Descrição</strong>: {vehicle.descricao}</p>
              <p className="ml-4"><strong>Vendido</strong>: {vehicle.vendido ? 'Sim' : 'Não'}</p>
              <div className="flex flex-1 justify-center mt-4 mb-4">
                <button onClick={() => deleteVehicle(vehicle.id)} className="border-2 border-gray-500 w-40 rounded-lg mr-4">Deletar Veiculo</button>
                <button onClick={() => EditVehicle(vehicle)} className="border-2 border-gray-500 w-40 rounded-lg">Editar Informações</button>
              </div>
            </li>
          ))}
        </ul>
      </div>
  )
}

export default App
