'use client'
import { useState } from 'react'

export default function FormularioInscripcion() {
  const [formData, setFormData] = useState({
    nombres: '',
    apellidos: '',
    cedula: '',
    ciudad: '',
    email: '',
    celular: '',
    carreraLicenciatura: '',
    carreraTecnico: '',
    turno: '',
    modalidadPago: ''
  })

  const departamentosBolivia = [
    'La Paz', 'Cochabamba', 'Santa Cruz', 
    'Oruro', 'Potosí', 'Tarija',
    'Chuquisaca', 'Beni', 'Pando'
  ]

  const carrerasLicenciatura = [
    'Administración Financiera',
    'Administración de Empresas',
    'Comercio Internacional',
    'Ingeniería Comercial',
    'Mercadotecnia',
    'Comunicación Audiovisual',
    'Contaduría Pública',
    'Administración Turística y Hotelería',
    'Ingeniería en Sistemas de Computación Administrativa'
  ]

  const carrerasTecnico = [
    'Mercadotecnia',
    'Administración Turística y Hotelería'
  ]

  const turnos = ['Mañana', 'Noche']

  const modalidadesPago = [
    'Contado por toda la carrera',
    'Regular Mensual',
    'Semestral contado'
  ]

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Aquí iría la lógica para enviar el formulario
    console.log('Datos enviados:', formData)
    alert('¡Formulario enviado con éxito! Nos contactaremos contigo pronto.')
  }

  return (
    <div className="max-w-2xl mx-auto bg-white p-6 md:p-8 rounded-lg shadow-md">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">Formulario de Inscripción</h2>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Datos personales */}
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Nombres *</label>
            <input
              type="text"
              name="nombres"
              value={formData.nombres}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-500 focus:border-transparent"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Apellidos *</label>
            <input
              type="text"
              name="apellidos"
              value={formData.apellidos}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-500 focus:border-transparent"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Cédula *</label>
            <input
              type="text"
              name="cedula"
              value={formData.cedula}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-500 focus:border-transparent"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Ciudad *</label>
            <select
              name="ciudad"
              value={formData.ciudad}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-500 focus:border-transparent"
            >
              <option value="">Seleccione un departamento</option>
              {departamentosBolivia.map(depto => (
                <option key={depto} value={depto}>{depto}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Correo electrónico *</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-500 focus:border-transparent"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Celular *</label>
            <input
              type="tel"
              name="celular"
              value={formData.celular}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-500 focus:border-transparent"
            />
          </div>
        </div>

        {/* Carreras */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">¿Qué carrera te interesa? (Licenciatura)</label>
          <select
            name="carreraLicenciatura"
            value={formData.carreraLicenciatura}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-500 focus:border-transparent mb-4"
          >
            <option value="">Seleccione una carrera</option>
            {carrerasLicenciatura.map(carrera => (
              <option key={carrera} value={carrera}>{carrera}</option>
            ))}
          </select>

          <label className="block text-sm font-medium text-gray-700 mb-1">¿Qué carrera te interesa? (Técnico Superior)</label>
          <select
            name="carreraTecnico"
            value={formData.carreraTecnico}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-500 focus:border-transparent"
          >
            <option value="">Seleccione una carrera</option>
            {carrerasTecnico.map(carrera => (
              <option key={carrera} value={carrera}>{carrera}</option>
            ))}
          </select>
        </div>

        {/* Turno y modalidad */}
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Turno *</label>
            <select
              name="turno"
              value={formData.turno}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-500 focus:border-transparent"
            >
              <option value="">Seleccione un turno</option>
              {turnos.map(turno => (
                <option key={turno} value={turno}>{turno}</option>
              ))}
            </select>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Modalidad de pago *</label>
            <select
              name="modalidadPago"
              value={formData.modalidadPago}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-500 focus:border-transparent"
            >
              <option value="">Seleccione una modalidad</option>
              {modalidadesPago.map(modalidad => (
                <option key={modalidad} value={modalidad}>{modalidad}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Botón de envío */}
        <div className="pt-4">
          <button
            type="submit"
            className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-md transition duration-300"
          >
            Enviar solicitud
          </button>
        </div>
      </form>
    </div>
  )
}