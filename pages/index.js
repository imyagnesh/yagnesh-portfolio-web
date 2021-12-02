
export default function Home() {
  return (
    <div>
      <header className="h-28 bg-gray-700 absolute w-screen text-white flex justify-between items-center px-20">
        <div id="logo">
          <h1>Logo</h1>
        </div>
        <nav>
          <ul className="flex">
            <li className="m-4">Home</li>
            <li className="m-4">Features</li>
            <li className="m-4">Portfolio</li>
            <li className="m-4">Resume</li>
            <li className="m-4">Clients</li>
            <li className="m-4">Pricing</li>
            <li className="m-4">Blog</li>
            <li className="m-4 mr-0">Contact</li>
          </ul>
        </nav>  
      </header>     
      <main>
        <section className="h-screen flex bg-gray-700 text-white p-36">
            <div className="flex-1 flex flex-col justify-center">
                <p>WELCOME TO MY WORLD</p>
                <h1>Hi, I’m Yagnesh Modh</h1>
            </div>
            <div className="flex-1">
              <p>WELCOME TO MY WORLD</p>
                <h1>Hi, I’m Yagnesh Modh</h1>
            </div>
          </section>  
      </main> 
    </div>
  )
}
