import './App.css'
import Linkboton from './componentes/linkboton'
import instalogo from './assets/instagram.svg'
import paypallogo from './assets/paypal.svg'
import pokemonlogo from './assets/pokemon.svg'

function App() {

  return (
    <>
      <div id='bg' className='w-screen h-screen flex justify-center p-5'>
        <div className='flex flex-col w-7/12'>
          {/*barra de navegación */}
          <div className="navbar bg-[#522B5B] rounded-full shadow-2xl">
            <div className="navbar-start">
              <div className="dropdown">
                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h7" />
                  </svg>
                </div>
                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                  <li><a>Homepage</a></li>
                  <li><a>Portfolio</a></li>
                  <li><a>About</a></li>
                </ul>
              </div>
            </div>
            <div className="navbar-center">
              <a className="btn btn-ghost text-xl">
                <h1 className='text-2xl font-semibold'>Portafolio</h1>
              </a>
            </div>
            <div className="navbar-end">
              <button className="btn btn-ghost btn-circle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
              <button className="btn btn-ghost btn-circle">
                <div className="indicator">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                  </svg>
                  <span className="badge badge-xs badge-primary indicator-item"></span>
                </div>
              </button>
            </div>
          </div>
          {/* Biografia*/}
          <div className='flex mt-12 mb-7'>
            <div id='Card' className='w-1/4 shadow-2xl '>
              <img className='rounded-full' src="https://scontent.fsal2-2.fna.fbcdn.net/v/t39.30808-6/366582807_686849843480783_8630590811477346067_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=833d8c&_nc_ohc=5qiq-sj_3rMQ7kNvgE-5jF3&_nc_zt=23&_nc_ht=scontent.fsal2-2.fna&_nc_gid=ArJwLzz0h-lQfccUW4twDP8&oh=00_AYAhZYAszcFGcg-2rZ1X09zcEgJTCtHWGlj8ohRbM18TDA&oe=6719CBA7" alt="" />
            </div>

            <div id='Card' className='w-3/4 shadow-2xl'>
              <h1 className='text-2xl font-bold'>Alejandro José Recinos Recinos</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore laborum harum temporibus placeat necessitatibus voluptates culpa. Quod deleniti, tempore, fugit consectetur earum tempora recusandae tenetur, debitis et eligendi cumque voluptate.</p>
            </div>

          </div>


          <div className='flex justify-center'>
            <button className="btn bg-[#522B5B] text-[#fbe4d8] shadow-xl " onClick={() => document.getElementById('my_modal_2').showModal()}>Enlaces</button>

          </div>
          <dialog id="my_modal_2" className="modal">
            <div className="modal-box">
              <h3 className="font-bold text-lg">Mis Enlaces</h3>
              <p className="py-4">Has click para acceder a ellos</p>
              <div className='grid grid-cols-5 gap-3'>
                <Linkboton image_link={instalogo} descripcion={"Instagram"} />
                <Linkboton image_link={paypallogo} descripcion={"Paypal"} />
                <Linkboton image_link={pokemonlogo} descripcion={"PokemonGO"} />

              </div>
            </div>
            <form method="dialog" className="modal-backdrop">
              <button>close</button>
            </form>
          </dialog>

        </div>
      </div>
    </>
  )
}

export default App
