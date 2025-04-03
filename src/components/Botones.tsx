export default function Botones(){
  return(
    <div className="flex-center flex-wrap gap-9 my-22">
      <a href="http://sistema.ureal.edu.bo/" target="blank" className="flex-center uppercase rounded-xl px-4 py-4 w-[230px] bg-green-700 text-white hover:bg-green-950 hover:scale-[1.1] duration-300 text-xl" >
        Sistema ureal
      </a>
      <a href="https://virtual.ureal.edu.bo/login/index.php" target="blank" className="flex-center uppercase rounded-xl px-4 py-4 w-[230px] bg-yellow-700 text-white hover:bg-yellow-950 hover:scale-[1.1] duration-300 text-xl" >
        Campus virtual
      </a>
      <a href="https://ureal.edu.bo/landingbiblio.html" target="blank" className="flex-center uppercase rounded-xl px-4 py-4 w-[230px] bg-blue-700 text-white hover:bg-blue-950 hover:scale-[1.1] duration-300 text-xl" >
    Biblioteca
    </a>    
    <a href="https://teams.microsoft.com/v2/" target="blank" className="flex-center uppercase rounded-xl px-4 py-4 w-[230px] bg-red-700 text-white hover:bg-red-950 hover:scale-[1.1] duration-300 text-xl" >
        microsoft teams
    </a>

    <a href="https://ureal.edu.bo/pregrado/formsPago/" target="blank" className="flex-center uppercase rounded-xl px-4 py-4 w-[230px] bg-orange-700 text-white hover:bg-orange-950 hover:scale-[1.1] duration-300 text-xl" >
        Pago en linea
    </a>
    </div>
  )
}
