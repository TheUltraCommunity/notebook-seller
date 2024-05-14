export default function Navbar() {
  return (
    <nav className="w-full border-b border-gray-300 bg-clr-2 px-20 py-5 flex justify-between items-center shadow-md">
      <div className="space-x-10 w-[30%] flex justify-between items-center ">
        <p className="text-2xl font-bold text-clr-1 ">NoteBook Seller</p>
        <ul className="space-x-10 flex justify-center items-center">
           <li>Features</li> 
           <li>Pricing</li> 
        </ul>
      </div>

      <div className="space-x-6">
        <button className="px-3 py-1  hover:scale-105 hover:transition-all hover:duration-300 hover:bg-black/10 hover:rounded-3xl hover:font-semibold">Log in</button>
        <button className="px-3 py-1 bg-black rounded-3xl text-white hover:scale-105 hover:transition-all hover:duration-300 hover:bg-transparent hover:border hover:border-black hover:text-black hover:font-semibold">Sign up</button>
      </div>
    </nav>
  );
}
